function listarLivros() {
    const listaLivros = [
        {
            "id": 1,
            "titulo": "Dom Casmurro",
            "autor": "Machado de Assis",
            "ano": 1899,
            "genero": "Romance",
            "url-da-capa": "https://tinyurl.com/domcasmurro"
        },
        {
            "id": 2,
            "titulo": "O Pequeno Príncipe",
            "autor": "Antoine de Saint-Exupéry",
            "ano": 1943,
            "genero": "Fábula filosófica",
            "url-da-capa": "https://tinyurl.com/pequenoprincipe"
        },
        {
            "id": 3,
            "titulo": "Harry Potter e a Pedra Filosofal",
            "autor": "J.K. Rowling",
            "ano": 1997,
            "genero": "Fantasia",
            "url-da-capa": "https://tinyurl.com/harrypedra"
        }
    ]
    return listaLivros
}

module.exports = {
    listarLivros
}