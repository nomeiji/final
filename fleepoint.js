class Fleepoints {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
      this.maxSpeed = 2;
      this.maxForce = 0.2;
      this.r = 30;
    }
  
    flee(target) {
      return this.seek(target).mult(-1);
    }
  
    seek(target) {
      let force = p5.Vector.sub(target, this.pos);
      force.setMag(this.maxSpeed);
      force.sub(this.vel);
      force.limit(this.maxForce);
      return force;
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.set(0, 0);
    }
  
    show() {
      push();
      fill(255,0,255);
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
      pop();
    }
  
    edges() {
      if (this.pos.x > width + this.r) {
        this.pos.x = 400;
      } else if (this.pos.x < -this.r) {
        this.pos.x = 400;
      }
      if (this.pos.y > height + this.r) {
        this.pos.y = 400;
      } else if (this.pos.y < -this.r) {
        this.pos.y = 400;
      }
    }

    collision(px,py){
        let d = dist(px,py,this.pos.x,this.pos.y);
        
        if(d<30){
          print('bonus touched!')
          return true;
        }
      }
  }
  