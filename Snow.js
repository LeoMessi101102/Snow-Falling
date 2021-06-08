class Snow {
    constructor(x,y,width,height){
    var options = {
        density:0.1

    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
    this.image=loadImage("snow4.webp")
    this.w=width
    this.h=height
}
 display(){
     imageMode(CENTER)
     image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
 }
}