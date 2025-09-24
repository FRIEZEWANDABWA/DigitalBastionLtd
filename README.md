# Digital Bastion Ltd - Cybersecurity Company Website

Modern Python web stack with Next.js frontend and FastAPI backend.

## Tech Stack
- **Frontend**: Next.js 14 + Tailwind CSS + Framer Motion
- **Backend**: FastAPI + SQLAlchemy + SQLite
- **Deployment**: Netlify (frontend) + Railway/Render (backend)

## Quick Start

### Frontend (Next.js)
```bash
cd web
npm install
npm run dev
```

### Backend (FastAPI)
```bash
cd api
pip install -r requirements.txt
uvicorn main:app --reload
```

## Project Structure
```
digital-bastion/
├── web/                   # Next.js frontend
├── api/                   # FastAPI backend
├── infra/                 # Deployment configs
└── docs/                  # Documentation
```

## Features
- Modern responsive design
- Authentication & admin dashboard
- Blog/news management
- Service portfolio
- Contact forms
- Security-focused architecture