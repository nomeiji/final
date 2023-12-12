
let enemies = [];
let points = [];
let blocks = [];
let fleepoi = [];
let posx;
let posy;
let p;
let n;
let b;
let o;
let clock;
let min;
let currentpoints;
let spawntimer = 0;
function setup() {
  click = 1;
  var canvas =createCanvas(windowWidth-100,windowHeight-200);
  canvas.parent("potrait");
 posx = 400;
 posy=400;
currentpoints=0;
 clock = 0;
 min=0;

}

function draw() {
  push();
  background(220);
  fill(255,0,0);
  noStroke();
  target = createVector(posx,posy);
  circle(target.x,target.y,32);
  if (frameCount % 60 == 0) {
    clock++;
    if(clock ===60){
      clock = 0;
      min++;
    }
  }
  pop();
  push();
  textSize(50);
  fill(0);
  text('Time:',windowWidth/2-180,96)
  text(':',windowWidth/2-13,96);
  text(min,windowWidth/2-40,100);
  text(clock,windowWidth/2,100);
  
  textSize(50);
  text(currentpoints,windowWidth/2-20,200)
  pop();

  for(let f = 0;f<1;f++){
    o = new Fleepoints(random(windowWidth/2-400,windowWidth/2+400),random(windowHeight/2-400,windowHeight/2+400))
    fleepoi.push(o);
    let steering = fleepoi[f].flee(target);
    fleepoi[f].applyForce(steering);
    fleepoi[f].edges(); 
    fleepoi[f].update();
    fleepoi[f].show();
    if(fleepoi[f].collision(target.x,target.y)){
    fleepoi.splice(0,1);
    currentpoints = currentpoints+5;
  }
  }
  

  for(let v = 0;v<5;v++){
  b = new boxes();
  blocks.push(b);
  blocks[v].show();

  if(blocks[v].collision(target.x,target.y)===true){
    posx=posx-10;
  }

 

  if(blocks[v].move()===true){
    blocks.splice(0,1);
  }
}
  


for(let k = 0;k<1;k++){
      n = new Points(random(0,windowWidth),random(0,windowHeight));
      points.push(n);
      points[k].show();
      if (points[k].collision(target.x,target.y)===true){
        points.splice(0,1);
        currentpoints++;
      }

    }

 


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
   enemies[l].collision(target.x,target.y,currentpoints,min,clock);
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

