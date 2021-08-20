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
				text: "Arriving in Old Montreal (August 2007)",
				url: "images/1.jpg"
			},
			{
				text: "Vanishing skyline",
				url: "images/2.jpg"
			},
			{
				text: "",
				url: "images/3.jpg"
			},
			{
				text: "Place Jaques-Cartier",
				url: "images/4.jpg"
			},
			{
				text: "August 2008",
				url: "images/5.jpg"
			},
			{
				text: "Place Jaques-Cartier at night",
				url: "images/6.jpg"
			},
			{
				text: "My favorite restaurant at the time - chicken salad on a croissant and un chocolat chaud",
				url: "images/7.jpg"
			},
			{
				text: "Place Jaques-Cartier in the morning (August 2009)",
				url: "images/8.jpg"
			},
			{
				text: "Rue des Artistes (August 2009)",
				url: "images/9.jpg"
			},
			{
				text: "Notre-Dame Basilica (July 2019)",
				url: "images/10.jpg"
			},
			{
				text: "Inside the Notre-Dame Basilica - just before the light show started",
				url: "images/11.jpg"
			},
			{
				text: "Rue des Artistes (July 2019)",
				url: "images/12.jpg"
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
