# DevTinder

Tinder for developers — connect with people who share your stack.

This project follows the [Namaste Node.js DevTinder backend](https://github.com/akshaymarch7/devTinder) APIs and a frontend inspired by [devloper-tinder.vercel.app](https://devloper-tinder.vercel.app/).

## Features

- Auth: signup, login, logout (httpOnly JWT cookie)
- Profile view / edit / password update
- Feed of other developers
- Send interested / ignored requests
- Accept or reject incoming requests
- Connections list

## Setup

1. Copy env file and fill your MongoDB + JWT values:

```bash
copy .env.example .env
```

2. Install and run backend:

```bash
npm install
npm run dev
```

Backend runs on `http://localhost:7777`.

3. Install and run frontend:

```bash
cd web
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

## API list

See `apiList.md`.

Password must be strong: min 8 characters, uppercase, lowercase, number, and symbol.

If the backend fails with an Atlas IP error, open MongoDB Atlas \u2192 Network Access \u2192 Add your current IP (or `0.0.0.0/0` for local learning).

## Project structure

- `src/` — Express + MongoDB API
- `web/` — React + Vite + Tailwind + DaisyUI app
