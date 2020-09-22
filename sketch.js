var tower,towerImage;
var door,doorImg;
var climber;
var ghost,ghostImg,ghostj;
var PLAY
var END
var gameState= PLAY
function preload(){
  towerImage=loadImage("tower.png");
  doorImg=loadImage("door.png")
  climberImage=loadImage("climber.png")
  ghostImg=loadImage("ghost-standing.png")
  ghostj=loadImage("ghost-jumping.png");
}




function setup(){
  createCanvas(600,600)
  tower=createSprite(300,300,600,600);
  tower.addImage("ss",towerImage);
  tower.velocityY=-5;
  
  ghost=createSprite(300,300,30,30);
  ghost.addImage("j",ghostImg);
  ghost.scale=0.4
  
  
}



function draw(){
  background("white");
  
  if (gameState===PLAY){
    
  if (tower.y<0){
    tower.y=tower.width/2;
    
  }
  
  if(keyDown("space")){
   ghost.velocityY=-2; 
   ghost.addImage("ss",ghostj)
  }
  
  if (keyDown("right")){
   ghost.x=ghost.x+3 
    
  }
  
  
  
  if (keyDown("left")){
   ghost.x=ghost.x-3 
    
  }
  
  
  ghost.velocityY=ghost.velocityY+0.8;
  
  if(ghost.y>600){
   gameState=END;
   
  } 
  
 spawnDoor(); 
  drawSprites();
  }
  
  if(gameState===END){
  text("GAMEOVER",200,200);  
  }
}


function spawnDoor(){
  if(frameCount%170===0){
  door=createSprite(200,100,30,70);  
  door.addImage("rsr",doorImg);
  door.velocityY=2;  
  door.x=Math.round(random(200,450)) 
  climber=createSprite(200,150,50,20);
  climber.addImage("ss",climberImage);
  climber.velocityY=2; 
   climber.x=door.x   
    climber.lifetime=200;
    door.lifetime=200;
  }
  
  
}
