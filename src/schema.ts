import { int, mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core'

export const users = mysqlTable('users', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 256 })
})

export const posts = mysqlTable('posts', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 256 }),
	authorId: int('author_id').references(() => users.id),
	status: mysqlEnum('status', ['DRAFT', 'REVIEW', 'PUBLISHED'])
})
