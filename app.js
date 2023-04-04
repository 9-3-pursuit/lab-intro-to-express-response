const express = require("express");
const app = express()
const PORT = 3003

app.get("/", (req, res) => {
    res.send("Hello World");
});
// app.get("/about", (req, res) => {
//     res.status(201)
//     res.json({ message: "this is my first express app!" });
// });
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

app.get('/Fox Mulder', (req, res) => {
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

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});
