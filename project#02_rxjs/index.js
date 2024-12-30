const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, 'dada', 'subtitles')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),

    )
    .subscribe(console.log)

// const palavrasMaisUsadas = fn.composicao(
//     fn.mesclarElementos,
//     fn.removerElementosSeIncluir('-->'),
//     fn.removerElementosSeApenasNumero,
//     fn.removerSimbolos(simbolos),
//     fn.mesclarElementos,
//     fn.separarTextoPor(' '),
//     fn.removerElementosSeVazio,
//     fn.removerElementosSeApenasNumero,
//     fn.agruparElementos,
//     fn.ordernarPorAtribNumerico('qtde', 'desc'),
// )

// palavrasMaisUsadas(caminho)
//     .then(console.log)