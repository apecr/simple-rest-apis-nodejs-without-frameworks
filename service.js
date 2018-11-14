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
  res.end(JSON.stringify(response));
};

module.exports = {
  sampleRequest
};