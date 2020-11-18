var ground1;
var monkey,monkey_running;
var ground;
var banana,bananaImage,obstacle,obstacleImage;
var FoodGroup,obstacleGroup;
var score =0;

function preload()
{
   monkey_running =             loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup()
{
 createCanvas(600,600);
  
  // to create the monkey 
  monkeey=createSprite(80,315,20,20);
  monkeey.addAnimation("moving",monkey_running);
  monkeey.scale=0.1;
  
// to create the ground 
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  
  bananagrp=new Group();
  obstaclegrp= new Group();
  
}
function draw()
{
   background("lightblue");
  text("score "+score,500,100);
   
  if(ground.x<200){
    ground.x=400
    
  }
  
    //jump when the space key is pressed
    if(keyDown("space")&& monkeey.y >= 100)
    {
        monkeey.velocityY = -12;
       
    }
   //add gravity
    monkeey.velocityY = monkeey.velocityY + 0.8
  monkeey.collide(ground);
  
  if(monkeey.isTouching(bananagrp)){
    
    bananagrp.destroyEach();
    score=score+1;
   }
  
 
  
  obstacle2();
  banana1();
   drawSprites();    
  
}

function obstacle2 ()
{
if(frameCount%300===0)
  {
    obstacle=createSprite(400,320,10,10);
    obstacle.velocityX= -6;
    obstacle.scale=0.15;
    obstacle.addImage("obstacle3",obstacleImage);
    obstaclegrp.add(obstacle);
    obstacle.lifetime=100;
     
    var rand=Math.round(random(1,6));
   }
}

function banana1 ()
{
if(frameCount%60===0)
  {
    banana=createSprite(400,100,10,10);
    banana.velocityX= -6;
    banana.scale=0.10;
    banana.addImage("banana2",bananaImage);
    bananagrp.add(banana);
    banana.lifetime=100;
     
    var rand=Math.round(random(1,6));
   }
}

