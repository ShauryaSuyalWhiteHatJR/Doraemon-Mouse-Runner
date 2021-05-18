var bgImg;
var gameState = "start"
var dora;
var dora_run;
var dora_collided;
var ground;

var obstacleGroup;
var themiceGroup;

var END = 0;
var score = 0;
var gameOver, restart;
var set;

function preload(){
  bgImg = loadImage("background.png");
  startImg = loadImage("Loading screen.png")
  playImg = loadImage("play button.png")
  dora_run = loadAnimation("dora.png","dora1.png","dora2.png","dora3.png","dora4.png","dora5.png");
  dora_collided = loadImage("dora jump.png");
  mouseImg = loadImage("mouse.png");
  mouse1 = loadImage("mouse1.png");
  mouse2 = loadImage("mouse2.png");
  mice = loadImage("m1.png");
  mice1 = loadImage("m2.png");
  mice2 = loadImage("m3.png");
  //platformImg = loadImage("platform.png");
  doraheadImg = loadImage("dorahead.png");
  nobiImg = loadImage("nobi.png");
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
 jump = loadSound("jump.mp3");

  mazeImg = loadImage("maz.png");
  wonImg = loadImage("won.png");
}


function setup() {
  createCanvas(1200,550);
  bg = createSprite(600,300,2000,10);
  bg.visible = true;
  play = createSprite(260,450);
  play.visible = true;
  ground = createSprite(200,525,10000,20);
  ground.static = true;
  ground.visible  = false;
  doraemon = createSprite(250,35,20,20);
  doraemon.addImage(doraheadImg);
  doraemon.visible = false;
  nobita = createSprite(1150,420,28.28)
  nobita.addImage(nobiImg);
  nobita.visible = false;
  dora = createSprite(100,470,120,200);
  dora.addAnimation("run",dora_run);
  dora.addImage(dora_collided);
  dora.visible = false;
  dora.scale = 0.7;
  gameOver = createSprite(580,150);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.8;
  restart = createSprite(580,350);
  restart.addImage(restartImg);
  restart.scale = 0.5;
  rect = createSprite(70,220,80,400);
  rect.isStatic = true;
  rect.visible = false;
  won = createSprite(600,280);
  won.scale = 0.9;
  won.addImage(wonImg);
  won.visible = false;
  rect1 = createSprite(210,198,80,250);
  rect1.isStatic = true;
  rect1.visible = false;
  rect2 = createSprite(470,269,80,160);
  rect2.isStatic = true;
  rect2.visible = false;
  rect3 = createSprite(335,328,80,154);
  rect3.isStatic = true;
  rect3.visible = false;
  rect4 = createSprite(210,424,80,130);
  rect4.isStatic = true;
  rect4.visible = false;
  rect5 = createSprite(120,413,80,100);
  rect5.isStatic = true;
  rect5.visible = false;
  rect6 = createSprite(370,453,200,30);
  rect6.isStatic = true;
  rect6.visible = false;
  rect7 = createSprite(340,174,80,90);
  rect7.isStatic = true;
  rect7.visible = false;
  rect8 = createSprite(500,45,80,100);
  rect8.isStatic = true;
  rect8.visible = false;
  rect9 = createSprite(400,80,300,20);
  rect9.isStatic = true;
  rect9.visible = false;
  rect10 = createSprite(400,10,1600,20);
  rect10.isStatic = true;
  rect10.visible = false;
  rect11= createSprite(400,540,1600,20);
  rect11.isStatic = true;
  rect11.visible = false;
  rect12 = createSprite(1100,510,1600,20);
  rect12.isStatic = true;
  rect12.visible = false;
  rect13 = createSprite(600,395,580,25);
  rect13.isStatic = true;
  rect13.visible = false;
  rect14 = createSprite(860,350,80,100);
  rect14.isStatic = true;
  rect14.visible = false;
  rect15 = createSprite(990,330,80,200);
   rect15.isStatic = true;
  rect15.visible = false;
 rect16= createSprite(990,90,80,200);
 rect16.isStatic = true;
  rect16.visible = false;
 rect17 = createSprite(1130,250,80,300);
  rect17.isStatic = true;
  rect17.visible = false;
  rect18 = createSprite(1050,130,80,100);
  rect18.isStatic = true;
  rect18.visible = false;
  rect19 = createSprite(1130,500,80,100);
  rect19.isStatic = true;
  rect19.visible = false;
 rect20 = createSprite(950,500,80,100);
  rect20.isStatic = true;
  rect20.visible = false;
 rect21 = createSprite(750,420,80,80);
  rect21.isStatic = true;
  rect21.visible = false;
  rect22 = createSprite(720,155,360,40);
 rect22.isStatic = true;
  rect22.visible = false;
  rect23 = createSprite(860,200,60,100);
  rect23.isStatic = true;
  rect23.visible = false;
  rect24 = createSprite(680,450,280,30);
  rect24.isStatic = true;
 rect24.visible = false;
 // rect25 = createSprite(332,184,80,100);
 // rect25.isStatic = true;
 // rect25.visible = false;
 // rect26 = createSprite(332,184,80,100);
  //rect26.isStatic = true;
 // rect26.visible = false;
 // rect27 = createSprite(332,184,80,100);
 // rect27.isStatic = true;
 // rect27.visible = false;
 // rect28 = createSprite(332,184,80,100);
  //rect28.isStatic = true;
 // rect28.visible = false;
 // rect29 = createSprite(332,184,80,100);
  //rect29.isStatic = true;
 // rect29.visible = false;
 // rect30 = createSprite(332,184,80,100);
 // rect30.isStatic = true;
 // rect30.visible = false;


  gameOver.visible = false;
  restart.visible = false;

  obstacleGroup = new Group(); 
  themiceGroup = new Group();
}

function draw() {
  {

  background('lightblue');  
  
   if (gameState === "start"){
   
   bg.addImage (startImg);
   bg.scale = 1;
   play.addImage(playImg);
   play.scale = 0.7;
   obstacleGroup.destroyEach();
   obstacleGroup.visible = false;
   obstacleGroup.lifetime = 0;
   themiceGroup.destroyEach();
   themiceGroup.visible = false;
   themiceGroup.lifetime = 0;
   
   if(mousePressedOver(play)){
    gameState = "play";
}
 }//end of start

if (gameState === "play"){
 score = score+Math.round(getFrameRate()/60);
 bg.addImage(bgImg);
 bg.scale = 0.7;
 bg.velocityX = -19
 play.visible = false;
 dora.visible = true;
 dora.velocityX = 0;
 dora.setCollider("circle",5,0,120);
 ground.visible = false;


}

  if(keyDown("space")&& dora.y >= 420 ){
    dora.velocityY = -20;
     jump.play()
  }


    dora.velocityY = dora.velocityY  +1.5;
      if (bg.x < 0){
      bg.x = bg.width/2;
    }
    if (score >= 600){
      gameState = "maze"
      bg.velocityX = 0;
    }
    spawnMouse();
    spawnFastMouse();


    
if(themiceGroup.isTouching(dora) || obstacleGroup.isTouching(dora)){
  
 gameState = END
}

}//end of play

    
 
      
  if (gameState === END) {
gameOver.visible = true;
restart.visible = true;
obstacleGroup.visible = false;
obstacleGroup.destroyEach();
themiceGroup.visible = false;
themiceGroup.destroyEach();
dora.y = 470;
dora.visible = false;
score = 0;

//dora.changeAnimation(dora_collided);

if(mousePressedOver(restart)){
  reset();
}

}//end of end

if (gameState === "maze"){
  bg.destroy();
  
  doraemon.visible = true;
  nobita.visible = true;
  play.visible = false;
 //restart.visible = true;

doraemon.scale = 0.0700;
nobita.scale = 0.124;
background("blue");
image(mazeImg,0,0,1200,550); 


  rect.visible = false;

  rect1.visible = false;

  rect2.visible = false;

  rect3.visible = false;

  rect4.visible = false;

  rect5.visible = false;

  rect6.visible = false;

  rect7.visible = false;

  rect8.visible = false;

  rect9.visible = false;

  rect10.visible = false;

  rect11.visible = false;

  rect12.visible = false;

  rect13.visible = false;

  rect14.visible = false;

  rect15.visible = false;

  rect16.visible = false;

  rect17.visible = false;

  rect18.visible = false;

  rect19.visible = false;

  rect20.visible = false;

  rect21.visible = false;
  
  rect22.visible = false;

  rect23.visible = false;




    rect24.visible = false;
  //  rect25.visible = true;
  //  rect26.visible = true;
  //  rect27.visible = true;
  //  rect28.visible = true;
   // rect29.visible = true;
  //  rect30.visible = true;
 
  
obstacleGroup.destroyEach();
themiceGroup.destroyEach();
dora.destroy();

  if(keyDown(RIGHT_ARROW)){
doraemon.x = doraemon.x+5;}
 
if(keyDown(LEFT_ARROW)){
  doraemon.x = doraemon.x-5;}

  if(keyDown(UP_ARROW)){
    doraemon.y = doraemon.y-5;}

    if(keyDown(DOWN_ARROW)){
      doraemon.y = doraemon.y+5;}


doraemon.bounceOff(rect);
doraemon.bounceOff(rect1);
doraemon.bounceOff(rect2);
doraemon.bounceOff(rect3);
doraemon.bounceOff(rect4);
doraemon.bounceOff(rect5);
doraemon.bounceOff(rect6);
doraemon.bounceOff(rect7);
doraemon.bounceOff(rect8);
doraemon.bounceOff(rect9);
doraemon.bounceOff(rect10);
doraemon.bounceOff(rect11);
doraemon.bounceOff(rect12);
doraemon.bounceOff(rect13);
doraemon.bounceOff(rect14);
doraemon.bounceOff(rect15);
doraemon.bounceOff(rect16);
doraemon.bounceOff(rect17);
doraemon.bounceOff(rect18);
doraemon.bounceOff(rect19);
doraemon.bounceOff(rect20);
doraemon.bounceOff(rect21);
doraemon.bounceOff(rect22);
doraemon.bounceOff(rect23);
doraemon.collide(rect24);
//doraemon.collide(rect25);
//doraemon.collide(rect26);
//doraemon.collide(rect27);
//doraemon.collide(rect28);
//doraemon.collide(rect29);

if(doraemon.isTouching(nobita)){
  gameState = "theend" ;
  
  }
  
if (gameState === "theend"){
  doraemon.destroy()
nobita.destroy()
  bg.destroy();
  image(wonImg,0,0,1200,550); 
  bg.visible = true;
  doraemon.visible = false;
  nobita.visible = false;
 doraemon.static = true; 
won.visible = true;
restart.visible = true;  
}
 










}//end of maze


dora.collide(ground);

drawSprites();
fill("white");
  text("Score: "+score,1100,50);

}//end of draw



function reset(){
  gameState = "play"
  gameOver.visible = false;
  restart.visible = false;
  
}


  

function spawnMouse() {
  if(frameCount % 90 === 0) {
    var obstacle = createSprite(1300,460,60,50);
    //obstacle.debug = true;
    obstacle.velocityX = -21
    obstacle.scale = 0.1; 
    obstacle.setCollider("circle",0,0,30);
    //obstacle.debug = true;
    //generate random obstacles
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(mouse2);
              break;
      case 2: obstacle.addImage(mouseImg);
              break;
      case 3: obstacle.addImage(mouse1);
              break;
      case 4: obstacle.addImage(mice2);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  
    dora.depth = obstacle.depth;
  dora.depth = dora.depth+1;
  }



}

function spawnFastMouse() {
  if(frameCount % 150 === 0) {
    var chuha = createSprite(2500,460,60,50);
   //obstacle.debug = true;
    chuha.velocityX = -40;
    chuha.scale = 0.1; 
    chuha.setCollider("circle",10,0,40);
    //chuha.debug = true;
    //obstacle.debug = true;
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: chuha.addImage(mice);
              break;
      case 2: chuha.addImage(mice1);
              break;
 
     
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    chuha.scale = 0.5;
    chuha.lifetime = 300;
    //add each obstacle to the group
    themiceGroup.add(chuha);
  
    dora.depth = chuha.depth;
  dora.depth = dora.depth+1;
  }



}




 




