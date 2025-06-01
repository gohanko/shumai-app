import jayson from 'jayson'
import indexRoute from './routes'

const server = new jayson.Server(indexRoute)

server.websocket({ port: 8000 })