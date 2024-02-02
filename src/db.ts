import 'dotenv/config'

import { drizzle, MySql2Client } from 'drizzle-orm/mysql2'
import mysql, { Connection, Pool } from 'mysql2/promise'

import * as schema from './schema'

export const connection: Promise<MySql2Client | Connection | Pool> = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	database: process.env.DATABASE_NAME,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	multipleStatements: true
})

async function db() {
	return drizzle(await connection, { schema, mode: 'default' })
}

export default db
