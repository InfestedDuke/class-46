var charecterrun,charecterrun1,charecterrun2,charecterrun3,charecterrun4,charecterrun5;
var backgroundimg,backgroundimg2;
var animationstand,animationshoot;
var bullet;
var zombie;
var gamestate= 'play';
var zombieGroup;
var gameOverImg;
var bulletGroup;
var gameWon;
var score=0;
function preload(){
backgroungimg = loadImage('images/12.jpg');
backgorundimg2 = loadImage('images/Main.jpg');
charecterrun = loadAnimation('images/Run 1.jpg','images/Run 2.jpg','images/run 3.jpg','images/run 4.jpg','images/run 5.jpg');
animationstand = loadAnimation('images/Standing.jpg');
animationshoot = loadAnimation('images/shooting.jpg');
bullet = loadAnimation('images/bullet.jpg');
zombie = loadAnimation('images/zombie stand.jpg','images/zombie walk 1.jpg','images/zombie walk 2.jpg');
gameOverImg = loadImage('images/gameOver.png');
gameWon = loadImage('images/win.jpg');
}
function setup(){
    createCanvas(1500,600);
    charecterrun1=createSprite(50,465,50,50);
    charecterrun1.addAnimation('stand',animationstand);
    charecterrun1.addAnimation('running',charecterrun);
    charecterrun1.addAnimation('shooting',animationshoot);
    zombieGroup = new  Group();
    bulletGroup = new  Group();
    gameOver = createSprite(750,300);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;
  gamewonI = createSprite(750,350);
  gamewonI.addImage(gameWon);
  gamewonI.visible = false;
}
function draw(){
background(backgroungimg);


if(gamestate==='play'){
    if(keyIsDown(RIGHT_ARROW)){
        charecterrun1.changeAnimation('running',charecterrun);
    }
    if( keyIsDown(87)){
        var bullets = createSprite(charecterrun1.x+50,445,50,50);
        bullets.scale = 0.15;
        bullets.velocityX = 3;
        bullets.addAnimation('bulletshot',bullet);
        bulletGroup.add(bullets);
    }
        if(frameCount % 100 === 0){
            var zombies = createSprite(1600,465,30,30);
            zombies.velocityX = -2;
            zombies.addAnimation('dead',zombie);
            zombieGroup.add(zombies);
           
        }
            if(keyIsDown(RIGHT_ARROW)){
                charecterrun1.changeAnimation('running',charecterrun);
            }
            if(zombieGroup.isTouching(charecterrun1)){
                gamestate = 'END';
            }
            if(bulletGroup.isTouching(zombieGroup)){
                gamestate = 'won' ;
                score = score+1;
            }
            
}
else if(gamestate === 'won'){
    
}
else if(gamestate==='END'){
    zombieGroup.destroyEach();
    charecterrun1.velocityX=0;
    zombieGroup.setVelocityEach=0;
    gameOver.visible = true;
    charecterrun1.destroy();
    bulletGroup.destroyEach();
    
}
fill('lime');
text('Score: '+score,1400,50);
    drawSprites();
}
function keyPressed(){
    if(keyCode === 39){
charecterrun1.x=charecterrun1.x+30;   
    }   
    if(keyCode === 83){
        charecterrun1.changeAnimation('shooting',animationshoot);
    }
    
    }
