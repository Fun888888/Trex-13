var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var score=0;
var cloud, cloudsGroup, cloudImage;
var obstacle1image;
var obstacle2image;
var obstacle3image;
var obstacle4image;
var obstacle5image;
var obstacle6image;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 obstacle1image=loadImage("obstacle1.png");
 obstacle2image=loadImage("obstacle2.png");
 obstacle3image=loadImage("obstacle3.png");
 obstacle4image=loadImage("obstacle4.png");
 obstacle5image=loadImage("obstacle5.png");
 obstacle6image=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("Score: " + score,500,50);
  score=score+Math.round(frameCount/60)
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
spawnObstacles();  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacles(){
  if(frameCount%60==0){
    var obstacle=createSprite(600,165,10,40);
  obstacle.velocityX=-3;
  var rand=Math.round(random(1,6));
  switch(rand){
    case 1:obstacle.addImage(obstacle1image);
    break;
    case 2:obstacle.addImage(obstacle2image);
    break;
    case 3:obstacle.addImage(obstacle3image);
    break;
    case 4:obstacle.addImage(obstacle4image);
    break;
    case 5:obstacle.addImage(obstacle5image);
    break;
    case 6:obstacle.addImage(obstacle6image);
    break;
    default:break;
  }
  obstacle.scale=0.5;
  obstacle.lifetime=300;
}
}