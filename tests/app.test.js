const supertest = require('supertest');
const app = require('../app.js');

describe("Test the root path", () => {
  test("It should respond with status code 418", () => {
    return supertest(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(418);
      });
  });
});
