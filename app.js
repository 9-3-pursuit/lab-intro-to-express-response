const express = require('express');
const app = express();

app.listen('3003', () => {
    console.log('testing application')
})

app.get('/', (req, response) => {
    response.status(201)
    response.send('Home page')
})

app.get('/about', (req, response) => {
    response.status(201)
    response.send('<h1>Idol</h1> \n <p>Idol paragraph</p>')
})

app.get('/terminator', (req, response) => {
    response.status(201)
    response.send('Hasta la vista, baby')
    
})

app.get('/emeril', (req, response) => {
    response.status(201)
    response.send('BAM')
})

app.get('/homer', (req, response) => {
    response.status(201)
    response.send("Do'h")
})

app.get('/bruce-banner', (req, response) => {
    response.status(201)
    response.send("Don't make me angry")
})

app.get('/steve-mcGarrett', (req, response) => {
    response.status(201)
    response.send("Book 'em Danno!")
})

app.get('/batman', (req, response) => {
    response.status(201)
    response.send('To the Batmobile!')
})

app.get('/fraiser', (req, response) => {
    response.status(201)
    response.send("I'm listening")
})

app.get('/regis', (req, response) => {
    response.status(201)
    response.send('Is that your final answer')
})

app.get('/dorothy', (req, response) => {
    response.status(201)
    response.send('Toto, I have a feeling were not in Kansas anymore')
})

app.get('/magic8', randomPhrase, (req, response) => {
    response.status(201)
    response.send(`<h1>${req.randomPhrase}</h1>`)
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
  
function randomPhrase(req, response, next) {
    const phrase = Math.floor(Math.random() * magic8Responses.length);
    req.randomPhrase = magic8Responses[phrase];
    next();
  }
  
  
  
