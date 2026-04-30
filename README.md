# 🚀 Blogger — Full Stack Blogging Platform

Live Demo: https://blogger-kappa-nine.vercel.app/

A modern full-stack blogging platform where users can write, publish, manage and explore blogs with a clean and responsive interface.

---

## ✨ Features

- 📝 Create, edit and delete blogs
- 🔐 User authentication and authorization
- 👤 User profiles
- 📚 Read published blogs
- 🔍 Search and browse articles
- ❤️ Like / engage with posts *(if implemented)*
- 💬 Comments system *(if implemented)*
- 📱 Fully responsive UI
- ⚡ Fast and modern user experience

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT Authentication
- Bcrypt

### Deployment
- Vercel (Frontend)
- Render / Railway / other (Backend)

---

## 🏗 Architecture

```bash
Client (React)
   ↓
REST API (Express)
   ↓
MongoDB Database
```

---

## 📂 Project Structure

```bash
project-root/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/blogger.git
cd blogger
```

---

## Install Dependencies

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create `.env` in server:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

---

## 🚀 Running Project

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run dev
```

---

## 📸 Screenshots

Add screenshots here:

### Home Page
![Home](./screenshots/home.png)

### Blog Editor
![Editor](./screenshots/editor.png)

### Dashboard
![Dashboard](./screenshots/dashboard.png)

---

## API Routes

### Auth

```http
POST /api/auth/register
POST /api/auth/login
```

### Blogs

```http
GET /api/blogs
POST /api/blogs
PUT /api/blogs/:id
DELETE /api/blogs/:id
```

---

## 🔥 Key Highlights

- Full CRUD Blogging Platform  
- Authentication & Protected Routes  
- REST API Integration  
- Responsive Modern UI  
- Real-world Full Stack Project

---

## Future Improvements

- Rich text editor
- Tags & categories
- Bookmark blogs
- AI blog summarizer
- Markdown support
- Dark mode

---

## 🧠 What I Learned

This project helped me improve:
- Full stack development
- Authentication flow
- REST API design
- State management
- Database modeling
- Deployment workflow

---

## 🤝 Contributing

Contributions are welcome.

```bash
Fork the repo
Create a branch
Commit changes
Open PR
```

---

## ⭐ Support

If you like the project:

Give it a ⭐ on GitHub

---

## 📬 Contact

Made with ❤️ by Rajat

GitHub: https://github.com/yourusername
LinkedIn: your-




  
