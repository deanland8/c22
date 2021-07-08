const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var littleball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //bounciness
  ball_option={

    restitution: 1.0
  }
  ball= Bodies.circle(200,200,30,ball_option);
  World.add(world,ball);

  cons = Matter.Constraint.create({
  pointA: { x:200,y:20},
  bodyB : ball,
  pointB : {x:0,y:0},
  length: 100,
  stiffness: 0.5
  });
  World.add(world,cons);

  littleball= Bodies.circle(200,300,20,ball_option);
  World.add(world,littleball);

  consB = Matter.Constraint.create({
    bodyA: ball,
    pointA: { x:0,y:0},
    bodyB : littleball,
    pointB : {x:0,y:0},
    length: 100,
    stiffness: 0.5
    });
    World.add(world,consB);
  

}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30);
  ellipse(littleball.position.x,littleball.position.y,20);

  push();
  strokeWeight(2);
  stroke(255);
  line(cons.pointA.x,cons.pointA.y,ball.position.x,ball.position.y)
  line(ball.position.x,ball.position.y,littleball.position.x,littleball.position.y)
  pop();
}
function keyPressed(){
//Matter.Body.applyForce(body, position, force)
  if( keyCode == RIGHT_ARROW)
  {
  Matter.Body.applyForce(littleball, {x:0,y:0}, {x:0.05,y:0});
  }
  if(keyCode == LEFT_ARROW){
    Matter.Body.applyForce(littleball, {x:0,y:0}, {x:-0.05,y:0});
  
  
  }
}


