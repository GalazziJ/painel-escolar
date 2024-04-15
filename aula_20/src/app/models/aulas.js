const mysql = require("mysql2")
const dbConfig = require("../config")

const caminhoServer = require("path")


class Aulas {
    constructor() {
        this.conexao = mysql.createConnection(dbConfig.db)
    }

    // Create
    inserir(data) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO aulas (data,hora_inicio, hora_fim, turma, instrutor, unidade_curricular,
                ambiente, tipo,turno, cod_instrutor, chave_entregue) VALUE ('${data.data}', '${data.hora_inicio}','${data.hora_fim}'
                ,'${data.turma}', '${data.instrutor}','${data.unidade_curricular}','${data.ambiente}','${data.tipo}', '${data.turno}','${data.cod_instrutor}'
                ,'${data.chave_entregue}')`
            this.conexao.query(sql, function (erro, retorno) {

                if (erro) {
                    rejects([400, erro])
                }
                else {
                    resolve([201])
                }
            })
        })
    }

    //Read
    mostrar(){
        return new Promise ((resolve, reject) =>{
            let sql = `SELECT * FROM aulas`
            this.conexao.query(sql, function(erro,retorno){

                if (erro){
                    reject([400,erro])
                }
                else {
                    resolve([200,retorno])
                }
            })
        })
    }

    //Update
    atualizar(data,id){
        return new Promise ((resolve, reject) => {
            let sql = `UPDATE aulas SET data = '${data.data}', hora_inicio = '${data.hora_inicio}', hora_fim = '${data.hora_fim}', turma = '${data.turma}', instrutor = '${data.instrutor}'
            , unidade_curricular = '${data.unidade_curricular}', ambiente = '${data.ambiente}' WHERE aula_id = ${id}`
            this.conexao.query(sql, function(erro, retorno){
                
                if (erro){
                    reject([400,erro])
                }
                else{
                    resolve([200,retorno])
                }
            })
        })
    }

    //Delete
    excluir(id){
        return new Promise ((resolve, reject) => {
            let sql = `DELETE FROM aulas WHERE aulas_id = '${data.aula_id}'`
            this.conexao.query(sql, function (erro,retorno){

                if(erro){
                    reject([400,erro])
                }
                else{
                    resolve(200,retorno)
                }
            })
        })
    }
}

module.exports = new Aulas ()