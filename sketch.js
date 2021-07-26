var car, wall;
var speed, weight;
var Deformation;

function setup() {

  createCanvas(1600, 400)
  wall=createSprite(1500, 200, 60, height/2);
  car=createSprite(50, 200, 50, 50);

car.shapeColor="Blue";
wall.shapeColor="Pink";


  speed=random(55,90);
  weight=random(400, 1500);
  car.velocityX=speed;
}

function draw() {
  background("Black");  


  if(wall.x-car.x < (car.width+wall.width)/2) {

    car.velocityX=0;

Deformation=0.5 * weight * speed * speed/22500;

if(Deformation<100){

car.shapeColor="Green";


}


if(Deformation>100 && Deformation<180){

  car.shapeColor="Yellow";
  
  
  }

  if(Deformation>180){

    car.shapeColor="Red";
    
    
    }


  }


  drawSprites();
}