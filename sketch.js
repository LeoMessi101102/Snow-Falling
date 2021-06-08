const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var bg;
var engine,world;

function preload(){
bg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world;
  snow1= new Snow(random(10,790),0,50,50)
}

function draw() {
  Engine.update(engine)
  background(bg); 
  if(frameCount%50==0){
    snow1= new Snow(random(10,790),0,50,50)
  }
  snow1.display();
  drawSprites();
}