
let enemies = [];
let points = [];
let posx;
let posy;
let p;
let n;
let currentpoints;
let spawntimer = 0;
function setup() {
  click = 1;
  createCanvas(windowWidth,windowHeight);
 posx = 400;
 posy=400;
currentpoints=0;
 

}

function draw() {
  push();
  background(220);
  fill(255,0,0);
  noStroke();
  target = createVector(posx,posy);
  circle(target.x,target.y,32);
  pop();

  textSize(50);
  text(currentpoints,windowWidth/2,200)


for(let k = 0;k<1;k++){
      n = new Points(random(0,windowWidth),random(0,windowHeight));
      points.push(n);
      points[k].show();
      if (points[k].collision(target.x,target.y)===true){
        points.splice(0,1);
        currentpoints++;
      }

    }
  //n = new Points(random(0,windowWidth),random(0,windowHeight));
  //points.push(n);
  //points[0].show();
  //points[0].collision(target.x,target.y);
 
 

  if (millis() >= 10000+spawntimer) {
    for(let i = 0;i<5;i++){
      p = new Vehicle(random(0,windowWidth),random(0,windowHeight/4));
      enemies.push(p);
    }
    spawntimer = millis();
  }
  
  for(let l = 0;l<enemies.length;l++){
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

  if (keyIsDown(87)) {
    posy=posy-6;
  } else if(keyIsDown(83)){
    posy=posy+6;
  }
  if (keyIsDown(68)) {
    posx=posx+6;
  } else if(keyIsDown(65)){
    posx=posx-6;
  }
  
}

