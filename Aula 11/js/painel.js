// chamando funções para atualização de dia e hora
atualizaHorario()
atualizaDia()
carregarAulas()

// criando relógio
function atualizaHorario() {
    const relogio = document.getElementById('relogio')

    const hoje = new Date()

    let h = hoje.getHours()
    let m = hoje.getMinutes()
    let s = hoje.getSeconds()

    h = verificaTempo(h)
    m = verificaTempo(m)
    s = verificaTempo(s)

    relogio.innerHTML = h + ":" + m + ":" + s


    setTimeout(atualizaHorario, 1000)
}

// adicionando o 0 em números menores que 10
function verificaTempo(t) {
    if (t < 10) {
        t = "0" + t
    }
    return t
}

function atualizaDia() {
    const saudacao = document.getElementById('saudacao')
    const d = new Date()
    const diaSemana = ["Domingo", 
    "Segunda-feira", 
    "Terça-feira", 
    "Quarta-feira", 
    "Quinta-feira", 
    "Sexta-feira", 
    "Sábado"]
    let dia = diaSemana[d.getDay()]
    const hoje = new Date()
    const h = hoje.getHours()


    if (h >= 0 && h < 12) {
        saudacao.innerHTML = dia + " - Bom dia!!!"
    } else if (h >= 12 && h < 18) {
        saudacao.innerHTML = dia + " - Boa tarde!!!"
    }
    else if (h >= 18 && h < 23) {
        saudacao.innerHTML = dia + " - Boa noite!!!"
    }
}

function carregarAulas(){
    const aulas = [
    {id:1,
        inicio:"18:30",
        fim:"22:00",
        turma:"HTC DDS-3-16",
        instrutor:"Ramon Nascimento",
        uc:"Desenvolvimento Sistemas",
        ambiente:"LAB-5106"
    },
    {id:2,
        inicio:"18:30",
        fim:"22:00",
        turma:"HTC DDS-3-16",
        instrutor:"Ramon Nascimento",
        uc:"Desenvolvimento Sistemas",
        ambiente:"LAB-5106"
    },
    {id:3,
        inicio:"18:30",
        fim:"22:00",
        turma:"HTC DDS-3-16",
        instrutor:"Ramon Nascimento",
        uc:"Desenvolvimento Sistemas",
        ambiente:"LAB-5106"
    }
    ]

    const tabelaAulas = document.getElementById('tabelaAulas')
    let elementosTabela = ""
    for (let i = 0; i <aulas.length;i++){
        elementosTabela += '<tr>'
        elementosTabela += '<td>' + aulas[i].inicio + '</td>'
        elementosTabela += '<td>' + aulas[i].fim + '</td>'
        elementosTabela += '<td>' + aulas[i].turma + '</td>'
        elementosTabela += '<td>' + aulas[i].instrutor + '</td>'
        elementosTabela += '<td>' + aulas[i].uc + '</td>'
        elementosTabela += '<td>' + aulas[i].ambiente + '</td>'
        elementosTabela += '</tr>'

    }
    tabelaAulas.innerHTML += elementosTabela
}