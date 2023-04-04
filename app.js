// dependencies
const express = require("express");

// configuration
const app = express()
const PORT = 3003

// magic8 array
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

// routes
app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.get("/terminator", (req, res) => {
    res.send("I'll be back")
})

app.get("/homer-simpson", (req, res) => {
    res.send("D'Oh")
})

app.get("/batman", (req, res) => {
    res.send("To the Batmobile!")
})

app.get("/regis", (req, res) => {
    res.send("Is that your final answer?")
})

app.get("/harry-callahan", (req, res) => {
    res.send("Go ahead, make my day")
})

app.get("/travis-bickle", (req, res) => {
    res.send("You talkin' to me?")
})

app.get("/tony-montana", (req, res) => {
    res.send("Say hello to my little friend")
})

app.get("/james-bond", (req, res) => {
    res.send("the name is Bond, James Bond")
})

app.get("/frankenstein", (req, res) => {
    res.send("It's alive! It's alive")
})

app.get("/gollum", (req, res) => {
    res.send("My precious")
})

app.get("/magic8", (req, res) => {
    let random = Math.floor(Math.random() * magic8Responses.length)
    res.send(`<h1>${magic8Responses[random]}</h1>`)
})

// listen
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})