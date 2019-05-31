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
    setInterval(function() {draw(); collision(); move();}, 1000/60);
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

function rect(x, y, width, height, color) {
    this.width = width || 50;
    this.height = height || 50;
    this.x = x || 0;
    this.y = y || 0;
    this.color = color || 'black';
    this.stop = false;
    (this.refresh = ()=>{
        yat.save();
        yat.translate(this.x, this.y);
        yat.rotate(this.angle);
        yat.fillStyle = color;
        yat.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        yat.restore();
    }
     
  function move() {
      if(Ball)
      {
        BallX += 3
      } else 
      {
      Ball -= 3
      }
  }
//var loop = function() { 
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
//}
  function collision() {
    if(BallX > canvas.width) {
      Ball = false
    } else if(Ball < 0)
    {
      Ball = true
    }
   var ob = [
     new rect(0,0,200,25) //top boundary
     ];
}
    
    
