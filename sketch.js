const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine, object;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true,
  };

  object = Bodies.rectangle(200, 150, 20, 20, object_options);
  World.add(world, object);

  var ball_options = {
    restitution: 1.0,
  };

  ball = Bodies.circle(100, 100, 30, ball_options);
  World.add(world, ball);

  var ground_options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
  World.add(world, ground);

  console.log(object);
  console.log(object.position.y);
}

function draw() {
  background("red");

  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);

  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 50, 50);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 300, 20);
}
