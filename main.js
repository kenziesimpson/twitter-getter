const https = require('https')
const readline = require('readline')

let backlog = []

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
})

rl.on('line', (input) => {
    console.log(input)
    backlog.push(input)
    console.log(backlog)
    getTweetById(backlog.pop())
})

function getTweetById(id) {
    return https.get('https://api.twitter.com/1.1/statuses/show.json?id=' + id, (res) => {
        console.log(JSON.stringify(res.JSON))
    })
}