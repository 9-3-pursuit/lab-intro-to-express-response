//DEPENDENCIES

const express = require("express");

//CONFIGURATION
const app = express();
// const PORT = 3000

//ROUTES

app.get("/", (req, res) => {
  res.send("Hello, Tafari!");
});

//LISTENER
// app.listen(PORT, () =>{
//     console.log(`Server is listening on port${PORT}`)

// })

//Routes

app.get("/terminator", (req, res) => {
  res.send("I'll be back");
});

app.get("/tim", (req, res) => {
  res.send("Make it work");
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
  "Very doubtful",
];

app.get("/magic8", (req, res) => {
  const magic8Answer =
    magic8Responses[Math.floor(Math.random() * magic8Responses.length)];
  res.send(`<h1>${magic8Answer}</h1>`);
});

module.exports = app;
