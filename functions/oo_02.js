class Produto {

    constructor(nome, valor, desc = 0.5) {
        this.nome = nome
        this.valor = valor
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }

    get precoFinal() {
        return this.valor * (1 - this.desc)
    }

    get valor() {
        return this._valor
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase();
    }

    set valor(novoValor) {
        if (novoValor >= 0) {
            this._valor = novoValor
        }
    }
}

const p1 = new Produto('Caneta', 10.79)
p1.nome = 'caneta'
p1.valor = -30
console.log(p1.valor)
console.log(p1.nome)

const p2 = new Produto('TV', 4000, 0.10)
console.log(p1.valor)
console.log(p1.precoFinal)