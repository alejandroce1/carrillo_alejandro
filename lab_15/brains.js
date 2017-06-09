funtion shapes ()
{
	var x =document.getElementById("canvas");
	canvas = x.getContext ("2d");
	canvas.strokeSyle="red";
	canvas.fillStyle= "blue";
	canvas.beginPath();
	canvas.moveTo(50, 50);
	canvas.lineTo(70, 250);
	canvas.lineTo(300, 300);
	canvas.closePath();
	canvas.stroke();
	canvas.fill();
}
	
window.addEventListener("load", shapes, false);