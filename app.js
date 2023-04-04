// TODO: http://localhost:3003/ shows what your console.log() message is according to the name of your route

// Dependencies
const express = require("express");

// Configuration
const app = express();
const PORT = 3003;

//Routes

// * practice/test routes to help understand how the response flow wroks --v

// TODO: http://localhost:3003/
//"Hello, world" msg
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// TODO: http://localhost:3003/terminator
// Terminator - I'll be back
app.get("/terminator", (req, res) => {
  res.send("I'll be back");

  // !returns an error msg due to only being able to do one response for each request ---v
  // either make anothe route for this msg or added it to the one req there as a string
  //   res.send("Hasta la vista, baby");
});

// TODO: http://localhost:3003/tim-gunn
// Tim-Gunn - Make it work
app.get("/tim-gunn", (req, res) => {
  res.send("Make it work");
});

// TODO: Added on nine catchphrases via lab instructions --v

// Emeril - Bam!
app.get("/emeril", (req, res) => {
  res.send("Bam!");
});

// Homer Simpson -D'Oh
app.get("/homer-simpson", (req, res) => {
  res.send("D'Oh");
});

// JJ Evans - Dy-no-myte!
app.get("/jjevans", (req, res) => {
  res.send("Dy-no-myte!");
  // no jj-evans but jjevans b/c w/ the dash there is no proper server response/an error
});

// Hannibal Smith - I love it when a plan comes together
app.get("/hannibal-smith", (req, res) => {
  res.send("I love it when a plan comes together");
});

// Zeus - Release the Kraken
app.get("/zeus", (req, res) => {
  res.send("Release the Kraken");
});

// Dorothy - Toto, I've got a feeling we're not in Kansas anymore
app.get("/dorothy", (req, res) => {
  res.send("Toto, I've got a feeling we're not in Kansas anymore");
});

// James Bond - the name is Bond, James Bond
app.get("/james-bond", (req, res) => {
  res.send("the name is Bond, James Bond");
});

// Frankenstein - It's alive! It's alive
app.get("/frankenstein", (req, res) => {
  res.send("It's alive! It's alive");
});

// Rocky - Yo, Adrian
app.get("/rocky", (req, res) => {
  res.send("Yo, Adrian");
});

// TODO: Magic 8 Ball acvitiy --v

// array of data
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

// TODO: randomly returns one of the following responses, each time you visit the site --v
// magic 8 route
app.get("/magic8", (req, res) => {
  const magic8Return = Math.floor(Math.random() * magic8Responses.length);
  res.send(`<h1>${magic8Return}</h1>`);
});

// Listen
app.listen(PORT, () => {
  console.log("listening on port ${PORT}");
});
