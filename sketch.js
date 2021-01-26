var bullet,wall;
var speed,weight,thickness;





function setup() {
  createCanvas(2000,1000);
  bullet=createSprite(700, 400, 250, 40);
bullet.shapeColor="orange"
  
thickness=random(22,83);

wall=createSprite(1200,350,thickness,500);
wall.shapeColor="yellow"
speed=random(223,321);
weight=random(30,52);





}

function draw() {

 background(7,8,54)
 
 bullet.velocityX=speed;

if(hasCollided(bullet,wall))
{
   bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor="red";
}
if(damage<10)
{
  wall.shapeColor="green";
}

}
 
  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge= wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
