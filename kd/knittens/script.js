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
				text: "Taylor",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/715763214/upload_medium2"
			},
			{
				text: "Callie",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/624068854/IMG_20190425_212607532.jpg"
			},
			{
				text: "Adrienne",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/602057334/upload"
			},
			{
				text: "Bartholomew",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/716636800/upload"
			},
			{
				text: "Hilda",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/461689204/img_20170727_023820157_medium2.jpg"
			},
			{
				text: "Apollo",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/432698020/IMG_5092_medium2.jpg"
			},
			{
				text: "Thomas",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/767144841/tree_medium2.jpg"
			},
			{
				text: "Claire",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/367053653/IMG_2592_medium2.jpg"
			},
			{
				text: "Amelia",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/767149356/amelia_medium2.png"
			},
			{
				text: "Luca",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/368115695/IMG_2655_medium2.jpg"
			},
			{
				text: "Waldorf",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/361759651/tumblr_o3jiroc1cj1tdp74do5_1280_medium2.jpg"
			},
			{
				text: "Pat",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/767148815/pat_medium2.png"
			},
			{
				text: "Candy Corn",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/338274958/tumblr_ny5mtdy6hu1tdp74do3_1280_medium2.jpg"
			},
			{
				text: "Olivia",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/325852176/IMG_0823_medium2.JPG"
			},
			{
				text: "O'Malley",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/325852600/20150802_190136_medium2.jpg"
			},
			{
				text: "Lucky",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/325853300/IMG_0969_medium2.JPG"
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
