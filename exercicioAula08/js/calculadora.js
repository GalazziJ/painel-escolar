// pegando elementos do HTML
var diaData1 = document.getElementById("diaData1")
var mesData1 = document.getElementById("mesData1")
var anoData1 = document.getElementById("anoData1")

var diaData2 = document.getElementById("diaData2")
var mesData2 = document.getElementById("mesData2")
var anoData2 = document.getElementById("anoData2")

var label_resultado1 = document.getElementById("resultado1")
var label_resultado2 = document.getElementById("resultado2")
var label_resultado3 = document.getElementById("resultado3")

function calcDiferenca(){

    // transformando elementos acima em valores para cálculo
    var d1Dia = diaData1.value
    var d1Mes = mesData1.value
    var d1Ano = anoData1.value

    var d2Dia = diaData2.value
    var d2Mes = mesData2.value
    var d2Ano = anoData2.value

    var data1 = new Date (d1Ano,d1Mes,d1Dia)
    var data2 = new Date (d2Ano,d2Mes,d2Dia)

    


}