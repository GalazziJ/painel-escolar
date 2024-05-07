const express = require("express")
const router = express.Router

// forma contraída
//const {Router} = require("express")
const routes = new router()
const sites = require("./app/controllers/SitesController")
const imagens = require("./app/controllers/ImagemController")
const aulas = require ("./app/controllers/AulasController")
const usuarios = require("./app/controllers/UsuarioController")
const usuario = require("./app/models/usuario")

routes.post("/usuarios", usuarios.create)
routes.post("/login", usuarios.logar)

routes.delete("/usuarios/:usuario_id",usuarios.destroy)
routes.get("/usuarios/all",usuarios.index)
//routes.get("/usuarios", usuarios.verificaToken, usuarios.index)
routes.get("/usuarios/:usuario_id",usuarios.show)



//Raíz do painel
routes.get("/",(req,res) => {
    //res.json({teste:"teste"})
    res.sendFile("painel.html", {root:'./public'})
})

routes.get("/lateral",(req,res) => {
    //res.json({teste:"teste"})
    res.sendFile("lateral.html", {root:'./public'})
})

//Inserir aulas
routes.get("/inseriraulas", (req,res) =>{
    //res.json({teste:"teste"})
    res.sendFile("aulas.html", {root: './public'})
})

routes.post("/imagens",imagens.create)

routes.get("/imagens",imagens.index)

routes.put("/imagens", imagens.update)

routes.delete("/imagens",imagens.destroy)



routes.post("/aulas", aulas.create)
routes.get("/aulas", aulas.index)
routes.put("/aulas/:id", aulas.update)
routes.delete("/aulas/:id", aulas.destroy)


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
