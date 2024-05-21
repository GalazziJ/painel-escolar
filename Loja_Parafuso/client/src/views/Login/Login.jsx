import { useEffect, useState } from 'react'

function Login() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  useEffect(() => {
    document.title = "Login"
  }, [])

  async function efetuarLogin() {
    alert("Efetuando login")

    try {
      const resposta = await fetch("/logar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ login, senha })
      })
      if (!resposta.ok) {
        alert("Usuário ou senha inválidos")
        throw new Error("Erro na requisição" + resposta.status)
      } else {
        const dados = await resposta.json()
        localStorage.setItem("id_usuario",dados.id_usuario)
        window.location.href = "/principal"
      }

    } catch (error) {
      console.error("Erro ao fazer login", error);
    }

  }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='Login'
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <input type="password" placeholder='Senha'
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={efetuarLogin}>Acessar</button>
    </div>
  )
}

export default Login