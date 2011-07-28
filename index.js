var fs = require('fs'),
connect = require('connect'),
server,
port = process.env.PORT || 3000;

server = connect.createServer();
server.use(connect.profiler());
server.use(connect.bodyParser());
server.use(connect.cookieParser());
server.use(connect.static(__dirname + '/public', { maxAge: 999999 }));
server.use(connect.errorHandler({ stack: true, dump: true }));
server.listen(port);
console.log("Running http://localhost:" + port + "/");
