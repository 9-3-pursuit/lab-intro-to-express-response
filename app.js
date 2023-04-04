//Dependencies
const express = require("express");

//Configuration
const app = express();
// const PORT = 3003;

//magic8 response array
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
  

// ROUTES
app.get('/', (request, response) => {
    response.status(418).send('Hello, world!')
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back!!")
});
app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
 });  
app.get('/steve-magarrett', (req, res) => {
    res.send('Book \'em Danno!')
  }); 
  
app.get('/coach-taylor', (req, res) => {
    res.send('Clear eyes, full hearts, can\'t Lose')
  });
app.get('/homer-simpson', (req, res) => {
    res.send('D\'Oh')
  }); 
app.get('/bruce-banner', (req, res) => {
    res.send('Don\'t make me angry')
  });  
app.get('/batman', (req, res) => {
    res.send('To the Batmobile!')
  });  
app.get('/jj-evans', (req, res) => {
    res.send('Dy-no-myte!')
  });   
app.get('/regis', (req, res) => {
    res.send('Is that your final answer?')
  }); 
app.get('/dorothy', (req, res) => {
    res.send('Toto, I\'ve got a feeling we\'re not in Kansas anymore')
  });     
  app.get('/magic8', (req, res) => {
    const randomResponse = Math.floor(Math.random() * magic8Responses.length);
    const response = magic8Responses[randomResponse]
    res.send(`<h1>${response}</h1>`)
  }); 



// EXPORT
module.exports = app