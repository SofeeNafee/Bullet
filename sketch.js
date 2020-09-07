var bullet, wall ;
var speed, weight,thickness;
function setup() {
  createCanvas(1200,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(1100,200,50,200);
  bullet.shapeColor="White";
  wall.shapeColor="blue";
  bullet.velocityX=speed;

}

function draw() {
  background(0);  
  if( wall.x-bullet.x < bullet.width/2 + wall.width/2 )
    {

     bullet.velocityX=0;
     var deform=0.5*weight*speed*speed/(thickness*thickness*thickness);
     if(deform>=10){
       wall.shapeColor="red";
     }
         if(deform<10){
      wall.shapeColor="green";
    }
  }
  drawSprites();
}