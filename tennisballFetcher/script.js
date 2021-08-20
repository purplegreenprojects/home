window.onload = function(){

	/*dog position*/
		var dog = document.getElementById("dog")
		var jumping = false

	/*key listeners*/
		document.addEventListener("keydown", function(event){
			if (event.code == "ArrowLeft") {
				moveLeft()
			}
			else if (event.code == "ArrowRight") {
				moveRight()
			}
			else if (event.code == "Space") {
				jump()
			}
		})

	/*moving Left and Right*/
		function moveLeft() {
			var dogLeft = Number(dog.style.left.replace("px", "")) - 90
			var dogRight = dogLeft + 180

			if (dogLeft < 40) {
				dogLeft = 0
			}
			else {
				dogLeft = dogLeft - 40
			}

			dogLeft = dogLeft + 90 + "px"
			dog.style.left = dogLeft
		}

		function moveRight() {
			var dogLeft = Number(dog.style.left.replace("px", "")) - 90
			var dogRight = dogLeft + 180
			var windowWidth = window.innerWidth

			if (dogRight > windowWidth - 40) {
				dogRight = windowWidth
			}
			else {
				dogRight = dogRight + 40
			}

			dogLeft = (dogRight - 90) + "px"

			dog.style.left = dogLeft
		}

	/*jumping*/
		function jump() {
			if (!jumping) {
				jumping = true
				dog.setAttribute("JUMP", true)

				var time = 0
				var jumpLoop = setInterval(function() {
					time = time + 10
					
					var bottom = Number(window.getComputedStyle(dog).bottom.replace("px", ""))
					var newY = (-0.0016 * Math.pow(time, 2)) + (1.2 * time) + 130
					dog.style.bottom = newY + "px"

					if (newY <= 130) {
						dog.style.bottom = 130 + "px"
						clearInterval(jumpLoop)
						jumping = false

						dog.removeAttribute("JUMP")
					}

				}, 10)
			}
		}

	/*tennisBalls*/
	setInterval(function(){
		var ball = document.getElementById("tennisBall")
		if(ball){
			var x  = Number(ball.style.left.replace("px", ""))
			var y  = Number(ball.style.bottom.replace("px", ""))
			var vX = Number(ball.getAttribute("vX"))
			var vY = Number(ball.getAttribute("vY"))
			// acceleration!
			vY = vY - 0.1

			x = x + vX
			y = y + vY

			ball.style.left = x + "px"
			ball.style.bottom = y + "px"
			ball.setAttribute("vY", vY)

		}

		else {
			var x  = window.innerWidth + 20 + "px"
			var y  = Math.random() * (window.innerHeight - 350) + 200 + "px"
			var vX = (Math.random() * 12 + 3) * -1
			var vY = 0

			ball = "<div id='tennisBall' style='left: " + x + "; bottom: " + y + "' vX='" + vX + "' vY='" + vY + "'></div>"

			document.getElementById("tennisBallContainer").innerHTML = ball
		}
	}, 25)
}