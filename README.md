# Vehicle Inventory Management System

A modern full-stack Vehicle Inventory Management platform built for the **Incubyte Full Stack Assessment**.

The application provides a secure inventory management solution with authentication, role-based authorization, vehicle lifecycle management, inventory operations, and a clean, responsive dashboard designed to simulate a real-world dealership inventory system.

---

## Project Overview

This application enables dealerships to efficiently manage vehicle inventory through a secure web interface.

Authenticated users can browse and purchase available vehicles, while administrators can manage inventory by adding, updating, deleting, and restocking vehicles.

The project follows a layered backend architecture with secure authentication and a modern React frontend.

---

## Features

### Authentication & Security

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Role-Based Authorization (Admin/User)

### Vehicle Inventory

- View Available Vehicles
- Search Vehicles
- Add New Vehicle (Admin)
- Edit Vehicle Details (Admin)
- Delete Vehicle (Admin)

### Inventory Operations

- Purchase Vehicles
- Restock Inventory (Admin)
- Automatic Stock Updates
- Purchase Disabled when Stock is Empty

### User Experience

- Responsive Dashboard
- Modern SaaS-inspired Interface
- Clean Navigation
- Search & Filtering
- Reusable Components
- Accessible Forms

---

# Tech Stack

| Frontend | Backend | Database | Authentication | Testing |
|-----------|----------|----------|----------------|----------|
| React | Node.js | SQLite | JWT | Jest |
| Vite | Express | Prisma ORM | bcrypt | |

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

The backend follows a layered architecture to improve maintainability and separation of concerns.

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
│   │   ├── components
│   │   ├── pages
│   │   ├── api
│   │   └── ...
│   └── package.json
│
└── README.md
```

---

# REST API

| Method | Endpoint | Description |
|----------|----------------------------|---------------------------|
| POST | `/auth/register` | Register User |
| POST | `/auth/login` | Login User |
| GET | `/vehicles` | Get Vehicles |
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
```

Generate Prisma Client

```bash
npx prisma generate
```

Run Migrations

```bash
npx prisma migrate dev
```

Start Backend

```bash
npm run dev
```

Backend

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

Frontend

```
http://localhost:5173
```

---

# Demo Credentials

If using a seeded database:

### Administrator

```
Email:
admin@example.com

Password:
Admin@123
```

### Standard User

```
Email:
user@example.com

Password:
User@123
```

> If no seed data is available, register a new account before using the application.

---

# Running Tests

Backend tests are written using **Jest**.

Run:

```bash
cd backend
npm test
```

---

# Screenshots

Add screenshots of the following screens.

- Login
- Register
- Dashboard
- Add Vehicle
- Edit Vehicle
- Search
- Purchase Workflow

---

## My AI Usage

AI tools were used throughout the development process to improve productivity while maintaining full ownership of the implementation.

### Tools Used

- ChatGPT
- Cursor AI

### How AI Was Used

AI was primarily used as a development assistant for:

- Brainstorming project structure
- Designing the frontend UI
- Reviewing React components
- Explaining Prisma and SQLite workflows
- Debugging issues during development
- Improving code readability
- Reviewing the final implementation against the assessment requirements

All business logic, application architecture, API integration, testing, and project decisions were reviewed, modified, and validated before being incorporated into the final project.

---
### Reflection

Using AI significantly accelerated development by reducing time spent on debugging and researching implementation details. Rather than generating an entire application automatically, AI served as a pair programmer for discussion, design feedback, and code reviews while I retained responsibility for understanding, integrating, and testing the final solution.

# Future Improvements

- Vehicle Images
- Pagination
- Sorting
- Advanced Filters
- Dashboard Analytics
- Docker Support
- PostgreSQL Migration
- CI/CD Pipeline
- Deployment to Cloud

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
- Persistent Database (SQLite)
- React Frontend
- Tailwind CSS
- Vehicle CRUD Operations
- Purchase & Restock Workflow
- Search Functionality
- Responsive User Interface
- Unit Testing
- Git Version Control
- AI Usage Documentation
