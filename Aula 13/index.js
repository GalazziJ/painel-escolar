const express = require("express")
const server = express()

//localhost:3000/home?nome=Jamille
//Parâmetros da Query = ?nome=Jamille&idade=8

// get = read 
// rota = método (função)
server.get("/home",(req, res) => {
    //const nome = req.query.nome
    //const idade = req.query.idade

    // forma alternativa (mesmo resultado acima)
    // json = metadados (objeto)

    const {nome,idade} = req.query
    return res.json({
        título:"página inicial",
        message: `Página inicial do sistema ${nome}`,
        idade:idade
    })
})

    //localhost:3000/home/Jamille/8
    //Parâmetros da Rota = /home/Jamille/8
server.get("/home/:nome", (req, res) =>{
    const nome = req.params.nome
    return res.json({
        título:"página inicial",
        message: `Bem-vindo ao sistema painel ${nome}`

    })
})

server.listen(3000)