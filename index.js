var canvas;
var ctx;
var Ballx;
var PaddleX;
  window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    setInterval(draw, 1000/30);
  };
  function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(10,100,10,5,Math.Pi*2, true);
    ctx.fill();
};
