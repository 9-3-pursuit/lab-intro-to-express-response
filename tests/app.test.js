const app = require("../app");
const request = require("supertest");

const paths2test = require("/data/paths2test");

describe("Test root path for this lab", () => {
  test("It should respond to the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
