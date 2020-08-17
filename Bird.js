class Bird extends BaseClass {
  constructor(x,y){
    
    super(x,y,50,50);
    //this.body.isStatic=true;
    this.image = loadImage("sprites/bird.png");
    this.x=[]
    this.y=[]
    this.dot = loadImage("smoke.png");
  }

  display() {
   // this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //image(this.image,mouseX,mouseY,50,50)
    super.display();
    if(this.body.speed>10&&this.body.position.x>200) {
      this.x.push(this.body.position.x)
      this.y.push(this.body.position.y)
    }
    
    for(var i=0; i<this.x.length; i=i+2) {
        image(this.dot,this.x[i],this.y[i],10,10)
    }
  }
}
