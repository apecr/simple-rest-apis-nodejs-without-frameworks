const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
  const service = require('./service');
  const reqUrl = url.parse(req.url, true);

  // GET Endpoint
  if (reqUrl.pathname === '/sample' && req.method === 'GET') {
    console.log(`Request Type: ${req.method} Endpoint: ${reqUrl.pathname}`);
    service.sampleRequest(req, res);
  }
});