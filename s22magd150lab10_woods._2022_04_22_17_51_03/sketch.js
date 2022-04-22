let wis;
let chee
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;
let lookX, lookY; 
let city;
function preload(){
   wis = loadImage('wis.png');
   city = loadJSON('city.json'); 
   chee=loadImage('chee.png')
  font = loadFont('Anton-Regular.ttf');
}


function setup() {
  createCanvas(666, 766, WEBGL);
   lookX=0;
  lookY=0;
}

function draw() {
   background(220);
orbitControl();
 // camera(0,0,(height/2) / tan(PI/6), lookX,lookY,0, 0,1,0);
  
    ambientLight(60);

  // add point light to showcase specular material
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(280, 250, 150, locX, locY, 250);
  ambientLight(60, 60, 60);
 

 
  // da Box it with wisconsin map
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  texture(wis);
  box(280, 280, 220,120);
  pop();
  
  // CIRCLE TIME!!!!1
  push();
  translate(100, 250, 134);
  rotateZ(frameCount * 0.06);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.06);
  noStroke();
  texture(chee);
  torus(20, 20, 24, 16);
  pop();
 
  // Cylinder my bois
  
  push();
  noStroke();
  ambientMaterial(city.r, city.g, city.b);
  translate(-200, -200, 40);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cylinder(80, 70);
  pop();

  push();
  translate (-60, -300, 0);
  textFont(font);
  textSize(36);
  fill(0);
  text(city.name, 0, 0);
  pop();
/*  if(keyIsPressed){
  if (keyCode ==LEFT_ARROW){
    lookX-=10;
  }else if (keyCode==RIGHT_ARROW){
    lookX+=10;
  } else if(keyCode==UP_ARROW){
    lookY-=10;
  } else if (keyCode==DOWN_ARROW){
    lookY+=10;
  }
  }
  */
}
 

