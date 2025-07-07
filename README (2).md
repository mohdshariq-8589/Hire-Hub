# HireHub

## 💼 Overview
**HireHub** is a modern, full-featured job portal web application built using the MERN stack. It connects talented candidates with top companies, enabling seamless job posting, searching, and application management. The platform is designed to deliver an intuitive and responsive user experience for both students and recruiters.

## 🚀 Features
- 🔐 **User Authentication** (Signup, Login, Cookie-based Auth)
- 📝 **Role-based Dashboards** (Students & Recruiters)
- 💼 **Post & Manage Jobs** (Create, Edit, Delete job listings)
- 🔍 **Advanced Job Search & Browse**
- 👨‍💼 **Company Management by Admins/Recruiters**
- 📄 **Profile Management for Students** (Bio, Photo, Resume)
- ❤️ **Save Favorite Jobs**
- 📊 **Application Tracking System**
- 📱 **Fully Responsive UI** (Optimized for mobile & desktop)
- ✉️ **Notifications & Toast Feedback**

## 🛠 Tech Stack (MERN)
- **Frontend:** React.js, Vite, Tailwind CSS, shadcn/ui, lucide-react
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Cookie-based sessions with JWT
- **Routing:** React Router DOM
- **Deployment:** Render (Backend & frontend build), optionally Vercel for frontend

## 📦 Installation Guide

### ⚙️ Prerequisites
- Node.js and npm installed
- MongoDB Atlas account

### 📁 Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/hirehub.git
   cd hirehub
   ```

2. **Install Dependencies**
   - Backend:
     ```bash
     npm install
     ```
   - Frontend:
     ```bash
     cd Frontend
     npm install
     ```

3. **Configure Environment Variables**

   **Backend (`.env`):**
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the App (Local Development)**
   - Start Backend:
     ```bash
     npm run dev
     ```
   - Start Frontend (in separate terminal):
     ```bash
     cd Frontend
     npm run dev
     ```

   Access the app at `http://localhost:5173`

## 👨‍💼 User Roles
- **Student:** Browse & apply to jobs, manage profile, save favorites
- **Recruiter:** Post jobs, manage job listings, view applicants
- **Admin (if applicable):** Manage companies, moderate jobs and users

## 🔐 Security
- Secure cookie-based authentication
- Protected API routes with role checks
- Proper input validation and error handling

## 🌟 Future Enhancements
- In-app messaging between students and recruiters
- Resume parsing & skill-based job recommendations
- Payment integration for premium job posts
- AI-based candidate matching
- Analytics dashboard for recruiters

## 📸 Screenshots
*Coming soon...*

---

## ✨ Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License
[MIT](LICENSE)
