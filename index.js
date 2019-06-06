var canvas;
var ctx;
var BallX;
var Paddle1X;
var Paddle2Y;
var Paddle1Y;
var Paddle2X;
var Ball;

  window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    setInterval(function() {draw();move();}, 1000/60);
    document.addEventListener("keydown",controller);
    BallX = 250;
    Paddle1Y = 200;
    Paddle2Y = 200;
    Ball = true;
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
      if(!Ball)
      {
        BallX -= 3
      } else if (Ball)
      {
      BallX += 3
      }
        if(BallX > canvas.width) {
      Ball = false
    } else if(BallX < 0)
    {
      Ball = true
    }
  } 
  function controller(evt) 
{
    switch(evt.keyCode) {
    case 87:
        Paddle1Y -= 10;
        break;
    case 83:
      Paddle1Y += 10;
        break;
      }
    }
 /* function collision(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
   );
 }
       */ //collision setup





    
