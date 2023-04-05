const express = require("express");
const app = express();
const PORT = 3003;

//"Here\'s looking at you, kid" - \ will let JS know that you are putting quote there


app.get("/", (req, res) => {
    res.status(418).send("Hello World!")
})

app.get("/terminator", (req, res) => {
    res.send("I\'ll be back");
    res.send('Hasta la vista, baby'); //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client 
});

app.get("/Emeril", (req, res) => {
    res.send("Bam!");
});

app.get("/Homer-Simpson", (req, res) => {
    res.send("D\'Oh");
});

app.get("/JJ-Evans", (req, res) => {
    res.send("Dy-no-myte!");
});

app.get("/Regis", (req, res) => {
    res.send("Is that your final answer?");
});

app.get("/Fox-Mulder", (req, res) => {
    res.send("The truth is out there");
});

app.get("/Harry-Callahan ", (req, res) => {
    res.send("Go ahead, make my day");
});

app.get("/Tony-Montana ", (req, res) => {
    res.send("Say hello to my little friend");
});

app.get("/James-Bond", (req, res) => {
    res.send("the name is Bond, James Bond");
});

app.get("/Rod-Tidwell", (req, res) => {
    res.send("Show me the money!");
});


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});

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

app.get("/magic8", (req, res) => {
    let randomResponse = Math.floor(Math.random()*magic8Responses.length);
    res.send(`<h1>${magic8Responses[randomResponse]}</h1>`);
})

module.exports = app;
