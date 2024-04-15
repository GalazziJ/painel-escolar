

var label_resultado = document.getElementById("resultado")


function soma(){

    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");

    n1 = parseFloat(n1.value)
    n2 = parseFloat(n2.value)
    resultado = n1+n2;
    label_resultado.innerHTML = resultado
    console.log(resultado);
}

function subtracao (){

    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");

    n1 = parseFloat(n1.value)
    n2 = parseFloat(n2.value)
    resultado = n1-n2;
    label_resultado.innerHTML = resultado
    console.log(resultado);
}

function divisao (){

    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");

    n1 = parseFloat(n1.value)
    n2 = parseFloat(n2.value)
    resultado = n1/n2;
    label_resultado.innerHTML = resultado
    console.log(resultado);
}

function multiplicacao(){

    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");

    n1 = parseFloat(n1.value)
    n2 = parseFloat(n2.value)
    resultado = n1*n2;
    label_resultado.innerHTML = resultado
    console.log(resultado);
}


