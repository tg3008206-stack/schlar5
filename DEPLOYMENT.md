# Schlar ERP — Demo Deployment Guide

This application is ready for immediate deployment as a 100% self-contained frontend demo. All keys, credentials, and mock datasets are pre-configured out-of-the-box.

---

## ⚡ 1-Click Vercel Deployment (Recommended)

This project includes a pre-configured `vercel.json` file. Because all school records (students, staff, timetable, fees, sessional marks, and attendance) run in the browser using the built-in reactive store with `localStorage` persistence, **no database or backend server is needed on Vercel!**

### Deploying via Vercel CLI:
```bash
# In the project directory, run:
npx vercel
```

### Deploying via Vercel Web Dashboard (GitHub / GitLab):
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Vercel automatically detects the framework as **Vite**:
   - **Build Command**: `npm run build` (or `vite build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**! 🚀
6. All SPA routes (`/students`, `/timetable`, `/attendance`, `/fees`, `/sessional-marks`, `/login`, etc.) work seamlessly without 404 errors thanks to `vercel.json`.

---

## 🚀 Alternative Deployment Options

### Option 2: Direct Node.js Full-Stack Deployment
```bash
# 1. Install dependencies
npm install

# 2. Build the frontend production assets
npm run build

# 3. Start the production server
npm start
```
The application will be live at `http://localhost:3000`.

---

### Option 3: Docker Container Deployment
```bash
# 1. Build the Docker image
docker build -t schlar-erp .

# 2. Run the container
docker run -p 3000:3000 schlar-erp
```
Access the application at `http://localhost:3000`.

---

### Option 4: Render / Railway / Google Cloud Run
- **Render**: Connect your Git repository; the included `render.yaml` automatically sets the build and start commands.
- **Google Cloud Run**: Deploy directly using the provided `Dockerfile`.
- **Railway**: Connect repository, build command `npm run build`, start command `npm start`.

---

## 🔑 Pre-Configured Demo Accounts & Credentials

No environment setup or database provisioning is required for this demo.

| Role | Username / ID | Password | Access Highlights |
| :--- | :--- | :--- | :--- |
| **👑 Administrator** | `admin` | `admin123` | Full access to students, faculty, timetables, fees, marks, and settings |
| **👩‍🏫 Faculty** | `FAC-123456` | `teacher123` | Timetable, attendance marking, sessional marks entry, and class records |
| **🎒 Student** | `ENR-2025-001` | `student123` | Personal profile, attendance calendar, fee payment ledger, and study materials |

> **Quick Switcher**: You can also switch roles instantly with a single click using the **Demo Control Bar** located at the top of the interface!

---

## ⚙️ Environment Variables (Pre-Filled)

These are configured in `.env` and `.env.example`:

| Variable | Pre-Filled Demo Value | Purpose |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Enables production static file serving |
| `PORT` | `3000` | Port for the Express backend and client SPA |
| `JWT_SECRET` | `eduplus_demo_super_secret_jwt_key_2025_prod` | Signs JWT session tokens |
| `MONGO_URI` | `mongodb://localhost:27017/eduplus` | Database URL (in-memory demo store is used automatically) |
| `VITE_API_URL` | `/api` | Base path for frontend API calls |
