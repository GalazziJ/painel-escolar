import { useEffect, useState } from 'react'

function Home() {
    //Estado para armazenar os usuários
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        document.title = "Página Inicial"

        // Função carregar usuários
        async function carregarUsuarios() {
            try {
                // Fazer uma chamada da API
                const resposta = await fetch('/usuarios/all')
                if (!resposta.ok) {

                    // Exibindo erro API
                    console.debug("HTTP erro:" + resposta.status)
                }
                else {
                    let dados = await resposta.json()
                    setUsuarios(dados)
                }
            } catch (error) {
                console.error("Erro ao buscar usuários" + error)
            }
        }

        // Chamando função carregar usuários
        carregarUsuarios()
    })
    return (
        <div className="container">
            <h1>Todos os usuários</h1>

            <table className='table'>
                <tr>
                    <th scope="col">ID Usuário</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Usuário</th>
                    <th scope="col">Senha</th>
                    <th scope="col">Tipo Usuário</th>
                </tr>
                {usuarios.map(usuario => (
                    <tr key={usuario.usuario_id}>
                        <td>{usuario.usuario_id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.usuario}</td>
                        <td>{usuario.senha}</td>
                        <td>{usuario.usuario_tipo}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Home