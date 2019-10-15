var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200,{'conent-type' : 'text/html'});
    response.write('Hello World!!');
    response.end();
}).listen(8888);

console.log('서버 돌아가는 중!')