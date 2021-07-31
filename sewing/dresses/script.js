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
				text: "Iris Moneta - pattern (Moneta) by Colette Patterns",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/06/14/IMG_8025.JPG?itok=xThyw_BA"
			},
			{
				text: "Water Moneta - pattern (Moneta) by Colette Patterns",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/06/14/IMG_7987.JPG?itok=UeUGINLH"
			},
			{
				text: "Purple Moneta - pattern (Moneta) by Colette Patterns",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/06/14/IMG_6324.JPG?itok=QBKdrc5l"
			},
			{
				text: "Practice Gray Moneta - pattern (Moneta) by Colette Patterns",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/06/15/IMG_20200927_182034631.jpg?itok=3_59kC6l"
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
