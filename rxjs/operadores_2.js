const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')
const { map, concatAll, distinct } = require('rxjs/operators')

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/xewertonfilipe/repos'
})
    .pipe(
        map(resp => JSON.parse(resp.xhr.responseText)),
        concatAll(),
        map(repo => repo.full_name),
        distinct(),
    )
    .subscribe(console.log)