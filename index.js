var canvas;
var ctx;
var BallX;
var BallY;
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
    BallY = 250;
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
      if(RectCircleColliding({x:BallX,y:BallY,r:10},{x:480,y:Paddle2Y,w:10,h:100})) {
      Ball = false
    } else if(RectCircleColliding({x:BallX,y:BallY,r:10},{x:10,y:Paddle1Y,w:10,h:100}))
    {
      Ball = true
    }
   if(BallX < 0 ) {
        BallX = 250
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
function RectCircleColliding(circle,rect){
    var distX = Math.abs(circle.x - rect.x-rect.w/2);
    var distY = Math.abs(circle.y - rect.y-rect.h/2);

    if (distX > (rect.w/2 + circle.r)) { return false; }
    if (distY > (rect.h/2 + circle.r)) { return false; }

    if (distX <= (rect.w/2)) { return true; } 
    if (distY <= (rect.h/2)) { return true; }

    var dx=distX-rect.w/2;
    var dy=distY-rect.h/2;
    return (dx*dx+dy*dy<=(circle.r*circle.r));
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





    
