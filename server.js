//WEB SERVERS KEEP ON LISTENING FOR REQUESTS

const http = require('http');

//using the .createserver method, assigning it to a random variable for instance the name server
//then the create server method is looking for a callback, and the callback function takes in two parameters
//bith params are objects, and you can give them random names but (req, res) are most preferred. req- represents
//the incoming request(from webpage). res- is what we are senting back to the client side

const server = http.createServer((req, res) => {
    if(req.url  === '/'){ //.url method checks the url requested by client
        res.end('Hello bensoli welcome to homepage') //.end method will end the instance of our server
    }
    else if(req.url === '/about'){
        res.end('Here is my developer journey')
    } else {
        res.end(`
           <h1>Ooops!</h1>
           <p> Page not found </p>
           <a href="/">back Home</a>
            `);
        }
    })

//saying what port our server will be listening to, using the.listen method
server.listen(5000)
console.log(`server is listening on port 5000`);