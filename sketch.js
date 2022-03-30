var trex, ground,trex_running, edges;
var groundImage;

function preload(){
 groundImage = loadImage("ground2.png");
 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
  createCanvas(600,200);
  ground = createSprite(300,190,600,10);
  ground.addImage(groundImage);
  ground.velocityX = -5;

  trex = createSprite(50,160,10,40)
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5
  }


function draw(){
  background("black");
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
   drawSprites();
}