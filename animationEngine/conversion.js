function convertClippathsToJSON(thing, offsetX, offsetY, color) {
	// points (string --> array of [x,y] pairs)
		thing.points = convertClippathToArray(thing.clippath)
		delete thing.clippath

	// points (absolute --> relative to parent point)
		offsetX = offsetX || 0
		offsetY = offsetY || 0

		for (var i in thing.points) {
			thing.points[i][0] = (thing.points[i][0] * 1000000 - offsetX * 1000000) / 1000000
			thing.points[i][1] = (thing.points[i][1] * 1000000 - offsetY * 1000000) / 1000000
		}		

	// lines
		if (thing.points.length == 0 || thing.points.length == 1) {
			thing.lines = []
		}
		else if (thing.points.length == 2) {
			thing.lines = [[0, 1]]
		}
		else {
			thing.lines = []
			for (var i = 0; i < thing.points.length; i++) {
				thing.lines.push([i, i + 1])
			}

			thing.lines[thing.lines.length - 1][1] = 0
		}

	// planes
		// take overwrite color (distality different color from parent) OR whatever color passed down from parent OR black
		color = thing.color || color || "black"
		delete thing.color
		
		if (thing.points.length == 0 || thing.points.length == 1 || thing.points.length == 2) {
			thing.planes = []
		}
		else {
			var planePoints = []
			for (var i = 0; i < thing.points.length; i++) {
				planePoints.push(i)
			}

			thing.planes = [ 
				{
					color: color,
					points: planePoints
				}
			]
		}

	// recurse
		for (var i in thing.distalities) {
			convertClippathsToJSON(thing.distalities[i],
				(thing.points[thing.distalities[i].parentPoint][0] * 1000000 + offsetX * 1000000) / 1000000,
				(thing.points[thing.distalities[i].parentPoint][1] * 1000000 + offsetY * 1000000) / 1000000, 
				color)
		}

	// magnify
		magnifyObject(thing, 3)

	return JSON.stringify(thing)
}

function convertClippathToArray(clippath) {
	//replace % with "" -- do it globally
	clippath = clippath.replace(/%/g,"")

	//split (at comma) into an array of smaller strings and now this new thing is an array called coordinates
	var coordinates = clippath.split(",")

	// loop through small strings (each ith thing in coordinates array)
	for (i in coordinates) {
		//trim whitespace - break out the snowman scissors!!!
		coordinates[i] = coordinates[i].trim()
		//create smallest array (w/ 2 things (pair)) by splitting at the " "
		var pair = coordinates[i].split(" ")
		// overwrite the small string with this smallest array (pair), so the whole thing is an array with arrays
		coordinates[i] = pair
		// loop through smallest arrays (pairs) to convert to numbers
		coordinates[i][0] = Number(coordinates[i][0])
		coordinates[i][1] = Number(coordinates[i][1])
													  // ... of each pair in the array
	}

	return coordinates
}

function magnifyObject(thing, zoomExponent) {
	var zoomActual = Math.pow(2, zoomExponent)
	
	for (var i = 0; i < thing.points.length; i++) {
		thing.points[i][0] = thing.points[i][0] * zoomActual
		thing.points[i][1] = thing.points[i][1] * zoomActual
	}

}

// data
var cat = {
	color: "orange",
	clippath: "55.35% 44.1%",
	distalities: {
		torso: {
			parentPoint: 0,
			zIndex: 1,
			clippath: "26.5% 28%, 32% 28.5%, 39% 30%, 45% 30%, 52% 30%, 58% 30%, 65% 30%, 72% 31%, 80% 32.25%, 81.5% 32%,  88.5% 40%, 88.85% 45%, 89.5% 50%, 89.5% 53%, 74% 58%, 62% 58%, 56% 59%, 47% 60%, 40% 60.5%, 36.5% 60%, 20.5% 55%, 18% 48%, 17% 43.75%",
			distalities: {
				leftShoulder: {
					parentPoint: 0,
					zIndex: 2,
					clippath: "29.37% 48.91%",
					distalities: {
						leftFrontLeg: {
							parentPoint: 0,
							zIndex: 3,
							clippath: "20.5% 55%, 20.65% 50.54%, 21.88% 45.79%, 25.14% 41.44%, 28.26% 37.36%, 31.11% 35.87%, 33.97% 39.4%, 36.01% 44.7%, 37.23% 50.95%, 36.5% 60%, 36.45% 65%, 33.75% 73%, 33% 76%, 31% 87%, 29% 88.75%, 28% 89.5%, 25% 90%, 23% 89.5%, 22.5% 89%, 22% 87%, 22.75% 85%, 24% 84%, 26.5% 82.5%, 25.25% 68%, 23.5% 60%"
						}
					}
				},
				leftHip: {
					parentPoint: 0,
					zIndex: 2,
					clippath: "81.55% 51.09%",
					distalities: {
						leftBackLeg: {
							parentPoint: 0,
							zIndex: 3,
							clippath: "74% 58%, 73.23% 52.72%, 73.78% 46.2%, 74.05% 43.48%, 76.77% 40.76%, 80.03% 39.27%, 84.92% 41.85%, 89.54% 49.18%, 90% 59%, 89% 64.5%, 88% 68%, 87% 73%, 87% 75.5%, 82.75% 87%, 81% 88.75%, 80% 89.5%, 77% 90%, 75% 89.5%, 74.5% 89%, 74% 87%, 74.75% 85%, 76% 84%, 78.5% 83%, 79.75% 74.5%, 76.9% 67%"
						}
					}
				}
			}
		}
	}
}