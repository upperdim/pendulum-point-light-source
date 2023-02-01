var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");

clearScreen()
let balls = createSurfaceBalls();
let light = new PointLightSource(400, 400, DEFAULT_CIRCLE_RADIUS, 100, 270, 300, 30);

drawCeiling()
light.draw()
balls.forEach(ball => ball.updateLuminance(light));
balls.forEach(ball => ball.draw());

console.log(balls)
console.log('End of main');
