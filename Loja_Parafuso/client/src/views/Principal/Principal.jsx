import React, { useState, useEffect } from 'react'

function Principal() {
  const [parafusos, setParafusos] = useState([])

  useEffect(() => {
    document.title = "Página Inicial"
    const id_usuario = localStorage.getItem("id_usuario")
    if (!id_usuario) {
      window.location.href = "./"
    } else {

    }
    listarParafusos()
  }, [])

  async function listarParafusos() {
    try {
      const resposta = await fetch("/parafuso")
      const dados = await resposta.json()
      setParafusos(dados)
    } catch (error) {

    }
  }

  return (
    <div>
      <a href="/cadastroParafuso">Cadastrar parafuso</a>
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