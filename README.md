# Vehicle Inventory Management System

A modern full-stack **Vehicle Inventory Management System** developed as part of the **Incubyte Full Stack Assessment**.

The application enables secure vehicle inventory management through authentication, role-based authorization, vehicle lifecycle management, purchasing workflows, inventory restocking, and a responsive React dashboard.

The project demonstrates clean backend architecture, RESTful API design, database integration using Prisma ORM, unit testing with Jest, and a modern frontend built using React and Tailwind CSS.

---

# Project Overview

This application simulates a dealership inventory management platform where authenticated users can browse and purchase vehicles while administrators can efficiently manage the complete inventory.

The project focuses on building a maintainable and scalable full-stack application while following modern software engineering practices.

Key concepts demonstrated include:

- RESTful API Development
- Layered Backend Architecture
- JWT Authentication
- Role-Based Authorization
- Prisma ORM
- SQLite Database Integration
- React Single Page Application
- Responsive UI using Tailwind CSS
- Unit Testing with Jest
- Git-based Version Control

---

# Features

## Authentication

- User Registration
- Secure User Login
- Password Hashing using bcrypt
- JWT-based Authentication
- Protected API Routes

---

## Vehicle Inventory

- Browse Available Vehicles
- Search Vehicles
- Purchase Vehicles
- Automatic Stock Updates
- Inventory Validation

---

## Administrator Features

- Add New Vehicle
- Edit Vehicle Details
- Delete Vehicles
- Restock Inventory
- Role-Based Access Control

---

## User Experience

- Responsive Design
- Modern Dashboard
- Search & Filtering
- Clean Navigation
- Reusable React Components
- Accessible Forms
- Loading & Error Handling

---

# Tech Stack

| Frontend | Backend | Database | Authentication | Testing |
|-----------|----------|----------|----------------|----------|
| React | Node.js | SQLite | JWT | Jest |
| Vite | Express.js | Prisma ORM | bcrypt | |

---

# Architecture

```

Client (React + Vite)
        │
        ▼
Express REST API
        │
        ▼
Controllers
        │
        ▼
Services
        │
        ▼
Repositories
        │
        ▼
Prisma ORM
        │
        ▼
SQLite Database

```

The backend follows a layered architecture that separates routing, business logic, data access, and persistence, improving maintainability, scalability, and testability.

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
│   │   └── tests
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
├── assets/
├── PROMPTS.md
├── AI_REVIEW_SESSION.md
├── TEST_REPORT.md
└── README.md

```

---

# REST API

| Method | Endpoint | Description |
|----------|------------------------------|--------------------------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Authenticate user and return JWT |
| GET | `/vehicles` | Retrieve all vehicles |
| GET | `/vehicles/search` | Search vehicles |
| POST | `/vehicles` | Add a new vehicle *(Admin)* |
| PUT | `/vehicles/:id` | Update vehicle details *(Admin)* |
| DELETE | `/vehicles/:id` | Delete a vehicle *(Admin)* |
| POST | `/vehicles/:id/purchase` | Purchase a vehicle |
| POST | `/vehicles/:id/restock` | Restock inventory *(Admin)* |

---

# Getting Started

## Clone the Repository

```bash
git clone https://github.com/Anuj-Gholve/TDD-Kata-Car-Dealership-Inventory-System-.git

cd TDD-Kata-Car-Dealership-Inventory-System-
```

---

# Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Generate the Prisma Client:

```bash
npx prisma generate
```

Apply database migrations:

```bash
npx prisma migrate dev
```

Start the backend server:

```bash
npm run dev
```

The backend server will be available at:

```
http://localhost:5000
```

---

# Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend application will be available at:

```
http://localhost:5173
```

---

# Database Setup

Generate the Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

(Optional) Seed the database:

```bash
npx prisma db seed
```

Launch Prisma Studio to inspect the database:

```bash
npx prisma studio
```

---

# Running Tests

Backend unit tests are implemented using **Jest**.

Run the test suite:

```bash
cd backend

npm test
```

A detailed test execution summary is available in **TEST_REPORT.md**.

---

# Demo Credentials

If the database has been seeded, you can use the following credentials to explore the application.

## Administrator

```
Email: admin@example.com
Password: Admin@123
```

Administrator privileges include:

- Add Vehicle
- Edit Vehicle
- Delete Vehicle
- Restock Inventory

---

## Standard User

```
Email: user@example.com
Password: User@123
```

Standard users can:

- Browse Vehicles
- Search Inventory
- Purchase Vehicles

> **Note:** If seed data is unavailable, simply register a new account to access the application.

---

# Application Preview

## Account Creation

<p align="center">
    <img src="./assets/Account Creation.png" width="900" alt="Account Creation">
</p>

---

## User Login

<p align="center">
    <img src="./assets/Account Signing In.png" width="900" alt="User Login">
</p>

---

## User Dashboard

<p align="center">
    <img src="./assets/User Dashboard.png" width="900" alt="User Dashboard">
</p>

---

## Vehicle Purchase

<p align="center">
    <img src="./assets/User Vehicle Purchase.png" width="900" alt="Vehicle Purchase">
</p>

---

## Administrator Dashboard

<p align="center">
    <img src="./assets/Admin Dashboard.png" width="900" alt="Administrator Dashboard">
</p>

---

## Add Vehicle

<p align="center">
    <img src="./assets/Admin Add Vehicle.png" width="900" alt="Add Vehicle">
</p>

---

## Edit Vehicle

<p align="center">
    <img src="./assets/Admin Edit Vehicle.png" width="900" alt="Edit Vehicle">
</p>

---

## Restock Vehicle

<p align="center">
    <img src="./assets/Admin Restock Vehicle.png" width="900" alt="Restock Vehicle">
</p>

---

## Delete Vehicle

<p align="center">
    <img src="./assets/Admin Delete Vehicle.png" width="900" alt="Delete Vehicle">
</p>

---

## Prisma Studio – User Data

<p align="center">
    <img src="./assets/Prisma Studio User Data.png" width="900" alt="Prisma User Data">
</p>

---

## Prisma Studio – Vehicle Data

<p align="center">
    <img src="./assets/Prisma Studio Vehicle Data.png" width="900" alt="Prisma Vehicle Data">
</p>

---

# My AI Usage

This project was developed with the assistance of AI tools in accordance with the assessment guidelines. AI was used as a development assistant throughout the project to accelerate development, improve code quality, and assist with debugging while ensuring that all implementation decisions remained under my control.

## AI Tools Used

- ChatGPT (OpenAI)
- Cursor AI

## How AI Was Used

### Project Planning

- Brainstormed the overall application architecture.
- Planned the layered backend architecture.
- Designed REST API endpoints.
- Discussed database schema design.

### Backend Development

- Reviewed Express.js implementation strategies.
- Debugged authentication and authorization issues.
- Assisted with Prisma ORM queries.
- Reviewed repository and service layer implementations.

### Frontend Development

- Reviewed React component structure.
- Improved Tailwind CSS layouts.
- Refined responsive UI design.
- Discussed state management approaches.

### Testing

- Discussed Jest testing strategies.
- Reviewed backend unit tests.
- Identified business logic edge cases.

### Documentation

- Improved README organization.
- Reviewed project documentation.
- Prepared submission artifacts.
- Verified repository against assessment requirements.

## Reflection

AI significantly improved development efficiency by assisting with architecture discussions, debugging, documentation, UI refinement, and code reviews.

Rather than generating the project automatically, AI was used as an interactive development assistant. Every AI-generated suggestion was manually reviewed, modified where necessary, tested locally, and integrated only after verifying correctness.

Final implementation decisions, debugging, testing, integration, and submission remained my responsibility.

---

# AI Documentation

To maintain transparency regarding AI usage, the repository includes the following supporting documentation:

| File | Description |
|------|-------------|
| **PROMPTS.md** | Documents the AI-assisted development interactions and major prompts used throughout the project. |
| **AI_REVIEW_SESSION.md** | Documents the AI-assisted repository review, Git troubleshooting, and final submission preparation process. |
| **TEST_REPORT.md** | Contains the backend unit test execution report using Jest. |

These documents complement the **My AI Usage** section and provide additional context on how AI tools were used responsibly during development.

---

# Known Limitations

- SQLite is used for local development.
- Authentication tokens are stored in browser localStorage.
- Vehicle image upload is not implemented.
- Pagination and sorting are not included.
- Email verification is not implemented.
- Cloud deployment is not configured.

---

# Future Improvements

Potential enhancements for future versions include:

- PostgreSQL or MySQL support
- Docker containerization
- Cloud deployment (Render / Railway / AWS)
- Dashboard analytics
- Advanced filtering and sorting
- Vehicle image management
- Audit logging
- Refresh token authentication
- CI/CD pipeline

---

# Author

**Anuj Gholve**

Computer Engineering Student

GitHub: https://github.com/Anuj-Gholve

---

# Assessment Deliverables

This submission includes:

- ✅ RESTful Backend API
- ✅ Layered Backend Architecture
- ✅ JWT Authentication
- ✅ Role-Based Authorization
- ✅ Prisma ORM
- ✅ SQLite Database
- ✅ React Frontend
- ✅ Tailwind CSS
- ✅ Vehicle CRUD Operations
- ✅ Vehicle Search
- ✅ Purchase Workflow
- ✅ Inventory Restock
- ✅ Jest Unit Tests
- ✅ Git Version Control
- ✅ Application Screenshots
- ✅ Local Setup Instructions
- ✅ AI Usage Documentation
- ✅ PROMPTS.md
- ✅ TEST_REPORT.md

---

Thank you for reviewing this project.
