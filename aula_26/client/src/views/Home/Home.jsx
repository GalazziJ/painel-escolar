import { useEffect, useState } from 'react'

function Home() {
    //Estado para armazenar os usuários
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        document.title = "Página Inicial"

    })
    return (
        <div className="container">
            <h1>Bem-vinde</h1>
        </div>
    )
}

export default Home