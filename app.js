const express = require("express")

const app = express()

const port = 3003

app.get('/', (req, res) => {
    res.send('Hello, world!')
});

app.get('/terminator', (req, res) => {
    res.send('I\'ll be back! & Hasta la vista, baby!')
    res.send('Hasta la vista, baby')
});

app.get('/jack-nicholson', (req, res) => {
    res.send('Here\'s Johnny!!')
});

app.get('/steve-smith', (req, res) => {
    res.send('Did someone just drop a house on me?')
});

app.get('/roger-smith', (req, res) => {
    res.send('KEVIIIIN RAMAAAAGE!!!!')
    //res.send('It\'s 67 Degrees outside and I hate you.')
});

app.get('/tupac-shakur', (req, res) => {
    res.send('I\'m not perfect, but I\'ll always be real')
});

app.get('/biggie-smalls', (req, res) => {
    res.send('It was all a dream')
});

app.get('/gunnery-sergeant-hartman ', (req, res) => {
    res.send('This is my rifle, This is my gun!')
});

app.get('/roxie-hart', (req, res) => {
    res.send('You can like the life you\'re living, you can live the life you like')
});

app.get('/jack-nicholson', (req, res) => {
    res.send('Here\'s Johnny!!')
});

app.get('/popeye', (req, res) => {
    res.send('I yam disgustipated')
});

app.get('/porky-pig', (req, res) => {
    res.send('That\'s all folks!')
});

app.get('/magic8', (req, res) => {
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
res.send(`<h1>${magic8Responses[Math.floor(Math.random() * magic8Responses.length)]}<h1>`)
})

app.listen(port, () => {
    console.log('Listening on port ${port} 3003')
});