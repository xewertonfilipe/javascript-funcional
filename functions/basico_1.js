
// Function Declaration 

function bomDia() {
    console.log('Bom dia')
}

bomDia()

// Function expression
// var, let or const
const boaTarde = function () {
    console.log('Boa tarde')
}

boaTarde()


function somar(a, b = 0) {
    return a + b
}

let resultado = somar(4, 6)
console.log(resultado)

resultado = somar(4, 7, 7, 8, 9)
console.log(resultado)

resultado = somar(4)
console.log(resultado)