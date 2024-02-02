require('dotenv').config();
const { migrate } = require('drizzle-orm/mysql2/migrator');
const db = require('./dist/src/db');
const { connection } = require('./dist/src/db');

// This will run migrations on the database, skipping the ones already applied
migrate(db, { migrationsFolder: './migrations' });

// Don't forget to close the connection, otherwise the script will hang
// connection.end();