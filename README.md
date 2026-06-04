# ✅ Fullstack Todo App

A full-stack todo application built with the MERN stack, featuring user authentication and protected routes.

## 🌐 Live Demo
[Click here to view the app](https://todoapp-fullstack-ecru.vercel.app)

## ✨ Features
- User signup and login with JWT authentication
- Passwords securely hashed with bcrypt
- Protected routes — only logged in users can access todos
- Create, read, update, and delete todos
- Each user only sees their own todos

## 🛠️ Tech Stack
**Frontend**
- React (Vite)
- React Router DOM
- Axios
- Plain CSS

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

## 🚀 Running Locally

**Backend**
```bash
cd backend
npm install
# create a .env file with MONGO_URI, JWT_SECRET, PORT
npm run dev
```

**Frontend**
```bash
cd frontend
npm install
# create a .env file with VITE_BACKEND_URL=http://localhost:3000
npm run dev
```

## 📁 Project Structure
```
todo-fullstack/
├── backend/
│   ├── models/        # User and Todo schemas
│   ├── routes/        # Auth and Todo routes
│   ├── middleware/    # JWT auth middleware
│   └── index.js      # Entry point
└── frontend/
    └── src/
        └── pages/     # Signup, Login, Todos
```
