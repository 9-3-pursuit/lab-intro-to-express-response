const express = require('express');
const app = express();

const catchPhrases = {
  '/emeril': 'Bam!',
  '/stevemcgarrett': "Book 'em Danno!",
  '/coachtaylor': 'Clear eyes, full hearts, can\'t Lose',
  '/homersimpson': 'D\'Oh',
  '/brucebanner': 'Don\'t make me angry',
  '/jjevans': 'Dy-no-myte!',
  '/batman': 'To the Batmobile!',
  '/hannibalsmith': 'I love it when a plan comes together',
  '/frasier': 'I\'m listening',
  '/terminator': 'I\'ll be back',
  '/terminator2': 'Hasta la vista, baby',
};

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
];

app.get('/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  if (catchPhrases[name]) {
    res.send(catchPhrases[name]);
  } else {
    res.status(404).send('Route not found');
  }
});

app.get('/magic8', (req, res) => {
  const randomIndex = Math.floor(Math.random() * magic8Responses.length);
  res.send(magic8Responses[randomIndex]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
