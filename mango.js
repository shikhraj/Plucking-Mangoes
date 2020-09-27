class Mango {
    constructor(x, y, radius) {
        var options  ={
            isStatic:true,
            restitution:0, 
            friction:1
            
          }
  
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = 2 * radius;
      this.image = loadImage("mango.png");
      this.r = this.radius/2;
      
      World.add(world, this.body);
      
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.radius);
      
    }
  };
  