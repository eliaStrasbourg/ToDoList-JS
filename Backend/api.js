const express = require("express");
const server = express();
server.use(express.json())
require('dotenv').config()
let port = process.env.SERV_PORT | 3500;

server.get("/", (req, res) => {
    res.status(200).json({message: "OK"})
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = { server };