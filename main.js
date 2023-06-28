// medidas de la carretera
const canvas = document.getElementById("myCanvas");
canvas.width = 200;


//contexto y car
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width * 0.9)
const car = new Car(road.getLaneCenter(1),100,30,50);


animate();

//método recursivo para refrescar la pantalla una y otra vez
function animate (){
    car.update();

    canvas.height = window.innerHeight;

    ctx.save();// movimiento camara siguiendo al car 
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}