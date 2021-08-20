window.onload = function() {
	/*** elements ***/
		var ELEMENTS = {
			list: document.querySelector("#list"),
			left: document.querySelector("#left-arrow"),
			right: document.querySelector("#right-arrow"),
		}

	/*** list ***/
		var LIST = [
			{
				text: "Lightning! (July 17, 2010)",
				url: "images/1.jpg"
			},
			{
				text: "Latham, NY",
				url: "images/2.jpg"
			},
			{
				text: "Latham, NY",
				url: "images/3.jpg"
			},
			{
				text: "The Crossings of Colonie, Loudonville, NY",
				url: "images/4.jpg"
			},

			{
				text: "Hampton Beach, NH",
				url: "images/5.jpg"
			},
			{
				text: "Hampton Beach, NH",
				url: "images/6.jpg"
			},
			{
				text: "Latham, NY",
				url: "images/7.jpg"
			},

			{
				text: "",
				url: "images/8.jpg"
			},
			{
				text: "",
				url: "images/9.jpg"
			},
			{
				text: "New Paltz, NY",
				url: "images/10.jpg"
			},
			{
				text: "New Paltz, NY",
				url: "images/11.jpg"
			},
			{
				text: "New Paltz, NY",
				url: "images/12.jpg"
			},
			{
				text: "July 4, 2019 at Rocky Point Beach, Long Island, NY",
				url: "images/13.jpg"
			},
			{
				text: "On the Port Jefferson, NY / Bridgeport, CT Ferry",
				url: "images/14.jpg"
			},
			{
				text: "",
				url: "images/15.jpg"
			},
			{
				text: "",
				url: "images/16.jpg"
			},
			{
				text: "Malden, MA",
				url: "images/17.JPG"
			},
			{
				text: "Spring 2020 - Medford, MA",
				url: "images/18.jpg"
			},
			
		]

	/*** buildPage ***/
		buildPage()
		function buildPage() {
			// loop through list
				for (var i = 0; i < LIST.length; i++) {
					// create block
						var block = document.createElement("div")
							block.id = "image-" + (i + 1)
							block.className = "image-block"
							block.style.backgroundImage = "url(" + LIST[i].url + ")"
						ELEMENTS.list.appendChild(block)

					// create text
						var text = document.createElement("div")
							text.className = "image-block-text"
							text.innerText = LIST[i].text
						block.appendChild(text)
				}

			// scroll to hash
				if (window.location.hash) {
					var hash = Number(window.location.hash.slice(7)) || 1
					window.location.hash = ""
					setTimeout(function() {
						window.location.hash = "image-" + hash
					}, 0)
				}
		}

	/*** moveLeft ***/
		ELEMENTS.left.addEventListener("click", moveLeft)
		function moveLeft() {
			var hash = Number(window.location.hash.slice(7)) || 1
			var newHash = (hash - 1) || 0
			window.location.hash = "image-" + (newHash ? newHash : LIST.length)
		}

	/*** moveRight ***/
		ELEMENTS.right.addEventListener("click", moveRight)
		function moveRight() {
			var hash = Number(window.location.hash.slice(7)) || 1
			var newHash = (hash + 1)
			window.location.hash = "image-" + (newHash <= LIST.length ? newHash : 1)
		}
}
