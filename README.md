# DevTinder

Maine yeh full stack project banaya hai. Developers ek dusre ko discover kar sakte hain, connection request bhej sakte hain, aur match ke baad connections dekh sakte hain.

Poora flow maine khud handle kiya hai — signup se lekar feed, requests aur profile tak.

Live nahi hai abhi. Local pe chalani hai.

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

## Kya-kya kaam karta hai

- Account create / login / logout
- Profile dekhna, edit karna, password change
- Dusre developers ka feed
- Interested ya Ignore bhejna
- Aayi hui requests Accept / Reject
- Connections list
- Landing page + auth pages

Password strong hona chahiye (8+ characters, upper, lower, number, symbol).

## Project structure

```
DevTinder/
  src/          backend (routes, models, middleware)
  web/          frontend (React app)
  .env.example  env keys ka format
  apiList.md    saari APIs
```

`.env` git pe nahi jaati. Apna khud banana.

## Setup

### 1. Env

```
copy .env.example .env
```

`.env` me yeh daalo:

```
JWT_SECRET=koi_secret
DATABASE_URL=mongodb://127.0.0.1:27018/devTinder
PORT=7777
CLIENT_URL=http://localhost:5173
```

MongoDB chalni chahiye. Atlas use kar rahe ho to apna connection string daal dena, aur IP allow karna.

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

Agar 5173 busy ho to Vite 5174 pe khol deta hai.

## APIs

Main endpoints:

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

Status: `interested`, `ignored`, `accepted`, `rejected`

Poori list `apiList.md` me hai.

---

**Shivam Pal**
