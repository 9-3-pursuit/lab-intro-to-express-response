const express = require ("express");
const app = express();
const PORT = 3003

app.get("/", (req, res) => {
    res.send("hello everybody in the  world");
});

app.get("/terminator", (req, res) => {
    res.send("I'll be back");
});

app.get('/Tim-Gunn', (req, res) => {
    res.send(`Make it work`)
  });
  
app.get('/Emeril', (req, res) => {
    res.send(`Bam!`)
  });
app.get('/Steve-McGarrett', (req, res) => {
    res.send(`Book 'em Danno!`)
  });
app.get('/Homer-Simpson', (req, res) => {
    res.send(`D'Oh`)
  });
app.get('/Coach-Taylor', (req, res) => {
    res.send(`Clear eyes, full hearts, can't Lose`)
  });
app.get('/Bruce Banner', (req, res) => {
    res.send(`Don't make me angry`)
  });
app.get('/JJ Evans', (req, res) => {
    res.send(`Dy-no-myte!`)
  });
app.get('/Regis', (req, res) => {
    res.send(`Is that your final answer?`)
  });

app.get("/magic8", (req, res) => {
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
    const magic8Quest = Math.floor(Math.random() * magic8Responses.length);
    const magic8Answer = magic8Responses[magic8Quest]
    res.send(`<h1>${magic8Answer}</h1>`);
});

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
app.listen(3003, () => {
    console.log(`Server is running on port ${PORT}`);
});