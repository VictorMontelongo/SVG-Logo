const Shapes = require('./shapes')
class Square extends Shapes {
  constructor(shape, text, colorShape, colorText,) {
    super(shape, text, colorShape, colorText,);
  };
  render() {
    return `
    <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill=${this.colorShape}/>
      <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
    </svg>
    `
  };
};
module.exports = Square;