const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box,ground;

function setup(){
 createCanvas(400,400);

engine=Engine.create();
world=engine.world;

box=Bodies.rectangle(200,200,100,100);
World.add(world,box);

console.log(box);

ground=Bodies.rectangle(200,300,400,5,{isStatic:true});
World.add(world,ground)

}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  rect(box.position.x,box.position.y,100,100);
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,5)
}
