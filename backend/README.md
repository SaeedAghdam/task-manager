# Backend - Task Manager

This is the Node.js + Express backend for the Task Manager app, connected to MySQL.

## Structure

- `src/index.js` → Server entry point
- `src/routes/tasks.js` → Task API routes
- `src/controllers/tasksController.js` → Task CRUD logic
- `src/db/mysql.js` → MySQL connection

## API Endpoints

- `GET /api/tasks` → List all tasks
- `POST /api/tasks` → Add a new task `{ "title": "task name" }`
- `PUT /api/tasks/:id` → Update a task `{ "title": "...", "completed": true/false }`
- `DELETE /api/tasks/:id` → Delete a task

## Run with Docker

```bash
docker build -t taskmanager-backend .
docker run -p 5000:5000 --network taskmanager_default taskmanager-backend