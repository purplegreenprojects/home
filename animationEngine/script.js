window.addEventListener("load", function() {
	
	var canvas = document.getElementById("canvas")
	var context = canvas.getContext("2d")

	resizeCanvas()

	window.addEventListener("resize", resizeCanvas)

	function resizeCanvas() {
		canvas.height = window.innerHeight
		canvas.width = window.innerWidth
	}

	//robot
		var robot = createObject({
			points:[ 
				[500, 500] 
			]
		})

		robot.distalities.torso = createObject({
			zIndex: 1,
			parentPoint: 0,
			points: [ 
				[-50, -50], 
				[-50, 50], 
				[50, 50], 
				[50, -50]
			],
			lines:  [ 
				[0, 1], 
				[1, 2], 
				[2, 3],
				[3, 0] 
			],
			planes: [ 
				{
					color: "purple",
					points: [0, 1, 2]
				},
				{
					color: "green",
					points: [0, 2, 3]
				} 
			]
		})

		robot.distalities.torso.distalities.leftArm = createObject({
			parentPoint: 0,
			points: [ 
				[0,  0], 
				[0, 50], 
				[-100,  50], 
				[-100, 0]
			],
			lines:  [ 
				[0, 1], 
				[1, 2], 
				[2, 3],
				[3, 0] 
			],
			planes: [ 
				{
					color: "blue",
					points: [0, 1, 2, 3]
				},
			]
		})

		robot.distalities.torso.distalities.rightArm = createObject({
			parentPoint: 3,
			points: [ 
				[0,    0], 
				[0,   50], 
				[100, 50], 
				[100,  0]
			],
			lines:  [ 
				[0, 1], 
				[1, 2], 
				[2, 3],
				[3, 0] 
			],
			planes: [ 
				{
					color: "yellow",
					points: [0, 1, 2, 3]
				},
			],
			// animations
			rotateUp: function() {
				rotateObject(this, -1)
			},
			rotateDown: function() {
				rotateObject(this, 1)
			},
			wave: function () {
				createTransition(this, {animationName: arguments.callee.name, isContinuous: true}, [
					{
						time: 0,
						currentRotation: 0
					},
					{
						time: 250,
						currentRotation: -45
					},
					{
						time: 500,
						currentRotation: 0
					},
					{
						time: 750,
						currentRotation: 45
					},
					{
						time: 1000,
						currentRotation: 0
					}
				])()
			}
		})

	setInterval(function(){
		clearCanvas(canvas, context)
		drawObject(canvas, context, robot)
	}, 5)
	
	window.robot = robot
	
	var isWaving = false
	window.addEventListener("click", waveArm)
	function waveArm(event) {
		if(!isWaving) {
			isWaving = true
			robot.distalities.torso.distalities.rightArm.wave()
		}
		else {
			robot.distalities.torso.distalities.rightArm.stop()
			//robot.distalities.torso.distalities.rightArm.reset()
			isWaving = false
		}
	}


	// var cat = {"distalities":{"torso":{"parentPoint":0,"zIndex":1,"distalities":{"leftShoulder":{"parentPoint":0,"zIndex":2,"distalities":{"leftFrontLeg":{"parentPoint":0,"zIndex":3,"points":[[-70.96,48.72],[-69.76,13.04],[-59.92,-24.96],[-33.84,-59.76],[-8.88,-92.4],[13.92,-104.32],[36.8,-76.08],[53.12,-33.68],[62.88,16.32],[57.04,88.72],[56.64,128.72],[35.04,192.72],[29.04,216.72],[13.04,304.72],[-2.96,318.72],[-10.96,324.72],[-34.96,328.72],[-50.96,324.72],[-54.96,320.72],[-58.96,304.72],[-52.96,288.72],[-42.96,280.72],[-22.96,268.72],[-32.96,152.72],[-46.96,88.72]],"lines":[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,0]],"planes":[{"color":"orange","points":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}],"currentMagnification":3}},"points":[[22.96,167.28]],"lines":[],"planes":[],"currentMagnification":3},"leftHip":{"parentPoint":0,"zIndex":2,"distalities":{"leftBackLeg":{"parentPoint":0,"zIndex":3,"points":[[-60.4,55.28],[-66.56,13.04],[-62.16,-39.12],[-60,-60.88],[-38.24,-82.64],[-12.16,-94.56],[26.96,-73.92],[63.92,-15.28],[67.6,63.28],[59.6,107.28],[51.6,135.28],[43.6,175.28],[43.6,195.28],[9.6,287.28],[-4.4,301.28],[-12.4,307.28],[-36.4,311.28],[-52.4,307.28],[-56.4,303.28],[-60.4,287.28],[-54.4,271.28],[-44.4,263.28],[-24.4,255.28],[-14.4,187.28],[-37.2,127.28]],"lines":[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,23],[23,24],[24,0]],"planes":[{"color":"orange","points":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]}],"currentMagnification":3}},"points":[[440.4,184.72]],"lines":[],"planes":[],"currentMagnification":3}},"points":[[-230.8,-128.8],[-186.8,-124.8],[-130.8,-112.8],[-82.8,-112.8],[-26.8,-112.8],[21.2,-112.8],[77.2,-112.8],[133.2,-104.8],[197.2,-94.8],[209.2,-96.8],[265.2,-32.8],[268,7.2],[273.2,47.2],[273.2,71.2],[149.2,111.2],[53.2,111.2],[5.2,119.2],[-66.8,127.2],[-122.8,131.2],[-150.8,127.2],[-278.8,87.2],[-298.8,31.2],[-306.8,-2.8]],"lines":[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,20],[20,21],[21,22],[22,0]],"planes":[{"color":"orange","points":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]}],"currentMagnification":3}},"points":[[442.8,352.8]],"lines":[],"planes":[],"currentMagnification":3}

	// setInterval(function(){
	// 	clearCanvas(canvas, context)
	// 	drawObject(canvas, context, cat)
	// }, 5)


})