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

# AI Usage

This project was developed with the assistance of modern AI development tools, in accordance with the assessment guidelines.

## Tools Used

- ChatGPT
- Cursor

## How AI Was Used

- Brainstorming project architecture
- Reviewing Express API structure
- Debugging backend issues
- Improving React component organization
- Refining Tailwind CSS layouts
- Reviewing authentication flow
- UI/UX improvements
- Code review and refactoring suggestions

All AI-generated suggestions were manually reviewed, adapted, tested, and integrated before becoming part of the final implementation.

AI accelerated development while maintaining full ownership of the application's architecture, implementation, debugging process, and final decisions.

---

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
