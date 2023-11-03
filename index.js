/*
  Inquirer will ask the questions 
  The subclass you choose will be based on the shape the user chooses 
  The subclass extends the parent class 

  Properties for the object:
    Text for the logo 
    Color for the logo 
    Shape for the logo 
    Color for the shape 

  Use methods to:
    Whatever work all shapes of any kind need
    Whatever work any individual shapes need
    Write a file containing the final SVG code

  Write unit tests to verify that these methods work
*/

const inquirer = require("inquirer");
const fs = require("fs");
const colorPalette = require("./lib/colors-palette")
// const Shapes = require("./lib/shapes");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle")



function generateShape(answers) {

  if (answers.shape === "Circle") {
    let userShape = new Circle(answers.colorShape, answers.text, answers.colorText)
    return userShape.render()
  }

  else if (answers.shape === "Square") {
    let userShape = new Square(answers.colorShape, answers.text, answers.colorText)
    return userShape.render()
  }

  else if (answers.shape === "Triangle") {
    let userShape = new Triangle(answers.colorShape, answers.text, answers.colorText)
    return userShape.render()
  }
};
// Questions to generate the logo design
const questions = [
  {
    name: "text",
    type: "input",
    message: "Enter three characters please",
    // verify they only enter 3 characters
    validate: (answer) => {
      if (answer.length > 3) {
        return console.log("\n Text must be three characters or less! Please try again");
      }
      return true;
    }
  },
  // needed to add color palette to both the text and the shape
  {
    name: "colorText",
    type: "input",
    message: "Enter a color keyword for text color",
    validate: (answers) => {
      let answersLowercase = answers.toLowerCase();
      for (var i = 0, len = colorPalette.length; i < len; ++i) {
        if (answersLowercase.indexOf(colorPalette[i]) != -1) {
          return true;
        }
      }
      return console.log("Please enter a valid color")
    }
  },
  {
    name: "colorShape",
    type: "input",
    message: "Enter a color for the shape",
    validate: (answers) => {
      let answersLowercase = answers.toLowerCase();
      for (var i = 0, len = colorPalette.length; i < len; ++i) {
        if (answersLowercase.indexOf(colorPalette[i]) != -1) {
          return true;
        }
      }
      return console.log("Please enter a valid color")
    }
  },
  {
    name: "shape",
    type: "list",
    message: "Choose your image shape",
    choices: ["Circle", "Square", "Triangle"],
  },

];

inquirer.prompt(questions).then(answers => {
  fs.writeFile(answers.shape + ".svg", generateShape(answers), (error) => {
    error ? console.log("Whoops") : console.log("Logo generated")
  })
})


