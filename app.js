const express = require('express')


const app = express();

app.get('/', (req, res) => {
    res.status(418).send('Hello, world!')
})

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

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  app.get('/magic8', (req, res) => {
    res.send(`<h1>${magic8Responses[randomInteger(1, 8)]}</h1>`)
  })

    app.get('/terminator', (req, res) => {
    res.send('Hasta la vista, baby')
  })

  app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
  })

  app.get('/Emeril', (req, res) => {
    res.send('Bam!')
  })

  app.get('/Batman', (req, res) => {
    res.send('Make it work')
  })

  app.get('/Frankenstein', (req, res) => {
    res.send("It's Alive!")
  })

  app.get('/Tony-Montana', (req, res) => {
    res.send('Say hello to my little friend')
  })

  app.get('/Zeus', (req, res) => {
    res.send('Release the Kraken')
  })

  app.get('/Harry-Callahan', (req, res) => {
    res.send('Go ahead, make my day')
  })


app.listen(3003, () => {
    console.log('listening on post 3003')
})

module.exports = app