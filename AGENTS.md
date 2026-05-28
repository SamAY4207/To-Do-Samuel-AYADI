# AI Agent Instructions

## Purpose
This file helps AI coding agents understand the structure and key conventions of the To-Do Samuel AYADI backend project.

## Project overview
- Simple Node.js backend using Express 5 and EJS.
- Entry point: `index.js`
- Views directory: `views/`
- Package manager: npm
- Module format: ESM (`type": "module"` in `package.json`)

## Run locally
- Install dependencies: `npm install`
- Start the app: `node index.js`
- There is no custom `start` script defined.

## Key details
- `index.js` sets up Express and EJS view engine.
- Current route: `/` returns plain text `Hello World!`
- The app has no test suite configured.

## When editing
- Keep ESM syntax consistent (`import`/`export`).
- Preserve `app.set("view engine", "ejs")` if adding template-based routes.
- Add `npm` scripts only when needed for development or testing.

## Useful notes for AI agents
- This repo currently lacks docs beyond package metadata.
- Prefer lightweight changes that improve the app incrementally.
- If implementing a To-Do feature, add routes, views, and data handling in `index.js` or new route modules.
