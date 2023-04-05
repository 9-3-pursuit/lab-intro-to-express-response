const express = require("express");
const app = express();

app.get("/", (req, response) => {
  console.log("Home - Route");
//   response.status()
  response.send("Home - Route")
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});

console.log("testing...");
