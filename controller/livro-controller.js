const livroModelx = require ('../models/livro.model') 

function listarLivros(req, res){
const livros = livroModelx.listarLivros()

res.render('lista-livros')
}


module.exports = {
    listarLivros
}