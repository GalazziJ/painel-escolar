var label_resultado = document.getElementById("resultado")

function imc(){

    var altura = document.getElementById("altura");
    var massa = document.getElementById("massa");

    altura = parseFloat(altura.value)
    massa = parseFloat(massa.value)

    resultado = massa/(altura*altura)
    label_resultado.innerHTML = resultado
    console.log(resultado);
}