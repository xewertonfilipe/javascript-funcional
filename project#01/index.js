const fn = require('./functions')

fn.searchFiles('/dada/subtitles/')
    .then(fn.readFiles)
    .then(fn.countsWords)
    .then(fn.orderWords)
    .then(fn.createOutputFile)
    .catch(console.log)
