const http = require('http');
const PORT = 3500;

http.createServer(function(req, res){
    const url = req.url;
    console.log(url);

    switch(url) {
        case '/':
            console.log('Mein page');
            res.write('<h1>Home</h1>');
            break;
        case '/':
            console.log('Contact page');
            res.write('<h1>Contacts</h1>');
            break;
        default:
            console.log("404");
            res.write('<h1>404</h1>')
    }
    res.end();
}).listen(PORT);