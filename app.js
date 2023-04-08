const express = require("express");
const app = express();

app.listen("3003", () => {
  // this prints out on the terminal when we run the server
  // nodemon app.js
  console.log("Server started on port 3003");
});

app.get("/", (req, res) => {
  res.send("Home Page!");
});

// Thought questions

// 1. What is the difference between app.get and app.post?
// The difference between app.get and app.post is that app.get is used to retrieve data from the server, while app.post is used to send data to the server.

// 2. Is there a difference between '/timgunn', '/TimGunn', and '/tim/gunn'?
// Yes, there is a difference between '/timgunn', '/TimGunn', and '/tim/gunn'.
// The difference is that '/timgunn' and '/TimGunn' are the same route, while '/tim/gunn' is a different route.

// 3. What happens if we try to create the route '/tim gunn'?
// If we try to create the route '/tim gunn', we will get an error because the route is not valid.
// The route '/tim gunn' is not valid because it has a space in it.
// This is because the space is not a valid character in a route.

// app.get("/tim gunn", (req, res) => {
//   res.send("Hello, Tim Gunn!");
// });

// This route will only match GET requests to the path '/tim%20gunn'.
// If a request is made to the path '/tim gunn', it will not match this route.
// Because it does not have the %20 in it.
