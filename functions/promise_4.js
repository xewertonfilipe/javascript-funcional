const gerarNumeroEntre = (min, max, tempo) => {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}


function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(1, 60, 4000),
        gerarNumeroEntre(1, 60, 1000),
        gerarNumeroEntre(1, 60, 300),
        gerarNumeroEntre(1, 60, 3500),
        gerarNumeroEntre(1, 60, 2000),
        gerarNumeroEntre(1, 60, 100),
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })