var car;
var carImg;
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
var road=[];
var obstacleCars=[];

function preload(){
  roadImg=loadImage("yellow.png");
  carImg=loadImage("car1.png");
  obstacleCarsImg=loadImage("car1.png");
  lifeImg=loadImage("emoji4.png.jpg");
  restartImg=loadImage("restart2.png");
  gameOver=loadImage("gameOver.png");
}

function setup(){
var canvas=createCanvas(800,400);
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
  if (frameCount%60===0) {
    obstacleCars.push(new ObstacleCars());
  }
  for (var i = 0; i < obstacleCars.length; i++) {
    obstacleCars[i].show();
    obstacleCars[i].move();
  }
  if (frameCount%60===0) {
    road.push(new YellowLines());
  }
  for (var i = 0; i < road.length; i++) {
    road[i].show();
    road[i].move();
  }

  text("SCORE "+count,600,100);
  textFont=35;
  car.update();
  car.show();

if (gameState===PLAY) {
  count=count+Math.round(getFrameRate()/60);
if (keyIsDown(LEFT_ARROW)) {
  car.move(-2,0)
} else if(keyIsDown(RIGHT_ARROW)) {
  car.move(2,0)
}

if (car.isTouching(obstacleCars)) {
  gameState=END;
}
}

else if(gameState===END){
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

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  obstacleCarsGroup.destroyEach();
  count=0;
  lifeImages.pop();
}