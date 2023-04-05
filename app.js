// DEPENDENCIES
const express = require('express');


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
  "Very doubtful",
];
const random = Math.floor(Math.random() * magic8Responses.length);
const magic8 = magic8Responses[random]

// CONFIGURATION
const app = express();
const PORT = 3003;

// ROUTES
app.get('/', (req, res) => {
    res.status(418).send('Hello, world!')
})


app.get('/tim-gunn', (req, res) => {
    res.send('Make it work');
})

app.get('/terminator', (req, res) => {
    res.send('I\'ll be back')

})

app.get('/magic8', (req, res) => {
    res.send(`<h1>${magic8}</h1>`)
})


// LISTEN
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


// EXPORT
module.exports = app;