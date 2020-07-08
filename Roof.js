class Roof{
   constructor(x,y){
    var options={
       isStatic:true 
    }
   this.body=Bodies.rectangle(x,y,20,100,options);
   World.add(world,this.body)
   } 
   
  display(){
   fill(255); 
   var pos = this.body.position;
    rect(this.body.position.x,this.body.position.y,240,20)
  }

}