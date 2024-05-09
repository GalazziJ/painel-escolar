const Usuario = require("../models/usuario")
//jwt = jsonwebtoken
const jwt = require("jsonwebtoken")
const secret = "Coxinha1234"

class UsuarioController {
    index(req, res) {
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

    show(req, res) {
        let { usuario_id } = req.params
        Usuario.mostrarUsuario(usuario_id).then(
            resposta => {
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

    update(req,res){
        let {usuario_id} = req.params
        let {nome, usuario, senha, usuario_tipo} = req.body

        Usuario.atualizarUsuario(usuario_id,nome,usuario,senha,usuario_tipo).then(
            resposta => {
                console.debug("Usuário atualizado com sucesso")
                res.status(resposta[0]).json("Usuário atualizado com sucesso")

            }
        ).catch(
            resposta => {
                console.debug(resposta)
                res.status(resposta[0]).json("Erro: " + resposta[1].errno)

            }
        )
    }

    destroy(req, res){
        let {usuario_id} = req.params // pegando ID da requisição

        // chamar o método de deletar o usuário
        Usuario.deletarUsuario(usuario_id).then(
            resposta => {
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json("Erro: " + resposta[1].errno)
            }
        )
    }


    logar(req, res) {
        let { usuario, senha } = req.body
        Usuario.verificaUsuarioSenha(usuario, senha).then(
            resposta => {
                let usuario_id = resposta[2]
                let usuario_tipo = resposta[3]
                let token = ""
                if (resposta[0] === 200) {
                    token = jwt.sign({ usuario_id, usuario_tipo }, secret, { expiresIn: 120 })
                }
                res.status(resposta[0]).json({token})
            }
        ).catch(
            resposta => {
                console.debug(resposta[1])
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    verificaToken(req, res, next) {
        const token = req.headers['x-access-token']
        jwt.verify(token, secret, (erro, decoded) => {
            if (erro) {
                return res.status(401).json("Usuário não autenticado")
            }
            else {
                req.usuario_id = decoded.usuario_id
                req.usuario_tipo = decoded.usuario_tipo
                console.debug("Id:" + decoded.usuario_id + "Tipo:" + decoded.usuario_tipo)
                next()
            }
        })
    }
}

module.exports = new UsuarioController()