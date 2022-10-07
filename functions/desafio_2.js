const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

const getFragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

console.log("Fráfil:", carrinho.filter(getFragil))
console.log("Total:", carrinho.filter(getFragil).map(getTotal))

const media = { qtde: 0, total: 0, media: 0 };

const total = carrinho
    .filter(getFragil)
    .map(getTotal)
    .reduce(getMedia, media)

console.log(total)


Array.prototype.meuReduce = function (fn, inicial) {
    let acc = inicial
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i]
            continue
        }
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

const total2 = carrinho
    .filter(getFragil)
    .map(getTotal)
    .meuReduce(getMedia, media)

console.log(total2)