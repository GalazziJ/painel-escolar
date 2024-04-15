const Imagem = require("../models/imagem")
class ImagemController {

    destroy(req, res){
        console.debug("DELETE :: /imagens")
        Imagem.excluir().then(
            resposta => {
                res.status(resposta[0]).json("deletado")
            }
        )
        .catch(
            resposta => {
                console.debug(resposta[1])
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    update(req,res){
        console.debug("PUT :: /imagens")
        Imagem.atualizar().then(
            resposta => {
                res.status(resposta[0]).json("atualizado")
            }
        )
        .catch(
            resposta => {
                console.debug(resposta[1])
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }


    index(req,res){
        console.debug("GET:: /imagens")
        Imagem.mostrar().then(
                resposta=>{
                    res.status(resposta[0]).json(resposta[1])
                }
            )
            // caso a Promise não seja cumprida executa (.catch)
            .catch(
                resposta=>{
                    console.debug(resposta[1])
                    res.status(resposta[0]).json("Erro:" + resposta[1].errno)
                }
            )
    }

    create(req, res) {
        let alternativo = req.body.alternativo
        let nomeImagem = req.files.imagem.name

        // Separando extensão do arquivo
        nomeImagem = nomeImagem.split(".")

        // pegando extensão
        let extensao = nomeImagem[nomeImagem.length - 1]

        if (extensao === "jpg") {
            nomeImagem = new Date().getTime() + "." + extensao
            let arquivo = req.files.imagem

        //O model retorna uma promessa

        // caso a Promise seja cumprida executa (.then)
        Imagem.inserir(arquivo, alternativo, nomeImagem).then(
            resposta=>{
                res.status(resposta).json("inserido")
            }
        )
        // caso a Promise não seja cumprida executa (.catch)
        .catch(
            resposta=>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro:" + resposta[1].errno)
            }
        )
        
        }
        else{
            // Erro 415 é tipo de arquivo não suportado
            res.status(415).json({message:"tipo de arquivo não suportado"})
        }
    }
}



module.exports = new ImagemController()