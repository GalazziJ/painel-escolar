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
    setParafusos([
      {id: 1, nome: "Sextavado ", id_categoria: 1},
      {id: 2, nome: "Francês ", id_categoria: 2},
      {id: 3, nome: "Máquina ", id_categoria: 2}
    ])
  },[])

  return (
    <div>
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