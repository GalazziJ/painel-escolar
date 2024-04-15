const Usuario = require("../models/usuario")

class UsuarioController {
    index(req,res){
        let { nome, usuario, senha, usuario_tipo } = req.body
        Usuario.mostrarTodos(nome, usuario, senha, usuario_tipo).then(
            resposta => {
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug(resposta[1])
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    
    show(req,res){
        let {usuario_id} = req.params
        Usuario.mostrarUsuario(usuario_id).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        )
    
    }
    
    create(req, res) {
        let { nome, usuario, senha, usuario_tipo } = req.body
        Usuario.inserir(nome, usuario, senha, usuario_tipo).then(
            resposta => {
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug(resposta[1])
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    logar(req, res) {
        let { usuario, senha } = req.body
        Usuario.verificaUsuarioSenha(usuario, senha).then(
            resposta => {
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug(resposta[1])
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

module.exports = new UsuarioController()