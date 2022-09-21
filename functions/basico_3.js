// arrow function
const felizAniversario = () => console.log('Feliz Aniversário!')
felizAniversario();

const saudacao = nome => `Fala ${nome}!!!`
console.log(saudacao('Filipe'))

// utilizando o rest, criando um array.
const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// function potencia(base) {
//     return function (exp) {
//         return Math.pow(base, exp)
//     }
// }

const potencia = base => (exp) => Math.pow(base, exp)
console.log(potencia(2)(8))

// this
Array.prototype.ultimo = function () {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = () => console.log(this[0])

const numeros = [-10, 1, 2, 3, 500]
numeros.ultimo()
numeros.primeiro()