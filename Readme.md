# 🐾 Purrchase Admin Page + Server

## Introduction

A Node.js and Express-based admin server for a Purchase, acts as a CMS. This handles pet listings, user management, profile updates and has a dashboard.

## 🚀 Features

-🐶 View Pets (All, by ID, or Latest Gallery)
-🧑‍💼 Admin Dashboard for managing users, pets, and orders
-🐾 Add/Edit/Delete Pets (Admin-only)
-📋 View All Users(Admin-only)
-📦 MongoDB Models: User, Pet, Wishlist, Order

## 🛠️ Tech Stack

- Backend: Node.js, Express.js
- Frontend: HTML, CSS, EJS
- Database: MongoDB (via Mongoose)
- Environment Management: dotenv

## 📦 Installation

```bash
git clone https://github.com/Tr1ck-5t3r/purrchase-admin
cd purrchase-admin
npm install
```

## ⚙️ Environment Variables

Create a .env file and add:

```env
MONGO_URI=
SESSION_SECRET=<for_encryption>
ADMIN_PASSWORD=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## ▶️ Running the Server

```bash
npm run start
```

Server will be running on <http://localhost:3000>