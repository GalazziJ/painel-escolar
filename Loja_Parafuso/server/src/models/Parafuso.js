
const mysql = require("mysql2")
const config = require("../Config")

class Parafuso {

  constructor() {
    this.conexao = mysql.createConnection(config.db)
  }

  inserirParafuso(nome, id_categoria) {
    let sql = `INSERT INTO parafuso (nome, id_categoria) VALUES
    ("${nome}", "${id_categoria}");`

    return new Promise((resolve, reject) => {
      this.conexao.query(sql, function (erro, retorno) {
        if (erro) {
          reject([400, erro])
        } else {
          resolve([201, "Parafuso inserido"])
        }
      })
    })
  }

  mostrarParafuso() {
    let sql = "SELECT * FROM parafuso"

    return new Promise((resolve, reject) => {
      this.conexao.query(sql, function (erro, retorno) {
        if (erro) {
          reject([400, erro])
        } else {
          resolve([200, retorno])
        }
      })
    })
  }

  atualizarParafuro(id_parafuso, nome, id_categoria) {
    let sql = `UPDATE parafuso SET nome="${nome}", id_categoria="${id_categoria}" WHERE idparafuso="${id_parafuso}";`
    return new Promise((resolve, reject) => {
      this.conexao.query(sql, function (erro, retorno) {
        if (erro) {
          reject([400, erro])
        } else {
          if (retorno["affectedRows"] > 0) {
            resolve([200, "Parafuso atualizado"])
          } else {
            resolve([404, "Parafuso não encontrado"])
          }
        }
      })
    })
  }

  deletarParafuso(id_parafuso) {
    let sql = `DELETE FROM parafuso WHERE idparafuso="${id_parafuso}";`
    console.debug(sql)
    return new Promise((resolve, reject) => {
      this.conexao.query(sql, function (erro, retorno) {
        if (erro) {
          reject([400, erro])
        } else {
          resolve([200, retorno])
        }
        if (retorno["affectedRows"] > 0) {
          resolve([200, "Parafuso deletado"])
        } else {
          resolve([404, "Parafuso não encontrado"])
        }
      })
    })
  }
}

module.exports = new Parafuso()