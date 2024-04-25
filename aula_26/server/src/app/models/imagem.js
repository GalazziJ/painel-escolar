const mysql = require("mysql2")
const dbConfig = require("../config")

// Diretório do script sendo executado "server.js"
const caminhoServer = require("path")
class Imagem {
    constructor() {
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    excluir(){
        return new Promise ((resolve, reject) =>{
            let sql = `DELETE FROM anuncios WHERE imagem_id = 1`
            this.conexao.query(sql,function(erro,retorno){

                if (erro){
                    reject([400,erro])
                }
                else{
                    resolve([200,retorno])
                } 
            })
        })
    }

    atualizar(){
        return new Promise ((resolve, reject) =>{
            let sql = `UPDATE anuncios SET alternativo = "valo3" WHERE imagem_id = 1`
            this.conexao.query(sql,function(erro,retorno){
                
                if (erro){
                    reject([400,erro])
                }
                else{
                    resolve([200,retorno])
                }
            })
        })
    }

    // Read
    mostrar(){
        return new Promise ((resolve, reject) => {
            let sql = `SELECT * FROM anuncios`
            this.conexao.query(sql,function(erro, retorno){
                
                if (erro){
                    reject([400,erro])
                }
                else{
                    
                    resolve([200,retorno])
                }
            })
        })
    }

    // Create 
    inserir(arquivo, alternativo, nomeImagem) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE ('${alternativo}', '${nomeImagem}')`
            this.conexao.query(sql, function (erro, retorno) {
                
                if (erro) {//throw não pode ser utilizado pois para o sistema (break)
                    reject([400, erro])
                }  
                else {
                    arquivo.mv(caminhoServer + "/../public/img/" + nomeImagem)
                    resolve(201)
                }
            })
        })
    }
}

// node .\src\app\models\imagem.js
module.exports = new Imagem()