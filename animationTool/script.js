window.addEventListener("load", function() {
	// global variables
		var canvas = document.getElementById("canvas")
		var context = canvas.getContext("2d")
		var thing = createObject()
		var dataSection = document.getElementById("things")
		var lastUpdated = null
		window.showNumbers = false

	// resize canvas
		resizeCanvas()

		window.addEventListener("resize", resizeCanvas)

		function resizeCanvas() {
			canvas.height = window.innerHeight
			canvas.width = window.innerWidth - 250
		}

	// show numbers on/off
		document.getElementById("showNumbers").addEventListener("change", toggleShowNumbers)
		function toggleShowNumbers(event) {
			window.showNumbers = event.target.checked
		}

	// drawLoop
		setInterval(function(){
			clearCanvas(canvas, context)
			drawObject(canvas, context, thing)
			refreshSidebar(thing)
		}, 5)

	// display data
		function refreshSidebar(){
			if (lastUpdated !== thing.lastUpdated) {
				lastUpdated = thing.lastUpdated
				dataSection.innerHTML = ""
				displayControls(thing, dataSection)
			}
		}

	// display controls
		function displayControls(object, parentElement) {
			var block = document.createElement("div")
			block.className = "controlBlock"
			parentElement.appendChild(block)

			// points
				displayPointControls(object, block)

			// lines
				displayLineControls(object, block)

			// planes
				displayPlaneControls(object, block)
		}

	// POINTS
		// create point
			canvas.addEventListener("click", createPoint)
			function createPoint(event) {
				thing.points.push( [event.offsetX, event.offsetY] )
				thing.lastUpdated = new Date().getTime()
			}

		// display point controls
			function displayPointControls(object, block) {
				var pointsBlock = document.createElement("div")
					pointsBlock.className = "subBlock"
				block.appendChild(pointsBlock)
			
				for (var i in object.points) {
					var row = document.createElement("div")
					row.className = "subBlockRow"
					row.setAttribute("pointIndex", i)
					pointsBlock.appendChild(row)

					var number = document.createElement("div")
					number.className = "rowNumber"
					number.innerText = i
					row.appendChild(number)

					var point = object.points[i]

					var xInput = document.createElement("input")
					xInput.type = "number"
					xInput.value = point[0]
					xInput.setAttribute("axis", 0)
					xInput.addEventListener("change", changePoint)
					row.appendChild(xInput)

					var yInput = document.createElement("input")
					yInput.type = "number"
					yInput.value = point[1]
					yInput.setAttribute("axis", 1)
					yInput.addEventListener("change", changePoint)
					row.appendChild(yInput)

					var deleteButton = document.createElement("button")
					deleteButton.className = "deleteButton"
					deleteButton.innerText = "x"
					deleteButton.addEventListener("click", deletePoint)
					row.appendChild(deleteButton)
				}

				var addButton = document.createElement("button")
					addButton.className = "addButton"
					addButton.innerText = "+"
					addButton.addEventListener("click", addPoint)
				pointsBlock.appendChild(addButton)
			}

		// change point
			function changePoint(event) {
				var pointIndex = Number(event.target.parentNode.getAttribute("pointIndex"))
				var axis = Number(event.target.getAttribute("axis"))
				var value = Number(event.target.value)
				thing.points[pointIndex][axis] = value
				thing.lastUpdated = new Date().getTime()
			}

		// add point
			function addPoint(event) {
				thing.points.push([0,0])
				thing.lastUpdated = new Date().getTime()
			}

		// delete point
			function deletePoint(event) {
				var pointIndex = Number(event.target.parentNode.getAttribute("pointIndex"))
				thing.points.splice(pointIndex, 1)
				
				// lines
					for (var i = 0; i < thing.lines.length; i++) {
						if (thing.lines[i][0] == pointIndex || thing.lines[i][1] == pointIndex) {
							thing.lines.splice(i, 1)
							i--
						}
						else {
							if (thing.lines[i][0] > pointIndex) {
								thing.lines[i][0]--
							}

							if (thing.lines[i][1] > pointIndex) {
								thing.lines[i][1]--
							}
						}
					}

				// planes
					for (var i = 0; i < thing.planes.length; i++) {
						if (thing.planes[i].points.includes(pointIndex)) {
							thing.planes.splice(i, 1)
							i--
						}
						else {
							for (var j in thing.planes[i].points) {
								if (thing.planes[i].points[j] > pointIndex) {
									thing.planes[i].points[j]--
								}
							}
						}
					}

				thing.lastUpdated = new Date().getTime()
			}

	// LINES

		// display line controls
			function displayLineControls(object, block) {
				var linesBlock = document.createElement("div")
					linesBlock.className = "subBlock"
					block.appendChild(linesBlock)

				for (var i in object.lines) {
					var row = document.createElement("div")
					row.className = "subBlockRow"
					row.setAttribute("lineIndex", i)
					linesBlock.appendChild(row)

					var number = document.createElement("div")
					number.className = "rowNumber"
					number.innerText = i
					row.appendChild(number)

					var line = object.lines[i]
					
					var startPoint = document.createElement("input")
					startPoint.type = "number"
					startPoint.value = line[0]
					startPoint.setAttribute("end", 0)
					startPoint.addEventListener("change", changeLine)
					row.appendChild(startPoint)

					var endPoint = document.createElement("input")
					endPoint.type = "number"
					endPoint.value = line[1]
					endPoint.setAttribute("end", 1)
					endPoint.addEventListener("change", changeLine)
					row.appendChild(endPoint)

					var deleteButton = document.createElement("button")
					deleteButton.className = "deleteButton"
					deleteButton.innerText = "x"
					deleteButton.addEventListener("click", deleteLine)
					row.appendChild(deleteButton)
				}

				var addButton = document.createElement("button")
					addButton.className = "addButton"
					addButton.innerText = "+"
					addButton.addEventListener("click", addLine)
					linesBlock.appendChild(addButton)
			}

		// change line
			function changeLine(event) {
				var lineIndex = Number(event.target.parentNode.getAttribute("lineIndex"))
				var end = Number(event.target.getAttribute("end"))
				var value = Number(event.target.value)
				thing.lines[lineIndex][end] = value
				thing.lastUpdated = new Date().getTime()
			}

		// add line
			function addLine(event) {
				var i = thing.lines.length

				if (thing.points[i] && thing.points[i + 1]) {
					thing.lines.push([i, i + 1])
				}
				else {
					thing.lines.push([0, 0])
				}

				thing.lastUpdated = new Date().getTime()
			}

		// delete line
			function deleteLine(event) {
				var lineIndex = Number(event.target.parentNode.getAttribute("lineIndex"))
				thing.lines.splice(lineIndex, 1)
				thing.lastUpdated = new Date().getTime()
			}

	// PLANES

		// display plane controls
			function displayPlaneControls(object, block) {
				var planesBlock = document.createElement("div")
					planesBlock.className = "subBlock"
					block.appendChild(planesBlock)

				for (var i in object.planes) {
					var row = document.createElement("div")
					row.className = "subBlockRow"
					row.setAttribute("planeIndex", i)
					planesBlock.appendChild(row)

					var number = document.createElement("div")
					number.className = "rowNumber"
					number.innerText = i
					row.appendChild(number)

					var plane = object.planes[i]
					
					var color = document.createElement("input")
					color.type = "text"
					color.setAttribute("quality", "color")
					color.value = plane.color
					color.addEventListener("change", changePlane)
					row.appendChild(color)

					var points = document.createElement("input")
					points.type = "text"
					points.setAttribute("quality", "points")
					points.value = plane.points.join(", ")
					points.addEventListener("change", changePlane)
					row.appendChild(points)

					var deleteButton = document.createElement("button")
					deleteButton.className = "deleteButton"
					deleteButton.innerText = "x"
					deleteButton.addEventListener("click", deletePlane)
					row.appendChild(deleteButton)
				}

				var addButton = document.createElement("button")
					addButton.className = "addButton"
					addButton.innerText = "+"
					addButton.addEventListener("click", addPlane)
					planesBlock.appendChild(addButton)
			}

		// change plane
			function changePlane(event) {
				var planeIndex = Number(event.target.parentNode.getAttribute("planeIndex"))
				var quality = event.target.getAttribute("quality")
				if (quality == "color"){
					var value = event.target.value
				}

				else if (quality == "points") {
					var value = event.target.value.split(",")
					for (var i in value) {
						value[i] = Number(value[i])
					}
				}
				thing.planes[planeIndex][quality] = value
				thing.lastUpdated = new Date().getTime()
			}

		// add plane
			function addPlane(event) {
				thing.planes.push({
					color: "gray",
					points: [0, 0, 0]
				})
				thing.lastUpdated = new Date().getTime()
			}

		// delete plane
			function deletePlane(event) {
				var planeIndex = Number(event.target.parentNode.getAttribute("planeIndex"))
				thing.planes.splice(planeIndex, 1)
				thing.lastUpdated = new Date().getTime()
			}


})