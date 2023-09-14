function Produto(nome, valor, desc = 0.10) {
    this.nome = nome
    this.valor = valor
    this.desc = desc

    let privado = 5

    this.precoFinal = function () {
        return this.valor * (1 - this.desc);
    }
}

const p1 = new Produto('Caneta', 10.79)
console.log(p1.nome)
const p2 = new Produto('TV', 4000)
console.log(p1.valor)
console.log(p1.precoFinal())

// function
console.log(typeof Produto)
// function
console.log(typeof Promise)
// function
console.log(typeof Object)