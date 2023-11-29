class Points{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.r=30;
    }

    show(){
        push();
        rectMode(CENTER);
        fill(244, 203, 47)
        square(this.x,this.y,this.r)
        pop();
    }

    collision(px,py){
        let d = dist(px,py,this.x,this.y);
        
        if(d<this.r){
            print('point added!')
            return(true);

        }
      }
}