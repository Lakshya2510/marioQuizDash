class Game{

constructor(){

}

start(){

  form=new Form()

}

play(){

    
        gameOver.visible = false;
        reset.visible = false; 
        score=score+Math.round(getFrameRate() / 60);
        
        if(keyDown("space") && mario.y>450){
          mario.velocityY = -10;
          //jumpSound.play()
        } 
        console.log(mario.y)
        if(score % 100 == 0 && score>0){
          //checkPointSound.play() 
          ground.velocityX = ground.velocityX -1;
        }
        if(ground.x <0){
          ground.x = ground.width/2
        }
        spawnClouds();
        spawnObstacles();
        
        if(mario.isTouching(obstaclesGroup)){
          gameState = END; 
          mario.changeAnimation("marioCollided", marioCollided);
          //dieSound.play() 
        }

        mario.velocityY = mario.velocityY+ 0.5;
        mario.collide(invisibleGround); 

}

}