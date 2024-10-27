const { of, Observable } = require('rxjs')

function terminadoCom(param) {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(valor) {
                    if (Array.isArray(valor)) {
                        subscriber.next(valor.filter(el => el.endsWith(param)))
                        return
                    }

                    if (valor.endsWith(param)) {
                        subscriber.next(valor)
                    }
                },
                error(e) {
                    subscriber.error(e)
                },
                complete() {
                    subscriber.complete()
                }
            })
        })
    }
}

of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
    .pipe(terminadoCom('Silva'))
    .subscribe(console.log)