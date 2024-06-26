var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
 var q = url.parse(req.url, true);
 var filename = "." + q.pathname;                   //01.html
 fs.readFile(filename, function(err, data) {
  if (err) {
   res.writeHead(404, {'Content-Type': 'text/html'});
   return res.end("404 Not Found");
  } 
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
 });
}).listen(8080);                                                        //http://127.0.0.1:8080/
