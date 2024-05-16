import {useState, useEffect} from 'react'


function Login() {

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  useEffect(() => {
    document.title = "Login"

  })

  async function efetuarLogin() {
    try {
      const resposta = await fetch('/login',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({usuario,senha})
      })
      if (!resposta.ok) {
        alert("Usuário ou senha inválidos")
        throw new Error ("Erro na requisição:" + resposta.status)
      } else {
        const dados = await resposta.json()
        localStorage.setItem('token',dados.token)
        window.location.href = "/gestaoUsuarios"
      }
    } catch (error) {
      console.error("Erro ao fazer login", error)
    }
  }

  return (
    <div className='container'>
      <h1 className='fs-1 fw-bold text-center mt-5 mb-4'>Login</h1>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
        <label for="floatingInput">Usuário</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="" value={senha} onChange={(e) => setSenha(e.target.value)}/>
        <label for="floatingPassword">Senha</label>
        <button type="button" class="btn btn-danger w-100 mt-5" onClick={efetuarLogin}>Acessar</button>
      </div>
    </div>
  )
}

export default Login