const url = require('url');

const sampleRequest = (req, res) => {
  const reqUrl = url.parse(req.url, true);
  let name = 'World';
  if (reqUrl.query.name) {
    ({ name } = reqUrl.query);
  }
  const response = {
    text: `Hello ${name}`
  };
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(response));
};

const testRequest = (req, res) => {
  let body = '';
  req.on('data', chunck => body += chunck);
  req.on('end', () => {
    const postBody = JSON.parse(body);
    const response = {
      text: `Post Request Value is ${postBody.value}`
    };
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(response));
  });
};

const invalidRequest = (req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  return res.end('Invalid Request');
};

module.exports = {
  sampleRequest,
  testRequest,
  invalidRequest
};