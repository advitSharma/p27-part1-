var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
    roof1= new Roof(280,200)
	bob1= new Bob(200,300);
	bob2= new Bob(240,300)
	bob3= new Bob(280,300);
	bob4= new Bob(320,300);
	bob5= new Bob(360,300);
	rope1=new Rope(bob1.body,{x:200,y:200})
	rope2=new Rope(bob2.body,{x:240,y:200})
	rope3=new Rope(bob3.body,{x:280,y:200})
	rope4=new Rope(bob4.body,{x:320,y:200})
	rope5=new Rope(bob5.body,{x:360,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();
  drawSprites();
 
}
if(keyPressedDown(UP_ARROW)){
	Matter.Body.applyForce(bob5,{x:420,y:200})	
}


