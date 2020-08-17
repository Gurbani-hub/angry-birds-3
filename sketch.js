const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var s1,s2
var call
var log;
var chain1;

async function GetBackgroundImage() {

    var Response= await fetch("http://worldclockapi.com/api/json/est/now")
    var J= await Response.json();
    var hour=J.currentDateTime.slice(11,13);
    var date= J.currentDateTime.slice(8,10)

    if(hour>6&&hour<=17) {
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
    else{
        backgroundImg = loadImage("sprites/bg.png");
    }

    if(date>=17&&date<=25) {
        backgroundImg = loadImage("sprites/snowy.jpg");
    }

}

function preload() {
    GetBackgroundImage();
    s1= loadImage("sling1.png")
    s2= loadImage("sling2.png")
    s3= loadImage("sling3.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create()
    world = engine.world;

    var m=Matter.Mouse.create(canvas.elt)
    m.pixelRatio=pixelDensity();
    mc=Matter.MouseConstraint.create(engine,{mouse:m})
    Matter.World.add(world,mc)

   ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 425, 350, 350);

    box1 = new Box(700,520,80,80);
    box2 = new Box(920,520,80,80);
    pig1 = new Pig(810, 550);
    log1 = new Log(810,460,300, PI/2);

    box3 = new Box(700,440,80,80);
    box4 = new Box(920,440,80,80);
    pig3 = new Pig(810, 420);

    log3 =  new Log(810,380,300, PI/2);

    box5 = new Box(810,360,80,80);
    log4 = new Log(760,320,150, PI/7);
    log5 = new Log(870,320,150, -PI/7);

    bird = new Bird(240,85);
    chain1= new Chain(bird.body,{x:240,y:85});
    
}

function draw(){
    if(backgroundImg) 
    background(backgroundImg);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();

    log3.display();
    box5.display();
    log4.display();
    log5.display();


    image(s1,230,50);
    if(chain1.chain.bodyA) {
        var pointA=chain1.chain.bodyA.position;
        var pointB=chain1.chain.pointB;
        strokeWeight(4);
        stroke(48,22,8);
    //       line (pointA.x-28,pointA.y,pointB.x-20,pointB.y);
           line (pointA.x-28,pointA.y,pointB.x+20,pointB.y);
           image(s3,pointA.x-28,pointA.y-10,20,30)

        }
    bird.display();
    if(chain1.chain.bodyA) {
        var pointA=chain1.chain.bodyA.position;
        var pointB=chain1.chain.pointB;
        strokeWeight(4);
        stroke(48,22,8);
           line (pointA.x-28,pointA.y,pointB.x-20,pointB.y);
         //  line (pointA.x-28,pointA.y,pointB.x+20,pointB.y);
        }
    image(s2,207,50);
    


   
    chain1.display();
    platform.display();

    //text("x:"+mouseX+"y:"+mouseY,mouseX,mouseY)
    
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    chain1.chain.bodyA=null;
}


