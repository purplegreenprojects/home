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
				text: "Sushi pants for Lyn - pattern (Pajama Pants) by 5 out of 4 Patterns",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/04/IMG_20210102_151356772.jpg?itok=YX37B5Ku"
			},
			{
				text: "Monsters Inc. shorts for me  - pattern (Pajama Pants) by 5 out of 4 Patterns",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/14/IMG_20210714_163941760.jpg?itok=2Ocds1O_"
			},
			{
				text: "Knitting pants for me  - pattern (Pajama Pants) by 5 out of 4 Patterns",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/14/IMG_20210714_161445130.jpg?itok=y1OkFmFy"
			},
			{
				text: "Majora's Mask pants for Dan  - pattern (Pajama Pants) by 5 out of 4 Patterns",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/04/IMG_20191210_185504811_HDR.jpg?itok=clUAn9Kx"
			},
			{
				text: "Windwaker pants for James  - pattern (Pajama Pants) by 5 out of 4 Patterns",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20210708_201857742.jpg?itok=q7Q9EbF1"
			},
			{
				text: "Music pants for James  - pattern (Pajama Pants) by 5 out of 4 Patterns",
				url: "https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20210708_201628945.jpg?itok=0SEk-Sd_"
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
