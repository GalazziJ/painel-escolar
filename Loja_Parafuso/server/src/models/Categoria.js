
const mysql = require("mysql2")
const config = require("../Config")

class Categoria {

  constructor() {
    this.conexao = mysql.createConnection(config.db)
  }

  inserirCategoria(nome) {
    let sql = `INSERT INTO categorias (nome) VALUE
    ("${nome}");`

    return new Promise((resolve, reject) => {
      this.conexao.query(sql, function (erro, retorno) {
        if (erro) {
          reject([400, erro])
        } else {
          resolve([201, "Categoria inserida"])
        }
      })
    })
  }

  mostrarCategorias() {
    let sql = "SELECT * FROM categorias"

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

  atualizarCategoria(id_categoria, nome) {
    let sql = `UPDATE categorias SET nome="${nome}" WHERE id_categoria="${id_categoria}";`
    return new Promise((resolve, reject) => {
      this.conexao.query(sql, function (erro, retorno) {
        if (erro) {
          reject([400, erro])
        } else {
          resolve([200, "Categoria atualizada"])
        }
      })
    })
  }

  deletarCategoria(id_categoria) {
    let sql = `DELETE FROM categoria WHERE id_categoria="${id_categoria}";`

    return new Promise((resolve, reject) => {
      this.conexao.query(sql, function (erro, retorno) {
        if (erro) {
          reject([400, erro])
        } else {
          resolve([200, retorno])
        }
        if (retorno["affectedRows"] > 0) {
          resolve([200, "Categoria deletado"])
        } else {
          resolve([404, "Categoria não encontrada"])
        }
      })
    })
  }
}

module.exports = new Categoria()