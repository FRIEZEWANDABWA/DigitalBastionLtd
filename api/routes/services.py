from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional
from database import get_db
import models
import json

router = APIRouter()

class ServiceCreate(BaseModel):
    title: str
    description: str
    features: List[str]
    price_range: Optional[str] = None
    icon: Optional[str] = None

class ServiceResponse(BaseModel):
    id: int
    title: str
    slug: str
    description: str
    features: List[str]
    price_range: Optional[str]
    icon: Optional[str]
    active: bool

    class Config:
        from_attributes = True

def create_slug(title: str) -> str:
    return title.lower().replace(" ", "-").replace("'", "").replace('"', '')

@router.get("/", response_model=List[ServiceResponse])
async def get_services(active_only: bool = True, db: Session = Depends(get_db)):
    query = db.query(models.Service)
    if active_only:
        query = query.filter(models.Service.active == True)
    
    services = query.all()
    
    # Format response
    response = []
    for service in services:
        features = json.loads(service.features) if service.features else []
        response.append({
            "id": service.id,
            "title": service.title,
            "slug": service.slug,
            "description": service.description,
            "features": features,
            "price_range": service.price_range,
            "icon": service.icon,
            "active": service.active
        })
    
    return response

@router.get("/{slug}", response_model=ServiceResponse)
async def get_service(slug: str, db: Session = Depends(get_db)):
    service = db.query(models.Service).filter(models.Service.slug == slug).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    
    features = json.loads(service.features) if service.features else []
    
    return {
        "id": service.id,
        "title": service.title,
        "slug": service.slug,
        "description": service.description,
        "features": features,
        "price_range": service.price_range,
        "icon": service.icon,
        "active": service.active
    }

@router.post("/", response_model=ServiceResponse)
async def create_service(service: ServiceCreate, db: Session = Depends(get_db)):
    slug = create_slug(service.title)
    
    # Check if slug already exists
    existing_service = db.query(models.Service).filter(models.Service.slug == slug).first()
    if existing_service:
        raise HTTPException(status_code=400, detail="Service with this title already exists")
    
    db_service = models.Service(
        title=service.title,
        slug=slug,
        description=service.description,
        features=json.dumps(service.features),
        price_range=service.price_range,
        icon=service.icon
    )
    
    db.add(db_service)
    db.commit()
    db.refresh(db_service)
    
    return {
        "id": db_service.id,
        "title": db_service.title,
        "slug": db_service.slug,
        "description": db_service.description,
        "features": service.features,
        "price_range": db_service.price_range,
        "icon": db_service.icon,
        "active": db_service.active
    }