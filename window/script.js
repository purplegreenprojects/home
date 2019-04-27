window.onload = function(){

	// canvas
		var canvas = document.getElementById("canvas")
		var context = canvas.getContext("2d")
		var season = getSeason()
		
		var windowCrossbeam = [ [0, 575] , [800, 575] , [800, 625] , [0, 625] ]
		var windowLatch = [ [350, 575], [350, 550], [450, 550], [450, 575] ]
		var tree = convertClippath(100, -20, "738.79% 1237.67%, 713.76% 937.46%, 704.54% 723.69%, 735.91% 585.63%, 750.03% 526.29%, 802.04% 431.88%, 783.58% 363.82%, 710.92% 470.16%, 702.6% 399.64%, 697.03% 467.44%, 660.35% 441.48%, 672.49% 458.14%, 695.83% 490.41%, 694.36% 518.37%, 675.4% 555.42%, 629.51% 513.96%, 611.16% 462.94%, 674.47% 382.14%, 791.29% 312.16%, 776.83% 263.34%, 607.46% 380.63%, 626.37% 306.52%, 705.6% 227.56%, 657.89% 259.1%, 676.54% 228.03%, 637.71% 262.05%, 665.39% 173.37%, 708.58% 132.59%, 669.32% 155.55%, 645.22% -33.96%, 643.43% 191.25%, 625.7% 166.3%, 608.82% 125.34%, 611.88% 162.55%, 628.97% 199.51%, 601.23% 270.15%, 575.77% 182.7%, 574.33% 114.53%, 561.21% 173.93%, 541.4% 131.83%, 537.75% 105.61%, 572% -31.79%, 527.97% 82.06%, 465.79% 26.72%, 516.31% 94.47%, 534.25% 172.51%, 433.84% 82.13%, 495.36% 169.47%, 448.48% 166.02%, 511.34% 189.33%, 542.35% 208.99%, 559.44% 245.93%, 555.31% 324.82%, 539.35% 381.06%, 497.94% 234.7%, 504.22% 306.12%, 466.69% 277.12%, 503.28% 324.09%, 512.27% 362.63%, 434.36% 282.43%, 445.96% 213.95%, 423.9% 271.87%, 394.87% 195.24%, 403.93% 270.83%, 352.67% 217.07%, 369.21% 130.82%, 343.53% 200.57%, 338.15% 169.25%, 362.66% 7.31%, 399.06% -132.98%, 365.28% -61.65%, 348.13% -97.6%, 358.71% -31.95%, 342.11% 36.27%, 327.16% 111.59%, 302.5% 66.24%, 314% -0.26%, 294.72% 61.82%, 266.07% 35.29%, 226.21% -25.89%, 245.41% 28.2%, 210.83% 19.37%, 127.5% -34.06%, 178.03% 14.66%, 206.89% 37.2%, 233.38% 47.6%, 159.38% 64.75%, 219.3% 67.89%, 261.39% 67.09%, 290.1% 92.63%, 301.2% 129.26%, 319.24% 205.3%, 240.7% 175.15%, 324.23% 224.58%, 354.31% 262.22%, 339.69% 273.47%, 372.3% 282.19%, 429.22% 323.22%, 459.34% 359.84%, 432.28% 360.43%, 356.21% 321.41%, 412.78% 369.43%, 419.5% 355.77%, 332.04% 362.19%, 466.02% 385.23%, 519.85% 428.11%, 538.21% 498.16%, 304.63% 388.8%, 291.08% 283.93%, 293% 381.17%, 255.52% 332.14%, 210.97% 169.59%, 253.63% 100.73%, 204.45% 160.24%, 202.43% 103.05%, 196.98% 168.85%, 214.66% 251.89%, 138.54% 194.83%, 205.88% 266.45%, 221.24% 317.33%, 75.95% 242.62%, 14.46% 231.39%, -89% 160.88%, -32.9% 217.89%, -162.04% 198.11%, -78.42% 226.53%, -125.08% 276.15%, -55.45% 227.73%, 22.61% 247.83%, 93.41% 272.58%, -10.07% 298.2%, 101.61% 288.03%, 143.45% 311.25%, 189.98% 340.73%, 105.25% 352.3%, 64.62% 325.14%, 91.96% 357.62%, 20.21% 350.86%, 64.47% 366.19%, 37.25% 388.8%, 75.29% 369.76%, 97.32% 369.91%, 132.69% 363.76%, 58.55% 440.99%, -40.73% 424.76%, 57.71% 456.96%, -65.79% 501.56%, 15.3% 482.77%, -1.19% 529.98%, 20.72% 494.08%, 40.89% 472.1%, 62.23% 466.21%, 77.18% 544.1%, 77.48% 442.98%, 139.69% 383.16%, 213.01% 359.96%, 235.07% 359.11%, 255.79% 384.22%, 298.21% 434.52%, 241.15% 453.56%, 175.65% 423.08%, 219.71% 461.44%, 143.38% 465.45%, 191.06% 472.96%, 269.67% 463.06%, 249.04% 513.04%, 283.77% 461.8%, 314.2% 454.37%, 394.04% 478.6%, 461.43% 530.19%, 532.51% 568.97%, 572.3% 631.13%, 594.65% 701.39%, 598.72% 795.74%, 603.49% 915.15%, 601.68% 976.44%, 602.78% 1033.58%, 601.72% 1105.52%, 599.88% 1165.21%, 596.75% 1200.29%, 589.77% 1228.47%")

	// season-dependent objects
		if (season == "winter") {
			var windowSnow = [
				convertClippath(0, 0, "0% 1200%, 0% 1157.8%, 35.2% 1160.5%, 56% 1164.3%, 79.2% 1161%, 110.2% 1161.5%, 143.2% 1166.5%, 177.5% 1165.3%, 210% 1158.3%, 232.7% 1155.5%, 249.7% 1156%, 269.7% 1161.5%, 286.5% 1164.7%, 310.5% 1162%, 332.7% 1161.5%, 348% 1161.5%, 365.2% 1157.8%, 380% 1158.3%, 391.2% 1155%, 400% 1156.8%, 400% 1157.8%, 435.2% 1160.5%, 456% 1164.3%, 479.2% 1161%, 510.2% 1161.5%, 543.2% 1166.5%, 577.5% 1165.3%, 610% 1158.3%, 632.7% 1155.5%, 649.7% 1156%, 669.7% 1161.5%, 686.5% 1164.7%, 710.5% 1162%, 732.7% 1161.5%, 748% 1161.5%, 765.2% 1157.8%, 780% 1158.3%, 791.2% 1155%, 800% 1156.8%, 800% 1200%"),
				convertClippath(0, 5, "0% 575%, 800% 575%, 800% 532.8%, 764.8% 535.5%, 744% 539.3%, 720.8% 536%, 689.8% 536.5%, 656.8% 541.5%, 622.5% 540.3%, 590% 533.3%, 567.3% 530.5%, 550.3% 531%, 530.3% 536.5%, 513.5% 539.7%, 489.5% 537%, 467.3% 536.5%, 452% 536.5%, 434.8% 532.8%, 420% 533.3%, 408.8% 530%, 400% 531.8%, 400% 532.8%, 364.8% 535.5%, 344% 539.3%, 320.8% 536%, 289.8% 536.5%, 256.8% 541.5%, 222.5% 540.3%, 190% 533.3%, 167.3% 530.5%, 150.3% 531%, 130.3% 536.5%, 113.5% 539.7%, 89.5% 537%, 67.3% 536.5%, 52% 536.5%, 34.8% 532.8%, 20% 533.3%, 8.8% 530%, 0% 531.8%")
			]

			var snowflakes = []
			var counter = 0
			var snowmanNose = [[308, 835], [355, 835], [311, 845]]
			var snowscapes = [
				convertClippath(0, 888, "0% 0%, 0% 223.9%, 801.9% 223.9%, 801.9% 23.9%, 751.7% 27.1%, 704.2% 28.4%, 656.7% 24.4%, 607.9% 13.5%, 586.2% 10.8%, 565.8% 9.4%, 537.3% 13.5%, 460% 14.9%, 374.5% 9.4%, 301.2% 8.1%, 263.2% 10.8%, 207.6% 20.3%, 162.8% 28.4%, 133% 29.8%, 105.8% 24.4%, 70.6% 13.5%, 28.5% 5.4%"),
				convertClippath(0, 925, "0% 0%, 0% 200%, 800% 200%, 800% 41%, 747.2% 44.6%, 716% 50.6%, 681.2% 45.8%, 646.4% 39.8%, 615.8% 39.2%, 576.8% 35%, 531.2% 42.2%, 488% 43.4%, 450.2% 36.8%, 410% 32.6%, 375.8% 36.8%, 334.4% 47%, 300.8% 46.4%, 194.8% 13.3%, 159.6% -3%, 102.6% -11.1%, 38.8% -5.7%"),
				convertClippath(0, 1000, "0% 0%, 0% 200%, 800% 200%, 800% 5.8%, 755.8% 0.5%, 704.2% 5.9%, 659.4% 22.2%, 626.9% 24.9%, 571.2% 23.5%, 508.8% 15.4%, 426.1% 10%, 382% 9%, 333.8% 16.8%, 276.8% 7.3%, 238.8% 1.1%, 184.5% 1.8%, 132.4% 13.4%, 117.2% 13.1%, 95.5% 6.5%, 58.6% -4.4%, 27.1% -6.5%"),
				convertClippath(0, 1050, "0% 0%, 0% 200%, 800% 200%, 800% 50%, 729.4% 55.4%, 688.2% 63%, 641.5% 56.5%, 594.9% 48.9%, 554.7% 47.8%, 502.6% 42.4%, 441.8% 52.2%, 384.2% 53.2%, 333.3% 44.6%, 280.1% 39.1%, 234.5% 44.6%, 185.9% 56.1%, 135.7% 43.9%, 99.1% 27.6%, 66.5% 12.7%, 31.4% 4.4%, 10.9% 1.1%")
			]
			var snowOnTree = [
				convertClippath(100, -20, "502.63% 506.51%, 512.04% 508.41%, 522.5% 517.07%, 532.07% 517.87%, 542.16% 508.79%, 533.25% 478.28%, 509.94% 470.25%, 485.76% 459.67%, 464.75% 451.56%, 438.25% 439.35%, 415.08% 440.14%, 445.18% 473.46%, 460.35% 483.97%, 479.84% 499.91%, 491.91% 504.65%"),
				convertClippath(100, -20, "40.02% 234.73%, 99.69% 240.56%, 130.61% 256.4%, 157.34% 264.21%, 191.71% 277.13%, 210.6% 279.72%, 230.29% 301.38%, 227.76% 317.27%, 207.01% 317.58%, 182.72% 295.68%, 162.46% 286.81%, 112.8% 261.88%"),
				convertClippath(100, -20, "605.5% 385.53%, 633.96% 364.19%, 666.75% 349.89%, 713.43% 307.57%, 671.35% 323.29%, 648.83% 324.92%, 636.05% 324.25%, 613.58% 332.68%, 602.82% 354.55%")
			]
		}
		else if (season == "spring") {
			var petals = [

			]
			var rabbit = {
				x: -200,
				y: 920,
				legsPosition: "in",
				legsCounter: 0
			}
			var greenscapes = [
				convertClippath(0, 888, "0% 0%, 0% 1200%, 800% 1200%, 801.9% 23.9%, 751.7% 27.1%, 704.2% 28.4%, 656.7% 24.4%, 607.9% 13.5%, 586.2% 10.8%, 565.8% 9.4%, 537.3% 13.5%, 460% 14.9%, 374.5% 9.4%, 301.2% 8.1%, 263.2% 10.8%, 207.6% 20.3%, 162.8% 28.4%, 133% 29.8%, 105.8% 24.4%, 70.6% 13.5%, 28.5% 5.4%"),
				convertClippath(0, 925, "0% 0%, 0% 200%, 800% 200%, 800% 41%, 747.2% 44.6%, 716% 50.6%, 681.2% 45.8%, 646.4% 39.8%, 615.8% 39.2%, 576.8% 35%, 531.2% 42.2%, 488% 43.4%, 450.2% 36.8%, 410% 32.6%, 375.8% 36.8%, 334.4% 47%, 300.8% 46.4%, 194.8% 13.3%, 159.6% -3%, 102.6% -11.1%, 38.8% -5.7%"),
				convertClippath(0, 1000, "0% 0%, 0% 200%, 800% 200%, 800% 5.8%, 755.8% 0.5%, 704.2% 5.9%, 659.4% 22.2%, 626.9% 24.9%, 571.2% 23.5%, 508.8% 15.4%, 426.1% 10%, 382% 9%, 333.8% 16.8%, 276.8% 7.3%, 238.8% 1.1%, 184.5% 1.8%, 132.4% 13.4%, 117.2% 13.1%, 95.5% 6.5%, 58.6% -4.4%, 27.1% -6.5%"),
				convertClippath(0, 1050, "0% 0%, 0% 200%, 800% 200%, 800% 50%, 729.4% 55.4%, 688.2% 63%, 641.5% 56.5%, 594.9% 48.9%, 554.7% 47.8%, 502.6% 42.4%, 441.8% 52.2%, 384.2% 53.2%, 333.3% 44.6%, 280.1% 39.1%, 234.5% 44.6%, 185.9% 56.1%, 135.7% 43.9%, 99.1% 27.6%, 66.5% 12.7%, 31.4% 4.4%, 10.9% 1.1%")
			]
		}
		else if (season == "summer") {
			var rain = []
		}
		else if (season == "fall") {
			var leaves = []
		}
	
	// animationSeasons
		var animateSeason = {
			winter: animateWinter,
			spring: animateSpring,
			summer: animateSummer,
			fall: animateFall
		}
	
	// action!
		setInterval(animateSeason[season], 10)

///////////////////////////////////////////////////////////////////////////////////////

	// get the season from hash or random
		function getSeason() {
			if (location.hash) {
				if (location.hash.toLowerCase() == "#winter") {
					return "winter"
				}

				else if (location.hash.toLowerCase() == "#spring") {
					return "spring"
				}

				else if (location.hash.toLowerCase() == "#summer") {
					return "summer"
				}

				else if (location.hash.toLowerCase() == "#fall") {
					return "fall"
				}

				else {
					var seasons = ["winter", "spring"]
					return seasons[Math.floor(Math.random() * seasons.length)]
				}
			}
			else {
				var month = new Date().getMonth() + 1
				var date = new Date().getDate()

				if ((month == 12 && date >= 21) || (month == 1) || (month == 2) || (month == 3 && date < 20)) {
					return "winter"
				}
				
				else if ((month == 3 && date >= 20) || (month == 4) || (month == 5) || (month == 6 && date < 21)) {
					return "spring"
				}

				else if ((month == 6 && date >= 21) || (month == 7) || (month == 8) || (month == 9 && date < 22)) {
					return "summer"
				}

				else if ((month == 9 && date >= 22) || (month == 10) || (month == 11) || (month == 12 && date < 21)) {
					return "fall"
				}
				
			}
		}

	// drawing functions
		function drawShape(coordinates, color, shadowThickness, shadowColor, lineargradient){
			context.beginPath()
			context.moveTo(coordinates[0][0], coordinates[0][1])
			for (i = 1; i < coordinates.length; i++){
				context.lineTo(coordinates[i][0], coordinates[i][1])
			}

			context.closePath()

			
			if (shadowColor && shadowThickness){
				context.shadowColor = shadowColor
				context.shadowBlur = shadowThickness
			}
			else {
				context.shadowColor = "transparent"
				context.shadowBlur = 0
			}			

			if (lineargradient){
				context.fillStyle = lineargradient
			}

			else {
				context.fillStyle = color
			}
			context.fill()
		}

		function drawCircle(x, y, radius, color, shadowThickness, shadowColor, radialgradient) {
			context.beginPath()
			context.arc(x, y, radius, 0, 2*Math.PI)
			if(radialgradient){
				context.fillStyle = radialgradient
			}
			else{
				context.fillStyle = color
			}
			
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

		function drawImage(file, x, y, width, height) {
			var image = document.createElement("img")
				image.src = file
			context.drawImage(image, x, y, width, height)
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

///////////////////////////////////////////////////////////////////////////////////////
	// WINTER
		// animation loop
			function animateWinter() {
				if (counter == 0) {
					counter = 2
					createSnowflake()
				}
				else {
					counter--
				}

				repositionSnowflakes()
				drawBackground_WINTER()
				drawSnowflakes()
				drawForeground_WINTER()
			}

		// the IDEA of snowflakes (object - with all its parameters)
			function createSnowflake(){
				var radii = [3, 3, 5, 5.5, 6, 6, 6.5, 6.5, 7]
				var radius = radii[Math.floor(Math.random()*radii.length)]

				var snowflake = {
					x: Math.floor(Math.random() * 800),
					y: -10,
					radius: radius,
					color: "white",
					shadowThickness: 20,
					shadowColor: "lightblue",
					vx: 0.2,
					vy: 1 * radius / 2
				}

				// put in your array of snowflakes this snowflake that was randomly generated
				snowflakes.push(snowflake)
			}

			function repositionSnowflakes(){
				for (i in snowflakes){
					//snowflakes[i].x <-- x is a parameter of a snowflake, which is snowflakes[i] (just like .length)
					snowflakes[i].x = snowflakes[i].x + snowflakes[i].vx
					snowflakes[i].y = snowflakes[i].y + snowflakes[i].vy

					if (snowflakes[i].y > 1210) {
						snowflakes.splice(i, 1)
						i--
					}
				}
			}

		// The Scene (create and animate)
			function drawBackground_WINTER(){

				context.clearRect(0, 0, 800, 1200);

				//sky
					var blueSky = context.createLinearGradient(0, 0, 0, 1500);
						blueSky.addColorStop(0, '#4286f4');
						blueSky.addColorStop(1, 'white');

					var sunrise = context.createLinearGradient(0, 0, 0, 1200);
						sunrise.addColorStop(0, 'lightyellow');
						sunrise.addColorStop(1, 'orange');

					var sunset = context.createLinearGradient(0, 0, 200, 1200);
						sunset.addColorStop(0, '#190663');
						sunset.addColorStop(0.4, '#351aa0');
						sunset.addColorStop(0.5, '#a01b62');
						// sunset.addColorStop(0.6, 'lightyellow');
						sunset.addColorStop(0.8, 'darkorange');


					drawShape([ [0, 0] , [800, 0] , [800, 1200] , [0, 1200] ], blueSky) // sky

				//sun
					//var sun_blueSky = context.createRadialGradient(300, 300, 5, 400, 600, 200); //rays?
					var sunBlueSky = context.createRadialGradient(50, 0, 5, 50, 0, 200);
						// sun_blueSky.addColorStop(0, 'orange');
						sunBlueSky.addColorStop(0, 'yellow');
				  		sunBlueSky.addColorStop(0.2, 'lightyellow');
				  		sunBlueSky.addColorStop(1, 'rgba(66, 134, 244, 0)');

			  		var sunRise = context.createRadialGradient(400, 600, 5, 400, 600, 200);
						sunRise.addColorStop(0, 'white');
						sunRise.addColorStop(0.3, 'orange');
				  		sunRise.addColorStop(0.5, 'lightyellow');
				  		sunRise.addColorStop(1, 'rgba(255,255,224, 0)');

				  	var sunSet = context.createRadialGradient(700, 900, 5, 700, 900, 200);
						sunSet.addColorStop(0, 'orange');
				  		sunSet.addColorStop(0.8, 'lightyellow');
				  		sunSet.addColorStop(1, 'rgba(255,255,224, 0)');

					//drawCircle(400, 600, 1000, sunBlueSky)

				//snowscape		
					drawShape(snowscapes[0],
						"white", 100, "lightblue") // background
					drawShape(snowscapes[1],
						"white", 100, "lightblue") // middleground

				//snowman
					drawCircle(300, 980, 60, "white", 40, "lightblue") //snowman bottom
					drawCircle(300, 900, 48, "white", 40, "lightblue") //snowman middle
					drawCircle(300, 830, 40, "white", 50, "lightblue") //snowman head
					drawCircle(298, 828, 3, "black") //snowman eye front
					drawCircle(314, 825, 3, "black") //snowman eye back
					drawShape(snowmanNose, "orange") // snowman nose

				//more snowscape
					drawShape(snowscapes[2], "white", 100, "lightblue") // foreground
					drawShape(snowscapes[3], "white", 100, "lightblue") // foreforeground

				//deciduous tree (no leaves)
					drawShape(tree, "#3a2213") // deciduous tree

				//snow on tree	
					drawShape(snowOnTree[0], "white", 30, "lightblue")
					drawShape(snowOnTree[1], "white", 30, "lightblue")
					drawShape(snowOnTree[2], "white", 30, "lightblue")
			}

			function drawSnowflakes() {
				for (i in snowflakes) {
					drawCircle(snowflakes[i].x, snowflakes[i].y, snowflakes[i].radius, snowflakes[i].color, snowflakes[i].shadowThickness, snowflakes[i].shadowColor)
				}
			}

			function drawForeground_WINTER() {
				drawShape(windowSnow[0], "white", 20, "darkgray") // windowsill snow bottom
				drawShape(windowSnow[1], "white", 80, "white") // windowsill snow middle
				drawShape(windowCrossbeam, "#823c0e") // window crossbeam
				drawShape(windowLatch, "#823c0e") // window latch
			}

///////////////////////////////////////////////////////////////////////////////////////
	// SPRING
		// animation loop
			function animateSpring() {
				context.clearRect(0, 0, 800, 1200);
				drawBackground_SPRING()
				rabbit = repositionRabbit(rabbit)
				drawRabbit(rabbit.x, rabbit.y, rabbit.legsPosition)
				drawForeground_SPRING()
				
								
			}

		// drawBackground SPRING
			function drawBackground_SPRING() {
				//sky
					var blueSky = context.createLinearGradient(0, 0, 0, 1500);
						blueSky.addColorStop(0, '#4286f4');
						blueSky.addColorStop(0.8, 'white');

					var sunrise = context.createLinearGradient(0, 0, 0, 1200);
						sunrise.addColorStop(0, 'lightyellow');
						sunrise.addColorStop(1, 'orange');

					var sunset = context.createLinearGradient(0, 0, 200, 1200);
						sunset.addColorStop(0, '#190663');
						sunset.addColorStop(0.4, '#351aa0');
						sunset.addColorStop(0.5, '#a01b62');
						// sunset.addColorStop(0.6, 'lightyellow');
						sunset.addColorStop(0.8, 'darkorange');


					drawShape([ [0, 0] , [800, 0] , [800, 1200] , [0, 1200] ], blueSky) // sky

				//sun
					//var sun_blueSky = context.createRadialGradient(300, 300, 5, 400, 600, 200); //rays?
					var sunBlueSky = context.createRadialGradient(100, 100, 1, 0, 0, 500);
						// sun_blueSky.addColorStop(0, 'orange');
						sunBlueSky.addColorStop(0, 'yellow');
				  		sunBlueSky.addColorStop(0.15, 'lightyellow');
				  		sunBlueSky.addColorStop(1, 'rgba(66, 134, 244, 0)');

			  		var sunRise = context.createRadialGradient(400, 600, 5, 400, 600, 200);
						sunRise.addColorStop(0, 'white');
						sunRise.addColorStop(0.3, 'orange');
				  		sunRise.addColorStop(0.5, 'lightyellow');
				  		sunRise.addColorStop(1, 'rgba(255,255,224, 0)');

				  	var sunSet = context.createRadialGradient(700, 900, 5, 700, 900, 200);
						sunSet.addColorStop(0, 'orange');
				  		sunSet.addColorStop(0.8, 'lightyellow');
				  		sunSet.addColorStop(1, 'rgba(255,255,224, 0)');

					drawCircle(100, 100, 1000, sunBlueSky)
				
				// clouds
					drawCircle()
					drawCircle()
					drawCircle()
					drawCircle()
					drawCircle()
					drawCircle()

				// grass
					drawImage("lawn.png", 0, canvas.height - canvas.width / 2 + 20, canvas.width, canvas.width / 2)
			}		
					

		// drawForeground
			function drawForeground_SPRING() {
				//deciduous tree
					drawShape(tree, "#3a2213")

				// petals and leaf
					//convertClippath(x, y, "", "lightgreen")

					drawCircle(600, 220, 5, "white")
					drawCircle(594, 215, 5, "white")
					drawCircle(597, 210, 5, "white")
					drawCircle(602, 215, 5, "white")
					
					

				// window (crossbeam and latch)	
					drawShape(windowCrossbeam, "#823c0e") // window crossbeam
					drawShape(windowLatch, "#823c0e") // window latch
			}

		// reposition rabbit
			function repositionRabbit(rabbit) {
				// move right
					rabbit.x = rabbit.x + 4
					if (rabbit.x > 1000) {
						rabbit.x = Math.floor(Math.random() * 5000) - 10000
					}

				// swap legs
					if (rabbit.legsCounter == 0) {
						rabbit.legsCounter = 10

						if (rabbit.legsPosition == "in") {
							rabbit.legsPosition = "out"
						}
						else {
							rabbit.legsPosition = "in"
						}
					}
					else {
						rabbit.legsCounter--
					}

				return rabbit
			}

		// drawing a rabbit
			function drawRabbit(x, y, legsPosition) {
				if (legsPosition == "in") {		
					var rabbitClippath = {
						ear_back: ["79% 8%, 80.75% 8%, 81% 9%, 81.25% 13%, 81% 19%, 82% 25%, 81.01% 28.61% , 76.67% 28.62%, 74% 28.75%, 74% 23%, 75% 18%, 76% 14%, 77% 10%",
							"#7c4d13"],

						ear_line: ["75.66% 14.43%, 76.85% 17%, 78.35% 23%, 78.35% 26%, 77.95% 28%, 77.35% 28%",
							"black"],	

						profile: ["59.69% 61.77%, 52.8% 62.03%, 47.33% 61.38%, 34.07% 62.16%, 24.45% 60.71%, 20.57% 58.68% , 19.06% 55.48%, 17.2% 51.43%, 16.19% 48.57%, 13.32% 44.52%, 12.14% 41.65%, 12.48% 38.79%, 14.84% 36.26%, 17.54% 36.76%, 20.07% 39.12%, 21.75% 39.8%, 23.1% 38.28%, 26.31% 36.09%, 30% 34%, 35% 33%, 41.5% 33%, 47% 34%, 53% 35%, 57.87% 34.98%, 63% 35%, 67% 33.5%, 69% 32%, 72% 29%, 79% 28%, 82% 28.75%, 84.5% 32%, 88.25% 35.5%, 88.75% 37%, 89% 39%, 88.75% 40%, 87.75% 41.5%, 87.2% 42.25%, 84% 43.5%, 81% 43.75%, 77% 45%, 75% 48%, 73.36% 52.78%, 72.01% 56.49%, 69.85% 59.57%", 
							"#7c4d13"],
						
						back_leg_line: ["25.46% 44.9%, 30.35% 42.84%, 35.58% 41.66%, 40.47% 42.33%, 44.34% 43.68%, 47.21% 45.37%, 48.9% 46.72%, 50.92% 48.74%, 51.93% 51.27%, 52.1% 53.97%, 52.27% 57.34%, 51.5% 61.75%",
							"black"],

						chin: ["85.75% 43.01%, 84.14% 43.64%, 81.63% 43.64%, 77.86% 44.74%, 75.45% 47.31%, 73.56% 52.01%, 73.31% 53.53%, 71.59% 57.46% , 71.95% 52.72%, 72.68% 49.81%, 73.56% 47.07%, 76.01% 43.75%, 79.95% 42.56%, 83.38% 42.2%, 85.9% 42.23%",
							"#d8bb97"],

						stomach: ["56.74% 62.05%, 52.76% 62.07%, 46.75% 61.53%, 34.05% 61.87%, 24.43% 60.25%, 58.72% 59.71%, 60.13% 59.97%, 59.18% 61.22% , 58.4% 62.01%",
							"#d8bb97"],

						back_leg: ["36.42% 76.9%, 35.75% 74.87%, 34.74% 70.83%, 32.53% 66.26%, 25.11% 62.89%, 20.73% 58.5%, 20.22% 53.78%, 21.57% 48.05%, 24.96% 45.19%, 29.85% 43.34%, 35.08% 42.16%, 39.97% 42.83%, 43.84% 44.18%, 46.71% 45.87%, 48.4% 47.22%, 50.42% 49.24%, 51.43% 51.77%, 51.6% 54.47%, 51.77% 57.84%, 51.43% 61.21%, 50.25% 64.08%, 48.57% 66.61%, 47.22% 69.31%, 45.87% 72.01%, 48.57% 72.85%, 51.77% 73.86%, 55.99% 74.54%, 58.01% 76.39%, 58.35% 79.93%, 55.82% 81.28%, 51.6% 80.78%, 46.21% 78.92%, 42.33% 78.25%, 39.46% 78.75% , 37.27% 78.25%",
							"#7c4d13"],

						front_leg: ["63.21% 66.96%, 68.16% 61.8%, 70.15% 59.19%, 63.41% 60.71% , 58.52% 61.38%, 57.22% 65.44%, 55.59% 68.13%, 51.32% 69.83%, 51% 71.35%, 51.07% 72.93%, 53.67% 74.18%, 56.77% 73.5%, 58.9% 72.07%, 61.79% 68.76%",
							"#7c4d13"],

						ear_front: ["73% 30%, 72% 28%, 70.5% 22%, 71% 17%, 70.75% 13%, 71% 9%, 72% 7%, 73.5% 7%, 74.5% 8%, 75.25% 12%, 76.5% 18%, 78% 24%, 78% 27.5%, 77.5% 29%",
							"#7c4d13"],

						nose: ["86% 36.56%, 87.85% 38.3%, 88.06% 36.34%, 87.63% 37.51%",
							"pink"],

						eye: ["78.92% 34.09% , 80.54% 32.8%, 81.4% 32.9%, 82.47% 33.66%, 81.72% 34.52%, 80.43% 34.73%",
							"black"],

						tail_half: ["20.43% 58.6%, 13.32% 44.52%, 12.14% 41.65%, 12.48% 38.79%, 14.73% 36.24%, 15.81% 37.53%, 17.31% 41.4% , 18.39% 43.66%, 18.82% 46.45%, 19.35% 50.11%, 19.68% 53.87%",
							"#d8bb97"],

						ear_inner: ["73.63% 29.98%, 72.68% 27.79%, 71.27% 21.82%, 71.74% 17.11%, 71.43% 13.03%, 71.74% 9.42%, 72.21% 8.32%, 73.31% 8.32%, 73.94% 9.42%, 74.25% 11.93% , 75.82% 19%, 76.92% 24.02%, 77.39% 27.47%, 76.92% 29.51%",
							"#d8bb97"]
					}
				}
				else {
					var rabbitClippath = {
						ear_back: ["83.76% 6.29%, 85.5% 6.47%, 85.64% 7.5%, 85.47% 11.49%, 84.59% 17.44%, 84.96% 23.51%, 83.6% 26.99%, 79.28% 26.55%, 76.62% 26.4%, 77.22% 20.68%, 78.73% 15.82%, 80.14% 11.94%, 81.56% 8.06%",
							"#7c4d13"],

						ear_line: ["79.76% 12.33%, 80.67% 15.01%, 81.54% 21.14%, 81.23% 24.12%, 80.62% 26.07%, 80.02% 26.01%",
							"black"],

						profile: ["58.94% 57.75%, 52.05% 57.28%, 46.68% 56.07%, 33.41% 55.45%, 24% 53%, 20.35% 50.59%, 19.18% 47.24%, 17.74% 43.02%, 17.05% 40.06%, 14.62% 35.75%, 13.74% 32.76%, 14.38% 29.95%, 17% 27.68%, 19.63% 28.47%, 21.89% 31.09%, 23.49% 31.92%, 24.99% 30.56%, 28.41% 28.71%, 32.31% 27.02%, 37.38% 26.56%, 43.84% 27.23%, 49.21% 28.8%, 55.08% 30.43%, 59.91% 30.91%, 65.02% 31.47%, 69.16% 30.4%, 71.3% 29.11%, 74.6% 26.43%, 81.66% 26.18%, 84.58% 27.23%, 86.71% 30.73%, 90.08% 34.61%, 90.42% 36.14%, 90.46% 38.16%, 90.1% 39.13%, 88.95% 40.52%, 88.33% 41.21%, 85.02% 42.12%, 82.01% 42.05%, 77.9% 42.88%, 75.6% 45.65%, 73.46% 50.24%, 71.73% 53.78%, 69.26% 56.62%", 
							"#7c4d13"],
						
						back_leg_line: ["9.38% 48.28%, 11.44% 47.64%, 15.49% 46.81%, 20.19% 44.75%, 23.84% 37.45%, 28.31% 33.22%, 33.01% 32.79%, 38.73% 34.44%, 41.5% 37.9%, 43.18% 42.87%, 44.21% 48.16%, 44.51% 53.02%, 44.01% 56.22%, 42.83% 59.09%, 40.63% 61.45%, 38.27% 63.129999999999995%, 35.41% 64.15%, 33.05% 64.65%, 30.18% 64.48%, 26.47% 63.81%, 23.43% 62.629999999999995%, 20.57% 60.769999999999996%, 17.7% 58.75%, 14.67% 57.06%, 13.32% 59.93000000000001%, 11.87% 63.68000000000001%, 10.45% 67.69%, 9.15% 69.78%, 5.61% 70.04%, 4.3% 67.46%, 5% 63.269999999999996%, 7.08% 57.959999999999994%, 7.84% 54.11%, 7.46% 51.28%, 8.04% 49.06%",
							"black"],

						chin: ["87.51% 40.81%, 87.33% 41.54%, 85.01% 42.12%, 81.99% 42.05%, 77.9% 42.88%, 75.6% 45.65%, 73.47% 50.24%, 72.69% 52.04%, 72.04% 51.51%, 71.83% 50.86%, 72.71% 48.01%, 73.74% 45.3%, 76.35% 42.12%, 80.35% 41.14%, 83.8% 40.96%, 86.87% 40.75%",
							"#d8bb97"],

						stomach: ["55.66% 57.59%, 51.7% 57.26%, 45.75% 56.21%, 33.07% 55.44%, 23.64% 52.98%, 57.84% 55.43%, 62.04% 55.59%, 63.98% 57.2%, 59.14% 57.96%",
							"#d8bb97"],

						back_leg: ["8.88% 48.78%, 10.94% 48.14%, 14.99% 47.31%, 19.69% 45.25%, 23.34% 37.95%, 27.81% 33.72%, 32.51% 33.29%, 38.23% 34.94%, 41% 38.4%, 42.68% 43.37%, 43.71% 48.66%, 44.01% 53.52%, 43.51% 56.72%, 42.33% 59.59%, 40.13% 61.95%, 37.77% 63.629999999999995%, 34.91% 64.65%, 32.55% 65.15%, 29.68% 64.98%, 25.97% 64.31%, 22.93% 63.129999999999995%, 20.07% 61.269999999999996%, 17.2% 59.25%, 14.17% 57.56%, 12.82% 60.43000000000001%, 11.37% 64.18%, 9.95% 68.19%, 8.65% 70.28%, 5.11% 70.54%, 3.8% 67.96%, 4.5% 63.769999999999996%, 6.58% 58.459999999999994%, 7.34% 54.61%, 6.96% 51.78%, 7.54% 49.56%",
							"#7c4d13"],

						front_leg: ["69.81% 59.56%, 74.87% 61.42%, 79.26% 63.61%, 82.46% 66.14%, 84.82% 66.65%, 86.34% 65.32%, 86% 62.620000000000005%, 83.47% 60.599999999999994%, 80.94% 58.91%, 78.08% 56.55%, 72.18% 51.66%, 71.16% 48.29%, 69.14% 45.93%, 65.77% 45.76%, 62.56% 46.77%, 60.71% 49.64%, 60.71% 53.66%, 62.56% 56.87%, 65.94% 58.21%",
							"#7c4d13"],

						ear_front: ["75.09% 27.1%, 74.27% 25.02%, 73.3% 18.9%, 74.23% 13.98%, 74.33% 9.97%, 74.93% 6%, 76.1% 4.1%, 77.59% 4.23%, 78.5% 5.31%, 78.9% 9.37%, 79.62% 15.45%, 80.6% 21.55%, 80.3% 25.05%, 79.65% 26.49%",
							"#7c4d13"],

						nose: ["87.5% 35.56%, 89.35% 37.3%, 89.56% 35.34%, 89.13% 36.51%",
							"pink"],

						eye: ["81.24% 32.04%, 82.96% 30.880000000000003%, 83.8% 31.049999999999997%, 84.81% 31.9%, 84.01% 32.69%, 82.7% 32.8%",
							"black"],

						tail_half: ["20.74% 51.05%, 14.4% 36.61%, 13.37% 33.68%, 14.13% 30.3% , 16.259999999999998% 28.43%, 17.23% 29.77%, 18.53% 33.7%, 19.5% 36.02%, 19.79% 38.83%, 20.11% 42.54%, 20.26% 46.3%",
							"#d8bb97"],

						ear_inner: ["75.55% 27.13%, 74.8% 24.86%, 73.9% 18.79%, 74.78% 14.149999999999999%, 74.83% 10.05%, 75.46% 6.49%, 76.02% 5.42%, 77.12% 5.52%, 77.65% 6.67%, 77.74% 9.2%, 78.68% 16.4%, 79.34% 21.47%, 79.51% 24.95%, 78.87% 26.94%",
							"#d8bb97"]
					}
				}

				for (part in rabbitClippath){
					drawShape(convertClippath(x, y, rabbitClippath[part][0]), rabbitClippath[part][1])
				}
			}

		// flowers
			function drawFlowers() {
				var tulip = {
					petals: ["8.77% 49.1%, 9.83% 50.16%, 11.17% 50.95%, 13.06% 51.3%, 14.74% 51.33%, 15.54% 50.88%, 16.78% 49.88%, 17.93% 47.67%, 18.5% 45.71%, 19.16% 44.3%, 19.22% 42.03%, 18.84% 39.79%, 18.23% 35.91%, 17.69% 33.37%, 16.92% 31.44%, 15.6% 30.58%, 14.18% 30.5%, 13.43% 30.59%, 12.18% 30.92%, 10.35% 32.41%, 9.78% 32.35%, 8.87% 33.59%, 8.42% 34.38%, 11.96% 34.23%, 10.2% 31%, 9.65% 30.59%, 8.43% 30.7%, 6.7% 30.93%, 6.1% 31.2%, 5.28% 32.32%, 4.79% 33.9%, 4.18% 36.2%, 8.1% 35.7%, 6.79% 33.82%, 2.36% 31.86%, 0.79% 33.19%, 0.73% 35.45%, 0.5% 37.52%, 1.02% 39.07%, 1.64% 41.37%, 2.68% 43.55%, 4.26% 45.27%, 6.01% 46.81%, 7.47% 47.99%",
						"red"],
					stem: ["12.73% 51.5%, 22.31% 86.06%, 17.19% 74.12%, 14.58% 70.93%, 11.16% 67.63%, 9.02% 66.44%, 8.99% 68.36%, 10.56% 71.07%, 13.15% 74.94%, 16.42% 79.74%, 17.64% 83.58%, 20.11% 87.47%, 21.93% 92.71%, 22.86% 95.83%, 23.89% 99.36% , 26.89% 105.95%, 30.2% 106.2%, 30.23% 104.63%, 28.66% 99.84%, 28.74% 97.18%, 28.77% 92.9%, 29.57% 88.95%, 31.14% 85.47%, 31.98% 82.05%, 29.78% 82.69%, 28.08% 84.98%, 27.14% 87.6%, 26.22% 90.25%, 25.88% 93.39%, 23.41% 80.46%, 24.25% 76.38%, 25.36% 71.55%, 25.47% 69.15%, 25.68% 65.6%, 24.18% 65.92%, 23.93% 68.91%, 22.66% 72.32%, 22.47% 74.86%, 22.03% 76.91%, 20.49% 70.8%, 15.3% 51.45%",
						"green"],
				}

				var daisy = {
					petals: ["",
						"white"],
					
					stem: ["",
						"green"],

					center: ["",
						"yellow"],
				}
			}

///////////////////////////////////////////////////////////////////////////////////////
	// SUMMER
		function animateSummer() {
			
		}

///////////////////////////////////////////////////////////////////////////////////////
	// FALL
		function animateFall() {
			
		}
}
