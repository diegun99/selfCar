// medidas de la carretera
const canvas = document.getElementById("myCanvas");
canvas.width = 200;


//contexto y car
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width * 0.9)
const car = new Car(100,100,30,50);
car.draw(ctx);

animate();

//método recursivo para refrescar la pantalla una y otra vez
function animate (){
    car.update();

    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}