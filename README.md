# Quick.ai 🧠✨

Quick.ai is an AI-powered web application that offers tools like article generation, blog titles, image manipulation, resume reviews, and more — all integrated with Google Gemini API and protected by Clerk authentication.

Live App: [https://quick-ai-1.onrender.com](https://quick-ai-1.onrender.com)

---

## 🗂️ Project Structure

```
/
├── backend/        → Node.js + Express server (API)
├── frontend/       → React + Tailwind frontend
├── .env            → Environment variables (not committed)
└── README.md
```

---

## 🚀 Features

- ✍️ Write Articles using AI
- 📰 Generate Blog Titles
- 🖼️ AI Image Generator (via prompt)
- ✂️ Remove Background / Object from images
- 📄 Resume Review
- 🌍 Community Page with Likes
- 🔐 Clerk Authentication
- 🧠 Gemini AI Integration
- 🗄️ PostgreSQL (NeonDB)

---

## ⚙️ Tech Stack

| Frontend         | Backend           | Integrations                |
|------------------|-------------------|------------------------------|
| React.js         | Express.js        | Gemini AI API               |
| Tailwind CSS     | PostgreSQL (Neon) | Clerk Authentication        |
| Lucide Icons     | Cloudinary        | Render Hosting              |

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/awsiyanwaghe/Quick.ai
cd Quick.ai
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

## 🛠️ Environment Variables

### Backend `.env`

```env
PORT=4000
DATABASE_URL=your_postgres_neon_connection_url
CLERK_SECRET_KEY=your_clerk_backend_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GEMINI_API_KEY=your_gemini_api_key
```

### Frontend `.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=https://quick-ai-aaqq.onrender.com
```

---

## ▶️ Running the App

### Start Backend

```bash
cd backend
npm run dev
```

> Use `nodemon` for development

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 🔐 Authentication (Clerk)

- Signup/Login pages powered by Clerk
- Authenticated users can access protected routes
- Backend verifies user using Clerk JWT middleware

---

## 🤖 AI Features (Gemini API)

- Generate articles/blog titles from prompts
- Review resumes for strengths/weaknesses
- Create or modify images using prompts

---

## ☁️ Cloudinary

- Used for storing uploaded and generated images
- Setup using Cloudinary credentials in `.env`

---

## 👥 Community Page

- Users can publish AI creations
- View others' creations and like them
- Auth protected using Clerk

---

## ✨ Credits

- Google Gemini API
- Clerk.dev
- Cloudinary
- NeonDB
- Render Hosting

---

## 🧠 Author

Made with ❤️ by Awsiyan Waghe
