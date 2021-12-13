var boy, boyImage;InvisibleGround, rock, croc, score, water;


function preload() {
    groundImage = loadImage("bg.jpg");
    boyDieImage = loadAnimation("boy1.png","boydie2.png")
    boyJumpImage = loadAnimation("boyjump1.png","boyjump2.png","boyjump3.png","boyjump4.png","boyjump5.png","boyJump6.png")
    boyRunImage = loadAnimation("boyRun.png","boyRun2.png","boyRun3.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight)

    ground = createSprite(300,50, 50, 50)
    ground.addImage("ground",groundImage)
    ground.velocityX=-6+3, width/300;
    ground.scale = 1.6;

    rock = createSprite(width,700)

    invisibleGround = createSprite(200,720,400,10)
    invisibleGround.visible = false;
    
    
     boy = createSprite(300,590)
     boy.addAnimation("run",boyRunImage)
     boy.addAnimation("jump",boyJumpImage)
     boy.addAnimation("boy",boyDieImage)
     boy.debug=true;      
}

function draw() {
    background("black")
    

    if(ground.x<0){
     ground.x = width/2
    }

    if(keyDown("space")){
      boy.velocityY = -12
    }

    boy.collide(invisibleGround)
   
   boy.velocityY = boy.velocityY + 0.8
    drawSprites();
}