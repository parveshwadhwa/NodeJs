const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get('/' , (req , res)=>{
   return res.send('hello from home page');
});

app.get('/about' , (req , res)=>{
    return res.send(`hello from about page ${req.query.name}`);
});

app.listen(8002, () => console.log("server started"));

// const server = http.createServer((req, res) => {
//     if(req.url === "/favicon.ico") res.end();
//     const log = `${Date.now()}: ${req.url} New req Recieved\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch(myUrl.pathname) {
//             case '/': 
//                 res.end("Home Page");
//                 break;

//             case '/about':
//                 const qp = myUrl.query.name;
//                 res.end(`Hii ${qp}`);
//                 break;

//             default:
//                 res.end("404 not found Page");
//         }
//     });
// });

// const server = http.createServer(app);

// server.listen(8002, () => console.log("server started"));
