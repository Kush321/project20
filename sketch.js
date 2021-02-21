var bg;
var bgImg;
var tom;
var tom, toms, tomm, tombj, jerryc, jerryt, jerrybt, jerryImg, jerry;
function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    toms=loadImage("cat1.png");
    tomm=loadAnimation("cat2.png","cat3.png");
    tombj=loadImage("cat4.png");
    jerryc=loadImage("mouse1.png");
    jerryt=loadAnimation("mouse2.png","mouse3.png");
    jerrybt=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    bg=createSprite(500,400);
    bg.addImage("bgi", bgImg);
    //create tom and jerry sprites here
    tom=createSprite(800,650);
    tom.addImage("tim", toms);
    tom.scale=0.15;
    jerry=createSprite(200,650);
    jerry.addImage("jim", jerryc);
    jerry.scale=0.13;
    //jerry.debug=true;
    //tom.debug=true;
    jerry.setCollider("rectangle",0,0,400,800);
    tom.setCollider("rectangle",0,0,1000,800);
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(keyWentDown(LEFT_ARROW)){
        keyPressed();
    }
    if(jerry.isTouching(tom)){
        tom.addImage("tim",tombj);
        tom.velocityX=0;
        jerry.addImage("jim", jerrybt);
    }
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
        tom.velocityX=-5;
        tom.addAnimation("tim",tomm);
        jerry.addAnimation("jim",jerryt);
}
