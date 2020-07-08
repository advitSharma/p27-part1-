class Bob {
    constructor(x,y){
      var options={
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
     this.body = Bodies.circle(x,y,20,options)
     World.add(world,this.body);
  
    }
  display(){
    console.log(this.body);
  var pos=this.body.position;
  fill(255);
  push();
  ellipseMode(RADIUS);
  ellipse(pos.x,pos.y,20,20);
  pop();
  }
  }