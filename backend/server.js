const express = require("express");
const articles = require("./articles");
const dotenv = require("dotenv");


const server = express();

server.get('/', (req, res) =>{
    // res.send("API is running");
    // res.json(articles.map(article =>{
    //     console.log(article)
    // }));
    res.json(articles);
})

server.get('/api/articles/:id', (req, res)=>{
    const article = articles.find((article) => article._id === req.params.id);
    res.send(article);
    console.log(req.params)
})

// server.listen(4000,
//     () => {
//         console.log("server is listening on port 4000")
//     });

dotenv.config();
const PORT = process.env.PORT || 4000;

server.listen(PORT,
    () => {
        console.log(`server is listening on port ${PORT}`)
    });
