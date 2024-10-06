const fn = require('./functions')

const mostUsedWords = fn.composition(
    fn.searchFiles,
    fn.readFiles,
    fn.countsWords,
    fn.orderWords,
    fn.createOutputFile,
)

mostUsedWords('/dada/subtitles/')
    .then(console.log)