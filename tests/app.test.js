const request = require('supertest')

const app = require('../app') // Import app.js
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
        .get('/')
        .then(response => {
            expect(response.statusCode).toBe(418).send
            (`<h1>Hello World!!!!</h1>`)
        })
    })
})

it('Testing to see if supertest works', () => {
    expect(1).toBe(2)
}) 

