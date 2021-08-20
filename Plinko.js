class Plinko{
    constructor(x,y,r){
var options={
    isStatic:true,
}
this.body=Bodies.rectangle(x,y,this.r,options)
this.r=r;
World.add(world,this.body)
    }
    display(){
    var pos=this.body.position;
    rectMode(CENTER);
   circle(pos.x,pos.y,20,20);
    }
  
     } 