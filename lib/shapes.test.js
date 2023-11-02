// importing the shapes available to test a render with color
const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle")

describe("Circle", () => {
  test("looking to make a green circle", () => {
    const circle = new Circle();
    shape.colorShape("green");
    expect(circle.render()).toEqual(
      '<circle cx="150" cy="100" r="100" fill="green" />'
    );
  });
});

describe("Square", () => {
  test("looking to make a blue square", () => {
    const square = new Square();
    shape.colorShape("blue");
    expect(square.render()).toEqual(
      '<rect width="200" height="200" fill="blue"/>'
    );
  });
});

describe("Triangle", () => {
  test("looking to make a red triangle", () => {
    const triangle = new Triangle();
    shape.colorShape("red");
    expect(triangle.render()).toEqual(
      '<polygon points="100, 15 200, 200 0, 200" fill="red" />'
    )
  });
});
