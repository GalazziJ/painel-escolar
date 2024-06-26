/* function fatorial(num) {

    var resultado = 1
    for (var i = num; i > 1; i--) {
        resultado = resultado * i
    }

    return resultado;
}

console.log(fatorial(50)) */

var x // declaração de variável 
x = 0 // atribuição de variável 
x    // x vale 0

// Javascript aceita vários tipos de valores 

x = 1 // Números
x = 1.01 // Apenas um tipo Number para inteiros e reais.
x = "hello world" // String de texto entre aspas
x = 'JavaScript' // Apóstrofos também delimitam strings 
x = true // valor booleano 
x = false // outro valor booleano
x = null // Null é um valor especial que significa "nenhum valor" (geralmente declarado)
x = undefined // Undefined é como null (não declarado)


console.log(x)

// dois outros tipos muito importantes que devem ser lembrados são os arrays e objetos

// OBJETOS -----------------------------------------------------------------------------------------
var livro = { // objetos são colocados entre chaves

    topico: "JavaScript",  // a propriedade "topico" tem valor "JavaScript"
    avaliativo: true // a propriedade "avaliativo" tem o valor "true"

} // a chave marca o fim do objeto

//A propriedade pode ser acessada com . ou [] 

console.log(livro.topico) // acessando propriedade via . 
console.log(livro["avaliativo"]) // acessando propriedade via []

livro.autor = "Jamille" // acrescentando propriedade autor
console.log(livro.autor) 

livro.assuntos = {} // {} é um objeto vazio sem qualquer propriedade
// OBJETOS -----------------------------------------------------------------------------------------

// ARRAYS ------------------------------------------------------------------------------------------
var primos = [2,3,5,7] // um array de 4 valores
console.log(primos)

// posições do array
console.log(primos[0])

// chamando o tamanho do array
console.log(primos.length)
console.log(primos[primos.length-1]) //chamando a última posição 

primos[4] = 9 // adicionando um novo elemento
primos[4] = 11 // alterando um elemento
console.log(primos)

var empty = [] // criando array vazia 
console.log(empty.length)

// Os arrays e objetos podem conter outros arrays e objetos

var coordenadas = [ // array com dois elementos 
    {x:0, y:8},     // cada elemento é um objeto
    {x:1, y:1}
]

var data = {                // objeto com duas propriedades
    trial1: [[1,2],[3,4]],  // O valor de cada propriedade é um array
    trial2: [[2,3],[4,5]]   // os elementos dos arrays são arrays 
}