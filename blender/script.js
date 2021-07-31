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
				url: "images/blendercafe.gif"
			},
			{
				text: "",
				url: "images/budvase.png"
			},
			{
				text: "",
				url: "images/bagels.png"
			},
			{
				text: "",
				url: "images/breakfastpicnic.png"
			},
			
			{
				text: "",
				url: "images/bread.png"
			},
			{
				text: "",
				url: "images/apples.png"
			},
			{
				text: "",
				url: "images/teddybear.png"
			},
			{
				text: "",
				url: "images/neonsign.png"
			},
			{
				text: "",
				url: "images/shelf_cube.png"
			},
			{
				text: "",
				url: "images/yogamat.png"
			},
			{
				text: "",
				url: "images/desk_drawing.png"
			},
			{
				text: "",
				url: "images/bulletinboard.png"
			},
			{
				text: "",
				url: "images/piano.png"
			},
			{
				text: "",
				url: "images/sewingmachine.png"
			},
			{
				text: "",
				url: "images/sewingdressform.png"
			},
			{
				text: "",
				url: "images/lamp_banker.png"
			},
			{
				text: "",
				url: "images/chair_gpa.png"
			},
			{
				text: "",
				url: "images/table_end.png"
			},
			{
				text: "",
				url: "images/plant_pothos.png"
			},
			{
				text: "",
				url: "images/chair_poang.png"
			},
			{
				text: "",
				url: "images/lamp_floor.png"
			},
			{
				text: "",
				url: "images/lamp_reading.png"
			},
			{
				text: "",
				url: "images/books.png"
			},
			{
				text: "",
				url: "images/compositionnotebooks.png"
			},
			{
				text: "",
				url: "images/all.png"
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
