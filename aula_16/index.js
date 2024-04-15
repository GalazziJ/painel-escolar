const mysql = require("mysql2")
const express = require("express")
const server = express()

// constante para fazer o upload dos arquivos
const fileupload = require("express-fileupload")


server.use(fileupload())
server.use(express.json())
server.use(express.urlencoded({extended:false}))


const conexao = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "painel"
})

//public = caminho de diretório 
// pegando arquivos estáticos dentro da pasta "public"
server.use(express.static("public"))

conexao.connect(function(erro){
    
    if (erro) throw erro
    console.log("Conexão realizada com sucesso")

})

let sites = [
    {
        id: 1, name:"SENAI ES", site: "https://senaies.com.br"
    },
    {
        id: 2, name:"VALORANT", site: "https://playvalorant.com/pt-br"
    },
    {
        id: 3, name:"FINDES", site: "https://findes.com.br/"
    }
]

//Raiz do painel 
// pegando arquivo HTML
server.get("/", (req, res) => {
res.sendFile(__dirname + "/public/painel.html")
})

// nova rota para as imagens laterais
server.get("/lateral", (req, res) => {
    res.sendFile(__dirname + "/public/lateral.html")
})

// Rota envio de imagens
server.post("/imagens", (req,res) => {
    let alternativo = req.body.alternativo
    let nomeImagem = req.files.imagem.name
    // separando o array
    nomeImagem = nomeImagem.split(".")

    nomeImagem = new Date().getTime() + "." + nomeImagem[nomeImagem.length-1]
    // mv = mover a imagem pra colocar dentro do diretório
    let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE ('${alternativo}', '${nomeImagem}')`

    conexao.query(sql,function(erro, retorno){
        if (erro) throw erro
        req.files.imagem.mv(__dirname + "/public/img/" +  nomeImagem)
    })
    res.json()
})


// mostrar lista
server.get("/sites", (req, res) => { 
    // Mostrar no terminal 
    console.debug("GET :: /sites", sites)
    // ---------------------------------------
    return res.json(sites)
})

// mostrar um elemento da lista
server.get("/sites/:id",(req,res) => {
    const id = parseInt(req.params.id)
    const site = sites.find(function(site) {
        console.debug("GET :: /sites/:id")
        return site.id === id
    })

/* let status = ""

    if (site){
        status = 200
    }
    else{
        status = 404
    }
    */

    const status = site ? 200:404  //OPERADOR TERNÁRIO
    return res.status(status).json(site)
}) 

//inserir um elemento na lista
server.post("/sites", (req,res) => {
    const {name, site} = req.body
    const id = sites[sites.length-1].id+1
    const newSite = {id:id, name:name, site:site}

    sites.push(newSite)
    console.debug("POST :: /sites")
    return res.status(201).json(newSite)
})
//atualizar um registro
server.put("/sites/:id", (req,res) =>{
    const id = parseInt(req.params.id)
    const {name,site} = req.body
    const index = sites.findIndex(function(site) {
        console.debug("PUT :: /sites/:id")
        return site.id === id
    })

    const status = index >=0 ? 200 : 400 
if (index >=0){
    sites[index] = {id, name, site}
}

    return res.status(status).json(sites[index])
})

//Deletando um registro
server.delete("/sites/:id", (req,res) =>{
    const id = parseInt(req.params.id)
    const index = sites.findIndex(function(site){
        
        return site.id === id
    })
    const status = index >=0 ? 200:400
    if (index >=0){
        sites.splice(index,1)
    }
    console.debug("DELETE :: /sites/:id")
    return res.status(status).json()
})
server.listen(3000)