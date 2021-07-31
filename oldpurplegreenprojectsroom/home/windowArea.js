window.onload = function(){

	// variables
		var canvas = document.getElementById("windowArea")
		var context = canvas.getContext("2d")

	// drawing functions
		function drawLine(coordinates, color, shadowThickness, shadowColor) {
			context.beginPath();
			context.moveTo(coordinates[0][0], coordinates[0][1]);
			context.lineTo(coordinates[1][0], coordinates[1][1]);
			context.strokeStyle = color;
			context.lineWidth = 5;
			context.lineCap = "round";
			context.stroke();

			if (shadowColor && shadowThickness){
				context.shadowColor = shadowColor
				context.shadowBlur = shadowThickness
			}
			else {
				context.shadowColor = "transparent"
				context.shadowBlur = 0
			}
		}

		function drawShape(coordinates, color, shadowThickness, shadowColor, radialgradient){
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

			if (radialgradient){
				context.fillStyle = radialgradient
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
drawArea()


	// The Scene (create and animate)
		function drawArea(){

			context.clearRect(0, 0, 800, 1200);

		// depth guide lines
			// drawLine( [ [0, 0], [70, 80] ], "orange")
			// drawLine( [ [70, 80], [430, 80] ], "green")
			// drawLine( [ [454, 50], [500, 0] ], "red")
			// drawLine( [ [0, 660], [70, 580] ], "orange")
			// drawLine( [ [70, 600], [430, 600] ], "green")
			// drawLine( [ [454, 610], [500, 660] ], "yellow")


		// depth	
			drawShape( [ [0, 0], [46, 50], [46, 610], [0, 660] ], "#5f0f70")

			drawLine( [ [46, 610], [454, 610] ], "lightgray")
			drawLine( [ [0, 660], [660, 660] ], "gray")

			drawShape( [ [500, 0], [454, 50], [454, 610], [500, 660] ], "#00a000")




		//cushion
			drawShape(convertClippath(10, 648, "0% 0%, 480% 0%, 442% -38.4%, 38% -38.4%"), 
			"#0091b2", 50, "gray")
			
				drawLine( [ [8, 650], [65, 600]], "#006982")
				drawLine( [ [435, 600], [492, 650]], "#006982")

			drawShape(convertClippath(10, 616, "0% 0%, 480% 0%, 480% 32.5%, 0% 32.5%"), 
			"#0091b2", 50, "gray")

				drawLine( [ [8, 650], [492, 650]], "#006982")
			

			drawShape(convertClippath(10, 615, "0% 0%, 480% 0%, 442% -38.4%, 38% -38.4%"), 
			"#0091b2")

				drawLine( [ [50, 575], [450, 575]], "#006982")
				drawLine( [ [8, 617], [50, 575]], "#006982")
				drawLine( [ [450, 575], [492, 617]], "#006982")
				drawLine( [ [8, 617], [492, 617]], "#006982")

		//pillow

			var pillowpoof = context.createRadialGradient(80, 540, 5, 75, 550, 80);
				pillowpoof.addColorStop(0, '#00b7e2');
				pillowpoof.addColorStop(0.8, '#006982');
		  		// pillowpoof.addColorStop(0.5, '#0091b2');
			
			drawShape(convertClippath(0, 615, "5% -101.3%, 23.7% -44.3%, 49.5% 15.4%, 137.7% -33.4%, 121.4% -71.4%, 107.8% -144.7%"), 
			pillowpoof)

			drawLine( [ [5, 514.3], [23.7, 570.7]], "#004c5e", 20, "black")
			drawLine( [ [23.7, 570.3], [49.3, 630.3]], "#004c5e", 20, "black")
			drawLine( [ [49.3, 630.3], [137.7, 581.6]], "#004c5e", 20, "black")

			drawLine( [ [121.4, 543.6], [107.8, 470.3]], "#004c5e", 50, "white")
			drawLine( [ [107.8, 470.3], [5, 514.3]], "#004c5e", 100, "white")
			drawLine( [ [137.7, 581.6], [121.4, 543.6]], "#004c5e", 20, "white")


		//drawer1
			drawShape( [ [45, 692], [455, 692], [455, 830], [45, 830] ], "lightgray")
			drawShape( [ [50, 700], [450, 700], [450, 825], [50, 825] ], "white", 5, "black")

		//pull1
			drawShape(convertClippath(200, 760, "50% -1.5%, 85% -2%, 85% -6%, 95% -6%, 90.8% 1%, 75% 0%, 25% 0%, 9.2% 1%, 5% -6%, 15% -6%, 15% -2%"), 
			"darkgray", 5, "black")
			drawShape(convertClippath(200, 760, "50% 0%, 25% 0%, 9.2% 1%, 12% 4%, 25% 6%, 75% 6%, 88% 4%, 90.8% 1%, 75% 0%"), 
			"lightgray", 5, "black")


		//drawer2
			drawShape( [ [45, 842], [455, 842], [455, 970], [45, 970] ], "lightgray")
			drawShape( [ [45, 850], [455, 850], [455, 975], [45, 975] ], "white", 5, "black")

		//pull2
			drawShape(convertClippath(200, 910, "50% -1.5%, 85% -2%, 85% -6%, 95% -6%, 90.8% 1%, 75% 0%, 25% 0%, 9.2% 1%, 5% -6%, 15% -6%, 15% -2%"), 
			"darkgray", 5, "black")
			drawShape(convertClippath(200, 910, "50% 0%, 25% 0%, 9.2% 1%, 12% 4%, 25% 6%, 75% 6%, 88% 4%, 90.8% 1%, 75% 0%"), 
			"lightgray", 5, "black")

			
			
		//cats
			//multiplied by 3 (from 100x100 in clippather)
			// drawShape(convertClippath(280, 515, "100% 100%, 98.74% 114.25%, 100% 128.5%, 105.67% 148.45%, 110.56% 165.13%, 115.42% 177.76%, 118.69% 192.4%, 115.42% 204.61%, 106.48% 215.2%, 96.7% 220.09%, 85.72% 220.9%, 71.92% 219.28%, 62.11% 209.08%, 59.26% 196.06%, 60.49% 185.08%, 62.92% 178.15%, 69.04% 183.43%, 72.7% 191.59%, 76.36% 202.99%, 85.72% 206.23%, 98.32% 200.53%, 103.24% 193.63%, 102.01% 183.43%, 98.74% 172.45%, 90.19% 155.77%, 80.02% 134.2%, 73.9% 110.59%, 60.88% 104.08%, 34.84% 103.66%, 17.05% 100.87%, 6.34% 97.96%, -0.05% 102.1%, -38.72% 95.98%, -53.36% 92.74%, -59.87% 83.77%, -58.67% 76.03%, -50.12% 73.18%, -40.34% 74.83%, -36.8% 80.65%, -46.58% 55.84%, -45.74% 31.81%, -39.65% 21.64%, -30.68% 21.22%, -22.55% 25.72%, -29.06% 0.88%, -31.1% -25.58%, -30.26% -56.93%, -25.82% -77.27%, -21.74% -86.63%, -16.55% -96.41%, -9.23% -102.5%, -18.35% -108.56%, -27.71% -115.88%, -33.41% -124.01%, -31.4% -138.68%, -24.47% -147.23%, -17.96% -159.02%, -15.74% -174.56%, -12.47% -194.9%, -3.44% -178.64%, 3.94% -170.09%, 9.61% -164.39%, 16.96% -163.58%, 26.68% -163.97%, 33.94% -163.58%, 43.3% -191.24%, 47.77% -185.96%, 56.74% -172.52%, 61.21% -166.43%, 64.15% -161.12%, 65.77% -156.23%, 68.35% -147.23%, 69.04% -141.17%, 67.42% -131.81%, 64.69% -121.16%, 61.69% -112.7%, 63.34% -102.5%, 70.66% -91.94%, 83.26% -68.33%, 89.38% -46.34%, 92.62% -29.24%, 96.7% -8.9%, 98.32% 9.43%, 104.44% 8.2%, 115.06% 28.57%, 117.46% 62.74%, 112.18% 88.6%"), 
			// 	"black", 10, "lightgray") 

			// //multiplied by 3.5 (from 100x100 in clippather)
			// drawShape(convertClippath(125, 880, "0% 100%, -7% 97.38%, -8.75% 94.75%, -8.75% 87.75%, -7% 84.25%, 5.25% 77.25%, 11.38% 59.75%, 17.5% 38.75%, 22.75% 10.75%, 24.5% -55.75%, 73.5% -103%, 98% -97.75%, 119% -97.75%, 143.5% -97.75%, 164.5% -97.75%, 189% -97.75%, 213.5% -94.25%, 241.5% -89.87%, 246.75% -90.75%, 252% -94.25%, 254.63% -101.25%, 255.5% -108.25%, 254.97% -115.25%, 252.88% -125.75%, 246.75% -138%, 242.38% -143.25%, 234.5% -148.5%, 203% -159%, 192.5% -164.25%, 185.5% -167.75%, 182% -171.25%, 175% -178.25%, 173.25% -185.25%, 175% -194%, 179.38% -195.05%, 187.25% -192.25%, 192.5% -188.75%, 199.5% -181.75%, 210% -176.5%, 220.5% -173%, 241.5% -166%, 252% -160.75%, 259% -156.37%, 264.25% -150.25%, 269.33% -143.25%, 273.88% -134.5%, 278.25% -118.75%, 279.13% -108.25%, 278.25% -97.75%, 276.5% -90.75%, 271.25% -62.75%, 272.47% -45.25%, 274.75% -27.75%, 274.75% -17.25%, 276.5% 3.75%, 273% 23%, 269.5% 35.25%, 266% 52.75%, 266% 61.5%, 251.13% 101.75%, 245% 107.88%, 241.5% 110.5%, 231% 112.25%, 224% 110.5%, 222.25% 108.75%, 220.5% 101.75%, 223.13% 94.75%, 227.5% 91.25%, 236.25% 87.75%, 240.63% 58%, 230.65% 31.75%, 220.5% 0.25%, 178.5% 0.25%, 157.5% 3.75%, 126% 7.25%, 94.5% 9%, 89.25% 7.25%, 89.08% 24.75%, 79.63% 52.75%, 77% 63.25%, 70% 101.75%, 63% 107.88%, 59.5% 110.5%, 49% 112.25%, 42% 110.5%, 40.25% 108.75%, 38.5% 101.75%, 41.13% 94.75%, 45.5% 91.25%, 54.25% 86%, 49.88% 35.25%, 45.5% 7.25%, 33.25% -13.75%, 24.5% -38.25%, 22.75% -53.12%, 14% -69.75%, 3.5% -83.75%, -3.5% -89%, -10.5% -91.1%, -17.5% -91.62%, -24.5% -92.5%, -30.8% -96%, -33.25% -101.25%, -34.12% -108.25%, -33.25% -119.62%, -14% -132.22%, -7% -143.25%, 3.5% -150.25%, 10.5% -171.25%, 27.13% -146.75%, 29.75% -139.75%, 33.25% -129.25%, 38.5% -118.75%, 54.25% -104.75%, 73.5% -103%, 98% -97.75%, 119% -97.75%, 143.5% -97.75%, 164.5% -97.75%, 189% -97.75%, 213.5% -94.25%, 241.5% -89.87%, 246.75% -90.75%, 252% -94.25%, 254.63% -101.25%, 255.5% -108.25%, 254.97% -115.25%, 252.88% -125.75%, 246.75% -138%, 242.38% -143.25%, 234.5% -148.5%, 203% -159%, 192.5% -164.25%, 185.5% -167.75%, 182% -171.25%, 175% -178.25%, 173.25% -185.25%, 175% -194%, 179.38% -195.05%, 187.25% -192.25%, 192.5% -188.75%, 199.5% -181.75%, 210% -176.5%, 220.5% -173%, 241.5% -166%, 252% -160.75%, 259% -156.37%, 264.25% -150.25%, 269.33% -143.25%, 273.88% -134.5%, 278.25% -118.75%, 279.13% -108.25%, 278.25% -97.75%, 276.5% -90.75%, 271.25% -62.75%, 272.47% -45.25%, 274.75% -27.75%, 274.75% -17.25%, 276.5% 3.75%, 273% 23%, 269.5% 35.25%, 266% 52.75%, 266% 61.5%, 251.13% 101.75%, 245% 107.88%, 241.5% 110.5%, 231% 112.25%, 224% 110.5%, 222.25% 108.75%, 220.5% 101.75%, 223.13% 94.75%, 227.5% 91.25%, 236.25% 87.75%, 240.63% 58%, 230.65% 31.75%, 220.5% 0.25%, 178.5% 0.25%, 157.5% 3.75%, 126% 7.25%, 101.5% 9%, 89.25% 7.25%, 89.08% 24.75%, 79.63% 52.75%, 77% 63.25%, 70% 101.75%, 63% 107.88%, 59.5% 110.5%, 49% 112.25%, 42% 110.5%, 40.25% 108.75%, 38.5% 101.75%, 41.13% 94.75%, 45.5% 91.25%, 54.25% 86%, 49.88% 35.25%, 43.75% 7.25%, 33.25% -10.25%, 24.5% -34.75%, 21% -49.62%, 14% -66.25%, 3.5% -80.25%, -3.5% -85.5%, -10.5% -87.6%, -17.5% -88.12%, -24.5% -89.87%, -30.8% -96%, -33.25% -101.25%, -34.12% -108.25%, -33.25% -119.62%, -14% -132.22%, -7% -143.25%, 3.5% -150.25%, 10.5% -171.25%, 27.13% -146.75%, 29.75% -139.75%, 33.25% -129.25%, 38.5% -118.75%, 54.25% -104.75%, 238% -3.25%, 217% 52.75%, 215.25% 63.25%, 199.5% 91.25%, 189% 98.25%, 182% 100%, 177.63% 100%, 173.25% 98.25%, 171.5% 93%, 171.5% 87.75%, 173.25% 84.25%, 175% 82.5%, 184.63% 79%, 195.13% 52.75%, 190.75% 21.25%, 185.5% -6.75%, 84% -27.75%, 44.63% 38.75%, 33.25% 63.25%, 30.63% 70.25%, 20.13% 91.25%, 12.25% 96.5%, 7% 99.13%"), 
			// 	"gray", 10, "lightgray")
			
		
		}

}
