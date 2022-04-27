let bee1;
let bee2;
let bees = []; /// the array's for the objects on screen

function setup() {
  createCanvas(700, 500);
 
 
  bee1= new bee(5, 10);
  bee2 = new bee(round(random(width)), round(random(height)));
 
  for (let i =0; i<10; i++){
    bees[i] = new bee(10*i, 2*height/6);  // the array that populates the screen with 10 bees
  }
 
}

function draw() {
  background(0, 0, 179);
  
  bee1.move();
  bee1.show();
  bee2.move();
  bee2.show();
 
  for (let i =0; i< bees.length; i++){
  bees[i].move();
  bees[i].show();  
  }
 
  push();
  // flower for da bees
  rect(CENTER)
  noStroke();
  fill(0, 128, 43);
  rect(410, 330, 30, 100);
  pop();
  
  //little flower 
  
  push();
  fill(255, 195, 77);
  ellipse(410,260,70);
  pop();
  push();
  fill(255, 255, 77);
  ellipse(410, 260 , 50);
  pop();
  rectMode(CENTER)
 //the grass
  push();
  noStroke();
  fill(0, 128, 43);
  rect(width/2, 500, 800, 350);
  pop();
 
 
  push();
  ///bee   creates a bee withan ellipse and originate from width/2 height/2 this be stays
  strokeWeight(3);
  fill(255,260,153);
    ellipse(width/2, height/4, 30,20);
    ellipse(width/2, height/4, 30,20);
  pop();
}





class bee{ // ClASS for the bee's
 
  constructor(x, y){
   let beeX, beeY, offsetX, offsetY;
   
    this.beeX = x;
    this.beeY = y;
    this.offsetX = -5;
    this.offsetY= -5;
    beeX =30 ;
    beeY = 20 ;
       
  }
 
  move(){
    this.beeX += round(random(-5, 5)); /// Gives the bee's random movement
    this.beeY += round(random(-5, 5));
 
  }
 
  show(){
    
    let beeX = 30 ;
    let beeY = 20 ;
    
    fill(255,260,153);
    strokeWeight(4);
    ellipse(this.beeX, this.beeY, this.beeX+this.offsetX,  this.beeY+this.offsetY);
    ellipse(this.beeX, this.beeY, this.beeX-this.offsetX, this.beeY+this.offsetY) // this will show  the bees class on screen
   
  }
 
 
 
}