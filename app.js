//DEPENDENCIES
 const express = require('express')

 //CONFIGURATION

 const app = express()
 const PORT = 3003

 //ROUTE 
 app.get('/', (req, res) => {
    res.send('Hello World!')
 })

 app.get("/terminator", (req, res) => {
    res.send("I'll be back")
    // res.send("Hasta la vista, baby")// got the first message in the browser
    //The http protocol is very specific in that there is one response for every request.


 })

 app.get("/timgunn", (req, res) => {
    res.send("Make it work!")
 })

 app.get("/homerSimpson", (req, res) => {
    res.send("D'Oh")
 })
 app.get("/Zeus", (req, res) => {
    res.send("Release the Kraken")
 })

 app.get("/Borg", (req, res) => {
    res.send("Resistance is futile")
 })

 app.get("/FoxMulder", (req, res) => {
    res.send("The truth is out there")
 })

 app.get("/RodTidwell", (req, res) => {
    res.send("Show me the money!")
 })
 app.get("/Rocky", (req, res) => {
    res.send("Yo, Adrian")
 })

 app.get("/Gollum", (req, res) => {
    res.send("My precious")
 })

 app.get("Jack Dawson", (req, res) => {
    res.send("I'm king of the world!")
 })

 function getRandomInt(){
    return Math.floor(Math.random() * magic8Responses.length)
 }


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

  //Magic 8 Ball

  app.get("/magic8", (req, res) => {
    // console.log(magic8Responses[0])
    const randomNum = getRandomInt()

    res.send(`<h1>${magic8Responses[randomNum]}<h1>`)
  })


//  listen 
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})
//Export
module.exports = app