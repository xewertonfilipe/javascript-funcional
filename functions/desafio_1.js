// somar(2)(3)(3)

function somar(n1) {
    return function (n2) {
        return function (n3) {
            return n1 + n2 + n3
        }
    }
}

const resultado = somar(2)(3)(3)
console.log(resultado)


// calcular(3)(7)(fn)
function calcular(n1) {
    return function (n2) {
        return function (fn) {
            if (typeof fn === 'function') {
                return fn(n1, n2)
            }
        }
    }
}

const adicao = (n1, n2) => n1 + n2
const subtracao = (n1, n2) => n1 - n2
const multiplicacao = (n1, n2) => n1 * n2

let result = calcular(2)(7)(adicao)
console.log(result)

result = calcular(2)(7)(subtracao)
console.log(result)

result = calcular(2)(7)(multiplicacao)
console.log(result)
