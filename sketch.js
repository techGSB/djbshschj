
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var gr;
var mango,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12;
var tree;
var boy,b1;
var bg,bg1;
var stone;

function preload()
{b1 = loadImage("boy.png");
bg1 = loadImage("t.png");
	
}

function setup() {
	createCanvas(1345, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	gr = new Ground(600,650,1500,20);
	
	tree = new Tree(1100,350,230,600);
	mango = new Mango(1050,200,40);
	m1 = new Mango(1070,200,40);
	m2 = new Mango(1070,250,40);
	m3 = new Mango(1130,80,40);
	m4 = new Mango(1070,110,40);
	m5 = new Mango(1010,280,40);
	m6 = new Mango(1040,330,40);
	m7 = new Mango(1187,310,40);
	m8 = new Mango(1187,230,40);
	m9 = new Mango(1167,180,40);
	m10 = new Mango(1107,310,40);
	boy = createSprite(200,518,100,20);
	boy.addImage(b1);
	
	boy.scale =0.2

	






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("t.png");
  
  gr.display();
  tree.display();
  mango.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();

  detectollision(stone,mango);
  detectollision(stone,m1);
  detectollision(stone,m2);
  detectollision(stone,m3);
  detectollision(stone,m4);
  detectollision(stone,m5);
  detectollision(stone,m6);
  detectollision(stone,m7);
  detectollision(stone,m8);
  detectollision(stone,m9);
  detectollision(stone,m10);
  detectollision(stone,m11);
  detectollision(stone,m12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body , false);
 } 

  
  
  drawSprites();
 
}



