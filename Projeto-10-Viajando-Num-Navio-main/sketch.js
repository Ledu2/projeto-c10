var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Plano de fundo móvel
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  if(keyDown("space") &&  ship.y >= 200){
    ship.velocityY = -10;
  }
  if(ship.y <= 160){
    ship.velocityY = 10;
  }
  if(ship.y >= 201){
    ship.velocityY = -10;
  }
// era pra ter um texto de que a pessoa que apertou espaço estaria
// afundando o navio, porém o codigo de texto não funcionou, então 
// o navio so vai ficar boiando quando apertar espaço.


  //código para redefinir o plano de fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }

  console.log(ship.y);

  drawSprites();
}