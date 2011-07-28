var fs = require('fs'),
connect = require('connect'),
server,
PORT = 8080;

server = connect.createServer();
server.use(connect.profiler());
server.use(connect.bodyParser());
server.use(connect.cookieParser());
server.use(connect.static(__dirname + '/public', { maxAge: 999999 }));
server.use(connect.errorHandler({ stack: true, dump: true }));
server.listen(PORT);
console.log("Running http://localhost:" + PORT + "/");
