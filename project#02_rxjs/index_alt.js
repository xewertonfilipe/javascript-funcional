const path = require('path')
const fn = require('./funcoes')
const { toArray, groupBy, mergeMap, map } = require('rxjs/operators')
const _ = require('lodash')

const caminho = path.join(__dirname, 'dada', 'subtitles')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),
        groupBy(el => el),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({ elemento: palavras[0], qtde: palavras.length })),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))

    )
    .subscribe(console.log)