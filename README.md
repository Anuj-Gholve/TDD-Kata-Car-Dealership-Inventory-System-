# Vehicle Inventory Management System

A full-stack Vehicle Inventory Management application built as part of the Incubyte Full Stack Assessment.

The application provides a secure inventory management system with authentication, role-based authorization, vehicle management, stock tracking, purchasing, and search functionality.

---

## Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt

### Vehicle Management

- Add Vehicle
- Edit Vehicle
- Delete Vehicle
- View Inventory
- Search Vehicles

### Inventory Operations

- Purchase Vehicles
- Restock Inventory
- Stock Validation

### Authorization

- Role-Based Access Control
- Admin-only vehicle management
- Protected API routes

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend

- Node.js
- Express.js
- Prisma ORM
- SQLite
- JWT
- bcrypt

### Testing

- Jest

---

## Project Structure

```
.
├── backend
│   ├── prisma
│   ├── src
│   ├── package.json
│   └── ...
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Anuj-Gholve/TDD-Kata-Car-Dealership-Inventory-System-.git
```

```
cd TDD-Kata-Car-Dealership-Inventory-System-
```

---

## Backend Setup

```
cd backend
```

Install dependencies

```bash
npm install
```

Generate Prisma Client

```bash
npx prisma generate
```

Run database migrations

```bash
npx prisma migrate dev
```

Start backend

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

```
cd frontend
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Features

- Authentication
- Vehicle CRUD
- Search
- Purchase
- Restock
- Role-Based Authorization

---

## Screenshots

Screenshots can be added here.

---

## Future Improvements

- Pagination
- Sorting
- Image Upload
- Dashboard Analytics
- Docker Support
- Deployment

---

## Author

**Anuj Gholve**

GitHub: https://github.com/Anuj-Gholve
