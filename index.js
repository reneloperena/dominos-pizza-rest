import Hapi from 'hapi';
import * as orderHandler from './handlers/order';

const server = new Hapi.Server();
server.connection({ port: 80 });

server.route({
  method: 'GET',
  path: '/',
  handler:(request, reply) => reply('Hello, world!'),
});

server.route({
  method: 'POST',
  path: '/order',
  handler: orderHandler.orderPizza,
});

server.start((err) => {
  if (err) {
      throw err;
  }
  console.log('Server running at:', server.info.uri);
});
