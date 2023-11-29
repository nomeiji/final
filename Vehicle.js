class Vehicle{
    constructor(x,y){
      this.x=x;
      this.y=y;
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.r =random(20,40);
        this.maxspeed=random(1,20);
        this.maxforce = 0.1;

    }

    hitbox(){
      
    }

    show(){
        push();
        stroke(255);
        strokeWeight(4);
        
        translate(this.pos.x,this.pos.y);
        rotate(this.vel.heading());
        triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
        pop();
    }

    applyForce(force){
        this.acc.add(force);
    }

    seek(target){
        let force = p5.Vector.sub(target,this.pos);
        force.setMag(this.maxspeed);
        force.sub(this.vel);
        force.limit(this.maxforce);
        this.applyForce(force)
    }
    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
      }

      edges() {
        if (this.pos.x > width + this.r) {
          this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
          this.pos.x = width + this.r;
        }
        if (this.pos.y > height + this.r) {
          this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
          this.pos.y = height + this.r;
        }
      }

  collision(px,py){
    let d = dist(px,py,this.pos.x,this.pos.y);
    
    if(d<30){
      textSize(300);
      textAlign(CENTER);
      text("You Lost!",windowWidth/2,windowHeight/2)
      noLoop();
    }
  }
}