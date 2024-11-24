const Livro = require("./livro-schema");  


const obterLivros = async () => {
  try {
    const livros = await Livro.find(); 
    return livros;
  } catch (err) {
    throw new Error("Erro ao obter livros: " + err.message);
  }
};


const incluir = async (livro) => {
  try {
    const novoLivro = await Livro.create(livro);
    return novoLivro;
  } catch (err) {
    throw new Error("Erro ao incluir livro: " + err.message);
  }
};


const excluir = async (codigo) => {
  try {
    const resultado = await Livro.deleteOne({ _id: codigo });  
    return resultado;
  } catch (err) {
    throw new Error("Erro ao excluir livro: " + err.message);
  }
};


module.exports = {
  obterLivros,
  incluir,
  excluir,
};
