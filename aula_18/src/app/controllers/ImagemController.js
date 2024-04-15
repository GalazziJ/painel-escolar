const Imagem = require("../models/imagem")
class ImagemController {

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

            Imagem.inserir(arquivo, alternativo, nomeImagem)
            res.json()
        }
        else{
            // Erro 415 é tipo de arquivo não suportado
            res.status(415).json({message:"tipo arquivo não suportado"})
        }
    }
}

// inserindo uma imagem

module.exports = new ImagemController()