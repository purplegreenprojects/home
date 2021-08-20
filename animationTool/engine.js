window.addEventListener("load", function() {
	// canvas functions	
		// clearCanvas
			window.clearCanvas = clearCanvas
			function clearCanvas(canvas, context) {
				context.clearRect(0, 0, canvas.width, canvas.height)
			}

		// drawPoint
			window.drawPoint = drawPoint
			function drawPoint(context, point) {
				context.beginPath()
				context.fillStyle = "blue"
				context.arc(point[0], point[1], 2, 0, 2 * Math.PI)
				context.fill()
			}
		
		// drawLine
			window.drawLine = drawLine
			function drawLine(context, startPoint, endPoint) {
				context.beginPath()
				context.strokeStyle = "yellow"
				context.lineWidth = 2
				context.moveTo(startPoint[0], startPoint[1])
				context.lineTo(endPoint[0], endPoint[1])
				context.stroke()
			}
		
		// drawPlane
			window.drawPlane = window.drawPlane
			function drawPlane(context, points, color) {
				context.beginPath()
				context.fillStyle = color
				context.moveTo(points[0][0], points[0][1])
				for(var i = 1; i < points.length; i++) {
					context.lineTo(points[i][0], points[i][1])
				}
				context.fill()
			}

	// helper functions - because sometimes the code is too smart for its own good
		// getSmallestAngle (for rotation)
			window.getSmallestAngle = getSmallestAngle
			function getSmallestAngle(degrees) {
				// remainder (mod)
				degrees = degrees % 360
				// if degrees is a negative number, add 360 to the remainder so that it's a manageable number of degrees
				if (degrees < 0) {
					degrees = degrees + 360
				}
				return degrees
			}

		// getRadians (for rotation)
			window.getRadians = getRadians
			function getRadians(degrees) {
				var radians = degrees / 360 * 2 * Math.PI
				return radians
			}

		// getRandom (get random string for the different counters, so they don't interfere with each other)
			window.getRandom = getRandom
			function getRandom() {
				var alphabet = "abcdefghijklmnopqrstuvwxyz"
				var randomString = "" 

				for (var i = 0; i < 8; i++) {
					randomString = randomString + alphabet[Math.floor(Math.random() * 26)]
				}

				return randomString
			}

	// object
		// createObject
			window.createObject = createObject
			function createObject(overrideThing) {
				var thing = {
					zIndex: 0,

					parentPoint: null,
					points: [],
					lines: [],
					planes: [],
					distalities: {},

					currentRotation: 0,
					currentTranslationX: 0,
					currentTranslationY: 0,
					currentMagnification: 0,
					
					currentCounters: {},
					currentLoops: {},
					stop: function() {
						for (var i in this.currentLoops) {
							clearInterval(this.currentLoops[i])
							delete this.currentLoops[i]
						}	
					},
					reset: function() {
						this.stop()
						for (var i in this.currentCounters) {
							delete this.currentCounters[i]
						}
						rotateObject(this, -this.currentRotation)
						translateObject(this, -this.currentTranslationX, -this.currentTranslationY)
						magnifyObject(this, -this.currentMagnification)
					}
				}

				if (overrideThing != null){
					for (var property in overrideThing) {
						if (overrideThing[property] != null){
							if (property != "distalities") {
								thing[property] = overrideThing[property]
							}
							else {
								for (var i in overrideThing.distalities) {
									thing.distalities[i] = createObject(overrideThing.distalities[i])
								}
							}
						}
					}
				}

				return thing
			}

		// buildLayers - convert recursive tree structure into 1 list ("layers") which contains many "layer" objects (each one having points, lines, and planes)
			window.buildLayers = buildLayers
			function buildLayers(canvas, context, layers, thing, offsetX, offsetY) {
				var offsetX = offsetX || 0
				var offsetY = offsetY || 0

				//keep layers already there or create an empty array to put the data into
				layers = layers || []
				var zIndex = thing.zIndex
				
				// if the layer doesn't already exist (i.e. layer 17), create a layer with empty arrays to put points, lines, and planes data into
				if (!layers[zIndex]) {
					layers[zIndex] = {
						points: [],
						lines: [],
						planes: []
					}
				}

				// plot the x and y for i number of points (from input)
				for (var i = 0; i < thing.points.length; i++) {
					layers[zIndex].points.push([thing.points[i][0] + offsetX, thing.points[i][1] + offsetY])
				}

				// use the placeholders that reference the x and y coordinates for the startPoint of the line and the x and y coordinates for the endPoint part of the line to draw the line
				for (var i = 0; i < thing.lines.length; i++) {
					layers[zIndex].lines.push( {
						startPoint: [ thing.points[ thing.lines[i][0] ][0] + offsetX, thing.points[ thing.lines[i][0] ][1] + offsetY ],
						endPoint:   [ thing.points[ thing.lines[i][1] ][0] + offsetX, thing.points[ thing.lines[i][1] ][1] + offsetY ]
					})
				}

				// use the placeholders that reference the points to draw the plane
				// the rain in spain stays mainly in the plane
				for (var i = 0; i < thing.planes.length; i++) {
					var actualPoints = []
					var points = thing.planes[i].points
					
					for (var j = 0; j < points.length; j++) {
						actualPoints[j] = [ thing.points[ points[j] ][0] + offsetX, thing.points[ points[j] ][1] + offsetY ]
					}

					layers[zIndex].planes.push( {
						actualPoints: actualPoints,
						color: thing.planes[i].color
					})
				}
				
				//RECURSION TIME! add some limbs - run the code through as many times as it takes to make all the limbs (distalities)
				// for in loop = loops through as many times as there are properties in that object (can also be used for arrays)
				for (var i in thing.distalities) {
					layers = buildLayers(canvas, context, layers, thing.distalities[i], thing.points[thing.distalities[i].parentPoint][0] + offsetX, thing.points[thing.distalities[i].parentPoint][1] + offsetY)
				}

				return layers
			}

		// drawLayers (draw the object according to z-index)
			window.drawLayers = drawLayers
			function drawLayers(context, layers){
				for (var i = 0; i < layers.length; i++) {
					var layer = layers[i]
					if (layer) {
						for (var a = 0; a < layer.points.length; a++) {
							drawPoint(context, layer.points[a])
							
							if (window.showNumbers) {
								context.font = "12px monospace"
								context.fillText(a, layer.points[a][0] - 5, layer.points[a][1] - 5)
							}
						}
						for (var b = 0; b < layer.lines.length; b++) {
							drawLine(context, layer.lines[b].startPoint, layer.lines[b].endPoint)
						}
						for (var c = 0; c < layer.planes.length; c++) {
							drawPlane(context, layer.planes[c].actualPoints, layer.planes[c].color)
						}
					}
				}
			}

		// drawObject
			window.drawObject = drawObject
			function drawObject(canvas, context, thing) {
				var layers = buildLayers(canvas, context, null, thing)
				drawLayers(context, layers)
			}

	// transformations
		// rotateObject
			window.rotateObject = rotateObject
			function rotateObject(thing, degrees) {
				degrees = getSmallestAngle(degrees)

				thing.currentRotation = getSmallestAngle(thing.currentRotation + degrees)

				var radians = getRadians(degrees)

				for (var i = 0; i < thing.points.length; i++) {
					var x = thing.points[i][0]
					var y = thing.points[i][1]
					var newX = x * Math.cos(radians) - y * Math.sin(radians)
					var newY = x * Math.sin(radians) + y * Math.cos(radians)
					thing.points[i][0] = newX
					thing.points[i][1] = newY
				}
				
				for (var i in thing.distalities) {
					rotateObject(thing.distalities[i], degrees)
				}
			}

		// translateObject
			window.translateObject = translateObject
			function translateObject(thing, distanceX, distanceY) {
				
				var radians = getRadians(thing.currentRotation)
				
				for (var i = 0; i < thing.points.length; i++) {
					// rotate backwards (hence the -radians)
					var x = thing.points[i][0]
					var y = thing.points[i][1]
					var newX = x * Math.cos(-radians) - y * Math.sin(-radians)
					var newY = x * Math.sin(-radians) + y * Math.cos(-radians)
					thing.points[i][0] = newX
					thing.points[i][1] = newY

					// translating the points
					thing.points[i][0] = thing.points[i][0] + distanceX
					thing.points[i][1] = thing.points[i][1] + distanceY

					// re-rotating it (forwards)
					var x = thing.points[i][0]
					var y = thing.points[i][1]
					var newX = x * Math.cos(radians) - y * Math.sin(radians)
					var newY = x * Math.sin(radians) + y * Math.cos(radians)
					thing.points[i][0] = newX
					thing.points[i][1] = newY
				}

				thing.currentTranslationX = thing.currentTranslationX + distanceX
				thing.currentTranslationY = thing.currentTranslationY + distanceY
			}

		// magnifyObject
			window.magnifyObject = magnifyObject
			function magnifyObject(thing, zoomExponent) {				
				var zoomActual = Math.pow(2, zoomExponent)
				
				for (var i = 0; i < thing.points.length; i++) {
					thing.points[i][0] = thing.points[i][0] * zoomActual
					thing.points[i][1] = thing.points[i][1] * zoomActual
				}

				thing.currentMagnification = thing.currentMagnification + zoomExponent

				// not sure if it should be recursive though...
				for (var i in thing.distalities) {
					magnifyObject(thing.distalities[i], zoomExponent)
				}
			}

	// animations
		// createTransition (outputs animationFunction)
			window.createTransition = createTransition
			function createTransition(thing, options, statesArray) {
				var options       = options || {}
				var fidelity      = options.fidelity || 10
				var animationName = options.animationName || "animate"
				var isContinuous  = options.isContinuous || false

				return function() {
					// calculate the rotationIntervals, etc.
					for (var i = 1; i < statesArray.length; i++) {
						statesArray[i].rotationInterval      = (statesArray[i].currentRotation      - statesArray[i - 1].currentRotation)      / (statesArray[i].time - statesArray[i - 1].time) * fidelity
						statesArray[i].translationXInterval  = (statesArray[i].currentTranslationX  - statesArray[i - 1].currentTranslationX)  / (statesArray[i].time - statesArray[i - 1].time) * fidelity
						statesArray[i].translationYInterval  = (statesArray[i].currentTranslationY  - statesArray[i - 1].currentTranslationY)  / (statesArray[i].time - statesArray[i - 1].time) * fidelity
						statesArray[i].magnificationInterval = (statesArray[i].currentMagnification - statesArray[i - 1].currentMagnification) / (statesArray[i].time - statesArray[i - 1].time) * fidelity
					}

					// create an animation counter if there isn't one already (start at 0)
					thing.currentCounters[animationName] = thing.currentCounters[animationName] || 0

					// create an animation loop
					thing.currentLoops[animationName] = setInterval(function() {
						// if the animation counter is past the last timestamp, put it back to 0
						if (thing.currentCounters[animationName] >= statesArray[statesArray.length - 1].time) {
							if (isContinuous) {
								thing.currentCounters[animationName] = 0
							}
							else {
								clearInterval(thing.currentLoops[animationName])
								delete thing.currentLoops[animationName]
								delete thing.currentCounters[animationName]
								return
							}
						}

						// increment the counter each time through (10ms)
						thing.currentCounters[animationName] += fidelity
						
						// if the counter is before the timestamp of a particular state, do something (or else skip it and check the next state)
						for (var i in statesArray) {
							if (thing.currentCounters[animationName] <= statesArray[i].time) {

								// if there's a rotation interval, rotate the object by that amount, etc.
								if (statesArray[i].rotationInterval) {
									console.log(statesArray[i].rotationInterval)
									rotateObject(thing, statesArray[i].rotationInterval)
								}
								if (statesArray[i].translationXInterval || statesArray[i].translationYInterval) {
									translateObject(thing, statesArray[i].translationXInterval, statesArray[i].translationYInterval)
								}
								if (statesArray[i].magnificationInterval) {
									magnifyObject(thing, statesArray[i].magnificationInterval)
								}

								// stop the for loop and don't check future states yet
								break
							}
						}
					}, fidelity)
				}
			}

		// HOW TO USE createTransition:
			// wave: function () {
			// 	createTransition(this, {animationName: arguments.callee.name, isContinuous: true, fidelity: 10}, [
			// 		{
			// 			time: 0,
			// 			currentRotation: 0
			// 		},
			// 		{
			// 			time: 250,
			// 			currentRotation: -45
			// 		},
			// 		{
			// 			time: 500,
			// 			currentRotation: 0
			// 		}
			// 	])()
			// }
})