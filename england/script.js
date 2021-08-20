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
				url: "images/1.jpg"
			},
			{
				text: "",
				url: "images/2.jpg"
			},
			{
				text: "",
				url: "images/3.jpg"
			},
			{
				text: "",
				url: "images/4.jpg"
			},
			{
				text: "",
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
				text: "",
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
				text: "",
				url: "images/16.jpg"
			},
			{
				text: "",
				url: "images/17.jpg"
			},
			{
				text: "",
				url: "images/18.jpg"
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
				text: "",
				url: "images/21.jpg"
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
