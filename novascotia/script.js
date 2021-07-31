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
				text: "Ferry across the Bay of Fundy - my first time on a ferry, and I was so seasick",
				url: "images/0.jpg"
			},
			{
				text: "Sunset on the first night",
				url: "images/1.jpg"
			},
			{
				text: "As we rounded each corner, we were met with views like this",
				url: "images/2.jpg"
			},
			{
				text: "Hills, wildflowers, sunshine",
				url: "images/3.jpg"
			},
			{
				text: "Old school panorama of the hike at Kejimkujik National Park",
				url: "images/4.jpg"
			},
			{
				text: "Kejimkujik National Park Seaside - one of my favorite places",
				url: "images/5.jpg"
			},
			{
				text: "",
				url: "images/6.jpg"
			},
			{
				text: "",
				url: "images/7.jpg"
			},
			{
				text: "",
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
				text: "We saw a moose!",
				url: "images/11.jpg"
			},
			{
				text: "",
				url: "images/12.jpg"
			},
			{
				text: "",
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
				text: "I swam in a waterfall - it was the coldest I've ever been, but it was glorious",
				url: "images/16.jpg"
			},
			{
				text: "Meat Cove - the northernmost part of Nova Scotia",
				url: "images/17.jpg"
			},
			{
				text: "Sunset on the last day",
				url: "images/18.jpg"
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
