var canvas;
var ctx;
var BallX;
var Paddle1X;
var Paddle2Y;

  window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    setInterval(function() {draw(); collision(); move();}, 1000/60);
    document.addEventListener("keydown",controller);
    BallX = 250;
    Paddle1Y = 200;
    Paddle2Y = 200;
  };
  function draw() {

    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(10,Paddle1Y,10,100);
    ctx.fillRect(480,Paddle2Y,10,100);
    ctx.beginPath()
    ctx.arc(BallX, 250, 10, 0, 2 * Math.PI, true);
    ctx.fill()
    ctx.closePath();
}
  function move() {
      BallX += 3
  }
  function controller(evt) {
    switch(evt.keyCode) {
    case 87:
        Paddle1Y -= 10;
        break;
    case 83:
      Paddle1Y += 10;
        break;
      }
  }
  function collision() {
    if(BallX > canvas.width) {
      BallX -= 3
    }
  }
