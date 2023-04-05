const express = require("express");
const app = express();
const port = 3003;

app.get("/" , (req,res) => {
    res.send("Welcome")
});


  app.get('Emeril', (req, res) => {
    res.send('Bam')
  });
  
  app.get('steve-McGarrett', (req, res) => {
    res.send("Book 'em Danno!")
  });

  app.get('coach-taylor', (req, res) => {
    res.send("Clear eyes, full heart, can't Lose")
  });

  app.get('homer-Simpson', (req, res) => {
    res.send("D'oh")
  });

  app.get('bruce-banner', (req, res) => {
    res.send("Don't make me angry")
  });
 
  app.get('JJ-Evans', (req, res) => {
    res.send("Dy-no-myte!")
  });

  app.get('Batman', (req, res) => {
    res.send('To the Batmoblie!')
  });

  app.get('Fraiser', (req, res) => {
    res.send("I'm listening")
  });

  app.get("Regis", (req, res) => {
    res.send("Is that your final answer?")
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
  
  app.get("/magic8", (req, res) => {
   
    const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  
    const string = magic8Responses[randomIndex];
    res.send(string);
  });


  app.listen(3003, () => {
    console.log("Server is running on port 3003")
});