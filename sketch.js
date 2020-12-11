const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground2,ground3,box1,slingshot,polygon_img,polygon;
//var a;
//var circles=[];
function preload() {
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(2000,950);
  engine = Engine.create();
  world = engine.world;
  //stroke(255)
  
  ground = new Ground(750, 935, 2500, 25);
  ground2 = new Ground(800, 600, 500, 20);
  ground3 = new Ground(1550, 370, 350, 20);
  
  box1 = new Box(600,580,45,50);
  box2 = new Box(646,580,45,50);
  box3 = new Box(692,580,45,50);
  box4 = new Box(738,580,45,50);
  box5 = new Box(784,580,45,50);
  box6 = new Box(810,580,45,50);
  box7 = new Box(856,580,45,50);
  box8 = new Box(898,580,45,50);
  box9 = new Box(954,580,45,50);
  box10 = new Box(1000,580,45,50);

  box11 = new Box1(620,510,45,50);
  box12 = new Box1(665,510,45,50);
  box13 = new Box1(710,510,45,50);
  box14 = new Box1(755,510,45,50);
  box15 = new Box1(800,510,45,50);
  box16 = new Box1(845,510,45,50);
  box17 = new Box1(890,510,45,50);
  box18 = new Box1(935,510,45,50);
  box19 = new Box1(980,510,45,50);

  box20 = new Box2(650,460,45,50);
  box21 = new Box2(695,460,45,50);
  box22 = new Box2(740,460,45,50);
  box23 = new Box2(785,460,45,50);
  box24 = new Box2(830,460,45,50);
  box25 = new Box2(875,460,45,50);
  box26 = new Box2(920,460,45,50);
  box27 = new Box2(965,460,45,50);

  box28 = new Box3(670,410,45,50);
  box29 = new Box3(715,410,45,50);
  box30 = new Box3(760,410,45,50);
  box31 = new Box3(805,410,45,50);
  box32 = new Box3(850,410,45,50);
  box33 = new Box3(897,410,45,50);
  box34 = new Box3(943,410,45,50);

  box35 = new Box4(735,357,45,50);
  box36 = new Box4(780,357,45,50);
  box37 = new Box4(825,357,45,50);
  box38 = new Box4(870,357,45,50);
  box39 = new Box5(805,307,45,50);

  box40 = new Box5(1440,333,45,50);
  box41 = new Box5(1485,333,45,50);
  box42 = new Box5(1530,333,45,50);
  box43 = new Box5(1575,333,45,50);
  box44 = new Box5(1620,333,45,50);
  box45 = new Box5(1665,333,45,50);

  box46 = new Box1(1485,283,45,50);
  box47 = new Box1(1530,283,45,50);
  box48 = new Box1(1575,283,45,50);
  box49 = new Box1(1620,283,45,50);
  box50 = new Box(1530,233,45,50);
  box51 = new Box(1575,233,45,50);

  box52 = new Box2(1555,185,45,50);

  polygon = Bodies.circle(200,200,50);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:100,y:400});
  //a=height;
  //circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("lightblue");  
  Engine.update(engine);

 
 //a=a-1;
  
  //for (i=0;i<circles.length;i++)
//{
	//circle(circles[i], height/2,20)
//}
//if(camera.position.x%width===0)
//{
	//circles.push(camera.position.x+width/2)
//}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();

 ground.display();
 ground2.display();
 ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();

  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();

  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();

  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  box51.display();

  box52.display();
  
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,100,100);
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
