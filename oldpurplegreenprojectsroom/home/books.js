window.addEventListener("load", function(){
	
	// variables
		var songbooks = document.getElementsByClassName("songbook")
		var songs = document.getElementsByClassName("song")
		
		var covers = document.getElementsByClassName("cover")

		var player = document.getElementById("player")

	// change showing
		for (var x = 0; x < songbooks.length; x++) {
			songbooks[x].addEventListener("click", changeShowing)
		}
		
		function changeShowing(event) {
			for (var x = 0; x < songs.length; x++) {
				songs[x].setAttribute("showing", "book")
			}

			var book = event.target
			var song = book.parentNode
			song.setAttribute("showing", "cover")
			player.pause()
		}

	// audio player
		for (var x = 0; x < covers.length; x++) {
			covers[x].addEventListener("click", playSound)
		}

		function playSound(event) {
			var button = event.target
			var currentSrc = document.getElementById("source").src.split("/")
			currentSrc = currentSrc[currentSrc.length - 1]

			if (player.paused == false) {

				player.pause()

			}
				
			else if (button.value == currentSrc) {
				player.play()
			} 

			else {
				document.getElementById("source").setAttribute("src", "music/" + button.value)
				player.load()
				player.play()
			}

		}

	// scroll to center
		setTimeout(setScroll, 1)
		function setScroll() {
			var scrollAmount = document.getElementsByClassName("flex-container")[0].getBoundingClientRect().width / 2
			scrollAmount = scrollAmount - window.innerWidth / 2
			document.body.scrollLeft = scrollAmount
			document.documentElement.scrollLeft = scrollAmount
		}

 })