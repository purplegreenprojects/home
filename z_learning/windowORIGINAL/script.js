window.onload = function(){

	// variables
		var canvas = document.getElementById("canvas")
		var context = canvas.getContext("2d")
		var snowflakes = []
		var counter = 0

	// animation
		setInterval(function() {
			if (counter == 0) {
				counter = 50
				createSnowflake()
			}
			else {
				counter--
			}

			repositionSnowflakes()
			drawBackground()
			drawSnowflakes()
			drawForeground()
		}, 10)

	// drawing functions
		function drawShape(coordinates, color, shadowThickness, shadowColor){
			context.beginPath()
			context.moveTo(coordinates[0][0], coordinates[0][1])
			for (i = 1; i < coordinates.length; i++){
				context.lineTo(coordinates[i][0], coordinates[i][1])
			}

			context.closePath()
			context.fillStyle = color
			if (shadowColor && shadowThickness){
				context.shadowColor = shadowColor
				context.shadowBlur = shadowThickness
			}
			else {
				context.shadowColor = "transparent"
				context.shadowBlur = 0
			}
			context.fill()
		}

		function drawCircle(x, y, radius, color, shadowThickness, shadowColor) {
			context.beginPath()
			context.arc(x, y, radius, 0, 2*Math.PI)
			context.fillStyle = color
			if (shadowColor && shadowThickness){
				context.shadowColor = shadowColor
				context.shadowBlur = shadowThickness
			}
			else {
				context.shadowColor = "transparent"
				context.shadowBlur = 0
			}
			context.fill()
		}

	// converter function
		function convertClippath(xOffset, yOffset, clippath) {
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
				coordinates[i][0] = Number(coordinates[i][0]) + xOffset // (x coordinate)
				coordinates[i][1] = Number(coordinates[i][1]) + yOffset // (y coordinate)
															  // ... of each pair in the array
			}

			return coordinates
		}

	// make snowflakes - the IDEA of snowflakes (object - with all its parameters)
		function createSnowflake(){
			var radii = [1, 1.5, 2, 2, 2.5, 2.5, 3]
			var radius = radii[Math.floor(Math.random()*radii.length)]

			var snowflake = {
				x: Math.floor(Math.random() * 200),
				y: -10,
				radius: radius,
				color: "white",
				shadowThickness: 5,
				shadowColor: "lightblue",
				vx: 0,
				vy: 1 * radius / 5
			}

			// put in your array of snowflakes this snowflake that was randomly generated
			snowflakes.push(snowflake)
		}

		function repositionSnowflakes(){
			for (i in snowflakes){
				//snowflakes[i].x <-- x is a parameter of a snowflake, which is snowflakes[i] (just like .length)
				snowflakes[i].x = snowflakes[i].x + snowflakes[i].vx
				snowflakes[i].y = snowflakes[i].y + snowflakes[i].vy

				if (snowflakes[i].y > 310) {
					snowflakes.splice(i, 1)
					i--
				}
			}
		}

	// animated scene
		function drawBackground(){

		//sky
			drawShape([ [0, 0] , [200, 0] , [200, 300] , [0, 300] ], "#b4def7") // sky

		//pine tree
			drawShape([ [60, 255], [70, 255], [70, 50], [60, 50] ], "#823c0e") //trunk
			drawShape([ [20, 265], [80, 265], [50,240] ], "darkgreen", 5, "darkgreen") // bottom branches
			drawShape([ [25, 245], [75, 245], [50,220] ], "darkgreen", 5, "darkgreen") // middle branches
			drawShape([ [35, 225], [65, 225], [50,200] ], "darkgreen", 5, "darkgreen") // top branches


		//snow
			drawShape(convertClippath(50, 138, "-50% 96.9%, -32.36% 98.24%, -22.04% 100.14%, -10.38% 98.52%, 1.28% 96.62%, 11.32% 96.36%, 24.36% 95%, 39.56% 97.44%, 53.94% 97.7%, 66.68% 95.54%, 79.98% 94.18%, 91.38% 95.54%, 105.22% 99.06%, 116.36% 98.8%, 122.04% 94.72%, 132.08% 88.76%, 142.14% 85.5%, 147.28% 84.68%, 149.46% 84.4%, 150% 150%, -50% 150%"),
				"white", 2, "lightblue") // back ground left

			drawShape(convertClippath(0, 175, "100% 73.45%, 95.66% 74.63% , 88.6% 75.44%, 80.6% 74.63%, 74.36% 73.31%, 69.34% 73.18%, 62.82% 72.5%, 58.89% 73%, 48.03% 73.85%, 41.66% 72.77%, 35.01% 72.09%, 30.12% 72.86%, 22.39% 74.53%, 16.82% 74.4%, 14.93% 74.36%, 12.21% 73.54%, 7.6% 72.18%, 3.66% 71.91%, 0.27% 72.73%, 0% 100%, 100% 100%"),
				"white", 2, "lightblue") // back ground left
			drawShape(convertClippath(100, 175, "100% 73.45%, 95.66% 74.63% , 88.6% 75.44%, 80.6% 74.63%, 74.36% 73.31%, 69.34% 73.18%, 62.82% 72.5%, 58.89% 73%, 48.03% 73.85%, 41.66% 72.77%, 35.01% 72.09%, 30.12% 72.86%, 22.39% 74.53%, 16.82% 74.4%, 14.93% 74.36%, 12.21% 73.54%, 7.6% 72.18%, 3.66% 71.91%, 0.27% 72.73%, 0% 100%, 100% 100%"),
				"white", 2, "lightblue") // back ground right

			drawShape(convertClippath(0, 185, "0% 73.45%, 8.82% 74.12%, 13.98% 75.07%, 19.81% 74.26%, 25.64% 73.31%, 30.66% 73.18%, 37.18% 72.5%, 44.78% 73.72%, 51.97% 73.85%, 58.34% 72.77%, 64.99% 72.09%, 70.69% 72.77%, 77.61% 74.53%, 83.18% 74.4%, 86.02% 72.36%, 91.04% 69.38%, 96.07% 67.75%, 98.64% 67.34%, 99.73% 67.2%, 100% 100% , 0% 100% "),
				"white", 2, "lightblue") // middle ground left
			drawShape(convertClippath(100, 185, "0% 73.45%, 8.82% 74.12%, 13.98% 75.07%, 19.81% 74.26%, 25.64% 73.31%, 30.66% 73.18%, 37.18% 72.5%, 44.78% 73.72%, 51.97% 73.85%, 58.34% 72.77%, 64.99% 72.09%, 70.69% 72.77%, 77.61% 74.53%, 83.18% 74.4%, 86.02% 72.36%, 91.04% 69.38%, 96.07% 67.75%, 98.64% 67.34%, 99.73% 67.2%, 100% 100% , 0% 100% "),
				"white", 2, "lightblue") // middle ground right

		//snowman
			drawCircle(100, 265, 15, "white", 10, "lightblue") //snowman bottom
			drawCircle(100, 243, 12, "white", 10, "lightblue") //snowman middle
			drawCircle(100, 225, 10, "white", 10, "lightblue") //snowman head
			drawCircle(100, 223, 1.5, "black") //snowman eye front
			drawCircle(105, 221, 1.5, "black") //snowman eye back
			drawShape([ [103, 224], [115, 226], [102, 228]], "orange") // snowman nose

		//more snow
			drawShape(convertClippath(50, 180, "150% 96.9%, 132.36% 98.24%, 122.04% 100.14%, 110.38% 98.52%, 98.72% 96.62%, 88.68% 96.36%, 75.64% 95%, 60.44% 97.44%, 46.06% 97.7%, 33.32% 95.54%, 20.02% 94.18%, 8.62% 95.54%, -5.22% 99.06%, -16.36% 98.8%, -22.04% 94.72%, -32.08% 88.76%, -42.14% 85.5%, -47.28% 84.68%, -49.46% 84.4%, -50% 150%, 150% 150%"),
				"white", 2, "lightblue") // front ground snow

			

		// //deciduous tree (no leaves)
		// 	drawShape(convertClippath(40, 120, "31.5% -97.83%, 38.29% -95.45%, 20% -90.26%, 35.08% -90.26%, 45.44% -91.06%, 52.99% -85.12%, 56.16% -75.97%, 61.73% -57.27%, 41.86% -63.65%, 63.35% -52.5%, 71.33% -43.57%, 67.75% -40.39%, 76.1% -38.8%, 90.82% -29.25%, 98.8% -20.53%, 92.01% -20.1%, 72.49% -28.67%, 87.19% -17.52%, 88.83% -20.89%, 66.93% -18.32%, 100.69% -14.36%, 114.66% -4.21%, 120.24% 12.88%, 60.61% -11.37%, 55.85% -37.22%, 57.43% -12.95%, 47.43% -24.7%, 34.36% -64.64%, 43.91% -82.55%, 32.41% -67.01%, 31.19% -81.34%, 30.79% -64.64%, 36.34% -44.36%, 16.49% -57.49%, 34.36% -40.39%, 38.75% -28.06%, 1.38% -44.77%, -14.12% -46.74%, -40.76% -63.06%, -26.05% -49.51%, -58.62% -52.71%, -37.19% -46.74%, -48.32% -33.65%, -31.62% -46.74%, -11.71% -42.8%, 6.16% -37.6%, -19.29% -29.67%, 8.56% -33.65%, 19.29% -28.45%, 31.19% -21.71%, 10.14% -17.74%, -0.21% -24.1%, 6.94% -16.16%, -10.94% -16.95%, 0.2% -13.75%, -6.19% -7.8%, 2.99% -12.95%, 8.56% -13.36%, 17.26% -15.36%, -0.21% 4.92%, -25.26% 2.13%, -0.21% 8.91%, -30.41% 21.63%, -10.56% 16.04%, -14.12% 27.98%, -8.95% 18.83%, -4.2% 12.88%, 1% 11.31%, 5.76% 30.37%, 4.56% 5.32%, 19.29% -10.58%, 37.16% -17.33%, 42.73% -17.74%, 48.26% -11.75%, 59.43% 0.17%, 45.54% 5.75%, 28.83% -1.02%, 40.32% 8.11%, 21.25% 10.1%, 33.19% 11.31%, 52.66% 7.7%, 48.26% 20.44%, 56.25% 7.33%, 63.81% 4.92%, 84.08% 10.1%, 101.48% 21.95%, 119.76% 30.71%, 130.51% 45.85%, 136.88% 62.91%, 139.24% 86.39%, 142.04% 116.19%, 141.64% 169.45%, 134.07% 194.91%, 182.19% 195.7%, 181% 116.61%, 181.79% 65.7%, 170.64% 32.3%, 173.44% 17.24%, 185.36% -7.02%, 179.77% -23.75%, 163.1% 3.67%, 159.93% -13.81%, 159.51% 3.3%, 149.98% -2.67%, 153.17% 1.31%, 159.51% 8.88%, 159.51% 16.01%, 155.16% 25.56%, 143.29% 15.67%, 138.04% 3.3%, 152.74% -17.75%, 181% -36.86%, 176.63% -48.79%, 136.07% -17.37%, 139.7% -36.01%, 158.41% -56.7%, 146.88% -48.36%, 151.25% -56.3%, 142.11% -47.15%, 147.67% -69.77%, 157.99% -80.55%, 148.49% -74.18%, 140.05% -121.27%, 142.49% -65.04%, 137.73% -71%, 132.98% -80.93%, 134.14% -71.8%, 138.93% -62.65%, 132.98% -44.77%, 125.41% -66.24%, 124.23% -83.32%, 121.85% -68.21%, 116.26% -78.55%, 114.99% -85.12%, 121.74% -119.69%, 112.2% -90.69%, 95.93% -103.81%, 109.43% -87.49%, 115.08% -68.21%, 88.76% -89.46%, 105.14% -68.61%, 93.54% -68.82%, 109.43% -63.65%, 117.39% -59.28%, 122.24% -50.32%, 122.24% -30.45%, 119.05% -16.16%, 106.73% -52.31%, 109.13% -34.44%, 99.56% -41.17%, 109.13% -30.06%, 111.88% -20.53%, 91.61% -39.6%, 93.6% -56.7%, 88.85% -41.99%, 80.49% -60.64%, 83.68% -41.99%, 70.16% -54.7%, 73.32% -76.56%, 67.75% -58.67%, 66.11% -66.42%, 70.08% -107.37%, 77.24% -142.74%, 69.69% -124.45%, 64.93% -133.22%, 68.5% -116.89%, 65.3% -99.82%, 62.51% -80.76%, 55.79% -91.87%, 57.75% -108.56%, 53.8% -92.68%, 46.24% -99.01%, 35.5% -113.75%, 41.08% -100.61%, 32.3% -102.2%, 10.86% -114.52%, 23.98% -103.01%"),
		// 		"#3a2213") // deciduous tree
		// //snow on tree	
		// 	drawShape(convertClippath(40, 120, "136.88% -16.58%, 142.43% -21.74%, 150.38% -25.75%, 161.5% -37.25%, 151.18% -32.45%, 145.61% -31.68%, 142.43% -31.68%, 136.88% -29.31%, 134.48% -23.75%"),
		// 		"white", 5, "lightblue")
		// 	drawShape(convertClippath(40, 120, "-11.01% -46.8%, 4.89% -45.58%, 12.83% -42.03%, 19.59% -40.43%, 28.36% -37.65%, 33.11% -37.25%, 38.29% -32.09%, 37.88% -28.11%, 32.71% -27.74%, 26.35% -32.89%, 21.18% -34.86%, 8.45% -40.43%"),
		// 		"white", 5, "lightblue")
		// 	drawShape(convertClippath(40, 120, "106.66% 16.81%, 111.41% 16.81%, 114.6% 20%, 118.98% 18.01%, 121.38% 15.61%, 120.18% 11.25%, 113.04% 7.66%, 106.66% 4.07%, 100.69% 2.11%, 95.13% -0.26%, 88.76% 0.13%, 96.7% 8.06%, 101.89% 13.25%"),
		// 		"white", 5, "lightblue")
		}

		function drawSnowflakes() {
			for (i in snowflakes) {
				drawCircle(snowflakes[i].x, snowflakes[i].y, snowflakes[i].radius, snowflakes[i].color, snowflakes[i].shadowThickness, snowflakes[i].shadowColor)
			}
		}

		function drawForeground() {
			drawShape(convertClippath(0, 200, "100% 94.45%, 91.18% 95.12%, 86.02% 96.07%, 80.19% 95.26%, 72.46% 95.39% , 64.18% 96.61%, 55.63% 96.34%, 47.49% 94.57%, 41.79% 93.89%, 37.58% 94.03%, 32.56% 95.39%, 28.36% 96.2%, 22.39% 95.53%, 16.82% 95.4%, 13.03% 95.39%, 8.68% 94.44%, 5.02% 94.57%, 2.17% 93.76%, 0% 94.17%, 0% 100%, 100% 100%"),
				"white", 10, "#black") // windowsill snow bottom left
			drawShape(convertClippath(100, 200, "100% 94.45%, 91.18% 95.12%, 86.02% 96.07%, 80.19% 95.26%, 72.46% 95.39% , 64.18% 96.61%, 55.63% 96.34%, 47.49% 94.57%, 41.79% 93.89%, 37.58% 94.03%, 32.56% 95.39%, 28.36% 96.2%, 22.39% 95.53%, 16.82% 95.4%, 13.03% 95.39%, 8.68% 94.44%, 5.02% 94.57%, 2.17% 93.76%, 0% 94.17%, 0% 100%, 100% 100%"),
				"white", 10, "#black") // windowsill snow bottom right		

			drawShape(convertClippath(0, 42, "100% 94.45%, 91.18% 95.12%, 86.02% 96.07%, 80.19% 95.26%, 72.46% 95.39% , 64.18% 96.61%, 55.63% 96.34%, 47.49% 94.57%, 41.79% 93.89%, 37.58% 94.03%, 32.56% 95.39%, 28.36% 96.2%, 22.39% 95.53%, 16.82% 95.4%, 13.03% 95.39%, 8.68% 94.44%, 5.02% 94.57%, 2.17% 93.76%, 0% 94.17%, 0% 100%, 100% 100%"),
				"white", 15, "#gray") // windowsill snow middle left
			drawShape(convertClippath(100, 42, "100% 94.45%, 91.18% 95.12%, 86.02% 96.07%, 80.19% 95.26%, 72.46% 95.39% , 64.18% 96.61%, 55.63% 96.34%, 47.49% 94.57%, 41.79% 93.89%, 37.58% 94.03%, 32.56% 95.39%, 28.36% 96.2%, 22.39% 95.53%, 16.82% 95.4%, 13.03% 95.39%, 8.68% 94.44%, 5.02% 94.57%, 2.17% 93.76%, 0% 94.17%, 0% 100%, 100% 100%"),
				"white", 15, "#gray") // windowsill snow middle right		


			drawShape([ [0, 142] , [200, 142] , [200, 158] , [0, 158] ], "#823c0e") // window crossbeam

			drawShape([ [90, 142], [90, 138], [110, 138], [110, 142] ], "#823c0e") // window latch

			//drawShape(convertClippath(100, 200, "54% 19%,69% 23%,79% 40%,79% 59%, 78.5% 62%, 71% 77%, 70% 80%,69% 84%,67% 87%,64% 88.5%,62% 88.8%,61% 89%,56% 88%, 50% 83%, 44% 88%,39% 89%,38% 88.8%,36% 88.5%,33% 87%,31% 84%,30% 80%,29% 77%, 21.5% 62%,21% 59%,21% 40%,31% 23%,46% 19%"),"brown", 10, "brown")
		}

}
