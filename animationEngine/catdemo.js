window.addEventListener("load", function() {
	
	var canvas = document.getElementById("canvas")
	var context = canvas.getContext("2d")

	resizeCanvas()

	window.addEventListener("resize", resizeCanvas)

	function resizeCanvas() {
		canvas.height = window.innerHeight
		canvas.width = window.innerWidth
	}

	// cat
		var cat = createObject({
			points:[ 
				[100, 100]
			]
		})

		cat.distalities.torso = createObject({
			zIndex: 1,
			parentPoint: 0,
			points: [ 
				[26.5, 28], 
				[32, 28.5], 
				[39, 30], 
				[45, 30], 
				[52, 30], 
				[58, 30], 
				[65, 30], 
				[72, 31], 
				[80, 32.25], 
				[81.5, 32],  
				[88.5, 40], 
				[88.85, 45], 
				[89.5, 50], 
				[89.5, 53], 
				[74, 58], 
				[62, 58], 
				[56, 59], 
				[47, 60], 
				[40, 60.5], 
				[36.5, 60], 
				[20.5, 55], 
				[18, 48], 
				[17, 43.75]
			],
			lines:  [ 
				[0, 1], 
				[1, 2], 
				[2, 3],
				[3, 4],
				[4, 5],
				[5, 6],
				[6, 7],
				[7, 8],
				[8, 9],
				[9, 10],
				[10, 11],
				[11, 12],
				[12, 13],
				[13, 14],
				[14, 15],
				[15, 16],
				[16, 17],
				[18, 19],
				[19, 20],
				[20, 21],
				[21, 22],
				[22, 0]

			],
			planes: [ 
				{
					color: "orange",
					points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
				}
			]
		})

		cat.distalities.torso.distalities.leftArm = createObject({
			parentPoint: 20,
			points: [ 
				[20.5, 55], 
				[20.65, 50.54], 
				[21.88, 45.79], 
				[25.14, 41.44], 
				[28.26, 37.36], 
				[31.11, 35.87], 
				[33.97, 39.4], 
				[36.01, 44.7], 
				[37.23, 50.95], 
				[36.5, 60], 
				[36.45, 65], 
				[33.75, 73], 
				[33, 76], 
				[31, 87], 
				[29, 88.75], 
				[28, 89.5], 
				[25, 90], 
				[23, 89.5], 
				[22.5, 89], 
				[22, 87], 
				[22.75, 85], 
				[24, 84], 
				[26.5, 82.5], 
				[25.25, 68], 
				[23.5, 60]
			],
			lines:  [ 
				[0, 1], 
				[1, 2], 
				[2, 3],
				[3, 4],
				[4, 5],
				[5, 6],
				[6, 7],
				[7, 8],
				[8, 9],
				[9, 10],
				[10, 11],
				[11, 12],
				[12, 13],
				[13, 14],
				[14, 15],
				[15, 16],
				[16, 17],
				[18, 19],
				[19, 20],
				[20, 21],
				[21, 22],
				[22, 23],
				[23, 24],
				[24, 0]
			],
			planes: [ 
				{
					color: "orange",
					points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
				},
			]
		})

		cat.distalities.torso.distalities.leftLeg = createObject({
			parentPoint: 14,
			points: [ 
				[74, 58], 
				[73.23, 52.72], 
				[73.78, 46.2], 
				[74.05, 43.48], 
				[76.77, 40.76], 
				[80.03, 39.27], 
				[84.92, 41.85], 
				[89.54, 49.18], 
				[90, 59], 
				[89, 64.5], 
				[88, 68], 
				[87, 73], 
				[87, 75.5], 
				[82.75, 87], 
				[81, 88.75], 
				[80, 89.5], 
				[77, 90], 
				[75, 89.5], 
				[74.5, 89], 
				[74, 87], 
				[74.75, 85], 
				[76, 84], 
				[78.5, 83], 
				[79.75, 74.5], 
				[76.9, 67]
			],
			lines:  [ 
				[0, 1], 
				[1, 2], 
				[2, 3],
				[3, 4],
				[4, 5],
				[5, 6],
				[6, 7],
				[7, 8],
				[8, 9],
				[9, 10],
				[10, 11],
				[11, 12],
				[12, 13],
				[13, 14],
				[14, 15],
				[15, 16],
				[16, 17],
				[18, 19],
				[19, 20],
				[20, 21],
				[21, 22],
				[22, 23],
				[23, 24],
				[24, 0]
			],
			planes: [ 
				{
					color: "orange",
					points: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
				},
			]
		})
		// 	// animations
		// 	rotateUp: function() {
		// 		rotateObject(this, -1)
		// 	},
		// 	rotateDown: function() {
		// 		rotateObject(this, 1)
		// 	},
		// 	wave: function() {
		// 		var thing = this
				
		// 		thing.currentCounters.wave = thing.currentCounters.wave || 0
		// 		thing.currentLoops.wave = setInterval(function() {
		// 			if (thing.currentCounters.wave == 180) {
		// 				thing.currentCounters.wave = 0
		// 			}
					
		// 			if (0 <= thing.currentCounters.wave && thing.currentCounters.wave < 45) {
		// 				thing.currentCounters.wave ++
		// 				thing.rotateUp()
		// 			}
		// 			else if (45 <= thing.currentCounters.wave && thing.currentCounters.wave < 135) {
		// 				thing.currentCounters.wave ++
		// 				thing.rotateDown()
		// 			}
		// 			else if (135 <= thing.currentCounters.wave && thing.currentCounters.wave < 180) {
		// 				thing.currentCounters.wave ++
		// 				thing.rotateUp()
		// 			}
		// 		}, 25)
		// 	},
			
		// })

	setInterval(function(){
		clearCanvas(canvas, context)
		drawObject(canvas, context, cat)
	}, 5)
	
	
	// var isWaving = false
	// window.addEventListener("click", waveArm)
	// function waveArm(event) {
	// 	if(!isWaving) {
	// 		isWaving = true
	// 		cat.distalities.torso.distalities.rightArm.wave()
	// 	}
	// 	else {
	// 		cat.distalities.torso.distalities.rightArm.stop()
	// 		cat.distalities.torso.distalities.rightArm.reset()
	// 		isWaving = false
	// 	}
	// }
})