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
				text: "carrot",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/601963449/upload_medium2"
			},
			{
				text: "goldfish",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/791016771/IMG_20200909_155149000_HDR_medium2.jpg"
			},
			{
				text: "beta fish",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/791016763/IMG_20200909_153317112_medium2.jpg"
			},
			{
				text: "Douglas the mouse",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/715785466/upload_medium2"
			},
			{
				text: "Manny the mouse",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/715785584/upload_medium2"
			},
			{
				text: "Charles the mouse",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/715785502/upload_medium2"
			},
			{
				text: "mice with cat",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/715785592/upload_medium2"
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
