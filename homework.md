# Homework

- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handlers for /test , /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- What is the use of "-g" while npm install is
- Difference between caret and tilde ( ^ vs ~ )
- Initialize git
- `.gitignore`
- Create a remote repo on GitHub
- Push all code to remote origin
- Play with routes and route extensions (e.g. `/hello`, `/`, `/hello/2`, `/xyz`)
- Order of the routes matters a lot
- Install Postman app — create a workspace/collection and test API calls
- Write logic to handle GET, POST, PATCH, DELETE API calls and test them in Postman
- Explore routing and use of `?`, `+`, `()`, `*` in routes
- Use of regex in routes (e.g. `/a/`, `/.*fly$/`)
- Reading the query params in the routes
- Reading the dynamic routes
- Multiple route handlers — play with the code
- `next()`
- `next` function and errors along with `res.send()`
- `app.use("/route", rH, [rH2, rH3], rH4, rH5);`
- What is a middleware? Why do we need it?
- How Express.js basically handles requests behind the scenes
- Difference between `app.use` and `app.all`
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except `/user/login`

---

## Answers to Conceptual Questions

### What are dependencies?

Dependencies are external packages/libraries that your project needs to run. They are listed in `package.json` under the `"dependencies"` key. When someone clones your project and runs `npm install`, all these packages get downloaded automatically into `node_modules`.

Example: In this project, `express` is a dependency — without it, the server won't work.

---

### What is the use of `-g` while npm install?

`-g` stands for **global**. When you install a package with `-g`, it gets installed globally on your system, not just inside your project folder. This means you can use that package as a CLI command from anywhere on your computer.

Example:
```
npm install -g nodemon
```
After this, you can run `nodemon` from any folder in your terminal.

Without `-g`, the package is only available inside that specific project's `node_modules`.

---

### Difference between caret and tilde ( ^ vs ~ )

Both are used in `package.json` to define which versions of a package are acceptable during `npm install`.

| Symbol | Name   | Meaning                                          | Example (`^1.2.3`) |
|--------|--------|--------------------------------------------------|---------------------|
| `^`    | Caret  | Allows updates to **minor and patch** versions   | Accepts `1.x.x` (not `2.0.0`) |
| `~`    | Tilde  | Allows updates to **patch** versions only        | Accepts `1.2.x` (not `1.3.0`) |

- `^1.2.3` → can install `1.3.0`, `1.9.9`, but NOT `2.0.0`
- `~1.2.3` → can install `1.2.4`, `1.2.9`, but NOT `1.3.0`

**Tilde is more strict, Caret is more flexible.**
