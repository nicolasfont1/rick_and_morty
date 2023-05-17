const http = require("http");
const characters = require("./Utils/data")
const PORT = 3001

http
.createServer((req, res) => {
    console.log(`Server raised in port ${PORT}.`);
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = Number(req.url.split("/").at(-1))

        let charactersFind = characters.find((char) => char.id === id)
        
        res.writeHead(200, {"Content-type": "application/json"}).
        end(JSON.stringify(charactersFind))
    }
})
.listen(PORT, "localhost")


// fs.readFile("./Utils/data.js", (err, data) => {
//     if(err){
//         res.writeHead(404, {"Content-type": "text/plain"})
//         return res.end("json not found")
//     }
//     data.forEach((elem) => {
//         if(elem.id === id){
//             res.writeHead(200, {"Content-type": "application/json"})
//             return res.end(elem)
//         }
//     })
// })
// return