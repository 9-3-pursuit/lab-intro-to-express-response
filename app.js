const express = require("express");
const app = express();

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
];

const getRandomResponse = () => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  return magic8Responses[randomIndex];
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/tim-gunn', (req, res) => {
  res.send("Make it work");
});

app.get('/terminator', (req, res) => {
  res.send('I\'ll be back');
});

app.get('/borg', (req, res) => {
  res.send('Resistance is futile');
});

app.get('/travis-bickle', (req, res) => {
  res.send("You talkin' to me?");
});

app.get('/magic8', (req, res) => {
  const response = getRandomResponse();
  res.send(`<h1>${response}</h1>`);
});

const port = 3003;
app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
});
