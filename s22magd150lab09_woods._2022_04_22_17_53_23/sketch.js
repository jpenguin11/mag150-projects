var song;
let broken;
let button;
let playing = false;
let title;
let mySound;
function preload(){
  
   broken = createVideo(['broken.mp4']); //puts video up
   song = loadSound('greensleves_musicbox.mp3');
  mySound= loadSound('greensleves_musicbox.mp3');
}

function setup() {
  createCanvas (600, 400);
  button = createButton('play')
  button.mousePressed(toggleVid); // attach button listener
  broken.hide();
 
}

function canvasPressed() {
mySound.loop();
}
function mouseReleased() {
  mySound.pause();
}

function draw() {
image(broken, 100, 10, 500, 300); // draw the video frame to canvas
tint(GRAY);
  
   let playbackRate = map(mouseY, 0.1, height, 2, 0);
  playbackRate = constrain(playbackRate, 0.01, 4);
  song.rate(playbackRate);

  line(0, mouseY, width, mouseY);
  text('rate: ' + round(playbackRate * 100) + '%', 10, 20);
}

function toggleVid() {
  if (playing) {
broken.pause();
    song.pause();
    button.html('play');
  } else {
  broken.loop();
    song.loop();
    button.html('pause');
  }
  playing = !playing;
  //this will play the music when its pressed 
}