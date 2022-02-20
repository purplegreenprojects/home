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
				text: "View of Boston from Pine Banks Park in Malden, MA",
				url: "images/1.jpg"
			},
			{
				text: "Cool spiral staircase in Boston, MA",
				url: "images/2.jpg"
			},
			{
				text: "The Greenway Carousel in Boston, MA",
				url: "images/3.jpg"
			},
			{
				text: "I love how this carousel has all different (mostly local) animals",
				url: "images/4.jpg"
			},
			{
				text: "Paul Revere Statue and Old North Church in Boston, MA",
				url: "images/5.jpg"
			},
			{
				text: "'The Charlestown Bells' by Paul Matisse, Boston, MA",
				url: "images/6.jpg"
			},
			{
				text: "",
				url: "images/7.jpg"
			},
			{
				text: "Boston Museum of Science, unique view of the Charles River",
				url: "images/8.jpg"
			},
			{
				text: "Middlesex Fells Reservation",
				url: "images/9.jpg"
			},
			{
				text: "Halibut Point State Park, Rockport, MA",
				url: "images/10.JPG"
			},
			{
				text: "",
				url: "images/11.JPG"
			},
			{
				text: "",
				url: "images/12.jpg"
			},
			{
				text: "Middlesex Fells Reservation",
				url: "images/13.jpg"
			},
			{
				text: "",
				url: "images/14.jpg"
			},
			{
				text: "",
				url: "images/15.jpg"
			},
			{
				text: "Skiing at Wachusett Mountain",
				url: "images/16.jpg"
			},
			{
				text: "Spotted around Duxbury, MA",
				url: "images/17.JPG"
			},
			{
				text: "Duxbury / Plymouth area",
				url: "images/18.JPG"
			},
			{
				text: "",
				url: "images/19.JPG"
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
