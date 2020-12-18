var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var gameState = 1;
var play = 1;
var end = 2;
var particles = [];
var plinkos = [];
var divisions = []
var particle;
var turns = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,175));
   }

    for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,275));
   }

    for (var j = 50; j <=width-10; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,375));
   }
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
      score++;
    }
  
    if(particle!=null){
      particle.display();
        if(particle.body.positiom.y>760){
    if(particle.body.position.x < 300){
    score = score + 500;
    particle=null;
    if (count>=5)gameState = "end";
        }
     }
    }

    

if(particle!=null){
  particle.display();
    if(particle.body.positiom.y>760){
if(particle.body.position.x > 301 && particle.body.position.x < 600){
score = score + 100;
particle=null;
if (count>=5)gameState = "end";
    }
 }

}
if(particle!=null){
  particle.display();
    if(particle.body.positiom.y>760){
if(particle.body.position.x > 601 && particle.body.position.x < 900){
score = score + 200;
particle=null;
if (count>=5)gameState = "end";
    }
 }

}
if (gameState = "end"){
  text("Game Over", 400,400)
}


}





function draw() {
  background("black")
  

  textSize(20);
  text("Score:"+score, 10,30)

  textSize(20);
  text(500, 20,520);

  textSize(20);
  text(500,100,520);

  textSize(20);
  text(500,180,520);

  textSize(20);
  text(500,260,520);

  textSize(20);
  text(100,340,520);

  textSize(20);
  text(100,420,520);

  textSize(20);
  text(100,500,520);

  textSize(20);
  text(200,580,520);

  textSize(20);
  text(200,660,520);

  textSize(20);
  text(200,740,520);

  


  

  Engine.update(engine);
  ground.display();
 
  
   for (var j = 0; j < plinkos.length; j++) {
     
     plinkos[j].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState!=="play"){
    turns++;
    particle = new Particle(mouseX,10,10,10);

  }
}