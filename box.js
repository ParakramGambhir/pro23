class Box {
    constructor(bodyA, bodyB, bodyC){
        var options = {
            bodyA : rect1.body
            bodyB : rect2.body
            bodyC : rect3.body
            
            isStatic: false, 
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.bodyA = Bodies.rectangle(x, y, width, height, options);
        this.bodyB = Bodies.rectangle(x, y, width, height, options);
        this.bodyC = Bodies.rectangle(x, y, width, height, options);
        
       
        World.add(world. this.body);
        
    }
}