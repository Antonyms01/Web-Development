//05url.js
var http = require('http');
http.createServer(function (req, res) 
{ res.writeHead(200, {'Content-Type' : 'text/html'
    });
    //  res.write(req.url);            //incoming msg is type of req.url   //req.url will take data from client 
    //  var url=require("url");
     var q = url.parse(req.url,true).query;
     var txt =q.year+" "+q.month;
     res.end();
}).listen(8081);
