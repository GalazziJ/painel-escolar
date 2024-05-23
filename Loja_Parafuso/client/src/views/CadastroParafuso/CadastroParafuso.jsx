import { useEffect, useState } from 'react'

function CadastroParafuso() {
  let [categorias, setCategorias] = useState([])
  let [nome, setNome] = useState("")
  let [id_categoria, setIdCategoria] = useState("")

  useEffect(() => {
    document.title = "Cadastro de Parafusos"
    pegarCategorias()
  }, [])

  async function pegarCategorias() { // pegando categorias para inserir na lista suspensa
    const resposta = await fetch("/categoria")

    const dados = await resposta.json()
    setCategorias(dados)

  }

  async function cadastrarParafuso(event) {

    event.preventDefault()
    const ParafusoDados = {
      nome,
      id_categoria
    }

    try {
      const resposta = await fetch("/parafuso", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ParafusoDados)
      })

      if (!resposta.ok) {
        alert("Erro ao cadastrar parafuso")
        console.debug(resposta)
      } else {
        console.debug("Parafuso cadastrado")
        alert("Parafuso cadastrado")
        window.location.href = "/principal"
      }
    } catch (error) {

    }
  }
  return (
    <div>
      <a href="/principal">voltar</a>
      
      <form onSubmit={cadastrarParafuso}>
        <input type="text" placeholder='nome do parafuso'
          value={nome}
          onChange={e => setNome(e.target.value)} />

        <select name=""
          id=""
          value={id_categoria}
          onChange={e => setIdCategoria(e.target.value)}>
          {categorias.map(categoria => (
            <option
            key={categoria.id_categoria}
            value={categoria.id_categoria}>{categoria.nome}</option>
          ))}
        </select>
        <button type='submit'>cadastrar</button>
      </form>
    </div>
  )
}

export default CadastroParafuso