function getCanvas2DContext(id) {
	var canvas = document.getElementById(id)
	return canvas.getContext("2d")
}

function drawPolygon(context, sides, radius, rotation) {
    var i, angle, radius;
	x = 200, y = 200;
	for (i = 0; i <= sides; i++) {
        angle = i * 2 * Math.PI / sides - Math.PI / 2 + rotation;
        context.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
	}
}

function draw(sides, radius, rotation) {
	clearCanvas();
	context = getCanvas2DContext("canvas")
	context.beginPath();
	drawPolygon(context, parseInt(sides.value), parseInt(radius.value), parseInt(rotation.value));
	context.strokeStyle = "#000000";
	context.lineWidth = 2;
	context.stroke();
}

function clearCanvas() {
	context = getCanvas2DContext("canvas");
	context.clearRect(0, 0, canvas.width, canvas.height);
}