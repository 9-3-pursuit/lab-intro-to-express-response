const express = require('express');
const app = express(); 
const PORT = 3003
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
    "Very doubtful"
  
  ]

app.get('/', (request, response) => {
    response.status(418).send('Hello World!');
    })

app.get("/terminator", (req, res) => {
    res.send('I\'ll be back');
});

app.get("/emeril", (req, res) => {
    res.send('Bam!');
});

app.get("/batman", (req, res) => {
    //res.status(201).json({ message: "To the Batmobile!" });
    res.send('To the Batmobile!');
});

app.get("/coach-taylor", (req, res) => {
    // res.status(201).json({ message: "Clear eyes, full hearts, can't lose!" });
    res.send('Clear eyes, full hearts, can\'t lose!');
});

app.get("/homer-simpson", (req, res) => {
    // res.status(201).json({ message: "D'oh!" });
    res.send('D\'oh!');
});

app.get("/bruce-banner", (req, res) => {
    // res.status(201).json({ message: "Dont make me angry!" }); 
    res.send('Dont make me angry!');
});

app.get("/james-bond", (req, res) => {  
    // res.status(201).json({ message: "Bond. James Bond." });
    res.send('Bond. James Bond.');
});
 
app.get("tony-montana", (req, res) => { 
    // res.status(201).json({ message: "Say hello to my little friend!" }); 
    res.send('Say hello to my little friend!');
});

app.get("/harry-callahan", (req, res) => {
    // res.status(201).json({ message: "Go ahead, make my day." });
    res.send('Go ahead, make my day.');
});

app.get("gollum", (req, res) => {
    // res.status(201).json({ message: "My precious!" });
    res.send('My precious!');
});

app.get("/magic8", (req, res) => {
    let randomIndex = Math.floor(Math.random()*magic8Responses.length);
    res.send(`<h1>${magic8Responses[randomIndex]}</h1>`);

});
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); 
});

module.exports = app;
