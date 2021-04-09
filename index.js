var c=document.querySelector("#my-canvas");

var ctx=c.getContext("2d");
ctx.fillStyle="green";
ctx.fillRect(10,10,380,280);
ctx.strokeRect(10,10,380,280);
ctx.strokeStyle="black";
ctx.lineWidth=1;

var centerX=c.width/2;
var centerY=c.height/2;

ctx.beginPath();
ctx.arc(centerX,centerY,80,Math.PI*2,false);
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();