
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;
var ground;
var paper,paperobject;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall2= new Box(1050,550,20,140);

    wall3= new Box(1250,550,20,140);

	wall1 = new Box(1055,520,200,140);


	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);

	paper = new Paper();
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 

  wall1.display();
  //wall2.display();
  //wall3.display();
  paper.display(); 
  fill("brown")
  rect(width/2,height-35,width,20,)


}

function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
console.log("keyCode");
}
} 