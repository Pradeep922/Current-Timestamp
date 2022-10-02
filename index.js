let http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let date = new Date()

    fs.writeFile('./current-date-time.txt', `${date}`, (err) => {
        if (err) 
        console.log(err)
    })

    fs.readFile('./current-date-time.txt',(err, data) => {
        if(err)
        console.log(err)
        res.writeHead(200,{'Content-Type': 'text/html'}); 
        res.end(data)
    })
})

server.listen(8000,()=>console.log("Server Listening to port " + 8000))