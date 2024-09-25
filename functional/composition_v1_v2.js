function composition(...fns) {
    return function (valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!!`
}

function tornarLento(texto) {
    return texto.split('').join(' ')
}

// const resultado = composition(
//     gritar,
//     enfatizar,
//     tornarLento
// )('para')

// console.log(resultado)

const exagerado = composition(
    gritar,
    enfatizar,
    tornarLento
)

const umPoucoMenosExagerado = composition(
    gritar,
    enfatizar,
)

const resultado1 = exagerado('para')
const resultado2 = umPoucoMenosExagerado('Cuidado com o burado!!!')

console.log(resultado1)
console.log(resultado2)


