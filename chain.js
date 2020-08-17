class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
this.chain=Constraint.create(options)
World.add(world,this.chain);
    }
    display() {
        
     
     //line (pointA.x,pointA.y,pointB.x+10,pointB.y);
    }
}