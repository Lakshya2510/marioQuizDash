class Form{
    constructor(){
       this.input = createInput('name')
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.startButton = createButton('Start')
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
        this.input.hide();
        this.startButton.hide();

    }
    display() {
        this.title.html("MARIO QUIZ DASH");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.input.position(300,500)
        this.input.style('width', '300px')
        this.input.style('height', '40px')
        
        this.button.mousePressed(() => {
            this.button.hide();
            this.input.hide();
            this.greeting.html("Hello " + this.input.value())
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
            text("Rules", 400, 300)
            this.startButton.position(400,400)
            this.startButton.style('width', '200px');
            this.startButton.style('height', '40px');
            this.startButton.style('background', 'lightpink');

        });

        this.startButton.mousePressed(() => {
            this.hide();
            clear();

            ground = createSprite(300,250,600,40)
            ground.addImage(ground_moving)
          
            //create a mario sprite
            mario = createSprite(250,400,20,50);
            mario.addAnimation("marioRunning", mario_running);
            mario.scale = 0.3
            //mario.setCollider("rectangle", 0,0,150,mario.height );
            mario.debug = true
            
            invisibleGround = createSprite(300,520,600,5)
            invisibleGround.visible=false;
            cloudsGroup = new Group();
            obstaclesGroup = new Group();
            
            gameOver = createSprite(300,200,20,10)
            gameOver.addImage(gameOverImage)
            gameOver.scale = 0.5;
            
            reset = createSprite(300,150,20,10)
            reset.addImage(resetImage)
            reset.scale = 0.7;

            gameState = PLAY

        })

    }
}
