# Student Attendance Management System

## Project Overview

This project is a Student Attendance Management System built using Node.js, Express.js, MySQL, Docker Compose, Postman, Newman, and MVC Architecture.

## Technologies Used

- Node.js
- Express.js
- MySQL
- Docker
- Docker Compose
- Postman
- Newman
- Git
- GitHub

## MVC Structure

```text
backend/
├── config/
├── controllers/
├── models/
├── routes/
├── views/
└── server.js
```

## Database

Database Name:

```text
attendance_db
```

Tables:

- students
- attendance

The `attendance` table uses `student_id` as a foreign key referencing `students.id`.

## Run Docker

Start the database:

```bash
docker compose up -d
```

Check running containers:

```bash
docker compose ps
```

## Run Backend

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Server runs at:

```text
http://localhost:3000
```

## Student API Endpoints

### 1. Create Student

Method: `POST`

```text
http://localhost:3000/api/students
```

Request Body:

```json
{
  "student_code": "CSE001",
  "name": "Rahim Ahmed",
  "email": "rahim@example.com",
  "department": "CSE",
  "semester": 4
}
```

### 2. Get All Students

Method: `GET`

```text
http://localhost:3000/api/students
```

### 3. Get Student By ID

Method: `GET`

```text
http://localhost:3000/api/students/:id
```

Example:

```text
http://localhost:3000/api/students/1
```

### 4. Update Student

Method: `PUT`

```text
http://localhost:3000/api/students/:id
```

### 5. Delete Student

Method: `DELETE`

```text
http://localhost:3000/api/students/:id
```

## Attendance API Endpoints

### 1. Create Attendance

Method: `POST`

```text
http://localhost:3000/api/attendance
```

Request Body:

```json
{
  "student_id": 1,
  "attendance_date": "2026-08-20",
  "status": "Present"
}
```

### 2. Get All Attendance

Method: `GET`

```text
http://localhost:3000/api/attendance
```

### 3. Get Attendance By ID

Method: `GET`

```text
http://localhost:3000/api/attendance/:id
```

### 4. Update Attendance

Method: `PUT`

```text
http://localhost:3000/api/attendance/:id
```

### 5. Delete Attendance

Method: `DELETE`

```text
http://localhost:3000/api/attendance/:id
```

## Postman Testing

Postman collection file:

```text
postman/collection.json
```

## Newman CLI Testing

Run:

```bash
newman run postman/collection.json
```

Final Newman Test Result:

```text
Requests: 20
Failed Requests: 0

Assertions: 67
Failed Assertions: 0
```

All API tests passed successfully.

## Project Status

- Database Docker Service: Completed
- Database Schema: Completed
- MVC Architecture: Completed
- Student CRUD: Completed
- Attendance CRUD: Completed
- Postman Testing: Completed
- Newman CLI Testing: Completed
- API Documentation: Completed