
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var PLAY=0;
var END=1;
var gameState=PLAY;
function preload(){
  var time
  var score
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400)
  obstacle=new Group();
monkey=createSprite(50,350,20,20)
  monkey.addAnimation("monkey",  monkey_running)
  monkey.scale=0.1


ground=createSprite(0,390,900,10)
     banana=new Group();
  score=0;
  time=0
}

function draw() {
background("white")
textSize(15)
 text("YOUR SCORE="+score,280,30)
  text("SURVIVAL TIME="+time,100,30)
time = time + Math.round(frameCount %100===0);
   monkey.collide(ground)

  if(gameState===PLAY){
      if (keyDown("space")&& monkey.y >=200){
    monkey.velocityY=-15
  }
  
      monkey.velocityY = monkey.velocityY + 0.8
     if (frameCount % 200===0){
    obs();
     }
       if(frameCount % 100===0){
         ba();
       }
       
  if(  banana.isTouching(monkey)){
        banana.destroy()
    score=score+1
       }
  
  if(obstacle.isTouching(monkey)){
gameState=END;
  }
  }
  else if(gameState===END){
     obstacle.velocityX=0
         banana.velocityX=0
  }
  drawSprites();
}
function obs(){
   obstacle=createSprite(400,370,70,20)
  obstacle.addAnimation("obstaceImage", obstaceImage)
  obstacle.scale=0.1
  obstacle.velocityX=-5
    obstacle.lifetime=-1
}
function ba(){
  banana=createSprite(500,200,20,20)
  banana.addImage("b",bananaImage) 
  banana.scale=0.1
  banana.velocityX=-5
  banana.lifetime=-1
}




