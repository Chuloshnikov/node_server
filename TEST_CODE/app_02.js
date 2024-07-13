const http = require('http');


//localhost:3500
//request, response

http.createServer(function(req, res){
    console.log(req.url);
    console.log(req.method);
    console.log('server work');
    res.setHeader("Content-Type", "text/html; charset=utf-8;");
    res.write('<header>Header</header>');
    res.write('<mein>Mein</mein>');
    res.write('<footer>footer</footer>');
    res.end();
}).listen(3500);