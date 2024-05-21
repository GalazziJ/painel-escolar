
const mysql = require("mysql2")
const config = require("../Config")

class Usuario {

  constructor() {
    this.conexao = mysql.createConnection(config.db)
  }

  inserirUsuario(nome, login, senha) {
    let sql = `INSERT INTO usuarios (nome, login, senha) VALUES
    ("${nome}", "${login}", "${senha}");`

    return new Promise((resolve, reject) => {
      this.conexao.query(sql, function (erro, retorno) {
        if (erro) {
          reject([400, erro])
        } else {
          resolve([201, "Usuário inserido"])
        }
      })
    })
  }

  mostrarUsuarios() {
    let sql = "SELECT * FROM usuarios"

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

  atualizarUsuario(id_usuario, nome, login, senha) {
    let sql = `UPDATE usuarios SET nome="${nome}", login="${login}", senha="${senha}" WHERE idusuario="${id_usuario}";`
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

  deletarUsuario(id_usuario) {
    let sql = `DELETE FROM usuarios WHERE idusuario="${id_usuario}";`

    return new Promise((resolve, reject) => {
      this.conexao.query(sql, function (erro, retorno) {
        if (erro) {
          reject([400, erro])
        } else {
          resolve([200, retorno])
        }
        if (retorno["affectedRows"] > 0) {
          resolve([200, "Usuário deletado"])
        } else {
          resolve([404, "Usuário não encontrado"])
        }
      })
    })
  }

  verificarLoginSenha(login, senha) {
    let sql = `SELECT * FROM usuarios WHERE login = "${login}"
    AND senha= "${senha}"`

    return new Promise((resolve, reject) => {
      this.conexao.query(sql, function (erro, retorno) {
        if (erro) {
          reject([400, erro])
        } else {
          if (retorno.length === 0) {
            resolve([404, "Usuário não encontrado"])
          }
          resolve([200, "Logado!"])
        }

      })
    })
  }
}

module.exports = new Usuario()