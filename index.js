const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = require('./models');

// Roteadores
const postsRouter = require('./routes/Posts')

app.use("/posts", postsRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server rodando na porta 3001");
    })
})

