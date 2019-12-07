window.addEventListener("load", function() {
	// global variables
		var canvas = document.getElementById("canvas")
		var context = canvas.getContext("2d")
		var thing = createObject()
		var dataSection = document.getElementById("things")

	// resize canvas
		resizeCanvas()

		window.addEventListener("resize", resizeCanvas)

		function resizeCanvas() {
			canvas.height = window.innerHeight
			canvas.width = window.innerWidth - 250
		}

	// drawLoop
		setInterval(function(){
			clearCanvas(canvas, context)
			drawObject(canvas, context, thing)
			displayData()
		}, 5)

	// createPoint
		canvas.addEventListener("click", createPoint)
		function createPoint(event) {
			thing.points.push( [event.offsetX, event.offsetY] )
		}

	// display data
		function displayData(){
			dataSection.innerHTML = ""
			
			//dataSection.innerHTML = JSON.stringify(thing)
		}
})