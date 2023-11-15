class Vehicle{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.r =40;
        this.maxspeed=10;
        this.maxforce = 1;

    }

    show(){
        stroke(255);
        strokeWeight(4);
        push();
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
}