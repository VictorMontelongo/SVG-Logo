// importing the shapes available to test a render with color
const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle")

describe("Circle", () => {
  it("Should make a green circle", () => {
    const circle = new Circle();
    shape.colorShape("green");
    expect(circle.render()).toEqual(`
      <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill="green" />
       <text x="100" y="185" font-size="70" text-anchor="middle" fill="green">EKO</text>
       </svg>`
    );
  });
});

describe("Square", () => {
  it("Should make a blue square", () => {
    const square = new Square();
    shape.colorShape("blue");
    expect(square.render()).toEqual(
      `<svg version="1.1"
        width = "300" height = "200"
        xmlns = "http://www.w3.org/2000/svg" ><rect width="200" height="200" fill="blue"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="blue">EKO</text>
       </svg>`
    );
  });
});

describe("Triangle", () => {
  it("Should make a red triangle", () => {
    const triangle = new Triangle();
    shape.colorShape("red");
    expect(triangle.render()).toEqual(
      `<svg version="1.1"
        width = "300" height = "200"
        xmlns = "http://www.w3.org/2000/svg" >
        <polygon points="100, 15 200, 200 0, 200" fill="red" />
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="red">EKO</text>
       </svg>`
    )
  });
});
