/*var fixedRect,movingRect,gameObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 40, 50);
  movingRect=createSprite(400, 200, 80, 20);
  gameObject1=createSprite(300,150,50,50);
  gameObject2=createSprite(370,300,50,90);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
 gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
}

function draw() {
  background(0,0,0); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if (isTouching(gameObject1,movingRect)) {
  gameObject1.shapeColor="red";
     movingRect.shapeColor="red";
 }
 else{
  gameObject1.shapeColor="green";
    movingRect.shapeColor="green";
 }
  drawSprites();
}*/

var car;
var carImg;
var backgroundImg;
var backgroundRoad;
var invisibleBack;
var backgroundRoad2;
var obstacleCarsImg;
var obstacleCarsGroup;
var PLAY=1;
var END=0;
var gameState=PLAY;
var count=0;
var life1;
var life2;
var life3;
var lifeImg;
var restart;
var gameOver="Game Over";
var restartImg;
var gameOverImg;
lifeImages=[life1,life2,life3];

function preload(){
  backgroundImg=loadImage("road.jpg");
  carImg=loadImage("car1.png");
  obstacleCarsImg=loadImage("car1.png");
  lifeImg=loadImage("emoji4.png.jpg");
  restartImg=loadImage("restart2.png");
  gameOver=loadImage("gameOver.png");
}

function setup(){
var canvas=createCanvas(800,400);
//backgroundImg.scale=0.4

backgroundRoad=createSprite(195,300,200,200);
backgroundRoad.addImage(backgroundImg);

backgroundRoad2=createSprite(195,200,400,400);
backgroundRoad2.addImage(backgroundImg);

invisibleBack=createSprite(195,400,400,400);
invisibleBack.visible=false;

backgroundRoad.y = backgroundRoad.height /2;
backgroundRoad2.y = backgroundRoad2.height /2;

car=new PlayerCar();
obstacleCarsGroup=new Group();

life1=createSprite(650,200,20,20);
life2=createSprite(650,275,20,20);
life3=createSprite(650,350,20,20);
lifeImg.scale=0.9;
life1.addImage(lifeImg);
life2.addImage(lifeImg);
life3.addImage(lifeImg);
lifeImg.scale=0.5

restart=createSprite(200,200,20,20);
restart.addImage(restartImg);
restart.visible=false;
gameOver=createSprite(200,100,20,20);
//gameOver.addImage(gameOverImg);
gameOver.visible=false;

}

function draw(){
  background(0);
  text("SCORE "+count,600,100);
  textFont=35;
  car.update();
  car.show();
if (gameState===PLAY) {
  count=count+Math.round(getFrameRate()/60);
  backgroundRoad.velocityY=5;

  if (backgroundRoad.y>200) {
    backgroundRoad.y = backgroundRoad.height /2;
  }

  backgroundRoad2.velocityY=5;
  if (backgroundRoad2.y>370) {
    backgroundRoad2.y = backgroundRoad2.height /2;
  }

if (keyIsDown(LEFT_ARROW)) {
  car.move(-2,0)
} else if(keyIsDown(RIGHT_ARROW)) {
  car.move(2,0)
}

spawnObstacleCars();
if (car.touch(obstacleCarsGroup)) {
  gameState=END;
}
}

else if(gameState===END){
backgroundRoad.velocityY=0;
backgroundRoad2.velocityY=0;
car.move(0,0);
obstacleCarsGroup.setVelocityXEach(0);
obstacleCarsGroup.setLifetimeEach(-1);
restart.visible=true;
gameOver.visible=true;
life1.visible=false;
if(mousePressedOver(restart)) {
  reset();
}
}
 drawSprites();
}

function spawnObstacleCars(){
  if (frameCount%100===0) {
    obstacleCars=createSprite(20,0,20,20);
    obstacleCars.x=random(50,350);
    obstacleCars.addImage(obstacleCarsImg);
    obstacleCars.velocityY=5;
    obstacleCarsGroup.add(obstacleCars);
  }
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  obstacleCarsGroup.destroyEach();
  count=0;
  lifeImages.pop();
}