# DevTinder APIs

Base URL: `http://localhost:7777`

Auth cookie: `token` (httpOnly)

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## connectionRequestRouter
- POST /request/send/:status/:toUserId
- POST /request/review/:status/:requestId

## userRouter
- GET /user/connections
- GET /user/requests
- GET /user/requests/received
- GET /user/feed
- GET /feed

Status values: `ignored`, `interested`, `accepted`, `rejected`

Send request status: `interested` | `ignored` (alias: `ignore`)
Review request status: `accepted` | `rejected`
