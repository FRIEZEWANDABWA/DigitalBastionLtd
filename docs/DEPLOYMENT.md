# Deployment Guide

## Frontend Deployment (Netlify)

1. **Connect Repository**
   - Link your GitHub repository to Netlify
   - Set build directory to `web/out`
   - Set build command to `cd web && npm run build`

2. **Environment Variables**
   ```
   API_URL=https://your-backend-domain.com
   ```

3. **Deploy**
   - Push to main branch for automatic deployment
   - Netlify will build and deploy your static site

## Backend Deployment (Railway/Render)

### Railway Deployment

1. **Connect Repository**
   - Link GitHub repo to Railway
   - Select the `api` folder as root

2. **Environment Variables**
   ```
   DATABASE_URL=postgresql://user:pass@host:port/db
   SECRET_KEY=your-production-secret-key
   ALLOWED_ORIGINS=https://your-netlify-domain.com
   ```

3. **Deploy**
   - Railway auto-deploys on push

### Render Deployment

1. **Create Web Service**
   - Connect GitHub repository
   - Set build command: `pip install -r requirements.txt`
   - Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

2. **Database**
   - Create PostgreSQL database on Render
   - Update DATABASE_URL environment variable

## Local Development

### Frontend
```bash
cd web
npm install
npm run dev
```

### Backend
```bash
cd api
pip install -r requirements.txt
uvicorn main:app --reload
```

## Security Checklist

- [ ] Change SECRET_KEY in production
- [ ] Use HTTPS for all endpoints
- [ ] Configure CORS properly
- [ ] Set up database backups
- [ ] Enable rate limiting
- [ ] Monitor logs and errors