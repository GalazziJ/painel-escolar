const Parafuso = require("../models/Parafuso")

class ParafusoController {

  // Criando o CRUD
  create(req, res) { // requisição e resposta
    let { nome } = req.body
    let { id_categoria } = req.body

    Parafuso.inserirParafuso(nome, id_categoria).then(
      resposta => {
        console.debug("Inserindo parafuso")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Inserindo parafuso")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }

  read(req, res) {
    Parafuso.mostrarParafuso().then(
      resposta => {
        console.debug("Mostrando parafusos")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Mostrando parafusos")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }
  update(req, res) {

    let { id_parafuso } = req.params
    let { nome, id_categoria } = req.body

    Parafuso.atualizarParafuro(id_parafuso, nome, id_categoria).then(
      resposta => {
        console.debug("Atualizando parafuso")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Atualizando parafuso")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }

  delete(req, res) {
    let { id_parafuso } = req.params

    Parafuso.deletarParafuso(id_parafuso).then(
      resposta => {
        console.debug("Deletando parafuso")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Deletando parafuso")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }

}

module.exports = new ParafusoController()