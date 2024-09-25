function composition(...fns) {
    return function (valor) {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
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
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(texto.split('').join(' '))
        }, 3000)
    })
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

exagerado('para')
    .then(console.log)
umPoucoMenosExagerado('Cuidado com o burado!!!')
    .then(console.log)

