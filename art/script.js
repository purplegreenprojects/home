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
				text: "",
				url: "images/2011snowbunny.jpg"
			},
			{
				text: "",
				url: "images/novascotia.png"
			},
			{
				text: "",
				url: "images/onionandpepper.png"
			},
			{
				text: "",
				url: "images/knitting.png"
			},
			{
				text: "",
				url: "images/kdlogofull.png"
			},
			{
				text: "",
				url: "images/kdfurryfriends.png"
			},
			{
				text: "",
				url: "images/kayaking.png"
			},
			{
				text: "",
				url: "images/waterlillies.png"
			},
			{
				text: "",
				url: "images/oranges.png"
			},
			{
				text: "",
				url: "images/cherries.png"
			},
			{
				text: "",
				url: "images/blueberries.png"
			},
			{
				text: "",
				url: "images/clothesline.png"
			},
			{
				text: "",
				url: "images/stormylaundry.png"
			},
			{
				text: "",
				url: "images/sunflowers.png"
			},
			{
				text: "",
				url: "images/pansies.png"
			},
			{
				text: "",
				url: "images/meteoriteminer.png"
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
