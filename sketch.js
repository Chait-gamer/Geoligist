
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var hammer1;
var stone1;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(400,680,800,20);
	hammer = new Hammer(500,500);
	stone = new Stone(500,300,100,75);
	rubber = new Rubber(500,20,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  hammer.display();
  stone.display();
  rubber.display();
  
  drawSprites();
 
}