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

const express = require('express'); // Import express
const app = express();
const PORT = 3000;


app.get("/",(req,res)=>{
    res.status(418).send(`<h1>Hello Worldyyyy</h1>`);
})// Create express app

app.get("/tim-gunn",(req,res)=>{
    res.send(`<h2>'Make it work'</h2>`);
})// Create express app

app.get("steve-mcGarrett ",(req,res)=>{
    res.send(`<h2>'Make it work'</h2>`);
})// Create express app

app.get("coach-taylor ",(req,res)=>{
    res.send(`<h2>'Dy-no-myte!'</h2>`);
} )// Create express app

app.get("daniel-san ",(req,res)=>{
    res.send(`<h2>'Wax on, wax off'</h2>`);
} )// Create express app

app.get("/magic8",(req,res)=>{
    let randomIndex = Math.floor(Math.random()*magic8Responses.length);
    res.send(`<h1>${magic8Responses[randomIndex]}</h1>`);
} )// Create express app

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); // Start express server

module.exports = app;

