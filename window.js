window.addEventListener("load", function(){

	// variables
		var canvas = document.getElementById("window")
		var context = canvas.getContext("2d")
		var snowflakes = []
		var counter = 0

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

////////////////////////////////////////////////////////////////////////////////////////////////

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
				vy: 1 * radius / 1
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

	// The Animation - the stage directions
		setInterval(function() {
			if (counter == 0) {
				counter = 2
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


///////////////////////////////////////////////////////////////////////////////////////


	// The Scene (create and animate)
		function drawBackground(){

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
			
			drawShape(convertClippath(0, 888, "0% 0%, 0% 223.9%, 801.9% 223.9%, 801.9% 23.9%, 751.7% 27.1%, 704.2% 28.4%, 656.7% 24.4%, 607.9% 13.5%, 586.2% 10.8%, 565.8% 9.4%, 537.3% 13.5%, 460% 14.9%, 374.5% 9.4%, 301.2% 8.1%, 263.2% 10.8%, 207.6% 20.3%, 162.8% 28.4%, 133% 29.8%, 105.8% 24.4%, 70.6% 13.5%, 28.5% 5.4%"),
				"white", 100, "lightblue") // background
			drawShape(convertClippath(0, 925, "0% 0%, 0% 200%, 800% 200%, 800% 41%, 747.2% 44.6%, 716% 50.6%, 681.2% 45.8%, 646.4% 39.8%, 615.8% 39.2%, 576.8% 35%, 531.2% 42.2%, 488% 43.4%, 450.2% 36.8%, 410% 32.6%, 375.8% 36.8%, 334.4% 47%, 300.8% 46.4%, 194.8% 13.3%, 159.6% -3%, 102.6% -11.1%, 38.8% -5.7%"),
				"white", 100, "lightblue") // middleground

		//snowman
			drawCircle(300, 980, 60, "white", 40, "lightblue") //snowman bottom
			drawCircle(300, 900, 48, "white", 40, "lightblue") //snowman middle
			drawCircle(300, 830, 40, "white", 50, "lightblue") //snowman head
			drawCircle(298, 828, 3, "black") //snowman eye front
			drawCircle(314, 825, 3, "black") //snowman eye back
			drawShape([ [308, 835], [355, 835], [311, 845]], "orange") // snowman nose

		//more snowscape
			drawShape(convertClippath(0, 1000, "0% 0%, 0% 200%, 800% 200%, 800% 5.8%, 755.8% 0.5%, 704.2% 5.9%, 659.4% 22.2%, 626.9% 24.9%, 571.2% 23.5%, 508.8% 15.4%, 426.1% 10%, 382% 9%, 333.8% 16.8%, 276.8% 7.3%, 238.8% 1.1%, 184.5% 1.8%, 132.4% 13.4%, 117.2% 13.1%, 95.5% 6.5%, 58.6% -4.4%, 27.1% -6.5%"),
				"white", 100, "lightblue") // foreground
			drawShape(convertClippath(0, 1050, "0% 0%, 0% 200%, 800% 200%, 800% 50%, 729.4% 55.4%, 688.2% 63%, 641.5% 56.5%, 594.9% 48.9%, 554.7% 47.8%, 502.6% 42.4%, 441.8% 52.2%, 384.2% 53.2%, 333.3% 44.6%, 280.1% 39.1%, 234.5% 44.6%, 185.9% 56.1%, 135.7% 43.9%, 99.1% 27.6%, 66.5% 12.7%, 31.4% 4.4%, 10.9% 1.1%"),
				"white", 100, "lightblue") // foreforeground

			
		// //deciduous tree (no leaves)
		// 	drawShape(convertClippath(50, 0, "800% 1200%, 800% 886%, 800% 683%, 763% 549%, 774% 489%, 821% 392%, 799% 325%, 732% 435%, 720% 365%, 718% 433%, 680% 409%, 693% 425%, 718% 456%, 718% 484%, 701% 522%, 653% 483%, 632% 433%, 691% 349%, 804% 273%, 787% 225%, 624% 351%, 639% 276%, 714% 193%, 668% 227%, 685% 195%, 648% 231%, 671% 141%, 712% 98%, 674% 123%, 640% -65%, 650% 160%, 631% 136%, 612% 96%, 617% 133%, 636% 169%, 612% 241%, 582% 155%, 577% 87%, 567% 147%, 545% 106%, 540% 80%, 567% -59%, 529% 57%, 464% 5%, 518% 70%, 540% 147%, 435% 62%, 501% 146%, 454% 145%, 518% 165%, 550% 183%, 569% 219%, 569% 298%, 556% 355%, 507% 211%, 517% 282%, 478% 255%, 517% 300%, 528% 338%, 446% 262%, 454% 193%, 435% 252%, 402% 177%, 415% 252%, 361% 201%, 373% 114%, 351% 185%, 344% 154%, 360% -9%, 389% -151%, 359% -78%, 340% -113%, 354% -48%, 341% 21%, 330% 97%, 303% 53%, 311% -14%, 295% 49%, 265% 24%, 222% -35%, 244% 18%, 209% 11%, 123% -38%, 176% 8%, 206% 29%, 233% 38%, 160% 59%, 220% 59%, 262% 56%, 292% 80%, 305% 116%, 327% 191%, 247% 165%, 333% 210%, 365% 246%, 351% 258%, 384% 265%, 443% 303%, 475% 338%, 448% 340%, 370% 305%, 429% 350%, 435% 336%, 348% 347%, 483% 363%, 539% 403%, 561% 472%, 322% 375%, 303% 271%, 310% 368%, 270% 321%, 217% 161%, 256% 90%, 210% 152%, 205% 95%, 203% 161%, 225% 243%, 146% 190%, 217% 258%, 235% 308%, 86% 241%, 24% 233%, -83% 168%, -24% 222%, -154% 209%, -69% 233%, -113% 285%, -46% 233%, 33% 249%, 105% 270%, 3% 301%, 114% 285%, 157% 306%, 205% 333%, 121% 349%, 79% 324%, 108% 355%, 36% 352%, 81% 365%, 55% 389%, 92% 368%, 114% 367%, 149% 359%, 79% 440%, -21% 429%, 79% 456%, -42% 507%, 38% 484%, 24% 532%, 44% 495%, 63% 472%, 84% 465%, 103% 542%, 98% 441%, 157% 378%, 229% 351%, 251% 349%, 273% 373%, 318% 421%, 262% 443%, 195% 416%, 241% 452%, 165% 460%, 213% 465%, 291% 451%, 273% 502%, 305% 449%, 335% 440%, 416% 460%, 486% 508%, 559% 543%, 602% 603%, 628% 672%, 637% 766%, 648% 885%, 647% 1098%, 616% 1200%"),
		// 		"#3a2213") // deciduous tree
		// //snow on tree	
		//  	drawShape(convertClippath(50, 0, "525.9% 482.2%, 535.4% 483.6%, 546.3% 491.7%, 555.9% 492%, 565.5% 482.4%, 555% 452.4%, 531.3% 445.6%, 506.6% 436.3%, 485.2% 429.3%, 458.1% 418.5%, 435% 420.5%, 466.8% 452.2%, 482.5% 461.9%, 502.8% 476.8%, 515.1% 480.9%"),
		// 		"white", 30, "lightblue")
		//  	drawShape(convertClippath(50, 0, "49.7% 235%, 109.6% 237.7%, 141.3% 251.9%, 168.4% 258.3%, 203.4% 269.4%, 222.4% 271%, 243.2% 291.6%, 241.5% 307.6%, 220.8% 309%, 195.4% 288.4%, 174.7% 280.6%, 123.8% 258.3%"),
		//  		"white", 30, "lightblue")
		//  	drawShape(convertClippath(50, 0, "622.3% 356%, 649.6% 333.2%, 681.6% 317.2%, 726% 272.5%, 684.8% 290.4%, 662.4% 293.2%, 649.6% 293.2%, 627.6% 302.8%, 618% 325.2%"),
		//  		"white", 30, "lightblue")
		// }

		//deciduous tree (no leaves)
			drawShape(convertClippath(100, -20, "738.79% 1237.67%, 713.76% 937.46%, 704.54% 723.69%, 735.91% 585.63%, 750.03% 526.29%, 802.04% 431.88%, 783.58% 363.82%, 710.92% 470.16%, 702.6% 399.64%, 697.03% 467.44%, 660.35% 441.48%, 672.49% 458.14%, 695.83% 490.41%, 694.36% 518.37%, 675.4% 555.42%, 629.51% 513.96%, 611.16% 462.94%, 674.47% 382.14%, 791.29% 312.16%, 776.83% 263.34%, 607.46% 380.63%, 626.37% 306.52%, 705.6% 227.56%, 657.89% 259.1%, 676.54% 228.03%, 637.71% 262.05%, 665.39% 173.37%, 708.58% 132.59%, 669.32% 155.55%, 645.22% -33.96%, 643.43% 191.25%, 625.7% 166.3%, 608.82% 125.34%, 611.88% 162.55%, 628.97% 199.51%, 601.23% 270.15%, 575.77% 182.7%, 574.33% 114.53%, 561.21% 173.93%, 541.4% 131.83%, 537.75% 105.61%, 572% -31.79%, 527.97% 82.06%, 465.79% 26.72%, 516.31% 94.47%, 534.25% 172.51%, 433.84% 82.13%, 495.36% 169.47%, 448.48% 166.02%, 511.34% 189.33%, 542.35% 208.99%, 559.44% 245.93%, 555.31% 324.82%, 539.35% 381.06%, 497.94% 234.7%, 504.22% 306.12%, 466.69% 277.12%, 503.28% 324.09%, 512.27% 362.63%, 434.36% 282.43%, 445.96% 213.95%, 423.9% 271.87%, 394.87% 195.24%, 403.93% 270.83%, 352.67% 217.07%, 369.21% 130.82%, 343.53% 200.57%, 338.15% 169.25%, 362.66% 7.31%, 399.06% -132.98%, 365.28% -61.65%, 348.13% -97.6%, 358.71% -31.95%, 342.11% 36.27%, 327.16% 111.59%, 302.5% 66.24%, 314% -0.26%, 294.72% 61.82%, 266.07% 35.29%, 226.21% -25.89%, 245.41% 28.2%, 210.83% 19.37%, 127.5% -34.06%, 178.03% 14.66%, 206.89% 37.2%, 233.38% 47.6%, 159.38% 64.75%, 219.3% 67.89%, 261.39% 67.09%, 290.1% 92.63%, 301.2% 129.26%, 319.24% 205.3%, 240.7% 175.15%, 324.23% 224.58%, 354.31% 262.22%, 339.69% 273.47%, 372.3% 282.19%, 429.22% 323.22%, 459.34% 359.84%, 432.28% 360.43%, 356.21% 321.41%, 412.78% 369.43%, 419.5% 355.77%, 332.04% 362.19%, 466.02% 385.23%, 519.85% 428.11%, 538.21% 498.16%, 304.63% 388.8%, 291.08% 283.93%, 293% 381.17%, 255.52% 332.14%, 210.97% 169.59%, 253.63% 100.73%, 204.45% 160.24%, 202.43% 103.05%, 196.98% 168.85%, 214.66% 251.89%, 138.54% 194.83%, 205.88% 266.45%, 221.24% 317.33%, 75.95% 242.62%, 14.46% 231.39%, -89% 160.88%, -32.9% 217.89%, -162.04% 198.11%, -78.42% 226.53%, -125.08% 276.15%, -55.45% 227.73%, 22.61% 247.83%, 93.41% 272.58%, -10.07% 298.2%, 101.61% 288.03%, 143.45% 311.25%, 189.98% 340.73%, 105.25% 352.3%, 64.62% 325.14%, 91.96% 357.62%, 20.21% 350.86%, 64.47% 366.19%, 37.25% 388.8%, 75.29% 369.76%, 97.32% 369.91%, 132.69% 363.76%, 58.55% 440.99%, -40.73% 424.76%, 57.71% 456.96%, -65.79% 501.56%, 15.3% 482.77%, -1.19% 529.98%, 20.72% 494.08%, 40.89% 472.1%, 62.23% 466.21%, 77.18% 544.1%, 77.48% 442.98%, 139.69% 383.16%, 213.01% 359.96%, 235.07% 359.11%, 255.79% 384.22%, 298.21% 434.52%, 241.15% 453.56%, 175.65% 423.08%, 219.71% 461.44%, 143.38% 465.45%, 191.06% 472.96%, 269.67% 463.06%, 249.04% 513.04%, 283.77% 461.8%, 314.2% 454.37%, 394.04% 478.6%, 461.43% 530.19%, 532.51% 568.97%, 572.3% 631.13%, 594.65% 701.39%, 598.72% 795.74%, 603.49% 915.15%, 601.68% 976.44%, 602.78% 1033.58%, 601.72% 1105.52%, 599.88% 1165.21%, 596.75% 1200.29%, 589.77% 1228.47%"),
				"#3a2213") // deciduous tree
		//snow on tree	
		 	drawShape(convertClippath(100, -20, "502.63% 506.51%, 512.04% 508.41%, 522.5% 517.07%, 532.07% 517.87%, 542.16% 508.79%, 533.25% 478.28%, 509.94% 470.25%, 485.76% 459.67%, 464.75% 451.56%, 438.25% 439.35%, 415.08% 440.14%, 445.18% 473.46%, 460.35% 483.97%, 479.84% 499.91%, 491.91% 504.65%"),
				"white", 30, "lightblue")
		 	drawShape(convertClippath(100, -20, "40.02% 234.73%, 99.69% 240.56%, 130.61% 256.4%, 157.34% 264.21%, 191.71% 277.13%, 210.6% 279.72%, 230.29% 301.38%, 227.76% 317.27%, 207.01% 317.58%, 182.72% 295.68%, 162.46% 286.81%, 112.8% 261.88%"),
		 		"white", 30, "lightblue")
		 	drawShape(convertClippath(100, -20, "605.5% 385.53%, 633.96% 364.19%, 666.75% 349.89%, 713.43% 307.57%, 671.35% 323.29%, 648.83% 324.92%, 636.05% 324.25%, 613.58% 332.68%, 602.82% 354.55%"),
		 		"white", 30, "lightblue")
		}

		function drawSnowflakes() {
			for (i in snowflakes) {
				drawCircle(snowflakes[i].x, snowflakes[i].y, snowflakes[i].radius, snowflakes[i].color, snowflakes[i].shadowThickness, snowflakes[i].shadowColor)
			}
		}

		function drawForeground() {
			drawShape(convertClippath(0, 0, "0% 1200%, 0% 1157.8%, 35.2% 1160.5%, 56% 1164.3%, 79.2% 1161%, 110.2% 1161.5%, 143.2% 1166.5%, 177.5% 1165.3%, 210% 1158.3%, 232.7% 1155.5%, 249.7% 1156%, 269.7% 1161.5%, 286.5% 1164.7%, 310.5% 1162%, 332.7% 1161.5%, 348% 1161.5%, 365.2% 1157.8%, 380% 1158.3%, 391.2% 1155%, 400% 1156.8%, 400% 1157.8%, 435.2% 1160.5%, 456% 1164.3%, 479.2% 1161%, 510.2% 1161.5%, 543.2% 1166.5%, 577.5% 1165.3%, 610% 1158.3%, 632.7% 1155.5%, 649.7% 1156%, 669.7% 1161.5%, 686.5% 1164.7%, 710.5% 1162%, 732.7% 1161.5%, 748% 1161.5%, 765.2% 1157.8%, 780% 1158.3%, 791.2% 1155%, 800% 1156.8%, 800% 1200%"),
				"white", 20, "darkgray") // windowsill snow bottom		

			drawShape(convertClippath(0, 5, "0% 575%, 800% 575%, 800% 532.8%, 764.8% 535.5%, 744% 539.3%, 720.8% 536%, 689.8% 536.5%, 656.8% 541.5%, 622.5% 540.3%, 590% 533.3%, 567.3% 530.5%, 550.3% 531%, 530.3% 536.5%, 513.5% 539.7%, 489.5% 537%, 467.3% 536.5%, 452% 536.5%, 434.8% 532.8%, 420% 533.3%, 408.8% 530%, 400% 531.8%, 400% 532.8%, 364.8% 535.5%, 344% 539.3%, 320.8% 536%, 289.8% 536.5%, 256.8% 541.5%, 222.5% 540.3%, 190% 533.3%, 167.3% 530.5%, 150.3% 531%, 130.3% 536.5%, 113.5% 539.7%, 89.5% 537%, 67.3% 536.5%, 52% 536.5%, 34.8% 532.8%, 20% 533.3%, 8.8% 530%, 0% 531.8%"),
				"white", 80, "white") // windowsill snow middle		


			drawShape([ [0, 575] , [800, 575] , [800, 625] , [0, 625] ], "#823c0e") // window crossbeam

			drawShape([ [350, 575], [350, 550], [450, 550], [450, 575] ], "#823c0e") // window latch

		}

})
