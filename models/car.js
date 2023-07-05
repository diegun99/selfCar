class Car{


    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        //controls
        this.sensor = new Sensor(this);
        this.controls = new Controls();

    }

    /**
     * Mueve el carrito
     */
    update(roadBorders){
        this.#move();
        this.sensor.update(roadBorders);

    }

    #move(){// hashtag means a private method
        if(this.controls.forward){
            this.speed += this.acceleration;
         }
         if(this.controls.reverse){
             this.speed -= this.acceleration;
         }
 
         if(this.speed>this.maxSpeed){
             this.speed = this.maxSpeed;
         }
         if (this.speed<- this.maxSpeed/2) {
             this.speed =- this.maxSpeed/2;  
         }
         if(this.speed>0){
             this.speed-= this.friction;
         } 
         if(this.speed<0){
             this.speed+= this.friction;
         }
 
         if(Math.abs(this.speed)<this.friction){
             this.speed = 0;
         }
 
 
         if(this.speed!=0){
             const flip = this.speed>0?1:-1;// if the value of this flip is one or minus one depending on the speed
 
             if (this.controls.left) {
                 this.angle+= 0.03*flip;
             }
             if(this.controls.right){
                 this.angle-= 0.03*flip;
             }
 
         }
 
         this.x -= Math.sin(this.angle)*this.speed;
         this.y -= Math.cos(this.angle)*this.speed;
 
    }


    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y); // we translate to the poin where we want the rotation to be centered at
        ctx.rotate(-this.angle);//tell the context to rotate by minus this angle

        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );

            // metodo pars dibujar se usa el fill para mostrar lo dibujado en el canvas
        ctx.fill();

        ctx.restore();

        this.sensor.draw(ctx);
    }

}