const express = require('express'); 
const app = express(); 


//Catchphrases

app.get("/terminator", (req, res )=> { 
    res.send("I'll be back");
})  

app.get("/emeril", (req, res )=> { 
    res.send("Bam!");
})

app.get("/steve-mcgarrett", (req, res )=> { 
    res.send("Book 'em Danno!");
})

app.get("/coach-taylor", (req, res )=> { 
    res.send("Clear eyes, full hearts, can't Lose");
})

app.get("/homer-simpson", (req, res )=> { 
    res.send("Clear eyes, full hearts, can't Lose");
})

app.get("/homer-simpson", (req, res )=> { 
    res.send("Clear eyes, full hearts, can't Lose");
})
app.get("/bruce-banner", (req, res )=> { 
    res.send("Don't make me angry");
})

app.get("/homer-simpson", (req, res )=> { 
    res.send("Clear eyes, full hearts, can't Lose");
})

app.get("/jj-evans", (req, res )=> { 
    res.send("Dy-no-myte!");
})

app.get("/batman", (req, res )=> { 
    res.send("To the Batmobile!");
})


// Activity Magic 8 Ball

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

app.get("/magic8", (req, res )=> { 
    res.send(magic8Responses[Math.floor(Math.random() * magic8Responses.length)]);
})



app.listen(3003, ()=>{ // listen on this port 
    
}) 

