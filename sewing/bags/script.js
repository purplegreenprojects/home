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
				text: "Nintendo Switch Case - designed and sewn by Elizabeth Ford",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/06/25/20%20Gameboy%20cover%20sewing%201.jpg?itok=XiQZO09J"
			},
			{
				text: "Big Girl Bag (Reversible) - designed and sewn by Elizabeth Ford",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20180911_070641305.jpg?itok=hPWpfXH1"
			},
			{
				text: "Nantucket Themed Bags for Mom and Grandma - designed and sewn by Elizabeth Ford",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20171224_132413237.jpg?itok=C7fb4cuD"
			},
			{
				text: "Adventure Bag - designed and sewn by Elizabeth Ford",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20170715_204102926.jpg?itok=bl7MGkJm"
			},
			{
				text: "Adventure Bag - in progress, design by Elizabeth Ford",
				url: "bagplan.gif"
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
