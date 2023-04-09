const app = require("../app");
const request = require("supertest");

const paths2test = require("../data/paths2test");

describe("Testing status codes on different paths", () => {
  for (let i = 0; i < paths2test.length; i++) {
    const description = paths2test[i].description;
    const path = paths2test[i].path;

    test(`It should respond to the GET method for ${description}`, () => {
      return request(app)
        .get(path)
        .then((response) => {
          expect(response.statusCode).toBe(200);
        });
    });
  }
});
