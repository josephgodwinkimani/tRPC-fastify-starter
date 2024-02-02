import { initTRPC } from '@trpc/server'
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import { eq } from 'drizzle-orm'
import * as yup from 'yup'

import db from './db'
import { users } from './schema'

export const createContext = ({ req, res }: CreateFastifyContextOptions) => ({})
const t = initTRPC.context<typeof createContext>().create()

const appRouter = t.router({
	// route GET /greeting
	greeting: t.procedure.query(() => 'hello tRPC v10!'),
	// route GET /userById/:
	userById: t.procedure.input(yup.string().required()).query(async (opts) => {
		const { input } = opts
		// Retrieve the user with the given ID
		const database = await db()
		const user = await database.query.users.findMany({
			where: eq(users.id, parseInt(input))
		})
		return user
	})
})

export default appRouter
