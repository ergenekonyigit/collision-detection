const canvas = document.querySelector<HTMLCanvasElement>("canvas")!;
const c = canvas.getContext("2d")!;

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: 0,
  y: 0,
};

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

const blueReactanglesX = canvas.width / 2 - 50;
const blueReactanglesY = canvas.height / 2 - 50;
const redRectanglesWidth = 100;
const redRectanglesHeight = 100;
const blueRectanglesWidth = 100;
const blueRectanglesHeight = 100;

class Rectangle {
  position: { x: number | undefined; y: number | undefined };
  width: number;
  height: number;
  color: string;

  constructor({
    x,
    y,
    width,
    height,
    color,
  }: {
    x: number | undefined;
    y: number | undefined;
    width: number;
    height: number;
    color: string;
  }) {
    this.position = { x, y };
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(
      this.position.x as number,
      this.position.y as number,
      this.width,
      this.height
    );
  }

  update() {
    this.draw();
  }
}

let rectangleRed: any;
let rectangleBlue: any;

function init() {
  rectangleRed = new Rectangle({
    x: undefined,
    y: undefined,
    width: redRectanglesWidth,
    height: redRectanglesHeight,
    color: "#E86262",
  });
  rectangleBlue = new Rectangle({
    x: blueReactanglesX,
    y: blueReactanglesY,
    width: blueRectanglesWidth,
    height: blueRectanglesHeight,
    color: "#92ABEA",
  });
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "#1A1A23";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // red regtangle
  rectangleRed.update();
  rectangleRed.position.x = mouse.x;
  rectangleRed.position.y = mouse.y;

  // blue rectangle
  rectangleBlue.update();

  if (
    mouse.x + redRectanglesWidth >= blueReactanglesX &&
    mouse.x <= blueReactanglesX + blueRectanglesWidth &&
    mouse.y + redRectanglesWidth >= blueReactanglesY &&
    mouse.y <= blueReactanglesY + blueRectanglesHeight
  ) {
    rectangleRed.color = "#74e5b8";
    rectangleBlue.color = "#74e5b8";
  } else {
    rectangleRed.color = "#E86262";
    rectangleBlue.color = "#92ABEA";
  }
}

init();
animate();
export {};
