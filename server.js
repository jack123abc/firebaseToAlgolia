var server = require('http').createServer(function (req, res) {
  res.writeHead(200);
  //res.end('Farewell Nodejitsu. Hello Modulus!');
});

server.listen(process.env.PORT || 8888);