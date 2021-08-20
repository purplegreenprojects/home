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
				text: "Above the clouds (on the plane)",
				url: "images/1.jpg"
			},
			{
				text: "Cool succulents, architecture, and overall aesthetic",
				url: "images/2.jpg"
			},
			{
				text: "Sort of 'Howl's Moving Castle'-esque",
				url: "images/3.jpg"
			},
			{
				text: "",
				url: "images/4.jpg"
			},
			{
				text: "Obligatory Golden Gate Bridge picture",
				url: "images/5.jpg"
			},
			{
				text: "Lombard Street",
				url: "images/6.jpg"
			},
			{
				text: "Ghirardelli Square - with newly aquired chocolate",
				url: "images/7.jpg"
			},
			{
				text: "Musee Mecanique",
				url: "images/8.jpg"
			},
			{
				text: "Cute sourdough bread at Boudin Bakery",
				url: "images/9.jpg"
			},
			{
				text: "Ghirardelli Square at night",
				url: "images/10.jpg"
			},
			{
				text: "The beach down the road from our airBnB",
				url: "images/11.jpg"
			},
			{
				text: "Trolley cables",
				url: "images/12.jpg"
			},
			{
				text: "Land's End sunset",
				url: "images/13.jpg"
			},
			{
				text: "You can just make out the Golden Gate Bridge through the fog",
				url: "images/14.jpg"
			},
			
			{
				text: "",
				url: "images/16.jpg"
			},
			
			{
				text: "",
				url: "images/19.jpg"
			},
			{
				text: "",
				url: "images/20.jpg"
			},
			{
				text: "Land's End Labyrinth",
				url: "images/21.jpg"
			},
			{
				text: "Haight-Ashbury",
				url: "images/22.jpg"
			},
			{
				text: "Haight-Ashbury",
				url: "images/23.jpg"
			},
			{
				text: "Let's try some peace instead",
				url: "images/24.jpg"
			},
			{
				text: "I'd wanted to visit 826 Valencia since I first heard Dave Eggers' TED Talk",
				url: "images/25.jpg"
			},
			{
				text: "Every detail was so clever...",
				url: "images/26.jpg"
			},
			{
				text: "It did not disappoint.",
				url: "images/27.jpg"
			},
			{
				text: "Dutch Windmill at the edge of Golden Gate Park, near the beach",
				url: "images/28.jpg"
			},
			{
				text: "At the Exploratorium",
				url: "images/29.jpg"
			},
			{
				text: "",
				url: "images/30.jpg"
			},
			{
				text: "",
				url: "images/31.jpg"
			},
			{
				text: "",
				url: "images/32.jpg"
			},
			{
				text: "",
				url: "images/33.jpg"
			},
			{
				text: "Sunrise over the east coast on the way home",
				url: "images/34.jpg"
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
