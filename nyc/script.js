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
				text: "Skyline - view from the Megabus",
				url: "images/1.jpg"
			},
			{
				text: "Midtown - the Empire State Building was the first landmark I used to figure out where I was",
				url: "images/2.jpg"
			},
			{
				text: "81st Street - the Museum of Natural History - my favorite subway stop",
				url: "images/3.jpg"
			},
			{
				text: "New York Public Library lion",
				url: "images/4.jpg"
			},
			{
				text: "Central Park juxtaposition",
				url: "images/5.jpg"
			},
			{
				text: "Central Park Face(s)",
				url: "images/6.jpg"
			},
			{
				text: "Coney Island",
				url: "images/7.jpg"
			},
			{
				text: "Giant needle and thread in the Garment District",
				url: "images/8.jpg"
			},
			{
				text: "",
				url: "images/9.jpg"
			},
			{
				text: "",
				url: "images/10.jpg"
			},
			{
				text: "Cat!",
				url: "images/11.jpg"
			},
			{
				text: "Mural somewhere in Brooklyn",
				url: "images/12.jpg"
			},
			{
				text: "Manhattan skyline",
				url: "images/13.jpg"
			},
			{
				text: "DIY Wallpaper Exhibit/Room at the Cooper Hewitt Museum",
				url: "images/14.jpg"
			},
			{
				text: "Chihuly Exhibit at the New York Botanical Gardens",
				url: "images/15.jpg"
			},
			{
				text: "",
				url: "images/16.jpg"
			},
			{
				text: "Oculus and Freedom Tower on a foggy winter night",
				url: "images/17.jpg"
			},
			{
				text: "Christmastime in the City",
				url: "images/18.jpg"
			},
			{
				text: "",
				url: "images/19.jpg"
			},
			{
				text: "The Cube",
				url: "images/20.jpg"
			},
			{
				text: "Brooklyn Bridge at Sunset",
				url: "images/21.jpg"
			},
			{
				text: "Classic Brooklyn Bridge pic",
				url: "images/22.jpg"
			},
			{
				text: "",
				url: "images/23.jpg"
			},
			{
				text: "Seen near Wall Street",
				url: "images/24.jpg"
			},
			{
				text: "Ground Zero",
				url: "images/25.jpg"
			},
			{
				text: "Battery Park at sunset",
				url: "images/26.jpg"
			},
			{
				text: "Battery Park Carousel",
				url: "images/27.jpg"
			},
			{
				text: "Broadway",
				url: "images/28.jpg"
			},
			{
				text: "",
				url: "images/29.jpg"
			},
			{
				text: "The Met",
				url: "images/30.jpg"
			},
			{
				text: "",
				url: "images/31.jpg"
			},
			{
				text: "",
				url: "images/32.jpg"
			}
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
