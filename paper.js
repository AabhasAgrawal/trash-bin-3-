class Paper {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':false
      }
      this.body = Matter.Bodies.circle(170, 100, 22, options);
      this.image=loadImage("paperImage.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255,0,0);
      image(this.image,0,0,25,25);
      pop();
    }
  }