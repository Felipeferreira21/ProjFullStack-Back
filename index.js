const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = require('./models');

// Roteadores
const postsRouter = require('./routes/Posts')
app.use("/posts", postsRouter)

const CommentsRouter = require('./routes/Comments')
app.use("/comments", CommentsRouter);

const authUser = require("./routes/User")
app.use("/auth", authUser);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server rodando na porta 3001");
    })
})

