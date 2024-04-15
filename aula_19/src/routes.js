const express = require("express")
const router = express.Router

// forma contraída
//const {Router} = require("express")
const routes = new router()
const sites = require("./app/controllers/SitesController")
const imagens = require("./app/controllers/ImagemController")
//Raíz do painel
routes.get("/",(req,res) => {
    //res.json({teste:"teste"})
    res.sendFile("painel.html", {root:'./public'})
})

routes.get("/lateral",(req,res) => {
    //res.json({teste:"teste"})
    res.sendFile("lateral.html", {root:'./public'})
})

routes.post("/imagens",imagens.create)

routes.get("/imagens",imagens.index)

routes.put("/imagens", imagens.update)

routes.delete("/imagens",imagens.destroy)






// sites.index referencia o método "index" do controlador SitesController
routes.get("/sites",sites.index)

// referencia o método "show" pelo id do site
routes.get("/sites/:id", sites.show)

// insere um novo site através do método "create"
routes.post("/sites", sites.create)

//atualiza um registro através do método "update"
routes.put("/sites/:id", sites.update)

//deleta um registro através do método "destroy"
routes.delete("/sites/:id", sites.destroy)

// torna a classe exportável 
module.exports = routes
