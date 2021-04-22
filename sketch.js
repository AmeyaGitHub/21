var wall,thickness
var speed,weight,bullet
function setup() {
  createCanvas(1700,400);
  speed=random(22,55)
  weight=random(400,1500)
  thickness=random(30,52)
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed
  bullet.shapeColor="white"
    wall=createSprite(1200,200,thickness,height/2)
    wall.shapeColor="green"
 

}

function draw() {
  createCanvas(1500,400)
  background("black");  
 
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness *thickness *thickness)
    


if (damage>10){
wall.shapeColor=color(255,0,0)

}
if (damage<10){
  wall.shapeColor=color(0,255,0)
  
  }
}
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width
  wallLeftEdge=lwall.x
  if (bulletRightEdge>=wallLeftEdge)
  {
  return true
  }
  
  }

