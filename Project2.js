var ship, ship_moving;
var sea_bg;
var sea;

function preload(){

sea_bg = loadImage("sea.png");
ship_moving = loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png");


}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,400,400);
  sea.addImage("sea",sea_bg);
  sea.x = sea.width/2;
  ship = createSprite(175,200,20,50);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.45;
 
}


function draw() {
  background("blue");
  
  sea.velocityX = -2;
  console.log(sea.x);

  if (sea.x < 0){
    sea.x = sea.width/2;
  }

  drawSprites();
}