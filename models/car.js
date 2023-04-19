class Car{


    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        //controls
        this.controls = new Controls();

    }


    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        )

            // metodo pars dibujar se usa el fill para mostrar lo dibujado en el canvas
        ctx.fill()

    }

}