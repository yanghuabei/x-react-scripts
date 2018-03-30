/**
 * @file mock.js use json-server mocking restful data
 * @see https://github.com/typicode/json-server
 */

process.env.NODE_ENV = 'development';

const { appMock } = require('../config/paths');
const jsonServer = require('json-server');
const server = jsonServer.create();
const { data, routes } = require(appMock);

const middlewares = jsonServer.defaults();
const port = process.env.MOCK_PORT || 5000;

require('../config/env');

Promise.resolve(data()).then(start);

function start(data) {
  const router = jsonServer.router(data);

  server.use(middlewares);

  server.use(jsonServer.rewriter(routes));

  server.use(router);
  server.listen(port, () =>
    console.log(`JSON Server is running in port: ${port}`)
  );
}
