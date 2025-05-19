# Restaurant App API 🍽️

A NestJS-based REST API for a food ordering system. It supports user registration, login, browsing restaurants, viewing menus, and placing orders.

## Tech Stack

- ✅ NestJS + TypeScript
- ✅ PostgreSQL + TypeORM
- ✅ JWT Authentication
- ✅ Swagger Documentation
- ✅ Docker + Docker Compose

## Getting Started

To run the application locally or with Docker:

### 1. Clone the repository

```bash
git clone https://github.com/edanimark/restaurant-app-nestjs.git
cd restaurant-app
cp .env.example .env
```

### 2. Install dependencies (optional for local dev)

```bash
npm install
```

### 3. Run the Application (App + DB)

You can choose one of the following options:

#### 🐳 Full Docker Setup (recommended)

This runs both the backend and the database in containers:

```bash
docker-compose up -d
```

#### 🧪 Docker for DB Only + Local Dev Server

This runs only the PostgreSQL container, while you run the NestJS app locally:

```bash
docker-compose up -d db
npm run start:dev
```

Once the app is running, visit:

[http://localhost:3000](http://localhost:3000) — API root
[http://localhost:3000/api](http://localhost:3000/api) — Swagger UI

The API will be available at: [http://localhost:3000](http://localhost:3000)

### 2. Seed the Database (optional)

```bash
npm run seed
```

This creates two sample restaurants and four menu items in the database.

## Swagger

API documentation is available at:

[http://localhost:3000/api](http://localhost:3000/api)

## Modules

### Auth Module

- Register, login, get current user

### Restaurants Module

- List restaurants
- Get restaurant details
- Get restaurant menu

### Orders Module (TODO)

- Place order
- Get order(s)
- Update order status

## Testing

Planned:

- Unit tests
- E2E tests for key endpoints

## Environment Variables

Ensure your `.env` file includes a strong JWT secret:

Create a `.env` file based on the following template:

```env
JWT_SECRET=supersecretkey123456789
DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_NAME=food_ordering
```

## License

MIT
