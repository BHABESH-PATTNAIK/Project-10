var ship, ship_running,edges;
var seaImage;
var sea;


function preload(){
ship_running=loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png")


}

function setup(){
  createCanvas(1200,600);


  //creating sea 
  sea =createSprite(200,200,1,1)
  sea.addImage ("sea",seaImage)


  // creating ship
  ship = createSprite(200,300,300,30)
  ship.addAnimation("running",ship_running)
  edges = createEdgeSprites()

//adding scale and position to ship
ship.scale =0.5
ship.x=290


}

function draw() {
  background("white");

  sea.velocityX =-3

if(sea.x<0)
{sea.x =sea.width/2}


 drawSprites();
}