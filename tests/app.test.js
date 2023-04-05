const supertest = require("supertest")
const app = require("../app.js")

// it ( 'testing to see if supertest works', () => {
//     expect(1).toBe(1)
// })

describe('Test the root path', ()=> {
    test("It should response the Get method", () => {
    return request (app)
    .get("/")
    .then(response => {
        expect(response.statusCode).toBe(418)
    })
})
})