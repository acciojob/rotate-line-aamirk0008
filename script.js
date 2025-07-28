//your JS code here. If required.
let angle = 0
let line = document.getElementById('line')
function rotateLine() {
	line.style.transform = `rotate(${angle}deg)`
	angle += 2
	if (angle > 360) {
		angle = 0
	}
}
setInterval(rotateLine, 20)