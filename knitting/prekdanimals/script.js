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
				text: "Worry Whale - pattern (Hazel the Humpback Whale) by Bec Brittain",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/89934393/IMG_2330_medium2.JPG"
			},
			{
				text: "Thomas - 1st cat ever, designed and knitted by Elizabeth Ford",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/115958952/IMG_2518_medium2.jpg"
			},
			{
				text: "Qwerty Monster - designed and knitted by Elizabeth Ford",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/792368016/32_Confetti_Creature_knitting_medium2.jpg"
			},
			{
				text: "Evelyn - designed and knitted by Elizabeth Ford",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/115956044/IMG_3569_medium2.jpg"
			},
			{
				text: "Mae's Cousin - loosely based on Sally Muir's Knit Your Own Cat pattern with additions/alterations designed and knitted by Elizabeth Ford",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/144140493/IMG_4534_medium2.JPG"
			},
			{
				text: "First Bunny - designed and knitted by Elizabeth Ford",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/237977865/IMG_6361_medium2.JPG"
			},
		
			{
				text: "Explogo Bunny - designed and knitted by Elizabeth Ford",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/277562543/IMG_0753_medium2.JPG"
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
