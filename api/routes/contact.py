from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel, EmailStr
from typing import Optional
from database import get_db
import models

router = APIRouter()

class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    service_interest: Optional[str] = None
    message: str

class ContactSubmissionResponse(BaseModel):
    id: int
    name: str
    email: str
    company: Optional[str]
    phone: Optional[str]
    service_interest: Optional[str]
    message: str
    status: str
    created_at: str

    class Config:
        from_attributes = True

@router.post("/", response_model=dict)
async def submit_contact_form(
    submission: ContactSubmissionCreate,
    db: Session = Depends(get_db)
):
    # Create contact submission
    db_submission = models.ContactSubmission(
        name=submission.name,
        email=submission.email,
        company=submission.company,
        phone=submission.phone,
        service_interest=submission.service_interest,
        message=submission.message
    )
    
    db.add(db_submission)
    db.commit()
    db.refresh(db_submission)
    
    # Here you could add email notification logic
    # send_notification_email(submission)
    
    return {
        "message": "Contact form submitted successfully",
        "submission_id": db_submission.id,
        "status": "received"
    }

@router.get("/submissions")
async def get_contact_submissions(
    skip: int = 0,
    limit: int = 50,
    status: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(models.ContactSubmission)
    
    if status:
        query = query.filter(models.ContactSubmission.status == status)
    
    submissions = query.offset(skip).limit(limit).all()
    
    # Format response
    response = []
    for submission in submissions:
        response.append({
            "id": submission.id,
            "name": submission.name,
            "email": submission.email,
            "company": submission.company,
            "phone": submission.phone,
            "service_interest": submission.service_interest,
            "message": submission.message,
            "status": submission.status,
            "created_at": submission.created_at.isoformat()
        })
    
    return response

@router.put("/submissions/{submission_id}/status")
async def update_submission_status(
    submission_id: int,
    status: str,
    db: Session = Depends(get_db)
):
    submission = db.query(models.ContactSubmission).filter(
        models.ContactSubmission.id == submission_id
    ).first()
    
    if not submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    
    valid_statuses = ["new", "contacted", "closed"]
    if status not in valid_statuses:
        raise HTTPException(
            status_code=400, 
            detail=f"Invalid status. Must be one of: {', '.join(valid_statuses)}"
        )
    
    submission.status = status
    db.commit()
    
    return {"message": "Status updated successfully", "new_status": status}