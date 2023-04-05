const express = require("express");
const app = express();

app.get("/", () => {
  console.log("Home - Route");
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});

console.log("testing...");
