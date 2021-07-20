const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bg;
var ground;
var boggie1,boggie2,boggie3,boggie4,boggie5;
var chain1,chain2,chain3,chain4;
var trainSound 
var crashSound
var flag = 0;
var rock;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world= engine.world;

  ground = new Ground(600,380,1200,20);

  boggie1= new Boggie(200,350,100,50);
  boggie2= new Boggie(350,350,100,50);
  boggie3= new Boggie(500,350,100,50);
  boggie4= new Boggie(650,350,100,50);
  boggie5= new Boggie(800,350,100,50);

  rock= new Rock(1000,50,100,50);

  chain1= new Chain(boggie1.body,boggie2.body);
  chain2= new Chain(boggie2.body,boggie3.body);
  chain3= new Chain(boggie3.body,boggie4.body);
  chain4= new Chain(boggie4.body,boggie5.body);
}

function draw() {
  background(bg);  
  Engine.update(engine);
 ground.display();
 boggie1.display();
 boggie2.display();
 boggie3.display();
 boggie4.display();
 boggie5.display();
 rock.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();

  }

  
