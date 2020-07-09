var moving, fixed;

function setup() {
  createCanvas(1200,800);
  moving = createSprite(400, 200, 80, 30);
  fixed = createSprite(200,200,50,80);

  moving.shapeColor = "green";
  fixed.shapeColor = "green";

  moving.debug = true;
  fixed.debug = true;

  moving.velocityX = -5;
  fixed.velocityX = 5;
}

function draw() {
  background(0,0,0);  

  //moving.x = mouseX;
  //moving.y = mouseY;

  /*
  if(moving.x - fixed.x < moving.width/2 + fixed.width/2
    && fixed.x - moving.x <  moving.width/2 + fixed.width/2
    && moving.y - fixed.y < moving.height/2 + fixed.height/2
    && fixed.y - moving.y <  moving.height/2 + fixed.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }
  */

 if(moving.x - fixed.x < moving.width/2 + fixed.width/2
  && fixed.x - moving.x <  moving.width/2 + fixed.width/2){
    moving.velocityX=moving.velocityX * (-1);
   fixed.velocityX=fixed.velocityX*(-1);
}
if(moving.y - fixed.y < moving.height/2 + fixed.height/2
  && fixed.y - moving.y <  moving.height/2 + fixed.height/2){
   moving.velocityY=moving.velocityY * (-1);
   fixed.velocityY=fixed.velocityY*(-1);
}
  drawSprites();
}