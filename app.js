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
 })

 app.get('/Batman', (req, res) => {
    res.send("To the Batmobile!")
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

 app.get("/Fox Mulder", (req, res) => {
    res.send("The truth is out there")
 })

 app.get("/Rod Tidwell", (req, res) => {
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


//  listen 
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})