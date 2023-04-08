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

app.get("/terminator", (req, res) => {
  res.send("I'll be back!");

  // error after this line was added
  // because a response was already sent to the client
  // express.js will throw an error if you try to send a response twice
  // res.send("Hasta la vista, baby!");
});

// Define routes for each name and catch phrase
const phrases = {
  emeril: "Bam!",
  stevemcgarrett: "Book 'em Danno!",
  coachtaylor: "Clear eyes, full hearts, can't lose",
  homersimpson: "D'Oh!",
  brucebanner: "Don't make me angry",
  jjevans: "Dy-no-myte!",
  batman: "To the Batmobile!",
  hannibalsmith: "I love it when a plan comes together",
  fraiser: "I'm listening",
  regis: "Is that your final answer?",
  borg: "Resistance is futile",
  foxmulder: "The truth is out there",
  harrycallahan: "Go ahead, make my day",
  travisbickle: "You talkin' to me?",
  tonymontana: "Say hello to my little friend",
  zeus: "Release the Kraken!",
  jamesbond: "The name is Bond, James Bond",
  dorothy: "Toto, I've got a feeling we're not in Kansas anymore",
  rodtidwell: "Show me the money!",
  frankenstein: "It's alive! It's alive!",
  jimlovell: "Houston, we have a problem",
  rocky: "Yo, Adrian!",
  gollum: "My precious...",
  jackdawson: "I'm king of the world!",
};

// Define a route for each name
for (let name in phrases) {
  app.get(`/${name}`, (req, res) => {
    res.send(phrases[name]);
  });
}

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
