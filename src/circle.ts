const canvas = document.querySelector<HTMLCanvasElement>("canvas")!;
const c = canvas.getContext("2d")!;

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: 50,
  y: 50,
};

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

const blueCircleX = canvas.width / 2;
const blueCircleY = canvas.height / 2;
const radius = 50;

class Circle {
  position: { x: number | undefined; y: number | undefined };
  radius: number;
  color: string;

  constructor({
    x,
    y,
    radius,
    color,
  }: {
    x: number | undefined;
    y: number | undefined;
    radius: number;
    color: string;
  }) {
    this.position = { x, y };
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(
      this.position.x as number,
      this.position.y as number,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

let circleRed: any;
let circleBlue: any;

function init() {
  circleRed = new Circle({
    x: undefined,
    y: undefined,
    radius,
    color: "#E86262",
  });
  circleBlue = new Circle({
    x: blueCircleX,
    y: blueCircleY,
    radius,
    color: "#92ABEA",
  });
}

function getDistance(x1: number, y1: number, x2: number, y2: number) {
  const xDistance = x2 - x1;
  const yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  // background
  c.fillStyle = "#1A1A23";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // red circle
  circleRed.update();
  circleRed.position.x = mouse.x;
  circleRed.position.y = mouse.y;

  // blue circle
  circleBlue.update();

  if (
    getDistance(
      circleRed.position.x,
      circleRed.position.y,
      circleBlue.position.x,
      circleBlue.position.y
    ) <
    circleRed.radius + circleBlue.radius
  ) {
    circleRed.color = "#74e5b8";
    circleBlue.color = "#74e5b8";
  } else {
    circleRed.color = "#E86262";
    circleBlue.color = "#92ABEA";
  }
}

init();
animate();
export {};
