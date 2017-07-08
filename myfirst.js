var http = require('http');
var fs = require('fs');

function index(err, data){
	code = 200
	header = {'Content-Type' : 'text/html'}
	res.writeHead(code, header);
	
	res.write(data);
	res.end()
}

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);