// Dependencies
const express = require("express");

// Configuration
const app = express();
const PORT = 3003;

app.get("/", (req, response) => {
  console.log("Home - Route");
  response.status();
  response.send("Home - Route");
});

app.get("/about", (req, res) => {
  res.status(201);
  res.json({ message: "first about app" });
});

app.get("/contact", (req, res) => {
  res.status(201).json({ message: "first contact app" });
});

app.get("/terminator", (req, res) => {
  res.status(201);
  res.send("I'll be back");
});

app.get("/tim-gunn", (req, res) => {
  res.status(201);
  res.send("Make it work");
});

app.get("/Emeril", (req, res) => {
  res.status(201);
  res.send("Bam!");
});

app.get("/Steve McGarrett", (req, res) => {
  res.status(201);
  res.send("Book 'em Danno!");
});

app.get("/Coach Taylor", (req, res) => {
  res.status(201);
  res.send("Clear eyes, full hearts, can't Lose");
});

app.get("/Homer Simpson", (req, res) => {
  res.status(201);
  res.send("D'Oh");
});

app.get("/Bruce Banner", (req, res) => {
  res.status(201);
  res.send("Don't make me angry");
});

app.get("/JJ Evans", (req, res) => {
  res.status(201);
  res.send("Dy-no-myte!");
});

app.get("/Batman", (req, res) => {
  res.send("To the Batmobile!");
});

app.get("/Hannibal Smith", (req, res) => {
  res.status(201);
  res.send("I love it when a plan comes together");
});

app.get("/Fraiser", (req, res) => {
  res.status(201);
  res.send("I'm listening");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("testing...");
