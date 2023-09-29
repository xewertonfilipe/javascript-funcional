const fs = require('fs')
const path = require('path')

function searchFiles(relativeDirectory) {
    const fileNames = []
    return new Promise((resolve, reject) => {
        try {
            const fileList = fs.readdirSync(path.join(__dirname, relativeDirectory))
            fileList.forEach(file => {
                if (file.includes('.srt')) {
                    fileNames.push(file)
                }
            })

            if (!fileNames.length) {
                reject('No subtitles found, please check the directory')
            }
            resolve({
                fileNames,
                relativeDirectory
            })
        } catch (e) {
            throw 'An unexpected error occurred while searching for files, check the directory'
        }
    })
}

// TODO: Could it really be a promise
async function readFiles({ fileNames, relativeDirectory }) {
    let subtitle
    for (const names of fileNames) {
        const fullPath = path.join(__dirname, relativeDirectory + names)
        subtitle = subtitle + await removeCharacters(fullPath)
    }
    return subtitle
}

function removeCharacters(fullPath) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(fullPath, (_, content) => {
                resolve(content.toString().match(/(\w+?'\w*|\w*)[^:\s,0-9.-?!"-\<?/i>\[\]♪](?<!<[^>]*)/gi))
            })
        } catch (e) {
            reject('An unexpected error occurred while reading and cleaning the file')
        }
    })
}

function countsWords(words) {
    const arrWords = words.toLowerCase().split(',')
    return new Promise((resolve) => {
        arrWords.reduce((acc, el) => {
            acc[el] = acc[el] + 1 || 1;
            resolve(acc);
            return acc
        }, {})
    })
}

function orderWords(info) {
    return new Promise((resolve) => {
        try {
            const sortable = Object.fromEntries(
                Object.entries(info).sort(([, a], [, b]) => b - a)
            );
            resolve(sortable)
        } catch (error) {
            throw 'An unexpected error occurred while sorting information'
        }
    })
}

function createOutputFile(info) {
    return new Promise((resolve) => {
        try {
            resolve(fs.writeFile(path.join(__dirname, 'Output.json'), JSON.stringify(info), () => { }))
        } catch (error) {
            throw 'An unexpected error occurred while generating the output file'
        }
    })
}

module.exports = {
    searchFiles, readFiles, removeCharacters,
    countsWords, orderWords, createOutputFile
}

