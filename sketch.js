// assigning all the global variables here 
var car1, car2, car3, car4, line1, line2, line3, wall1, wall2, wall3, wall4
var weight, speed, deformation
function setup() {
 
  // creating the canvas 
  createCanvas(1200,400);
 
  // craeting the car sprites
  car1 = createSprite(50, 50, 15, 15);
 car1.shapeColor = "red"
 car2 = createSprite(50, 150, 15, 15);
 car2.shapeColor = "green"
 car3 = createSprite(50, 250, 15, 15);
 car3.shapeColor = "blue"
 car4 = createSprite(50, 350, 15,15);
 car4.shapeColor = "yellow"
 
 // creating the lines which will seperate the canvas
 line1 = createSprite(500,100,1000,5);
 line1.shapeColor = "white"
 line2 = createSprite(500,200,1000,5);
 line2.shapeColor = "white"
 line3 = createSprite(500,300,1000,5);
 line3.shapeColor = "white"
 
 // creating the walls
 wall1 = createSprite(950, 50, 10, 70);
 wall1.shapeColor = "red"
 wall2 = createSprite(950,150,10,70);
 wall2.shapeColor = "green"
 wall3 = createSprite(950,250,10,70);
 wall3.shapeColor = "blue"
 wall4 = createSprite(950,350,10,70) 
 wall4.shapeColor = "yellow"

 // creating the speed, weight and deformation sprites 
 speed1 = random(55,90)
 speed2 = random(55,90)
 speed3 = random(55,90)
 speed4 = random(55,90)
 weight = random(400,1500);
 deformation = (0.5 * weight * speed1 * speed1)/22500
 deformation1 = (0.5 * weight * speed2 * speed2)/22500
 deformation2 = (0.5 * weight * speed3 * speed3)/22500
 deformation3 = (0.5 * weight * speed4 * speed4)/22500

 // creating a random speed for the cars
 car1.velocityX = speed1
 car2.velocityX = speed2
 car3.velocityX = speed3
 car4.velocityX = speed4
}

function draw() 
{
  background(0);  
 
// first car's deformation
  if(wall1.x - car1.x <= (wall1.width + car1.width)/2)
  {
   car1.velocityX = 0
   if(deformation < 80 )
   {
    textSize(30) 
    stroke("gold")
    fill("gold") 
    text("Deformation is Good",500,50)
   }

   if(deformation > 80 && deformation < 180)
   {
    textSize(30) 
    stroke("gold")
    fill("gold")
    text("Deformation is Average",500,50)
   }

   if(deformation > 180)
   {
    textSize(30) 
    stroke("gold")
    fill("gold")
    text("Deformation is Lethal",500,50)
   }
   
  }
// second car's deformation
  if(wall2.x - car2.x <= (wall2.width + car2.width)/2 )
  {
    car2.velocityX = 0
   if(deformation1 < 80 )
   {
    textSize(30) 
    stroke("gold")
    fill("gold") 
    text("Deformation is Good",500,150)
   }

   if(deformation1 > 80 && deformation1 < 180)
   {
    textSize(30) 
    stroke("gold")
    fill("gold")
    text("Deformation is Average",500,150)
   }

   if(deformation1 > 180)
   {
    textSize(30) 
    stroke("gold")
    fill("gold")
    text("Deformation is Lethal",500,150)
   }
  }

// third car's deformation
  if(wall3.x - car3.x <= (wall3.width + car3.width)/2 )
  {
    car3.velocityX = 0
   if(deformation2 < 80 )
   {
    textSize(30) 
    stroke("gold")
    fill("gold") 
    text("Deformation is Good",500,250)
   }

   if(deformation2 > 80 && deformation2 < 180)
   {
    textSize(30) 
    stroke("gold")
    fill("gold")
    text("Deformation is Average",500,250)
   }

   if(deformation2 > 180)
   {
    textSize(30) 
    stroke("gold")
    fill("gold")
    text("Deformation is Lethal",500,250)
   }
  }

 //fourth car's deformation 
  if(wall4.x - car4.x <= (wall4.width + car4.width)/2 )
  {
    car4.velocityX = 0
   if(deformation3 < 80 )
   {
    textSize(30) 
    stroke("gold")
    fill("gold") 
    text("Deformation is Good",500,350)
   }

   if(deformation3 > 80 && deformation3 < 180)
   {
    textSize(30) 
    stroke("gold")
    fill("gold")
    text("Deformation is Average",500,350)
   }

   if(deformation3 > 180)
   {
    textSize(30) 
    stroke("gold")
    fill("gold")
    text("Deformation is Lethal",500,350)
   }
  }

  // name of the cars
  textSize(15) 
  stroke("gold")
  fill("gold")
  text("MERCEDES",1100,350)

  textSize(15) 
  stroke("gold")
  fill("gold")
  text("BMW",1100,250)

  textSize(15) 
  stroke("gold")
  fill("gold")
  text("FERRARI",1100,150)

  textSize(15) 
  stroke("gold")
  fill("gold")
  text("PORSCHE",1100,50)
  drawSprites();
}