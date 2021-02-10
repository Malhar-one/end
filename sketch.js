var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26
var ball
var corona_image
var saniti1

var man_img
var bacimg
var trax_image
var ground

var ground_img
var trex 
var END1 = 2
var PLAY = 1;

var END = 0;
var gamestate;
var button
var b12o

var button_img
var covideo
var skip
var frontimg

var skip_img
var invisible_ground
var score = 50;
var END2 = 3

var END3 = 4
var button2
var loselv2
var vaccineimg

var button3
var buttonend
var end
var lv2w

var END4 = 5
var button3_img
var buttone_img

function preload(){
corona_image = loadAnimation("images/c1.png","images/c2.png");
man_img = loadAnimation("images/run1.png","images/run2.png","images/run3.png")
saniti1 = loadImage("images/sani1.png")
bacimg = loadImage("images/back.jpg");
trax_image = loadImage("images/bg.jpg")
ground_img = loadImage("images/ground2.png")
b12o = loadImage("images/121.jpg")
button_img = loadImage("images/clicktra.png")
covideo = createVideo("images/coronavideo.mp4")
skip_img = loadImage("images/skiptext.png")
loselv2 = loadImage("images/lv2lose.png")
vaccineimg = loadImage("images/vaccine.png")
end = loadImage("images/end.jpg")
lv2w = loadImage("images/lv2won.png")
button3_img = loadImage("images/clicktra.png")
buttone_img = loadImage("images/clicktra.png")
}
function setup(){
  
  createCanvas (displayWidth,displayHeight)
  corona = createSprite(200,180,20,20);
  corona.addAnimation("corona",corona_image);
  corona.scale = 0.25
  corona.visible = false;


  corona1 = createSprite(325,285,20,20);
  corona1.addAnimation("corona",corona_image);
  corona1.scale = 0.25;
  corona1.visible = false;
  corona2 = createSprite(335,284,20,20);
  corona2.addAnimation("corona",corona_image);
  corona2.scale = 0.25;
  corona2.visible = false;

    ball = createSprite(52, 19 ,10 ,10);
    ball.addAnimation("men",man_img);
    ball.scale = 0.1;
    ball.setCollider("circle", 0, 0, 40);
ball.visible = false;


    button = createSprite(200,200,20,20)
button.visible = false;

ground = createSprite(displayWidth/2,displayHeight/2)
ground.visible = false;

invisible_ground = createSprite(displayWidth/2,displayHeight/2-100,displayWidth,10);
invisible_ground.visible = false;

     wall1 = createSprite(10,70 , 10 ,300);
     wall2 = createSprite(210, 215 ,400,10);
     wall3 = createSprite(90, 27 ,10,160);
     wall4 = createSprite(120, 160 ,70 ,10);
     wall5 = createSprite(130,105  , 90 ,10);
     wall6 = createSprite(400, 160 , 500 ,10);
     wall7 = createSprite(250, 95 , 10 ,120);
     wall8 = createSprite(370, 160 ,70 ,10);
     wall9 = createSprite(400, 80,10 ,165);
     wall10 = createSprite(400, 285 ,300 ,10);
     wall11 = createSprite(650, 220 , 10 ,130);
     wall13 = createSprite(470,85 , 150 ,10);
     wall14 = createSprite(550, 85 ,10 , 80);
     wall15 = createSprite(30, 350,70,10);
     wall16 = createSprite(60 , 400 ,10 ,90);
     wall17 = createSprite(450, 350 ,600 ,10);
     wall18 = createSprite(545, 220 ,10 ,130);
     wall19  = createSprite(150 , 450 ,300,10);
     wall20 = createSprite(295, 470 , 10 ,30);
     wall21 = createSprite(380, 400 ,10 ,100);
     wall22 = createSprite(150, 360, 10 ,30);
     wall23 = createSprite(745 , 370 ,10 ,30);
     wall24 = createSprite(830 , 200, 10 ,400);
     wall25 = createSprite(390 ,490,200,10);
     wall26 = createSprite(490,420 ,10,150)
     skip = createSprite(displayWidth-200,displayHeight/2-150 ,10,10)
     button2 = createSprite(200,200,20,20)
     button2.visible = false;
     button2.addImage(button_img);

     button3 = createSprite(250,200,20,20)
button3.visible = false;
button3.shapeColor = "red"
button3.addImage(button3_img);

buttonend = createSprite(200,200,20,20)
buttonend.visible = false;
buttonend.addImage(buttone_img);


     wall1.visible = false;
     wall2.visible = false;
     wall3.visible = false;
     wall4.visible = false;
     wall5.visible = false;
     wall6.visible = false;
     wall7.visible = false;
     wall8.visible = false;
     wall9.visible = false;
     wall10.visible = false;
     wall11.visible = false;
     wall13.visible = false;
     wall14.visible = false;
     wall15.visible = false;
     wall16.visible = false;
     wall17.visible = false;
     wall18.visible = false;
     wall19.visible = false;
     wall20.visible = false;
     wall21.visible = false;
     wall22.visible = false;
     wall23.visible = false;
     wall24.visible = false;
     wall25.visible = false;
     wall26.visible = false;

    


     sanisGroup = new Group()
     covidGroup = new Group()

    
    
     won = createSprite(520,400 , 50 ,50);
     won.visible = false;
    
    
    
    ball.shapeColor = ("yellow");
    wall1.shapeColor = ("aqua");
    wall2.shapeColor = ("aqua");
    wall3.shapeColor = ("aqua");
    wall4.shapeColor = ("aqua");
    wall5.shapeColor = ("aqua");
    wall6.shapeColor = ("aqua");
    wall7.shapeColor = ("aqua");
    wall8.shapeColor = ("aqua");
    wall9.shapeColor = ("aqua");
    wall10.shapeColor = ("aqua");
    wall11.shapeColor = ("aqua");
    won.shapeColor = ("gold");
    wall13.shapeColor = ("aqua");
    wall14.shapeColor = ("aqua");
    wall15.shapeColor = ("aqua");
    wall16.shapeColor = ("aqua");
    wall17.shapeColor = ("aqua");
    wall18.shapeColor = ("aqua");
    wall19.shapeColor = ("aqua");
    wall20.shapeColor = ("aqua");
    wall21.shapeColor  = ("aqua");
    wall22.shapeColor = ("aqua");
    wall23.shapeColor = ("aqua");
    wall24.shapeColor = ("aqua");
    wall25.shapeColor = ("")
   wall26.shapeColor = ("aqua")
    won.addImage(saniti1);
    won.scale = 0.2;
    
    corona.velocityX = 5;
    corona1.velocityY = 5;
    corona2.velocityX = 5;
}
function draw() {
  covideo.loop()
  skip.addImage(skip_img);
 
  
   stroke("blue");  
  textFont("Freestyle Script");
textSize(35);

console.log(gamestate)


edges = createEdgeSprites();
corona.bounceOff(edges)
corona1.bounceOff(edges)
corona2.bounceOff(edges)
corona.bounceOff(wall25)
corona1.bounceOff(wall25)
corona2.bounceOff(wall25)
corona.bounceOff(wall24)
corona1.bounceOff(wall24)
corona2.bounceOff(wall24)
if(mousePressedOver(skip)){
  covideo.stop()
  covideo.hide()
  
  gamestate = PLAY;
}

if(gamestate === PLAY){
  covideo.stop()
  buttonend.visible = false
  skip.visible = false;
  background(bacimg); 
  wall1.visible = true;
  wall2.visible = true;
  wall3.visible = true;
  wall4.visible = true;
  wall5.visible = true;
  wall6.visible = true;
  wall7.visible = true;
  wall8.visible = true;
  wall9.visible = true;
  wall10.visible = true;
  wall11.visible = true;
  wall13.visible = true;
  wall14.visible = true;
  wall15.visible = true;
  wall16.visible = true;
  wall17.visible = true;
  wall18.visible = true;
  wall19.visible = true;
  wall20.visible = true;
  wall21.visible = true;
  wall22.visible = true;
  wall23.visible = true;
  wall24.visible = true;
  wall25.visible = true;
  wall26.visible = true;
  won.visible = true;
 
  
  ball.visible = true;
  corona.visible = true;
  corona1.visible = true;
  corona2.visible = true;

 
ball.velocityX = 0;
ball.velocityY = 0; 

  if (keyDown("up")) {
    ball.velocityX = 0;
    ball.velocityY = -5;
            
      
       
     }
      
    if (keyDown("down")) {
        ball.velocityX = 0;
    ball.velocityY = 5;
      }
        
     
      if (keyDown("right")) {
        ball.velocityX = 5;
    ball.velocityY = 0;
      }
      
      if (keyDown("left")) {
        ball.velocityX = -5;
    ball.velocityY = 0;
      }
       // if (ball.isTouching(wall1  )|| ball.isTouching(wall2  ) ||  ball.isTouching(wall3  )||  ball.isTouching(wall4  ) ||  ball.isTouching(wall5  ) ||  ball.isTouching(wall6  ) ||  ball.isTouching(wall7  ) || ball.isTouching(wall8  ) ||  ball.isTouching(wall9  )||  ball.isTouching(wall10  ) ||  ball.isTouching(wall11  ) ||  ball.isTouching(wall13  )  ||   ball.isTouching(wall14  ) || ball.isTouching(wall15  ) ||  ball.isTouching(wall16 )  || ball.isTouching(wall17  )  || ball.isTouching(wall18  )  ||  ball.isTouching(wall19  ) ||  ball.isTouching(wall20  ) ||  ball.isTouching(wall21  ) ||  ball.isTouching(wall22  ) ||  ball.isTouching(wall23  ) ||  ball.isTouching(wall24  )|| ball.isTouching(corona) || ball.isTouching(corona1) || ball.isTouching(corona2 ) ) {
//   ball.x = 52;
//   ball.y = 19;
 //  textSize(70);
 //  text("retry", 234, 36);
//   ball.velocityX = 0;
//   ball.velocityY = 0;

    
//  }
if (ball.isTouching(edges)) {
  ball.x = 52;
  ball.y = 19;
   textSize(70);
  text("retry", 234, 36);
}

if(ball.isTouching(won)){
  gamestate = END;
}

}
else if (gamestate === END){
  background("white");
  textSize(70);
  text("you won", 234, 36);
  corona.visible = false;
  corona1.visible = false;
  corona2.visible = false;

  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  wall10.visible = false;
  wall11.visible = false;
  wall13.visible = false;
  wall14.visible = false;
  wall15.visible = false;
  wall16.visible = false;
  wall17.visible = false;
  wall18.visible = false;
  wall19.visible = false;
  wall20.visible = false;
  wall21.visible = false;
  wall22.visible = false;
  wall23.visible = false;
  wall24.visible = false;
  wall25.visible = false;
  wall26.visible = false;

  won.visible = false;
  ball.visible = false;
   background(b12o)
   button.visible = true;
   button.x = 600;
   button.y =300;
   button.addImage(button_img);
   
  if(mousePressedOver(button)){
    covideo.stop()
    gamestate = END1;
    ball.x = displayWidth-1200
ball.y = displayHeight-700
    
  }

}
 if(gamestate === END1){
  background(trax_image)
  text("life = "+ score,displayWidth/3+400,displayHeight/2-200)
  stroke("black")
  fill("black")
  text("Collect more vaccine to win the game",displayWidth/3+50,displayHeight/2-200)
  if(covidGroup.isTouching(ball)){
    score = score -40
    covidGroup.destroyEach()
  }
  if(sanisGroup.isTouching(ball)){
    score = score + 300
    sanisGroup.destroyEach()
  }
 
  covideo.stop()
ground.visible = true;
ground.addImage(ground_img)
ground.velocityX = -5
button.visible = false;


if (ground.x < 0){
  ground.x = ground.width/2;
}
if(keyDown("space")){
  ball.velocityY = -7 

}
ball.velocityY = ball.velocityY + 0.2
ball.visible = true;
ball.collide(invisible_ground)
ball.scale = 0.5;
ball.velocityX = 0;
spawnSanitzer()
spawncorona()
if(score >= 300){
background(lv2w)
button3.visible = true;
ground.visible = false;
sanisGroup.destroyEach()
covidGroup.destroyEach()
won.visible = false;
ball.visible = false

}
if(score <= 0){
  background(loselv2)
  ground.visible = false;
  sanisGroup.destroyEach()
  covidGroup.destroyEach()
  won.visible = false;
  button2.visible = true;
  ball.visible = false

}
if(mousePressedOver(button2)){
  ball.x = 52
  ball.y = 19
  ball.scale = 0.1;
 
  score = 50;
  button2.visible = false;
  gamestate = PLAY;
  

}
if(mousePressedOver(button3)){
  score = 50
  gamestate = END4
  covideo.stop()
;
 
}


}
if(gamestate === END4){
  background(end)
  button3.visible = false
  covideo.stop()
  buttonend.visible = true
}
if(mousePressedOver(buttonend)){
  gamestate = PLAY;

}

drawSprites();
}
function spawnSanitzer() {
  //write code here to spawn the sanis
  if (frameCount % 1000  === 0) {
    sani = createSprite(displayWidth,displayHeight/2-100);
   // sani.y = Math.round(random(10,60));
    sani.addImage(vaccineimg);
    sani.scale = 0.05;
    sani.velocityX = -7;
   
     //assign lifetime to the variable
    sani.lifetime = displayWidth/3;
   
    //adjust the depth
    sanisGroup.add(sani)}
  }

  function spawncorona() {
    //write code here to spawn the sanis
    if (frameCount % 150  === 0) {
      sani1 = createSprite(displayWidth,displayHeight/2-100);
     // sani.y = Math.round(random(10,60));
      sani1.addAnimation("fdh",corona_image);
      
      sani1.velocityX = -7;
      sani1.scale = 0.5;
     
       //assign lifetime to the variable
      sani1.lifetime = displayWidth/3;
     
      //adjust the depth
      covidGroup.add(sani1)}
    }