var path;
var boy,boy_walking;
var pathImage;

function preload(){
  //pre-load images
boy_walking = loadAnimation("Running-1.png","Running-2.png");
pathImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;
  
}

function draw() {
  background("black");

  drawSprite();
}
