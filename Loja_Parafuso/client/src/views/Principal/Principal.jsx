import React, { useState, useEffect } from 'react'

function Principal() {
  const [parafusos, setParafusos] = useState([])
  const [nomeUsuario, setNomeUsuario] = useState('')
  const id_usuario = localStorage.getItem("id_usuario")

  useEffect(() => {
    document.title = "Página Inicial"
    if (!id_usuario) {
      window.location.href = "./"
    } else {

    }
    pegarNome(id_usuario)
    listarParafusos()
  }, [])

  async function pegarNome() {
    try {

      if (!id_usuario) {
        window.location.href = "./"
      } else {
        const resposta = await fetch(`/usuarios/${id_usuario}`)
        console.debug(resposta)
        if (!resposta.ok) {
          throw new Error("http erro" + resposta.status)

        } else {
          const dados = await resposta.json()
          setNomeUsuario(dados.nome)
        }
      }
    } catch (error) {
      console.debug(error)
      //throw new Error("http erro", error)
    }
  }

  async function listarParafusos() {
    try {
      const resposta = await fetch("/parafuso")
      const dados = await resposta.json()
      setParafusos(dados)
    } catch (error) {

    }
  }

  async function logout() {
    localStorage.clear()
    window.location.replace("./")
  }
  return (
    <div className=''>
      <div className="bg-primary py-2 px-5 text-end">
        <span className='text-white float-start fs-4'>Olá, {nomeUsuario}!</span>
        <button onClick={logout} className='btn btn-danger'>LOGOUT </button>
      </div>
      <a className='btn btn-warning' href="/cadastroParafuso">Cadastrar parafuso</a>
      {parafusos.map(
        parafuso => (
          <div>
            <div>
              Id: {parafuso.id}
              Nome: {parafuso.nome}
              Categoria {parafuso.id_categoria}
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Principal