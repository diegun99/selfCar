// medidas de la carretera
const canvas = document.getElementById("myCanvas");
canvas.width = 200;


//contexto y car
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width * 0.9)
const car = new Car(road.getLaneCenter(1),100,30,50,"AI",3);
const traffic = [
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2),

]


animate();

//método recursivo para refrescar la pantalla una y otra vez
function animate (){
    for(let i=0; i< traffic.length; i++){
        traffic[i].update(road.borders,[]);
    }
    car.update(road.borders,traffic);

    canvas.height = window.innerHeight;

    ctx.save();// movimiento camara siguiendo al car 
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    for(let i=0; i<traffic.length ; i++){
        traffic[i].draw(ctx,"Red");
    }
    car.draw(ctx,"Blue");

    ctx.restore();
    requestAnimationFrame(animate);
}