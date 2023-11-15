let vehicle;
let enemies = [];

function setup() {
  createCanvas(800, 800);
 vehicle = new Vehicle(100,100);
}

function draw() {
  push();
  background(220);
  fill(255,0,0);
  noStroke();
  target = createVector(mouseX,mouseY);
  circle(target.x,target.y,32);
  pop();
  vehicle.show();

  vehicle.seek(target);
  vehicle.update();
  
}

function mousePressed(){
  enemies.push(new Vehicle(100,100))
  print(1);
}