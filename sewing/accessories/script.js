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
				text: "Cat Hood - Faux Fur Hood Tutorial + Free Pattern by Lemon Squeezy Home",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/14/IMG_20201231_154403468_0.jpg?itok=ImKnGP-H"
			},
			{
				text: "Music Blanket - designed and sewn by Elizabeth Ford",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/15/IMG_20180830_130435931.jpg?itok=eJIc4H1v"
			},
			{
				text: "Butterfly Chair cover - designed and sewn by Elizabeth Ford",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_1384.JPG?itok=JS5jtgiT"
			},
			{
				text: "Doll Tent - Simplicity Crafts Pattern 5679",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/dog%20sleeping%20bag%20and%20tent.png?itok=Lugu8zhV"
			},
			{
				text: "Doll Sofa Bed - Simplicity Crafts Pattern 5272",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/doll%20couch.png?itok=k0zjIx4t"
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
