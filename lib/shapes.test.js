// importing the shapes available to test a render with color
const { Triangle, Square, Circle } = require("./shapes.js");

describe("Circle test", () => {
  test("looking to make a green circle", () => {
    const shape = new Circle();
    shape.shapeColor("blue");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="100" fill="green" />'
    );
  });
});

describe("Square test", () => {
  test("looking to make a blue square", () => {
    const shape = new Square();
    shape.shapeColor("blue");
    expect(shape.render()).toEqual(
      '<rect width="200" height="200" fill="blue"/>'
    );
  });
});

describe("Triangle test", () => {
  test("looking to make a red triangle", () => {
    const shape = new Triangle();
    shape.shapeColor("red");
    expect(shape.render()).toEqual(
      '<polygon points="100, 15 200, 200 0, 200" fill="red" />'
    )
  });
});
