import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AtualizarUsuarios() {
  const { usuario_id } = useParams()

  //estados para armazenar os detalhes do usuário
  const [nome, setNome] = useState('')
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [usuario_tipo, setUsuario_tipo] = useState('')

  useEffect(() => {
    async function buscarUsuario() {
      try {
        const resposta = await fetch("/usuarios/" + usuario_id)
        const dados = await resposta.json()
        if (resposta.ok) {
          setNome(dados.nome)
          setUsuario(dados.usuario)
          setUsuario_tipo(dados.usuario_tipo)
        } else {
          throw new Error('Falha ao carregar usuário')
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário", error)
      }
    }
    buscarUsuario()
  }, [usuario_id])

  //Função de atualizar usuário
  async function updateUsuario(event) {
    event.preventDefault() // impede o recarregamento da página após clicar o botão de enviar
    const usuarioDados = {
      nome,
      usuario,
      senha,
      usuario_tipo
    }
    try {
      const resposta = await fetch("/usuarios/" + usuario_id, {
        method: 'PUT', // verbo HTTP
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(usuarioDados)
      })
      if (!resposta.ok) {
        throw new Error("Erro ao atualizar usuário")
      } else {
        alert("Usuário atualizado")
        window.location.href = "/"
      }
    } catch (error) {
      console.error("Erro ao atualizar o usuário", error)
    }
  }

  return (
    <div className="container">
      <h1>Atualizar Usuário</h1>
      <form onSubmit={updateUsuario}>
        <label>Nome</label>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

        <label>Usuário</label>
        <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />

        <label> Nova Senha</label>
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />

        <label>Tipo de usuário</label>
        <select value={usuario_tipo} onChange={e => setUsuario_tipo(e.target.value)}>
          <option value="">Selecione</option>
          <option value="A">Admin</option>
          <option value="U">Usuário</option>
        </select>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  )
}

export default AtualizarUsuarios