// Função construtora
function Produto(nome, valor, desc = 0.10) {
    this.nome = nome
    this.valor = valor
    this.desc = desc

    this.precoFinal = function () {
        return this.valor * (1 - this.desc);
    }
}

Produto.prototype.log = function () {
    console.log(`Nome: ${this.nome} Preço: R$ ${this.valor}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function () {
        return this._desc
    },
    set: function (novoDesc) {
        if (novoDesc >= 0 && novoDesc <= 1) {
            this._desc = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function () {
        return `${this._desc * 100}% de desconto!`
    }
})

const p1 = new Produto('Caneta', 10.79)
p1.log()
const p2 = new Produto('TV', 4000)
console.log(p1.valor)
console.log(p1.precoFinal())
p2.desc = 0.99
console.log(p2.desc)
console.log(p2.descString)