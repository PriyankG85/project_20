var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600, 400);
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 80, 50);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

}

function draw() {
  background("silver");
  if (hasCollided(bullet, wall)) 
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10) 
    {
      wall.shapeColor=color(255, 0, 0);
    }
    else if (damage<10) 
    {
      wall.shapeColor=color(0, 255, 0);
    }
  }
  drawSprites();
}
function hasCollided(bullet1, wall1)
{
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
    if (bulletRightEdge>=wallLeftEdge) 
    {
      return true;
    }
  return false;
}