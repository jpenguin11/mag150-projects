let x=170 ;
let y=250 ;
let w=250 ;
let h= 200 ;
var dvdcolor, powerColor, screenFill;
var button;
let cx=445;
let cy=325;
let diameter=50;

let logoX, logoY, logoDiam, logoSpeedX, logoSpeedY;


let powerButton = false;
let dvdButton = false;



//moving the circle in the screen
var angle= 0.6;
var offset=370;
var scalar= 50;
var speed = 0.05;

//change color of dvd as overpressed to blue
function setup() {
  createCanvas(600, 600);
  dvdcolor= color(128, 0, 0);
  powerColor = color(255);
  screenFill = color(0);
 
  // logo bounce
  logoDiam = 20;
  logoX= 180;
  logoY = 260;
  logoSpeedX = 2;
  logoSpeedY = 2;
}

function draw() {
  background(220);
 
a= height / 2;

  // antena's for the tv
  push();
  strokeWeight(6);
  line(370, 280, 135, 85);
  line(470, 80, 300, 225);
  pop();
  push();
  strokeWeight(25);
  point(135, 85);
  point(468, 79);
  pop();
 
 
 
 
  //the first main rectangle back for the tv
  push();
  strokeWeight(6);
  fill(93 , 72, 94);
  rect(125,190, 345, 320);
  pop();
  // inner part of the tv
  push();
  fill(screenFill);
  rect(170, 250, 250, 200);
  pop();
 
  //screen desgin need to move it so when clicked buttion it works thinking on and off button
 
  // tv stand
  push();
  strokeWeight(3);
  fill(51, 26, 0);
  rect(100, 500, 390, 200);
  pop();
  //tv stand  cubbie whole for dvd player
  push();
  strokeWeight(2);
  fill(26, 13, 0);
  rect(120, 520, 350, 70);
  pop();
 
 
 
 
  // dvd player
  fill(41, 38, 41);
  rect(140, 550,  200, 40);
 
  //on off buttion(circle buttion)
 
  fill(powerColor);
  ellipse(cx, cy, diameter, diameter);

  fill(0);
  textSize(18);
  text("off/on", 420, 325);
 
// power button mouseover
  if (dist(mouseX, mouseY, 445, 325) < 25){
    powerColor = color (220);
  } else {
    powerColor = color(255);
  }
 
 
  //rectangle buttion and lable forit
  push();
  fill(dvdcolor);
  rect(310, 555, 25, 25);
   
  pop();
   push();
  fill(255);
  textSize(10);
  text("DVD", 312, 568);

  pop();
 
// mouseover for DVD button
 
//  conditonal: X component is between left and right of rectangle
  // conditional: Y component in between top and bottom of rectangle
 
if (mouseX>310 && mouseX< 335 && mouseY>555 && mouseY < 580){
  dvdcolor= color(127, 188, 235);
  } else {
     dvdcolor = color(128,0,0);
  }

 
// action for power button
 
  if(powerButton){
   
    if (dvdButton){
        push();
    fill(255);
    ellipse (logoX, logoY, logoDiam, logoDiam);

    logoX += logoSpeedX;
    logoY += logoSpeedY;
   
    // horizontal conditional
   
    if(logoX-10<= 170 || logoX+10 >= 410){
      logoSpeedX *= -1;
    }
                   
   // vertical conditional
    if (logoY -10 <= 250 || logoY +10 >= 450){
      logoSpeedY *= -1;
    }
     
    } else {
     push();
  let x1= offset +sin(angle + 2.0)* scalar -100;
  fill(255);
    ellipse(x1,345,40,40);
    angle += speed;
  pop();    
  }
  }
}


function mousePressed(){
 
  // power button conditional
 
  if (dist(mouseX, mouseY, 445, 325) < 25){
    powerButton = !powerButton;
   }
 
//  DVD button conditional
 
  if (mouseX> 310 && mouseX < 335 && mouseY > 555 && mouseY < 580){
    dvdButton = !dvdButton;
  }
 
 
 
}