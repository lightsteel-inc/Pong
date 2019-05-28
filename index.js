var canvas;
var ctx;
var BallX;
var Paddle1X;
var Paddle2Y;

  window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    setInterval(draw, 1000/60);
    document.addEventListener("keydown",controller);
  };
  function draw() {
    Paddle1Y = 200;
    Paddle2Y = 200;
    BallX = 250;
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(10,Paddle1Y,10,100);
    ctx.fillRect(480,Paddle2Y,10,100);
    ctx.beginPath()
    ctx.arc(BallX, 250, 10, 0, 2 * Math.PI, true);
    ctx.fill()
    ctx.closePath();

}
  function controller(evt) {
    switch(evt.keyCode) {
    case 83:
        Paddle1Y = Paddle1Y + 10;
        break;
    case 38:
        break;
      case 39:
        break;
    case 40:
        break;
  }
 }
