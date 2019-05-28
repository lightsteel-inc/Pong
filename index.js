let Ballx = 50;
window.onload = function() {
  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')
  setInterval(draw, 1000/60)
  }
function AI() {
  
}
function draw() {
  ctx.fillRect(0,0,canvas.width,canvas.height)
  ctx.fillStyle = 'white'
  ctx.fillRect(10,10,10,10)
  Ballx += 5
  ctx.arc(Ballx,100,40,0,Math.PI*2, true)
}
function 
