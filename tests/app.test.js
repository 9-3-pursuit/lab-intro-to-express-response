const app = require("../app.js"); //import app.js

const superTest = require("supertest"); //import supertest

const supertest = require("supertest");
it("Testing to see if supertest works", () => {
  expect(1).toBe(2); //expect is used to check the response
});

//test for the root route

describe("Test the root path", () => {
  TextDecoderStream("It should response the GET method", () => {
    return request(app);
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.text).tobe("Hello, Tafari!");
      });
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).tobe(200);
      });
  });
});
