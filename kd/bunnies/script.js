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
				text: "Franny",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/728168086/upload_medium2"
			},
			{
				text: "Pedro",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/601963453/upload_medium2"
			},
			{
				text: "Teddy",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/715766025/upload_medium2"
			},
			{
				text: "Rosie - the Rabbiter",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/715730393/IMG_20180224_011125925.jpg"
			},
			{
				text: "Nibbles",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/601983891/IMG_2394_medium2.JPG"
			},
			{
				text: "Isabella",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/437404910/thumb_IMG_5603_1024_medium2.jpg"
			},
			{
				text: "Bravery Bunny",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/347319067/IMG_1829_medium2.jpg"
			},
			{
				text: "Baby Bunny",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/363878603/tumblr_o3x5t7hpun1tdp74do1_1280_medium2.jpg"
			},
			{
				text: "Penelope",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/384669806/IMG_3393_medium2.jpg"
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
