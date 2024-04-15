var i = 0
var penultimo = 1
var ultimo = 1
var num = 0

function fibonacci(n){
    while(i<n){
        num = ultimo + penultimo
        penultimo = ultimo 
        ultimo = num
        i +=1
    }

    return num
}

console.log(fibonacci(99))