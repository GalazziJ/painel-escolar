const Usuario = require("../models/Usuarios")

class UsuarioController {

  // Criando o CRUD
  create(req, res) { // requisição e resposta
    let { nome, login, senha } = req.body

    Usuario.inserirUsuario(nome, login, senha).then(
      resposta => {
        console.debug("Inserindo usuário")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Inserindo usuário")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }

  read(req, res) {
    Usuario.mostrarUsuarios().then(
      resposta => {
        console.debug("Mostrando usuários")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Mostrando usuários")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }
  update(req, res) {
    let {id_usuario} = req.params
    let { nome, login, senha } = req.body

    Usuario.atualizarUsuario(id_usuario, nome, login, senha).then(
      resposta => {
        console.debug("Atualizando usuário")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Atualizando usuário")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }

  showUser(req, res) {
    let {id_usuario} = req.params

    Usuario.selecionarUsuario(id_usuario).then(
      resposta => {
        console.debug("Exibindo usuário")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Exibindo usuário")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }

  delete(req,res) {
    let {id_usuario} = req.params
    Usuario.deletarUsuario(id_usuario).then(
      resposta => {
        console.debug("Deletando usuário")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta => {
        console.debug("Erro: Deletando usuário")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }

  login(req,res){
    let {login, senha} = req.body

    Usuario.verificarLoginSenha(login,senha).then(
      resposta=>{
        console.debug("Efetuando Login")
        res.status(resposta[0]).json(resposta[1])
      }
    ).catch(
      resposta=>{
        console.debug("Erro: Efetuando Login")
        res.status(resposta[0]).json(resposta[1])
      }
    )
  }
}

module.exports = new UsuarioController()