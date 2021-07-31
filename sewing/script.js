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
				text: "Knitting Skirt - designed and sewn by Elizabeth Ford",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20200602_172303769.jpg?itok=pxUVqM-7"
			},
			{
				text: "Sunflower Skirt - designed and sewn by Elizabeth Ford",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/04/IMG_20180916_144742677_HDR.jpg?itok=yVOict1_"
			},
			{
				text: "Embroidered Flowers Pink Knit Top - pattern (Knit Top) by Deborah Moebes from Stitch Savvy book",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/04/IMG_20201010_223156708.jpg?itok=NPJXEdGV"
			},
			{
				text: "Practice Gray Knit Top - pattern (Knit Top) by Deborah Moebes from Stitch Savvy book",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/06/15/IMG_20201007_230719591.jpg?itok=TDJbAITI"
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
