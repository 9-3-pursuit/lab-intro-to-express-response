const express = require('express');

const app = express()
const PORT = 3003

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ]

app.get('/', (req, res) => {
    res.send("Hello, World!")
})

app.get('/8ball', (req, res) => {
    res.send(`<h1>${magic8Responses[Math.floor(Math.random()* magic8Responses.length)]}</h1>`)
})

app.get('terminator', (req, res) => {
    res.send('I\ll be back')
})

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
})

app.get('/rocky', (req, res) => {
    res.send('Yo, Adrian')
})

app.get('/james-bond ', (req, res) => {
    res.send('the name is Bond, James Bond')
})

app.get('/zeus', (req, res) => {
    res.send('Release the Kraken')
})

app.get('/tony-montana', (req, res) => {
    res.send('Say hello to my little friend')
})

app.get('/bruce-banner', (req, res) => {
    res.send("Don't make me angry")
})

app.get('homer-simpson', (req, res) => {
    res.send("D'Oh")
})

app.get('hannibal-smith', (req, res) => {
    res.send('I love it when a plan comes together')
})

app.listen(PORT, () => {
    console.log(`listing on port ${PORT}`)
})