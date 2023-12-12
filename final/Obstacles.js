class boxes{
    constructor(){
        this.x=windowWidth+random(100,400);
        this.y=random(0,windowHeight);
        this.r=150;
        this.img = loadImage('windb.png');
    }

    show(){
        push();
       // noStroke();
        //fill(220);
        //rect(this.x,this.y,this.r,79);
        pop();
        image(this.img,this.x,this.y);
        //rectMode(CENTER);
       
      
       
    }

    move(){
        this.x=this.x-2;

        if(this.x <= -200){
            return true;
            
        }
    }

    collision(px,py){
        let d = dist(px,py,this.x+20,this.y+40);
        
        if(d<this.r-90){
         
            return(true);
           
           
          // if(px<this.x+55){
           // return(true);
           //}
        }
       
      }
     // collisionxneg(px,py){//
       // let d = dist(px,py,this.x,this.y);
        
       // if(d<this.r-55){
           
           
         //  if(px<this.x+55){
         //  return(true);
        //   }
        //}
       
      //}
}