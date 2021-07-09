var box

function setup() {
  createCanvas(400,400);
  background(51);

box = createSprite(200,200,30,30);
}





function draw() {
 if (keyIsDown(RIGHT_ARROW)){
   background("Red");
 }
 if (keyIsDown(LEFT_ARROW)){
  background("Blue");
}
if (keyIsDown(UP_ARROW)){
  background("Yellow");
}
if (keyIsDown(DOWN_ARROW)){
  background("Green");
}

 drawSprites();
}








