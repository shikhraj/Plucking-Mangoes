
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var backgroundImg;
var stone;
var tree, treeImg;
var boy, boyImg;
var constraint;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;
var ground;


function preload()
{
	backgroundImg = loadImage("garden1.jpg");
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(200,600,100);
	// tree = new Tree(1350,360,400,750);
	// boy = new Boy(400, 600, 300, 400);
	ground = new Ground(800,710,1600,10);
	constraint = new Chain(stone.body, {x:150,y:500});
	mango1 = new Mango(1350, 180, 50);
	mango2 = new Mango(1250, 100, 50);
	mango3 = new Mango(1400, 100, 50);
	mango4= new Mango(1500, 230, 50);
	mango5 = new Mango(1200, 100, 50);
	mango6 = new Mango(1100, 260, 50);
	mango7 = new Mango(1150, 290, 50);
	mango8 = new Mango(1250, 240, 50);
	mango9 = new Mango(1500, 140,50)
	boy = createSprite(250,600,300,400);
	boy.addImage(boyImg);
	boy.scale = 0.175;
	tree = createSprite(1300,366,400,750);
	tree.addImage(treeImg);
	tree.scale = 0.565;

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);



 
  drawSprites();
  stone.display();
  constraint.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);

  textSize(40);
  text("PRESS 'SPACE' FOR ANOTHER CHANCE",50,50);
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    constraint.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:200,y:600})
		constraint.attach(stone.body);
	}
}

function detectcollision(stoneObj, mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stoneObj.body.position;


	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=mango.r+stone.r)

{		
		Matter.Body.setStatic(mango.body, false);
}

	}
