const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

// Criar duas funções:
// A primeira, onde gera uma lista de nomes dos produtos
// A segunda, onde gera o valor total considerando a quantidade de itens

const lista = item => item.nome
const total = item => {
    if (item.qtde === 0) {
        return item.preco
    }

    return item.qtde * item.preco
}

const listaProdutos = carrinho.map(lista)
console.log(listaProdutos)

const totalProdutos = carrinho.map(total)
console.log(totalProdutos)

Array.prototype.meuMap = function (fn) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

// const lista = item => item.nome
// const total = item => {
//     if (item.qtde === 0) {
//         return item.preco
//     }

//     return item.qtde * item.preco
// }

// const listaProdutos = carrinho.meuMap(lista)
// console.log(listaProdutos)

// const totalProdutos = carrinho.meuMap(total)
// console.log(totalProdutos)