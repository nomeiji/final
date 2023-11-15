let vehicle;
let enemies = [];
let posx;
let posy;
let y = 100;
function setup() {
  click = 1;
  createCanvas(windowWidth,windowHeight);
 posx = 400;
 posy=400;

}

function draw() {
  push();
  background(220);
  fill(255,0,0);
  noStroke();
  target = createVector(posx,posy);
  circle(target.x,target.y,32);
  pop();

  

  

  for(let i = 0;i<5;i++){
    p = new Vehicle(100,y);
    enemies.push(p);
    y = y + 100;
  
  }
  for(let l = 0;l<5;l++){
   enemies[l].show();
   enemies[l].seek(target);
   enemies[l].update();
   enemies[l].collision(target.x,target.y);
  
  }
 

  movement();
}

function movement() {
  if (keyIsDown(UP_ARROW)) {
    posy=posy-6;
  } else if(keyIsDown(DOWN_ARROW)){
    posy=posy+6;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    posx=posx+6;
  } else if(keyIsDown(LEFT_ARROW)){
    posx=posx-6;
  }
  
  if(posx<0){
    posx=1
  }
  if(posx>windowWidth){
    posx=windowWidth-1;
  }

  if(posy<0){
    posy=1
  }
  if(posy>windowHeight){
    posy=windowHeight-1;
  }
}

