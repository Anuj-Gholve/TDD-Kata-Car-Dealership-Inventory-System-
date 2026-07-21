# Vehicle Inventory Management System

A modern full-stack **Vehicle Inventory Management System** developed as part of the **Incubyte Full Stack Assessment**.

The application enables secure inventory management through authentication, role-based authorization, vehicle lifecycle management, purchasing workflows, inventory restocking, and an intuitive dashboard built with React and Tailwind CSS.

---

# Project Overview

This application simulates a dealership inventory management platform where authenticated users can browse and purchase vehicles while administrators can manage the complete inventory.

The project demonstrates:

- RESTful API development
- JWT Authentication
- Role-Based Authorization
- Layered Backend Architecture
- React Single Page Application
- Database Integration using Prisma ORM
- Unit Testing using Jest
- Responsive UI with Tailwind CSS

---

# Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes

---

## Vehicle Inventory

- View Vehicles
- Search Vehicles
- Purchase Vehicles
- Real-time Stock Updates

---

## Administrator Features

- Add Vehicle
- Edit Vehicle
- Delete Vehicle
- Restock Inventory
- Role-Based Access Control

---

## User Experience

- Responsive Design
- Modern Dashboard
- Search & Filtering
- Clean Navigation
- Reusable Components
- Accessible Forms

---

# Tech Stack

| Frontend | Backend | Database | Authentication | Testing |
|-----------|----------|----------|----------------|----------|
| React | Node.js | SQLite | JWT | Jest |
| Vite | Express.js | Prisma ORM | bcrypt | |

---

# Architecture

```
React
   │
Axios
   │
Express API
   │
Controllers
   │
Services
   │
Repositories
   │
Prisma ORM
   │
SQLite
```

The backend follows a layered architecture to maintain separation of concerns and improve maintainability.

---

# Project Structure

```
.
├── backend
│   ├── prisma
│   ├── src
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── repositories
│   │   ├── routes
│   │   ├── services
│   │   └── ...
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   └── ...
│   └── package.json
│
├── assets
│
├── PROMPTS.md
│
└── README.md
```

---

# REST API

| Method | Endpoint | Description |
|----------|----------------------------|---------------------------|
| POST | `/auth/register` | Register User |
| POST | `/auth/login` | Login User |
| GET | `/vehicles` | Retrieve Vehicles |
| GET | `/vehicles/search` | Search Vehicles |
| POST | `/vehicles` | Add Vehicle |
| PUT | `/vehicles/:id` | Update Vehicle |
| DELETE | `/vehicles/:id` | Delete Vehicle |
| POST | `/vehicles/:id/purchase` | Purchase Vehicle |
| POST | `/vehicles/:id/restock` | Restock Vehicle |

---

# Getting Started

## Clone Repository

```bash
git clone https://github.com/Anuj-Gholve/TDD-Kata-Car-Dealership-Inventory-System-.git

cd TDD-Kata-Car-Dealership-Inventory-System-
```

---

# Backend Setup

```bash
cd backend

npm install

npx prisma generate

npx prisma migrate dev

npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# Database Setup

Generate the Prisma client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

(Optional) Seed the database

```bash
npx prisma db seed
```

---

# Running Tests

Backend tests are implemented using **Jest**.

```bash
cd backend

npm test
```

---

# Demo Credentials

## Administrator

```
Email:
admin@example.com

Password:
Admin@123
```

---

## Standard User

```
Email:
user@example.com

Password:
User@123
```

> If seed data is unavailable, register a new account before logging in.

---

# Application Preview

## Account Creation

<p align="center">
    <img src="./assets/Account Creation.png" width="900">
</p>

---

## User Login

<p align="center">
    <img src="./assets/Account Signing In.png" width="900">
</p>

---

## User Dashboard

<p align="center">
    <img src="./assets/User Dashboard.png" width="900">
</p>

---

## Vehicle Purchase

<p align="center">
    <img src="./assets/User Vehicle Purchase.png" width="900">
</p>

---

## Administrator Dashboard

<p align="center">
    <img src="./assets/Admin Dashboard.png" width="900">
</p>

---

## Add Vehicle

<p align="center">
    <img src="./assets/Admin Add Vehicle.png" width="900">
</p>

---

## Edit Vehicle

<p align="center">
    <img src="./assets/Admin Edit Vehicle.png" width="900">
</p>

---

## Restock Vehicle

<p align="center">
    <img src="./assets/Admin Restock Vehicle.png" width="900">
</p>

---

## Delete Vehicle

<p align="center">
    <img src="./assets/Admin Delete Vehicle.png" width="900">
</p>

---

## Prisma Studio – User Data

<p align="center">
    <img src="./assets/Prisma Studio User Data.png" width="900">
</p>

---

## Prisma Studio – Vehicle Data

<p align="center">
    <img src="./assets/Prisma Studio Vehicle Data.png" width="900">
</p>

---

# My AI Usage

This project was developed with the assistance of AI tools in accordance with the assessment guidelines.

## AI Tools Used

- ChatGPT
- Cursor AI

## How AI Was Used

AI was primarily used for:

- Planning project architecture
- Brainstorming backend design
- Debugging implementation issues
- Reviewing React components
- Improving Tailwind CSS layouts
- UI/UX refinement
- Testing guidance
- Documentation improvements

Every AI-generated suggestion was manually reviewed, modified where necessary, tested, and integrated only after verifying correctness. Final implementation decisions, debugging, testing, and project integration remained my responsibility.

---

# PROMPTS.md

The repository includes a separate **PROMPTS.md** file summarizing the major AI prompts and development stages used throughout the project, as required by the assessment.

---

# Known Limitations

- SQLite is used for local development.
- Authentication tokens are stored in localStorage.
- Image upload is not implemented.
- Pagination and sorting are not included.
- No deployment configuration has been added.

---

# Future Improvements

- PostgreSQL Support
- Docker Containerization
- Cloud Deployment
- Dashboard Analytics
- Pagination
- Sorting
- Vehicle Images
- Audit Logs
- CI/CD Pipeline

---

# Author

**Anuj Gholve**

Computer Engineering Student

GitHub: https://github.com/Anuj-Gholve

---

## Assessment Checklist

- RESTful Backend API
- JWT Authentication
- Role-Based Authorization
- Prisma ORM
- SQLite Database
- React Frontend
- Tailwind CSS
- Vehicle CRUD Operations
- Search Functionality
- Purchase Workflow
- Restock Workflow
- Responsive UI
- Unit Testing
- Git Version Control
- AI Usage Documentation
