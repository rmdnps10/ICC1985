const { Engine, Composite, Bodies, Mouse, MouseConstraint, Constraint } =
  Matter;
const boxes1 = [];
const boxes2 = [];
const boxes3 = [];
const boxes4 = [];
const boxes5 = [];

let world, engine;
const boxwidth = 40;
const boxheight = 28;
let boxImg1;
let boxImg1_2;
let boxImg1_3;
let boxImg2;
let boxImg2_2;
let boxImg2_3;
let boxImg3;
let boxImg3_2;
let boxImg4;
let boxImg4_2;

function preload() {
  boxImg1 = loadImage("./images/b1.png");
  boxImg1_2 = loadImage("./images/b2.png");
  boxImg1_3 = loadImage("./images/b3.png");
  boxImg2 = loadImage("./images/gs1.png");
  boxImg2_2 = loadImage("./images/gs2.png");
  boxImg2_3 = loadImage("./images/gs3.png");
  boxImg3 = loadImage("./images/gfs1.png");
  boxImg3_2 = loadImage("./images/gfs2.png");
  boxImg4 = loadImage("./images/gms1.png");
  boxImg4_2 = loadImage("./images/gms2.png");
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0, height, width * 2, 200);
  console.log(height);
  console.log(windowHeight);
  boundary_left = new Boundary(0, height / 2, 2, height, 0); // 가상왼쪽벽
  boundary_right = new Boundary(width, height / 2, 2, height, 0); // 가상오른쪽벽

  boundary_1 = new Boundary(width / 4, (height / 5) * 3, width / 5, 1, -PI / 4);
  boundary_2 = new Boundary(
    (width / 4) * 3,
    (height / 5) * 3,
    width / 5,
    1,
    PI / 4
  );
  boundary_3 = new Boundary(
    (width / 100) * 38,
    height / 3,
    width / 7,
    1,
    (-PI / 10) * 3
  );
  boundary_4 = new Boundary(
    (width / 100) * 62,
    height / 3,
    width / 7,
    1,
    (PI / 10) * 3
  );
  boundary_5 = new Boundary(
    width / 2 - 100,
    20,
    width / 4,
    10,
    -PI / 2 + PI / 12
  );
  boundary_6 = new Boundary(
    width / 2 + 100,
    20,
    width / 4,
    10,
    -PI / 2 - PI / 12
  );

  hourglass_left = new Boundary(
    width / 4,
    height / 2,
    (width / 3) * 2,
    5,
    -PI / 2 - PI / 36
  );
  hourglass_right = new Boundary(
    (width / 4) * 3,
    height / 2,
    (width / 3) * 2,
    5,
    -PI / 2 + PI / 36
  );

  const boxImages = [
    boxImg1,
    boxImg1_2,
    boxImg1_3,
    boxImg2,
    boxImg2_2,
    boxImg2_3,
    boxImg3,
    boxImg3_2,
    boxImg4,
    boxImg4_2,
  ];

  for (let i = 0; i < 270; i++) {
    const box = new Box(width / 2, 0.2 * i, boxwidth, boxheight, boxImages);
    boxes1.push(box);
  }
}

function mouseClicked() {
  console.log(12);
  Composite.remove(world, hourglass_left);
  console.log(Composite);
  Composite.remove(world, hourglass_right);
}

function draw() {
  background("white");
  Matter.Engine.update(engine);
  boundary_1.show();
  boundary_2.show();
  boundary_3.show();
  boundary_4.show();
  boundary_5.show();
  boundary_6.show();
  hourglass_left.show();
  hourglass_right.show();

  for (let box of boxes1) {
    box.show();
    box.updateImage(300);
  }
}
