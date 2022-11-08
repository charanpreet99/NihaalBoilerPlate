var ball;
function setup(){
 createCanvas(600,500);
  
 ball = createSprite(300,250,50,50);
 ball.shapeColor = "red"
}

function draw(){
background("yellow");
drawSprites();
}