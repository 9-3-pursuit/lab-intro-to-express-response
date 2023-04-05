const express = require("express");
const { get } = require("express/lib/response");
const app = express();
const port = 3003;

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

app.get("/Homer-Simpson", (req, res) => {
  res.send("D'Oh");
});
app.get("/Batman", (req, res) => {
  res.send("To the Batmobile");
});
app.get("/Velma", (req, res) => {
  res.send("Jinkies");
});
app.get("/Zeus", (req, res) => {
  res.send("Release the Kraken");
});
app.get("/Fred-Flintstone", (req, res) => {
  res.send("Yabba Dabba Doo!");
});
app.get("/Kyle-Broflovski", (req, res) => {
  res.send("Oh, My God, They Killed Kenny!");
});
app.get("/Tweety", (req, res) => {
  res.send("I Tawt I Taw A Puddy Tat.");
});
app.get("/Good Grief", (req, res) => {
  res.send("Charlie Brown");
});
app.get("/Eat My Shorts.", (req, res) => {
  res.send("Bart Simpson");
});

app.get("/magic8", (req, res) => {
  // get random index value
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);

  // get random string
  const string = magic8Responses[randomIndex];
  res.send(string);
});

app.listen(port, () => {
  console.log("Port Connected");
});
