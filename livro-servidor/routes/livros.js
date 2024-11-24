const express = require("express");
const router = express.Router();
const livroDao = require("../modelo/livro-dao");  

router.get("/", async (req, res) => {
  try {
    const livros = await livroDao.obterLivros();  
    res.json(livros);  
  } catch (err) {
    res.status(500).json({ mensagem: err.message });  
  }
});


router.post("/", async (req, res) => {
  const livro = req.body; 
  try {
    const novoLivro = await livroDao.incluir(livro); 
    res.status(201).json({ mensagem: "Livro incluído com sucesso!", livro: novoLivro });
  } catch (err) {
    res.status(400).json({ mensagem: err.message }); 
  }
});


router.delete("/:codigo", async (req, res) => {
  const { codigo } = req.params;  
  try {
    const resultado = await livroDao.excluir(codigo);  
    if (resultado.deletedCount === 0) {
      return res.status(404).json({ mensagem: "Livro não encontrado" });
    }
    res.json({ mensagem: "Livro excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ mensagem: err.message });  
  }
});

module.exports = router;  
