const express = require('express');
const server = express();

const SchemeRouter = require('./schemes/scheme-router.js');



server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.use((err) => {
    console.log(err)

    res.status(500).json({
        message: "Server error"
    })
})

module.exports = server;