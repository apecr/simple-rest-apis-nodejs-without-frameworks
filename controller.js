const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
  const service = require('./service');
  const reqUrl = url.parse(req.url, true);

  // GET Endpoint
  if (reqUrl.pathname === '/sample' && req.method === 'GET') {
    console.log(`Request Type: ${req.method} Endpoint: ${reqUrl.pathname}`);
    return service.sampleRequest(req, res);
  }
  if (reqUrl.pathname === '/test' && req.method === 'POST') {
    console.log(`Request Type: ${req.method} Endpoint: ${reqUrl.pathname}`);
    return service.testRequest(req, res);
  }
  console.log(`Request Type: ${req.method} Invalid Endpoint: ${reqUrl.pathname}`);
  return service.invalidRequest(req, res);
});