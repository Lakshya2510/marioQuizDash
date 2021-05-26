var ground;
var mario ,mario_running;
var edges;
var invisibleGround;
var cloudHeight;
var obstacle1Image;
var obstacle2Image;
var obstacle3Image;
var obstacle4Image;
var obstacle5Image;
var obstacle6Image;
var selectObstacles;
var score = 0;
const START = 0;
const PLAY = 1;
const END = 2;
var gameState = START;
var form;
var cloudsGroup;
var obstacleGroup;
var marioCollided;
var gameOverImage, gameOver;
var resetImage,reset;
var jumpSound;
var checkPointSound;
var dieSound;
var highScore = 0;

function preload(){
  mario_running = loadAnimation("marioRunning.png","marioRunning2.png","marioRunning3.png","marioRunning4.png","marioRunning5.png",
  "marioRunning6.png","marioRunning7.png","marioRunning8.png","marioRunning9.png","marioRunning10.png","marioRunning11.png","marioRunning12.png");
  marioCollided = loadAnimation("Mario_collided.png");
  ground_moving = loadImage("background1.jpg");
  cloud_image = loadImage("Cloud.png");
  obstacle1Image = loadImage("Browser.png");
  obstacle2Image = loadImage("Blooper.gif");
  obstacle3Image = loadImage("Goomba.png");     
  obstacle4Image = loadImage("Bull_Wario.png");
  gameOverImage = loadImage("gameOver.jpg");
  resetImage = loadImage("restart.png");
  //jumpSound = loadSound("jump.mp3");
  //checkPointSound = loadSound("checkPoint.mp3");
  //dieSound = loadSound("die.mp3");
  
}

function setup(){
  createCanvas(1000,600)
  
  game =new Game();
  game.start();
  
  edges = createEdgeSprites();
  
  
}

function draw(){
  background("grey")

  if(gameState == START){
    form.display();
  }

  if(gameState == PLAY){
    game.play();
    console.log(gameState)
  }
  

  text(`score={score}`,500,50);
  text("Best="+highScore,500,65);

  if(gameState == END){
    
    ground.velocityX = 0;  
    cloudsGroup.setVelocityXEach(0);
  obstaclesGroup.setVelocityXEach(0);
  cloudsGroup.setLifetimeEach(-1);
  obstaclesGroup.setLifetimeEach(-1);
  gameOver.visible = true;
  reset.visible = true;
  if(mousePressedOver(reset)){
    resetGame();
  }
  
 }
 cloudsGroup = new Group();
 obstaclesGroup = new Group();

  
  drawSprites();

}

function resetGame(){
  
  gameState = PLAY;
  reset.visible = false
  gameOver.visible = false
  ground.velocityX = -8; 
  obstaclesGroup.destroyEach()
  cloudsGroup.destroyEach()
  mario.changeAnimation("running", mario_running)
  if(score>highScore){
  highScore = score;}
  score = 0;  
}

function spawnClouds(){
 if(frameCount % 100 == 0) {
  cloudHeight=Math.round(random(50,300))
  var clouds = createSprite(1000,cloudHeight,20,10)
  clouds.addImage(cloud_image);
  clouds.scale = 0.5
  clouds.velocityX = -2
  clouds.lifetime = 500;
  cloudsGroup.add(clouds) 
 }
}

function spawnObstacles(){
  if(frameCount % 200 == 0){
    var obstacles = createSprite(1000,420,50,20) 
    obstacles.scale = 0.4
    obstacles.velocityX = -5 - score / 100
    obstacles.lifetime = 180;
    obstaclesGroup.add(obstacles);
    selectObstacles = Math.round(random(1,4));
    switch(selectObstacles){
      case 1:obstacles.addImage(obstacle1Image);
      break;
      
      case 2:obstacles.addImage(obstacle2Image);
      break;
      
      case 3:obstacles.addImage(obstacle3Image);
      break;
      
      case 4:obstacles.addImage(obstacle4Image);
      break;
      
      default:break;
    }
  }
}