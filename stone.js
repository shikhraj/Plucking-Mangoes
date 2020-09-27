class Stone{
    constructor(x, y,radius) {
        var options  ={
            isStatic:false,
            restitution:0, 
            friction:1, 
            density:1.2
            
          }
  
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("stone.png");
      this.r = this.radius;

  
      
      World.add(world, this.body);
    }

    display(){
      
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.radius);
  
    }
  };
  