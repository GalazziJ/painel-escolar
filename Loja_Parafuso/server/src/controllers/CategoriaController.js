const Categoria = require("../models/Categoria")

class CategoriaController {

  // Criando o CRUD
  create(req, res) { // requisição e resposta
    let { nome } = req.body

    Categoria.inserirCategoria(nome).then(
      resposta => {
        console.debug("Inserindo categoria")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Inserindo categoria")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }

  read(req, res) {
    Categoria.mostrarCategorias().then(
      resposta => {
        console.debug("Mostrando categorias")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Mostrando categorias")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }
  update(req, res) {
    let {id_categoria} = req.params
    let { nome } = req.body

    Categoria.atualizarCategoria(id_categoria, nome).then(
      resposta => {
        console.debug("Atualizando categoria")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Atualizando categoria")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }

  delete(req, res) {
    let {id_categoria} = req.params
    Categoria.deletarCategoria(id_categoria).then(
      resposta => {
        console.debug("Deletando categoria")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Deletando categoria")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }

}

module.exports = new CategoriaController()