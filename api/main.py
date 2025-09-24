from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import get_db, engine, Base
from routes import auth, blog, services, contact
import models

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Digital Bastion API",
    description="Cybersecurity company backend API",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://*.netlify.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["authentication"])
app.include_router(blog.router, prefix="/blog", tags=["blog"])
app.include_router(services.router, prefix="/services", tags=["services"])
app.include_router(contact.router, prefix="/contact", tags=["contact"])

@app.get("/")
async def root():
    return {"message": "Digital Bastion API", "version": "1.0.0"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)