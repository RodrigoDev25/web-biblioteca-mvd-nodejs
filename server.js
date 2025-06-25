const express = require('express')
const livroController = require ('./controller/livro-controller')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.get("/livros", livroController.listarLivros)


//_____________Porta__________//
app.listen(5000, () => {
    console.log("Escutando na porta 5000")
    
})
