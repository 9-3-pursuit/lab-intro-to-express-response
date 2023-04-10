//DEPENDECIES
const express = require("express");

//CONFIGURATIONS
const app = express();
const PORT = 3003;

//ROUTES
app.get("/terminator", (req, res) => {
  res.send("I'll be back");
  res.send("Hasta la vista, baby");
});
app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});
app.get("/homer-simpson", (req, res) => {
  res.send("D'Oh");
});
app.get("/bruce-banner", (req, res) => {
  res.send("Don't make me angry");
});
app.get("/jj-evans", (req, res) => {
  res.send("Dy-no-myte!");
});
app.get("/batman", (req, res) => {
  res.send("To the Batmobile!");
});
app.get("/tony-montana", (req, res) => {
  res.send("Say hello to my little friend");
});
app.get("/zeus", (req, res) => {
  res.send("Release the Kraken");
});
app.get("/dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});
app.get("/gollum", (req, res) => {
  res.send("I'm king of the world!");
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
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  const message = magic8Responses[randomIndex];
  res.send(`<h1>${message}</h1>`);
});

//Listen
app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
});
