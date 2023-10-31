class Shapes {
  // looking to set the color of all shapes cicle, square, triangle
  constructor(shape, text, colorShape, colorText,) {
    this.shape = shape
    this.text = text;
    this.colorShape = colorShape;
    this.colorText = colorText;

  }
};
// extending the shapes to my other classes. 

class Circle extends Shapes {
  constructor(shape, text, colorShape, colorText,) {
    super(shape, text, colorShape, colorText,);
  };
  render() {
    return `
    <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill=${this.colorShape} />
      <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
    </svg>
    `
  };
};

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

class Triangle extends Shapes {
  constructor(shape, text, colorShape, colorText,) {
    super(shape, text, colorShape, colorText,);
  }
  render() {
    return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill=${this.colorShape}/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
        </svg>
        `
  };
};

module.exports = { Triangle, Square, Circle };

