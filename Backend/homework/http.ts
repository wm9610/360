const http = require('http');

http.createServer((req:any, res:any) => {
    const {url} = req;
    switch (url) {
        case '/content':
            res.write('<h1>Content page</h1>');
            break;
        case '/about':
            res.write('<h1>About page</h1>');
            break;
        default:
            res.write('<h1>Home page</h1>');
            break;
    }
    res.end()
}).listen(8080)
