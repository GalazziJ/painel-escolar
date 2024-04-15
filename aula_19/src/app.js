const express = require("express")
const routes = require("./routes")
const fileupload = require("express-fileupload")

// App é um objeto!
class App{
    constructor(){

        // instanciando o servidor e colocando dentro do 
        //constructor
        this.server = express()
        this.middlewares()
        this.routes()
    }

    // intermédio de informações
    // Middleware para analisar JSON no corpo das requisições
    middlewares(){
        this.server.use(express.json())
        
        //comando que premite acessar o diretório com arquivos estáticos
        this.server.use(express.static("public"))

        // fazer uso do fileupload
        this.server.use(fileupload())

        this.server.use(express.urlencoded({extended:false}))
    }
    routes(){
        this.server.use(routes)
    }

}

//exportação da classe App
//const App = new App()
module.exports = new App().server
