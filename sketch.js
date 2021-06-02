var start, finish;
var frog1, frog2;
var track, trackimg;
var path1;

function preload(){
  trackimg = loadImage("track.jpg");
  frog1img = loadImage("images/frog1.png");
  frog2img = loadImage("images/frog2.png");

}

function setup(){
  createCanvas(displayWidth,displayHeight);

  //create start and finish line
  start = createSprite(displayWidth/2,720,displayWidth,10);
  finish = createSprite(displayWidth/2,displayHeight+200,displayWidth,10);

  //create frog sprites
  frog1 = createSprite(displayWidth/2-200,displayHeight-10,50,50);
  frog1.shapeColor="green";
  frog1.addImage(frog1img);
  frog1.scale = 0.5;

  frog2 = createSprite(displayWidth/2+200,displayHeight-10,50,50);
  frog2.shapeColor="green";
  frog2.addImage(frog2img);
  frog2.scale = 0.5;

  path = createSprite(displayWidth/2,displayHeight/2-50,displayWidth,40);

  
}

function draw(){
  background("yellow");

  //create the paths for frogs
  //image(pathimg,0,-displayHeight*4,displayWidth,displayHeight*5);
  //console.log(image.positionY);

  //create a line which separates both the players
  for(var i = 0; i<displayHeight*4; i=i+20){
    line(displayWidth/2,i,displayWidth/2,i+10)
  }

  //add movements 
  if(keyDown(UP_ARROW)){
    frog1.y = frog1.y-10
  }
  if(keyDown("w")){
    frog2.y = frog2.y-10
  }

  drawSprites();
}