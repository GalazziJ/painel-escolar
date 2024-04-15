// Objeto math
var resultado 
//          métodos da classe "Math"
resultado = Math.pow(2,3) // 2 elevado a 53
resultado = Math.round(0.6) // arredonda pra cima (inteiro mais próximo)
resultado = Math.floor(0.9) // arredonda para baixo 
resultado = Math.ceil(0.1) // arredonda pra um inteiro acima
resultado = Math.abs(-5) // retorna o valor sempre positivo o absoluto
resultado = Math.max(99,88,8,54) // retorna o valor mais alto dentre estes
resultado = Math.min (99,88,8,54) // retorna o valor mais baixo
resultado = Math.PI // retorna o valor de PI
resultado = Math.sqrt(3) // Raiz quadrada 


// Data e hora

// instanciando novo objeto "Date"
var antes = new Date (2020, 0, 1) // o 1° dia do 1° mês de 2020
var depois = new Date (2020, 0, 1, // mesmo dia com
                        17,10,30)   // horário

var agora = new Date    // Pega a data e hora local
var duracao = depois - antes // Pega a duração em milisegundos
duracao = duracao/1000/60/60 // convertendo a duração para segundos/minutos/horas

var elemento
elemento = depois.getFullYear() // Pegando o ano
elemento = depois.getMonth () // Pegando o mês
elemento = depois.getDay () // pegando o dia (da semana) (começa com 0)
elemento = depois.getDate () // pegando o dia do mês
elemento = depois.getHours () // pegando a hora
elemento = depois.getUTCHours () // Pegando hota no formato UTC (+3 usando o de Braísilia)
elemento = depois.toString () // exibindo como String
elemento = depois.toLocaleDateString () // Data padrão

console.log(elemento)   

