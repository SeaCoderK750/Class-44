const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var player, world, engine; 

var log1, log2, log3, log4, log5, log6, log7, log8, log9, log10


function preload(){

}

function setup(){

    var canvas = createCanvas(8000,6000);
    engine = Engine.create();
    world = engine.world;
    log1 = new Box(600,250,280,PI/2)
    log2 = new Box(550,150,100,PI/2)
    log3 = new Box(500,150,180,PI/2)
    log4 = new Box(400,280,240,PI/2)
    log5 = new Box(650,270,230,PI/2)
    log6 = new Box(40,210,210,PI/2)
    log7 = new Box(6070,220,290,PI/2)
    log8 = new Box(782,240,400,PI/2)
    log9 = new Box(1690,260,1400,PI/2)
    log10 = new Box(7856,310,1600,PI/2)

    
    



}

function draw(){
    background("black");
    Engine.update(engine);
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();

}


