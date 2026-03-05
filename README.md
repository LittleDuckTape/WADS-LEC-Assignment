# WADS Assignment/Task Log Book (Next.js)

This project is a REST API built using **Next.js Route Handlers** for the Web Application Development and Security (WADS) class.

The API implements a simple **Assignment Log Book** where users can manage assignments (CRUD operations).  
The project also includes **Swagger documentation** for exploring and testing the API.

---
# Features

- REST API built /w Next.js
- CRUD ops
- Swagger UI for API Documentation
- Login & Signup (WORKING ON IT!)

---
# How to Run:
Install dependencies:
type **npm install** in terminal

Start development server:
type **npm run dev** in terminal

Open in browser:
click link for local or network host

Swagger API Documentation:
type **/docs** at the end of url

---
# API Design

| Method | Endpoint | Description |
|------|------|------|
| GET | /api/tasks | Retrieve all assignments |
| POST | /api/tasks | Create a new assignment |
| GET | /api/tasks/{id} | Retrieve assignment details |
| PUT | /api/tasks/{id} | Update an assignment |
| DELETE | /api/tasks/{id} | Delete an assignment |

---
# Example Requests (in Powershell):

### Get all tasks
Invoke-RestMethod -Method Get -Uri "http://localhost:3000/api/tasks

### Create new task
Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/tasks" -ContentType "application/json" -Body '{"title":"{task name}"}'

### Get task detail
Invoke-RestMethod -Method Get -Uri "http://localhost:3000/api/tasks/{id}"

Note: change {id} to selected task id

### Update task
Invoke-RestMethod -Method Put -Uri "http://localhost:3000/api/tasks/{id}" -ContentType "application/json" -Body '{"title":"{new name}","done":{true/false}}'

Note: change {id} to selected task id and type true or false

### Delete task
Invoke-RestMethod -Method Delete -Uri "http://localhost:3000/api/tasks/{id}"

Note: change {id} to selected task id

---
# Notes:

- Current project uses **dummy in-memory storage**
- Data will reset when server restarts
- Authentication system is only for demo purposes (for now)

---
# Additional Info

Name: Irene Angelina
Class: L4AC
Student ID: 2802501060
Course: Web Application Development and Security (COMP6703001)