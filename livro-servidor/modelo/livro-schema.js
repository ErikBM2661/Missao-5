const mongoose = require("./conexao");

const LivroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  anoPublicacao: Number,
  genero: String,
});

const Livro = mongoose.model('Livro', LivroSchema, 'livros');

module.exports = Livro;