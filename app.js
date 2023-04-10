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

app.get("/Emeril",(req,res)=>{
    res.send(`<h2>Bam!</h2>`);
})// Create express app

app.get("/steve-mcGarrett",(req,res)=>{
    res.send(`<h2>Book '\em Danno!</h2>`);
})// Create express app

app.get("/coach-taylor",(req,res)=>{
    res.send(`<h2>Clear eyes\, full hearts\, can't Lose</h2>`);
} )// Create express app

app.get("/homer-simpson",(req,res)=>{
    res.send(`<h2>D\'Oh</h2>`);
} )// Create express app

app.get("/bruce-banner",(req,res)=>{
    res.send(`<h2>Don\'t make me angry</h2>`);
})

app.get("/jj-evans",(req,res)=>{
    res.send(`<h2>Dy-no-myte!</h2>`);
})

app.get("/batman",(req,res)=>{
    res.send(`<h2>To the Batmobile!</h2>`);
})

app.get("/hannibal-smith",(req,res)=>{
    res.send(`<h2>I love it when a plan comes together</h2>`);
})

app.get("/fraiser",(req,res)=>{
    res.send(`<h2>I\'m listening</h2>`);
})

app.get("/regis",(req,res)=>{
    res.send(`<h2>Is that your final answer?</h2>`);
})


app.get("/magic8",(req,res)=>{
    let randomIndex = Math.floor(Math.random()*magic8Responses.length);
    res.send(`<h1>${magic8Responses[randomIndex]}</h1>`);
} )// Create express app

app.get("/magic8",(req,res)=>{
    let randomIndex = Math.floor(Math.random()*magic8Responses.length);
    res.send(`<h1>${magic8Responses[randomIndex]}</h1>`);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); // Start express server

module.exports = app;

