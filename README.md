# tRPC Starter Template with Fastify, Drizzle ORM, Jest and MySQL

This is a starter template for building a tRPC API with Drizzle ORM, MySQL, Jest and Fastify. It provides a basic structure for setting up an API with tRPC and integrating it with Drizzle ORM for database operations using MySQL, along with the Fastify framework for handling HTTP requests and Jest for testing.

## Prerequisites

Before using this template, ensure that you have the following installed:

- Node.js v18 and above
- MySQL

## Getting Started

1. Clone the repository.
2. Install the dependencies using `pnpm i`.
3. Set up your MySQL database and configure the connection in the application.
4. Generate the initial migration file using Drizzle's CLI.
5. Apply the initial migration to the database.
6. Start the server using `pnpm run dev`.

## Project Structure

- `src/`
  - `db.ts` - Drizzle ORM connection configuration to the MySQL database with mysql2 driver.
  - `schema.ts` - SQL schema.
  - `router.ts` - tRPC router with a procedure to use in our application.
- `migrations/` - Folder to store database migration files.

## Database Migration

To create and apply database migrations, use the following commands:

- Generate a migration: `pnpm run generate-migration`
- Apply migrations: `pnpm run migrate`

For detailed instructions on using Drizzle ORM for migrations, refer to the [Drizzle ORM documentation](https://orm.drizzle.team/docs/overview).

## API Endpoints

The API endpoints are defined in the `src/router.ts` file. You can define your tRPC API handlers and schemas in this directory.

## Running the Server

To start the hot reload development server, run the following command:

```bash
pnpm run dev
# try http://localhost:2000/v1/greeting
# try http://localhost:2000/v1/userById?input=1
```

To run tests, run the following command:

```bash
pnpm run test
# pnpm run test src/index.test.ts
```

