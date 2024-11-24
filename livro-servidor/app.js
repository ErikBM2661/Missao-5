const express = require("express");
const app = express();
const cors = require("cors");
const livroRouter = require("./routes/livros");

app.use(cors());  

app.use(express.json());

app.use("/livros", livroRouter);

app.get("/", (req, res) => {
  res.send("Servidor rodando");
});

module.exports = app;
