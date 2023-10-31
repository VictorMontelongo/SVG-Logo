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
const colorPalette = require("./colors-palette")
const { Triangle, Square, Circle } = require("./lib/shapes");




// Questions to generate the logo design
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter three characters please",
  },
  // need to add color palette to both the text and the shape
  {
    type: "input",
    name: "color-text",
    message: "Enter a color keyword for text color",
  },
  {
    type: "input",
    name: "color-shape",
    message: "Enter a color for the shape",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose your image shape",
    choices: ["Circle", "Sqaure", "Triangle"],
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(answers)
  fs.writeFile("logo.svg", (answers), (error) => {
    error ? console.log("Please fill all the information") : console.log("Logo generated")
  })
})