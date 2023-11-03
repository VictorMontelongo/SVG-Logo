const Shapes = require('./shapes')
class Circle extends Shapes {
  constructor(colorShape, text, colorText) {
    super(colorShape, text, colorText);
  };
  render() {
    return `
    <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill="${this.colorShape}" />
      <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
    </svg>
    `
  };
};
module.exports = Circle;