const http = require("http");
const getCharById = require("./Controllers/getCharById");
const PORT = 3001;

http
.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes("/rickandmorty/character")){
        const id = Number(req.url.split("/").at(-1))
        getCharById(res, id)
    }
})
.listen(PORT, "localhost")