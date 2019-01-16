window.onload = function(){

	// function playSound([all of the information that js sends about the event, which is a click])
		function playSound(clickInfo) {
			var button = clickInfo.target

			document.getElementById("source").setAttribute("src", "sounds/" + button.value)

			document.getElementById("player").pause()
			document.getElementById("player").currentTime = 0
			document.getElementById("player").load()
			document.getElementById("player").play()
		}

	// click listener (to call the function)

		var buttons = document.getElementsByClassName("sound")

		for (x in buttons){
			buttons[x].onclick = playSound
		}

}