from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional
from database import get_db
import models
from .auth import get_current_user

router = APIRouter()

class BlogPostCreate(BaseModel):
    title: str
    content: str
    excerpt: Optional[str] = None
    featured_image: Optional[str] = None
    published: bool = False

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    excerpt: Optional[str] = None
    featured_image: Optional[str] = None
    published: Optional[bool] = None

class BlogPostResponse(BaseModel):
    id: int
    title: str
    slug: str
    content: str
    excerpt: Optional[str]
    featured_image: Optional[str]
    published: bool
    created_at: str
    author: dict

    class Config:
        from_attributes = True

def create_slug(title: str) -> str:
    return title.lower().replace(" ", "-").replace("'", "").replace('"', '')

@router.get("/", response_model=List[BlogPostResponse])
async def get_blog_posts(
    skip: int = 0, 
    limit: int = 10, 
    published_only: bool = True,
    db: Session = Depends(get_db)
):
    query = db.query(models.BlogPost)
    if published_only:
        query = query.filter(models.BlogPost.published == True)
    
    posts = query.offset(skip).limit(limit).all()
    
    # Format response
    response = []
    for post in posts:
        response.append({
            "id": post.id,
            "title": post.title,
            "slug": post.slug,
            "content": post.content,
            "excerpt": post.excerpt,
            "featured_image": post.featured_image,
            "published": post.published,
            "created_at": post.created_at.isoformat(),
            "author": {
                "username": post.author.username,
                "email": post.author.email
            } if post.author else None
        })
    
    return response

@router.get("/{slug}", response_model=BlogPostResponse)
async def get_blog_post(slug: str, db: Session = Depends(get_db)):
    post = db.query(models.BlogPost).filter(models.BlogPost.slug == slug).first()
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    
    return {
        "id": post.id,
        "title": post.title,
        "slug": post.slug,
        "content": post.content,
        "excerpt": post.excerpt,
        "featured_image": post.featured_image,
        "published": post.published,
        "created_at": post.created_at.isoformat(),
        "author": {
            "username": post.author.username,
            "email": post.author.email
        } if post.author else None
    }

@router.post("/", response_model=BlogPostResponse)
async def create_blog_post(
    post: BlogPostCreate,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Not authorized to create blog posts")
    
    slug = create_slug(post.title)
    
    # Check if slug already exists
    existing_post = db.query(models.BlogPost).filter(models.BlogPost.slug == slug).first()
    if existing_post:
        slug = f"{slug}-{existing_post.id}"
    
    db_post = models.BlogPost(
        title=post.title,
        slug=slug,
        content=post.content,
        excerpt=post.excerpt,
        featured_image=post.featured_image,
        published=post.published,
        author_id=current_user.id
    )
    
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    
    return {
        "id": db_post.id,
        "title": db_post.title,
        "slug": db_post.slug,
        "content": db_post.content,
        "excerpt": db_post.excerpt,
        "featured_image": db_post.featured_image,
        "published": db_post.published,
        "created_at": db_post.created_at.isoformat(),
        "author": {
            "username": current_user.username,
            "email": current_user.email
        }
    }