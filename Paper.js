class Paper{
      constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,  
             
      }
      this.radius = radius; 
      this.x = x;
      this.y = y;
     this.body = Matter.Bodies.circle(this.x,this.y,this.radius/3,options);
     this.width = width;
     this.height = height;
     this.image = loadImage("sprites/paper.png");
     World.add(world, this.body);
}
display(){
      var pos =this.body.position;
      //pos.x=mouseX;
      //pos.y=mouseY;
     // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill("purple");
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  };