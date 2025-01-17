const mongoose = require('mongoose');  

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost:27017/livraria', options)
  .then(() => console.log("Conexão com MongoDB estabelecida"))
  .catch((err) => console.log("Erro de conexão com MongoDB:", err));

module.exports = mongoose; 
