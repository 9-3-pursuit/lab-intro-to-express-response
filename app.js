//Dependencies
const express = require("express");

//Configuration
const app = express()

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
  const randomResponseNum = Math.floor(Math.random() * magic8Responses.length)
  const randomResponse = magic8Responses[randomResponseNum]


//Routes
app.get('/', (req, res) => {
    res.status(418).send('Hello, world!')
})

app.get('/Regis' , (req, res) => 
res.send("Is that your final answer?"))

app.get('/Rocky' , (req, res) => 
res.send("Yo, Adrian!"))

app.get('/JackDawson' , (req, res) => 
res.send("I'm king of the world!"))

app.get('/Dorothy' , (req, res) => 
res.send("Toto, I've got a feeling we're not in Kansas anymore!"))

app.get('/TonyMontana' , (req, res) => 
res.send("Say hello to my little friend!"))

app.get('/RodTidwell' , (req, res) => 
res.send("Show me the money!"))

app.get('/magic8' , (req, res) => 
res.send(`<h1>${randomResponse}</h1>`))


//Export
module.exports = app