let x = 130;
let sauceColor;
let toppingToggle=false;
let o=0

function setup() {
  createCanvas(500, 500);
 sauceColor= color(243, 39, 39);
  rectMode(CENTER);
}

function draw() {
  background(220);

 //Pizza Base
 
  x=mouseX;
push();
fill(174, 152, 83); //color of crust
ellipse(x, 150, 260, 260); // the crust outer layer pizza
fill(sauceColor); //color of sauce
ellipse(x, 150, 230, 230);// sauce part of
pop();
  
// cheese sauce conditional  
if (dist(mouseX, mouseY, x, 150)<115){
  sauceColor = color(255,217,25);
  }  else {
    sauceColor = color(128,0,0);

  }
 
  // Pineapple or Peps
 
  if (toppingToggle){
    // If true =- pineapple!
    for (let i= 0; i<=TWO_PI; i+=PI/6){
    fill(255,255, 0);
    // ellipse: Center X + (radius* cosine), CenterY + )radius * sine, inner radius
    rect((x+(100*cos(i))),(150+(100*sin(i))), 15, 15);
    rect((x+(50*cos(i))),(150+(50*sin(i))), 15, 15);
  }
 
    
    // if false = Peps!
  }else {
  for (let i= 0; i<=TWO_PI; i+=PI/6){
    fill(255,0, 0);
    // ellipse: Center X + (radius* cosine), CenterY + )radius * sine, inner radius
    ellipse((x+(100*cos(i))),(150+(100*sin(i))), 15, 15);
    ellipse((x+(50*cos(i))),(150+(50*sin(i))), 15, 15);  
  }
  }
    
      

}

function keyPressed(){
  toppingToggle = !toppingToggle;
}
//lightens the cheese for a bit
// attempt to make it look tosted
 function mousePressed(){ 
  if (sauceColor === 0) {
    sauceColor =(128,0,0);
  } else {
    sauceColor = (255,247,230);
  }
 
 
 
 }



