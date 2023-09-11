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
				text: "My home for many years - a welcome sight after a long walk through snowy woods.",
				url: "images/1.jpg"
			},
			{
				text: "Tully",
				url: "images/2.jpg"
			},
			{
				text: "The Barn",
				url: "images/3.jpg"
			},
			{
				text: "My tree at The Crossings",
				url: "images/4.jpg"
			},
			{
				text: "Pruyn House woods",
				url: "images/5.jpg"
			},
			{
				text: "Minnewaska - a favorite adventuring spot near New Paltz, NY during my grad school years",
				url: "images/6.jpg"
			},
			{
				text: "The view from the top of the cliffs at Minnewaska",
				url: "images/7.jpg"
			},
			
			// {
			// 	text: "ok",
			// 	url: "images/8.jpg"
			// },
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
