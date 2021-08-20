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
				text: "Fred",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/715756211/upload_medium2"
			},
			{
				text: "Banjo",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/715732787/upload_medium2"
			},
			{
				text: "Valentine",
				url: "https://kniterativedesigns.files.wordpress.com/2021/02/img_7407.jpg"
			},
			{
				text: "Charlotte",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/715759067/upload_medium2"
			},
			{
				text: "Marcus",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/465091358/img_20170814_174417151_hdr_medium2.jpg"
			},
			{
				text: "Lady",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/422467321/IMG_4630_medium2.jpg"
			},
			{
				text: "Jack",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/406325404/IMG_4388_medium2.JPG"
			},
			{
				text: "Chloe",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/400065447/tumblr_oe1ba1oje81tdp74do1_1280_medium2.jpg"
			},
			{
				text: "Charlie",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/381698603/tumblr_o8y199hecg1tdp74do2_540_medium2.jpg"
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
