var http = require('http');
var startTime;
var host;
var handleRequest = function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.writeHead(200);
  response.write("Este prima versiune a aplicației /n Ruleaza pe podul:");
  response.write(host);
  response.end(" v=1\n");

}
var www = http.createServer(handleRequest);
www.listen(8080,function () {
    host = process.env.HOSTNAME;
});
