var rocket
var alien
var island
var planet
var character
var creature
var animal
var gameState = "serve"


function preload() {

  rocket_img = loadImage("images/rocket.png")
  background_img = loadImage("images/space.jpg")
  planet_img = loadImage("images/planet1.png")

  
}


function setup() {
  createCanvas(800,400);
  
   rocket=createSprite(700, 200, 50, 50);
   planet=createSprite(100,200,50,50)
  
   rocket.addImage(rocket_img)
   rocket.scale = 0.20
   planet.addImage(planet_img)
   planet.scale = 0.40
}

function draw() {

  background(background_img);  
  if(gameState==="serve"){
   rocket.velocityX=-3
   if()
  }
  if(gameState==="play"){
   
  }
  if(gameState==="end"){

  }
  drawSprites();
  //if(gameState=0){
  fill("white")
  textFont("bold")
  textSize(20)
  text("Your rocket was on a space adventure and ran out of fuel.",100,100)
  
  text("It crashed into an alien planet",150,150)
//}
} 