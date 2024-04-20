const Aula = require("../models/aulas");
class AulasController {
    
    create(req,res){
        const data = req.body;
        
        //Create
        Aula.inserir(data).then(
            resposta => {
                res.status(resposta[0]).json("inserido")
            }
        )
        // caso a Promise não seja cumprida executa (.catch)
            .catch(
                resposta =>{
                    console.debug(resposta)
                    res.status(resposta[0]).json("Erro:" + resposta[1].errno)
                }
            )       
    }

    //Read 
    index(req, res){
        console.debug("GET :: /aulas")
        Aula.mostrar().then(
            resposta => {
                res.status(resposta[0]).json(resposta[1])
            }
        )
        .catch(
            resposta =>{
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro:" + resposta[1].errno)
            }
        )
    }


    //Update
    update(req,res){
        const body = req.body
        const id = parseInt(req.params.id)
        console.debug("PUT ::/aulas")
        Aula.atualizar(body, id).then(
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

    //Delete
    destroy(req,res){
        const id = parseInt(req.params.id)
        console.debug("DELETE :: /aulas")
        Aula.excluir(id).then(
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
} 

module.exports = new AulasController()