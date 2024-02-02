import request from 'supertest'

import server from './index'

// needs refactoring
describe('Fastify server', () => {
	let fastifyServer: any

	beforeAll(async () => {
		fastifyServer = await server
	})

	afterAll(async () => {
		await fastifyServer.close()
	})

	it('should respond with 200 OK', async () => {
		;async () => {
			const response = await request(fastifyServer).get('/greeting')
			expect(response.status).toBe(200)
		}
	})
})
