const mongoose = require("mongoose");

mongoose.set('strictQuery', false);



mongoose.connect('mongodb+srv://adityasharma10102:QGuAIFq5XITkAKu5@blog.dfo0fin.mongodb.net/?retryWrites=true&w=majority&appName=blog')
    .then(() => {
        console.log("connect to mongodb database");
    })
    .catch((err) => {
        throw err;
    })

