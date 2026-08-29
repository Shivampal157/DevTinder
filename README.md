# DevTinder

This is a full stack project I built for developers to find other developers.

You can create an account, set up your profile, browse people on the feed, send interested or ignore, accept or reject incoming requests, and see your connections.

Everything from auth to feed to profile is implemented in this repo.

## Tech stack

**Backend**
- Node.js
- Express
- MongoDB + Mongoose
- JWT (httpOnly cookie)
- bcrypt
- CORS + dotenv

**Frontend**
- React
- Vite
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS + DaisyUI

## Features

- Signup, login, logout
- View, edit, and update profile password
- Feed of other developers
- Send interested / ignore
- Accept or reject requests
- Connections list
- Landing page and auth screens

Passwords must be strong: at least 8 characters, with uppercase, lowercase, a number, and a symbol.

## Project structure

```
DevTinder/
  src/          backend (routes, models, middleware)
  web/          frontend (React app)
  .env.example  environment variable template
  apiList.md    API list
```

`.env` is not committed. Create your own file locally.

## Setup

### 1. Environment

```
copy .env.example .env
```

Add these values in `.env`:

```
JWT_SECRET=your_secret
DATABASE_URL=mongodb://127.0.0.1:27018/devTinder
PORT=7777
CLIENT_URL=http://localhost:5173
```

MongoDB must be running. If you use Atlas, put your connection string in `DATABASE_URL` and allow your IP.

### 2. Backend

```
npm install
npm run dev
```

API: `http://localhost:7777`

### 3. Frontend

```
cd web
npm install
npm run dev
```

UI: `http://localhost:5173`

If port 5173 is already in use, Vite will start on 5174.

## APIs

```
POST   /signup
POST   /login
POST   /logout

GET    /profile/view
PATCH  /profile/edit
PATCH  /profile/password

POST   /request/send/:status/:toUserId
POST   /request/review/:status/:requestId

GET    /feed
GET    /user/feed
GET    /user/requests
GET    /user/connections
```

Status values: `interested`, `ignored`, `accepted`, `rejected`

Full list is in `apiList.md`.

---

**Shivam Pal**
