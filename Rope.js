class Rope{
    constructor(body1,point2){ 
      var  options={
        bodyA:body1,
        pointB:point2,
        length:15, 
        stiffness:0.02
      
        }
      this.pointB=point2
      this.rope=Matter.Constraint.create(options)
    World.add(world,this.rope)
    }
    
    display(){
    var pointA=this.rope.bodyA.position
    var pointB=this.pointB
    stroke("red")
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    } 