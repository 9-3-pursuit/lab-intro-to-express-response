const express = require("express");
const app = express()
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


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
});
app.get('/Gollum', (req, res) => {
    res.send('My precious')
});
app.get('/Fraiser', (req, res) => {
    res.send(`I'm listening`)
});

app.get('/Zeus', (req, res) => {
    res.send("Release the Kraken")
});

app.get('/Fox-Mulder', (req, res) => {
    res.send("The truth is out there")
});

app.get('/Coach-Taylor', (req, res) => {
    res.send("Clear eyes, full hearts, can't Lose")
});

app.get('/Chris-Tarrant', (req, res) => {
    res.send("Is that your final answer")
});

app.get('/Borg', (req, res) => {
    res.send("Is that your final answer")
});

app.get('/Hannibal-Smith', (req, res) => {
    res.send("I love it when a plan comes together")
});

app.get('/Harry-Callahan', (req, res) => {
    res.send("Go ahead, make my day")
});

app.get('/magic8', (req, res) => {
    const getRandomQuote = Math.floor(Math.random() * magic8Responses.length)
    const randomResponse = magic8Responses[getRandomQuote];
    res.send(randomResponse)
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});
