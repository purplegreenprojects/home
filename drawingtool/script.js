window.addEventListener("load", function(){
	var widthInput = document.getElementById("widthInput")
	var heightInput = document.getElementById("heightInput")

	var scaleInput = document.getElementById("scaleInput")

	var currentX = document.getElementById("currentX")
	var currentY = document.getElementById("currentY")

	var pathsList = document.getElementById("pathsList")

	var canvas = document.getElementById("canvas")
	var context = canvas.getContext("2d")

	var scaleFactor = 1

	var isDrawing = false

	var paths = {}
	var currentArrayId = null


	function getRandomString() {
		var randomString = ""
		var alphabet = "abcdefghijklmnopqrstuvwxyz"

		for(i = 0; i < 8; i++) {
			randomString = randomString + alphabet[Math.floor(Math.random() * 26)]
		}

		return randomString
	}


	widthInput.addEventListener("change", changeCanvas)
	heightInput.addEventListener("change", changeCanvas)
	scaleInput.addEventListener("change", changeCanvas)
	function changeCanvas(event) {
		scaleFactor = 2 ** Number(scaleInput.value)

		canvas.width = Number(widthInput.value)
		canvas.style.width = Number(widthInput.value * scaleFactor) + "px"
		canvas.height = Number(heightInput.value)
		canvas.style.height = Number(heightInput.value * scaleFactor) + "px"
	}

	canvas.addEventListener("mousedown", startDraw)
	function startDraw(event) {
		isDrawing = true
		currentArrayId = getRandomString()
		paths[currentArrayId] = []
		paths[currentArrayId].push( [event.offsetX / scaleFactor, event.offsetY / scaleFactor] )



		var pathInfo = document.createElement("div")
			pathInfo.id = currentArrayId
			pathInfo.className = "pathInfo"
		document.getElementById("pathsList").appendChild(pathInfo)

		var deleteButton = document.createElement("button")
			deleteButton.className = "delete"
			deleteButton.innerText = "x"
			deleteButton.addEventListener("click", deletePath)
		pathInfo.appendChild(deleteButton)

		var coordinatesContainer = document.createElement("textarea")
			coordinatesContainer.className = "coordinatesContainer"
			coordinatesContainer.innerText = JSON.stringify(paths[currentArrayId])
			coordinatesContainer.addEventListener("change", editCoordinates)
		pathInfo.appendChild(coordinatesContainer)
	}

	function editCoordinates(event) {
		var id = event.target.parentNode.id
		paths[id] = JSON.parse(event.target.value)
	}

	canvas.addEventListener("mousemove", getCoordinates)
	function getCoordinates(event) {
		currentX.innerText = Math.round(event.offsetX / scaleFactor)
		currentY.innerText = Math.round(event.offsetY / scaleFactor)

		if (isDrawing) {
			paths[currentArrayId].push( [event.offsetX / scaleFactor, event.offsetY / scaleFactor] )
			document.getElementById(currentArrayId).querySelector(".coordinatesContainer").innerText = JSON.stringify(paths[currentArrayId])
		}
	}

	window.addEventListener("mouseup", stopDraw)
	function stopDraw(event) {
		isDrawing = false
	}

	function deletePath(event) {
		var deleteID = event.target.parentNode.id
		delete paths[deleteID]
		event.target.parentNode.remove()
	}

	function drawShape(coordinates, color){
		context.beginPath()
		context.moveTo(coordinates[0][0], coordinates[0][1])
		for (i = 1; i < coordinates.length; i++){
			context.lineTo(coordinates[i][0], coordinates[i][1])
		}

		context.strokeStyle = color
		context.lineWidth = 2
		context.stroke()
	}

	function drawOnCanvas() {
		context.clearRect(0, 0, canvas.width, canvas.height)

		for (key in paths) {
			if (paths[key].length) {
				drawShape(paths[key], "blue")
			}
		}
	}

	setInterval(drawOnCanvas, 10)
})