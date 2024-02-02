import path from 'node:path'

import * as trpcFastify from '@trpc/server/adapters/fastify'
import fastify, { FastifyBaseLogger, FastifyInstance, FastifyTypeProviderDefault } from 'fastify'
import { IncomingMessage, Server, ServerResponse } from 'http'

import appRouter from './router'

const server: FastifyInstance<
	Server<typeof IncomingMessage, typeof ServerResponse>,
	IncomingMessage,
	ServerResponse<IncomingMessage>,
	FastifyBaseLogger,
	FastifyTypeProviderDefault
> &
	PromiseLike<any> = fastify({
		logger: {
			level: 'info',
			file: path.join(__dirname, '../logs/app.log')
		},
		bodyLimit: 6442450944
	})

server.register(trpcFastify.fastifyTRPCPlugin, {
	prefix: '/v1',
	trpcOptions: {
		router: appRouter
	}
})

server.listen({ port: 2000 }, (err, address) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}
	console.log(`⚡ Server listening at ${address}`)
	server.log.info(`⚡ Server listening at ${address}`)
})

export default server
