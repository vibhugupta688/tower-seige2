class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

       
    }

    fly(){
        this.chain.bodyA = null;
    }

    attacher(bodyA)
    {
        this.chain.bodyA=bodyA;
    }

    display(){
        
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            stroke(0,153,76);
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
           
            

          
        }

       
        
    }
    
}