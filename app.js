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

const speakerIMG = {
  emeril: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ0zowDIrQKcGhjlOnimd5jcbV8cyx8i26dczJWPr53297lWPOFfHSI5xHGu1qi-tUYC7X0lZg1dB-9CNY",
  stevemcgarrett: "https://64.media.tumblr.com/34ebd1cab2a50c9b643d6db623c6208e/9f90cc507d008b6d-0f/s1280x1920/2c63425d02aa1aada7b56744ff16bf288d52143d.jpg",
};

// Define a route for each name
for (let name in phrases) {
  app.get(`/${name}`, (req, res) => {
    res.send(`
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 style="text-align: center;">Speaker: ${name}</h1>
      <img src="${speakerIMG[name]}" style="width: 25%;" />
      <h2 style="text-align: center;">Quote: ${phrases[name]}</h2>
    </div>
  `);
  });
}

// copy paste from README.md
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

// random response based on the same path
app.get("/magic8", (req, res) => {
  // generate a number from 0 to 19
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  res.send(`<div  style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
  <h1 style="text-align: center;">${magic8Responses[randomIndex]}</h1>
  </div>
  `);
});
