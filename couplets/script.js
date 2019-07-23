window.onload = function() {
	/*** globals ***/
		var GOOGLESHEETSURL = "https://script.google.com/macros/s/AKfycbwS3xdj1p76y-9Isk7KOQ-L4OkPOo0MDJJFhpeTATJuWC59h89L/exec"
		var CONTAINER = document.getElementById("content")

	/*** poems ***/
		/* getPoems */
			getPoems()
			function getPoems() {
				var xhr = new XMLHttpRequest()
					xhr.open("GET", GOOGLESHEETSURL)
					xhr.onreadystatechange = displayPoems
					xhr.responseType = "json"
					xhr.setRequestHeader("Accept", "application/json")
					xhr.send()
			}

		/* displayPoems */
			function displayPoems(event) {
				var data = event.target.response
				if (data) {
					for (var d in data) {
						if (data[d].title && data[d].author && data[d].date && data[d].text) {
							var poem = document.createElement("div")
								poem.className = "poem"
							CONTAINER.appendChild(poem)

							var title = document.createElement("div")
								title.className = "title"
								title.innerText = data[d].title
							poem.appendChild(title)

							var author = document.createElement("div")
								author.className = "author"
								author.innerText = data[d].author
							poem.appendChild(author)

							var date = document.createElement("div")
								date.className = "date"
								date.innerText = new Date(data[d].date).toLocaleDateString()
							poem.appendChild(date)

							var text = document.createElement("div")
								text.className = "text"
								text.innerText = data[d].text
							poem.appendChild(text)
						}
					}
				}
			}
}