// Os dois tipos...

// 1. Operadores Criação
const { of } = require('rxjs')

// 2. Operadores Encadeáveis (Pieable Op)
const { last, map } = require('rxjs/operators')

of(1, 2, 'filipe', false, 'último')
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
    )
    .subscribe(console.log)
