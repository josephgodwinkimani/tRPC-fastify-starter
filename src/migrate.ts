/* eslint-disable no-async-promise-executor */
import 'dotenv/config'

import { migrate } from 'drizzle-orm/mysql2/migrator'

import db, { connection } from './db'

module.exports = new Promise(async (resolve, reject) => {
	try {
		// call the database connection
		const database = await db()
		// This will run migrations on the database, skipping the ones already applied
		await migrate(database, { migrationsFolder: './migrations' })
		// Don't forget to close the connection, otherwise the script will hang
		await (await connection).end()
		// return something to user to confirm everything went well
		resolve(console.log('Migration was successful!'))
	} catch (error: any) {
		// Handle the rejection reason
		reject(console.log(error.message))
	}
})
