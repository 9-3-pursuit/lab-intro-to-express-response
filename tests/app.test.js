// // DEPENDENCIES
// const express = require("express");

// // CONFIGURATION
// const app = express();
// const PORT = 3003
// // const app = require('../app.js');
// //const supertest = require('supertest');

//  it('Testing to see if supertest works', () => {
//    expect(1).toBe(1)
//  });

// // it('Testing to see if supertest works', ()=> {
// //     expect(1).toBe(2)
// // });

// module.exports = app;

// DEPENDENCIES
const express = require('express')


// CONFIGURATION
const app = require('../app.js');
//const app = express()


// LISTEN
const PORT = 3003


// ROUTES
app.get('/', (request, response) => {
    response.send('Hello, world!')
})

// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})

// EXPORT
module.exports = app