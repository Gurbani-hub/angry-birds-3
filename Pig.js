class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,80,80);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity=255
  }
display() {
  if(this.body.speed<2.5) {
    super.display()
  }
  else{
    World.remove(world,this.body)
    this.visiblity=this.visiblity-5
    push()
    tint(255,this.visiblity)
    image(this.image,this.body.position.x,this.body.position.y,80,80)
    pop()
  }
}

};