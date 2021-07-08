
function setup() {
  createCanvas(400,400);

  var btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  if (mousePressed(btn_red)){
    background("Red");
  }

  var btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);
  if (mousePressed(btn_green)){
    background("Green")
  }

}


function red_bg(){
  r = 255;
  g = 0;
  b = 0;
}
function green_bg(){
  r = 0;
  g = 255;
  b = 0;
}



function draw() {
 background(30);

 drawSprites();
}








