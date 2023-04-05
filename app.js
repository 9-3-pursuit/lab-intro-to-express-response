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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("testing...");
