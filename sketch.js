
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,paperObject,groundObject
var world

var paper

var ground
var dustbin
function preload()
{
	

dustbinObject = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1= new Dustbin(500,460,200,200)

ground= new Ground(width/2, height-35, width,10)
paper= new Paper(100,620,28)

Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
paper.display()
ground.display()
dustbin1.display()
}

function keyPressed(){

	if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x : 20 ,y:-35})
		
	}
	

}

