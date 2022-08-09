/*** globals ***/
	/* SETTINGS == numbers we'll use later */
	var SETTINGS = {
		searchWaitTime: 1000,
		searchWaitActual: null,
		GoogleAppsScriptURL: "https://script.google.com/macros/s/AKfycbwhFugiLYz_JPXqucmVAq73I7IiAmik_2kNA0nxqgvfzPB96eiQ7O9lP9ZrOmxyrbRdOQ/exec",
		WordPressGoogleAppsScriptURL: "https://script.google.com/macros/s/AKfycbw_nB-7XiNpzc0jDvKw_HX5LChPz0dGdPQwWEp6ggmlub0GZla8gvJ9M1EFhdZBxiYh/exec",
		TumblrGoogleAppsScriptURL: "???"
	}

	/* ELEMENTS == STUFF FROM HTML */
	var ELEMENTS = {
		body: document.querySelector("body"),
		cardsContainer: document.querySelector("#cardsContainer"),
		pgpblogCardsContainer: document.querySelector("#pgpblogCardsContainer"),
		wordpressCardsContainer: document.querySelector("#wordpressCardsContainer"),
		tumblrCardsContainer: document.querySelector("#tumblrCardsContainer"),
		postContainer: document.querySelector("#postContainer"),
		backToCards_top: document.querySelector("#backToCards_top"),
		backToCards_bottom: document.querySelector("#backToCards_bottom"),
		scrollToTop: document.querySelector("#scrollToTop"),
		PGPbutton:document.querySelector("#PGPbutton"),
		KDbutton:document.querySelector("#KDbutton"),
		KDtags: Array.from(document.querySelectorAll("#KDtags .tag")),
		PGPtags: Array.from(document.querySelectorAll("#PGPtags .tag")),
		search: document.querySelector("#search"),
		searchToggle: document.querySelector("#searchToggle")
	}

	/* DATABASE = STUFF FROM GOOGLE DOC */
	var DATABASE = []
	var FILTERHISTORY = []

/*** tools ***/
	/* processMarkdown */
		function processMarkdown(html) {
			// wrappers
				// list item
					if (html.indexOf("* ") == 0) {
						html = "<li>" + html.replace(/\*\s?/, "") + "</li>"
					}

				// blockquote
					else if (html.indexOf(">>>>") == 0) {
						html = "<blockquote><blockquote><blockquote><blockquote>" + html.replace(/>>>>\s?/, "") + "</blockquote></blockquote></blockquote></blockquote>"
					}
					else if (html.indexOf(">>>") == 0) {
						html = "<blockquote><blockquote><blockquote>" + html.replace(/>>>\s?/, "") + "</blockquote></blockquote></blockquote>"
					}
					else if (html.indexOf(">>") == 0) {
						html = "<blockquote><blockquote>" + html.replace(/>>\s?/, "") + "</blockquote></blockquote>"
					}
					else if (html.indexOf(">") == 0) {
						html = "<blockquote>" + html.replace(/>\s?/, "") + "</blockquote>"
					}

				// headers
					else if (html.indexOf("######") == 0) {
						html = "<h6>" + html.replace(/^######\s?/, "") + "</h6>"
					}
					else if (html.indexOf("#####") == 0) {
						html = "<h5>" + html.replace(/^#####\s?/, "") + "</h5>"
					}
					else if (html.indexOf("####") == 0) {
						html = "<h4>" + html.replace(/^####\s?/, "") + "</h4>"
					}
					else if (html.indexOf("###") == 0) {
						html = "<h3>" + html.replace(/^###\s?/, "") + "</h3>"
					}
					else if (html.indexOf("##") == 0) {
						html = "<h2>" + html.replace(/^##\s?/, "") + "</h2>"
					}
					else if (html.indexOf("#") == 0) {
						html = "<h1>" + html.replace(/^#\s?/, "") + "</h1>"
					}

			// lines & newlines
				html = html.replace(/\n/g, "<br>")
				html = html.replace(/\-\-\-/g, "<hr>")

			// inline components
				// code
					var codeMatches = html.match(/\`([^\`]*?)\`/g)
					if (codeMatches && codeMatches.length) {
						for (var i in codeMatches) {
							var match = codeMatches[i]
							html = html.replace(match, "<code>" + match.replace(/\`/g, "").replace(/\</g, "&lt;").replace(/\>/g, "&gt;") + "</code>")
						}
					}

				// bold
					var boldMatches = html.match(/\*\*([^\*\*]*?)\*\*/g)
					if (boldMatches && boldMatches.length) {
						for (var i in boldMatches) {
							var match = boldMatches[i]
							html = html.replace(match, "<b>" + match.replace(/\*\*/g, "") + "</b>")
						}
					}

				// italic
					var italicMatches = html.match(/\_([^\_]*?)\_/g)
					if (italicMatches && italicMatches.length) {
						for (var i in italicMatches) {
							var match = italicMatches[i]
							html = html.replace(match, "<i>" + match.replace(/\_/g, "") + "</i>")
						}
					}

				// strikethrough
					var strikethroughMatches = html.match(/\~([^\~]*?)\~/g)
					if (strikethroughMatches && strikethroughMatches.length) {
						for (var i in strikethroughMatches) {
							var match = strikethroughMatches[i]
							html = html.replace(match, "<s>" + match.replace(/\~/g, "") + "</s>")
						}
					}

			// links
				// linked images
					var imageMatches = html.match(/\!\[[^\]]*?\]\([^)]*?\)/g)
					if (imageMatches && imageMatches.length) {
						for (var i in imageMatches) {
							var match = imageMatches[i]
							var text = match.match(/^\!\[(.*?)\]/)[1]
							var url  = match.match(/\]\((.*?)\)/)[1]
								url = url.replace(/\<i\>/g, "_").replace(/\<\/i\>/g, "_").replace(/\<b\>/g, "**").replace(/\<\/b\>/g, "**").replace(/\<code\>/g, "`").replace(/\<\/code\>/g, "`").replace(/\<s\>/g, "~").replace(/\<\/s\>/g, "~").replace(/\<hr\>/g, "---")
							html = html.replace(match, "<img alt='" + (text || "image") + "' src='" + url + "'>" + (text ? ("<figcaption>" + text + "</figcaption>") : ""))
						}
					}

				// links
					var linkMatches = html.match(/\[[^\]]*?\]\([^)]*?\)/g)
					if (linkMatches && linkMatches.length) {
						for (var i in linkMatches) {
							var match = linkMatches[i]
							var text = match.match(/^\[(.*?)\]/)[1]
							var url  = match.match(/\]\((.*?)\)/)[1]
								url = url.replace(/\<i\>/g, "_").replace(/\<\/i\>/g, "_").replace(/\<b\>/g, "**").replace(/\<\/b\>/g, "**").replace(/\<code\>/g, "`").replace(/\<\/code\>/g, "`").replace(/\<s\>/g, "~").replace(/\<\/s\>/g, "~").replace(/\<hr\>/g, "---")
							html = html.replace(match, "<a href='" + url + "' target='_blank'>" + text + "</a>")
						}
					}

				// gallery
					var galleryMatches = html.match(/\<gallery\>.*?\<\/gallery\>/g)
					if (galleryMatches && galleryMatches.length) {
						for (var i in galleryMatches) {
							var match = galleryMatches[i]
							var beforeImages = "<div class='gallery' position='0'><button class='gallery-left' onclick='clickGalleryButton(this)'>&larr;</button><button class='gallery-right' onclick='clickGalleryButton(this)'>&rarr;</button>"
							var afterImages = "</div>"
							html = html.replace(match, beforeImages + match.replace("<gallery>", "").replace("</gallery>", "").replace("<img", "<img selected='true'") + afterImages)
						}
					}

			// return
				return html || ""
		}

	/* requestData */
		function requestData(filter) {
			// search
				var parameterString = ""

				if (filter && filter.id) {
					parameterString = "?id=" + filter.id
				}
				else if (filter && filter.tag) {
					parameterString = "?tag=" + filter.tag
				}
				else if (filter && filter.search) {
					parameterString = "?search=" + filter.search
				}

			// current blog
				fetch(SETTINGS.GoogleAppsScriptURL + parameterString, {method: "GET"})
				.then(function(response){
					return response.json()
				})
				.then(function(data){
					receiveData(data)
					displayBlog()
				})

			// WordPress
				fetch(SETTINGS.WordPressGoogleAppsScriptURL + parameterString, {method: "GET"})
				.then(function(response){
					return response.json()
				})
				.then(function(data){
					receiveData(data)
					displayBlog()
				})

			// Tumblr // ???
				// fetch(SETTINGS.TumblrGoogleAppsScriptURL + parameterString, {method: "GET"})
				// .then(function(response){
				// 	return response.json()
				// })
				// .then(function(data){
				// 	receiveData(data)
				// 	displayBlog()
				// })
		}

	/* receiveData */
		function receiveData(data) {
			if (!data || !data.posts) {
				return
			}

			for (var i in data.posts) {
				data.posts[i].section = data.section

				var existingJSON = DATABASE.find(function(postJSON){
					return postJSON.id == data.posts[i].id
				})

				if (existingJSON) {
					for (var key in data.posts[i]) {
						existingJSON[key] = data.posts[i][key]
					}
				}
				else {
					DATABASE.push(data.posts[i])
				}
			}

			DATABASE.sort(function (a, b) {
				return b.date - a.date
			})

			DATABASE.sort(function (a, b) {
				return b.pin && !a.pin
			})
		}

/*** displays ***/
	window.addEventListener("popstate", displayBlog)
	function displayBlog() {
		// show loading spinner
			ELEMENTS.body.setAttribute("loading", "true")

		// parse url hashtag ("#")

			var blogID = window.location.hash.slice(1)

		// if #, get blog post by ID

			if (blogID) {
				blogID = blogID.trim().toLowerCase()
				if (FILTERHISTORY.includes("#" + blogID)) {
					for (var i in DATABASE) {
						if (DATABASE[i].id == blogID){
							displayPost(DATABASE[i])
							break
						}
					}
				}
				else {
					FILTERHISTORY.push("#" + blogID)
					requestData({
						id: blogID
					})
				}

				return
			}

		// parse search parameters ("?")
			
			var blogSearchParameters = {}

			var blogSearchString = window.location.search.slice(1)
			if (blogSearchString) {
				var blogSearchStringasArray = blogSearchString.split("&")

				for (var i in blogSearchStringasArray) {
					var pair = blogSearchStringasArray[i].split("=")

					blogSearchParameters[pair[0].replace(/\%20/g," ").replace(/\+/g, " ").toLowerCase().trim()] = pair[1].replace(/\%20/g," ").replace(/\+/g, " ").toLowerCase().trim()
				}
			}

		// if ?tag, get cards by tag
			
			if (blogSearchParameters.tag) {
				// var cardsWithTag = []
				//
				// for (var i in DATABASE) {
				// 	// for (var t in DATABASE[i].tags) {
				// 	// 	if (DATABASE[i].tags[t] == blogSearchParameters.tag) {
				// 	// 		cardsWithTag.push(DATABASE[i])
				// 	// 		break
				// 	// 	}
				// 	// }
				// 	// OR, put more simply...

				// 	if (DATABASE[i].tags.includes(blogSearchParameters.tag)) {
				// 		cardsWithTag.push(DATABASE[i])
				// 	}
				// }

				// OR EVEN SIMPLIER...

				// var cardsWithTag = DATABASE.filter(function(cardJSON) {
				// 	if (cardJSON.tags.includes(blogSearchParameters.tag)) {
				// 		return true
				// 	}
				// 	else {
				// 		return false
				// 	}
				// })

				// OOOOOOORRRRRRR...

				if (FILTERHISTORY.includes("?tag=" + blogSearchParameters.tag)) {
					var cardsWithTag = DATABASE.filter(function(cardJSON) {
						return cardJSON.tags.includes(blogSearchParameters.tag)
					})

					displayCards(cardsWithTag)	
				}
				else {
					FILTERHISTORY.push("?tag=" + blogSearchParameters.tag)
					requestData({
						tag: blogSearchParameters.tag
					})
				}
				
				return
			}

		// if ?search, get cards by tag or title

			if(blogSearchParameters.search) {
				ELEMENTS.search.value = blogSearchParameters.search
				ELEMENTS.searchToggle.checked = true

				if (FILTERHISTORY.includes("?search=" + blogSearchParameters.search)) {	
					var cardsWithSearchTerm = DATABASE.filter(function(cardJSON) {
						if (cardJSON.title.toLowerCase().includes(blogSearchParameters.search)) {
							return true
						}
						if (cardJSON.tags.includes(blogSearchParameters.search)) {
							return true
						}
						return false
					})

					displayCards(cardsWithSearchTerm)
				}
				else {
					FILTERHISTORY.push("?search=" + blogSearchParameters.search)
					requestData({
						search: blogSearchParameters.search
					})
				}
				return
			}


		// else display all cards
			if (FILTERHISTORY.includes("")) {
				displayCards(DATABASE)
			}
			else {
				FILTERHISTORY.push("")
				requestData()
			}
	}



	function displayCards(postList) {
		ELEMENTS.body.removeAttribute("post")
		ELEMENTS.body.removeAttribute("KD")
		ELEMENTS.pgpblogCardsContainer.innerHTML = ""
		ELEMENTS.wordpressCardsContainer.innerHTML = ""
		ELEMENTS.tumblrCardsContainer.innerHTML = ""
		ELEMENTS.postContainer.innerHTML = ""

		for (var i in postList){
			displayCard(postList[i])
		}

		window.scrollTo(0,0)
		ELEMENTS.body.removeAttribute("loading")
	}

		function displayCard(postJSON) {
			
			// cardZone
				var cardZone = document.createElement("div")
					cardZone.className = "cardZone"
					if (postJSON.tags.includes("kd")) {
						cardZone.className = cardZone.className + " KDcard"
					}

				if (postJSON.section == "pgpblog") {
					ELEMENTS.pgpblogCardsContainer.appendChild(cardZone)
				}

				else if (postJSON.section == "wordpress") {
					ELEMENTS.wordpressCardsContainer.appendChild(cardZone)
				}

				else if (postJSON.section == "tumblr") {
					ELEMENTS.tumblrCardsContainer.appendChild(cardZone)
				}

				else {
					console.log(postJSON)
					return
				}

			// cardString
				var cardString = document.createElement("div")
					cardString.className = "cardString"
				cardZone.appendChild(cardString)

			// cardPin
				var cardPin = document.createElement("div")
					cardPin.className = "cardPin"
				cardZone.appendChild(cardPin)

			// card
				var card = document.createElement("button")
					card.className = "card"
					card.value = postJSON.id
					card.addEventListener("click", updateURLTitle)
				cardZone.appendChild(card)

			// image
				var cardPicture = document.createElement("img")
					cardPicture.className = "cardPicture"
					cardPicture.src = postJSON.cardImage
				card.appendChild(cardPicture)

			// title
				var cardTitle = document.createElement("h2")
					cardTitle.className = "cardTitle"
					cardTitle.innerHTML = postJSON.title
				card.appendChild(cardTitle)

			// date
				var cardDate = document.createElement("p")
					cardDate.className = "cardDate"
					var tempDate = new Date(postJSON.date)
					cardDate.innerHTML = tempDate.toLocaleDateString()
				card.appendChild(cardDate)

			// description
				var cardLine = document.createElement("hr")
					cardLine.className = "cardLine"
				card.appendChild(cardLine)

				var cardDescription = document.createElement("p")
					cardDescription.className = "cardDescription"
					cardDescription.innerHTML = postJSON.cardText
				card.appendChild(cardDescription)

				if (postJSON.cardText) {
					var cardLine = document.createElement("hr")
						cardLine.className = "cardLine"
					card.appendChild(cardLine)
				}

			// tags
				var tagsContainer = document.createElement("div")
					tagsContainer.className = "cardTags"
				card.appendChild(tagsContainer)

				for(var i = 0; i < postJSON.tags.length; i++){
					var cardTag = document.createElement("div")
						cardTag.className = "cardTag"
						cardTag.setAttribute("value", postJSON.tags[i])
						cardTag.addEventListener("click", updateURLTag)
						cardTag.innerHTML = postJSON.tags[i]
					tagsContainer.appendChild(cardTag)

					if (i < postJSON.tags.length - 1) {
						var separator = document.createElement("span")
							separator.innerHTML = "|"
						tagsContainer.appendChild(separator)
					}
				}
		}

	function displayPost(postJSON) {
		ELEMENTS.body.setAttribute("post","true")
		ELEMENTS.body.removeAttribute("KD")
		ELEMENTS.pgpblogCardsContainer.innerHTML = ""
		ELEMENTS.wordpressCardsContainer.innerHTML = ""
		ELEMENTS.tumblrCardsContainer.innerHTML = ""
		ELEMENTS.postContainer.innerHTML = ""

		// no post
			if (!postJSON) {
				return
			}

		// postHeader
			var postHeader = document.createElement("div")
				postHeader.id = "postHeader"
			ELEMENTS.postContainer.appendChild(postHeader)

		// tags
			var postTagsContainer = document.createElement("div")
				postTagsContainer.id = "postTagsContainer"
			postHeader.appendChild(postTagsContainer)

			for(var i = 0; i < postJSON.tags.length; i++){
				var tag = document.createElement("div")
					tag.className = "tag"
					tag.setAttribute("value", postJSON.tags[i])
					tag.addEventListener("click", updateURLTag)
					tag.innerHTML = postJSON.tags[i]
				postTagsContainer.appendChild(tag)

				if (i < postJSON.tags.length - 1) {
					var separator = document.createElement("span")
						separator.innerHTML = "|"
					postTagsContainer.appendChild(separator)
				}

				if (postJSON.tags[i] == "kd") {
					ELEMENTS.body.setAttribute("KD","true")
				}
			}

		// postTitle
			var postTitle = document.createElement("h1")
				postTitle.id = "postTitle"
				postTitle.innerHTML = postJSON.title
			postHeader.appendChild(postTitle)

		// postDate
			var postDate = document.createElement("p")
				postDate.id = "postDate"
				var tempDate = new Date(postJSON.date)
				postDate.innerHTML = tempDate.toLocaleDateString()
			postHeader.appendChild(postDate)

		// postBody
			var postBody = document.createElement("div")
				postBody.id = "postBody"
			ELEMENTS.postContainer.appendChild(postBody)

		// postBlocks
			for (var i in postJSON.body) {
				var postBlock = document.createElement("div")
					postBlock.className = "postBlock"
					postBlock.innerHTML = processMarkdown(postJSON.body[i])
				postBody.appendChild(postBlock)
			}

		window.scrollTo(0,0)
		ELEMENTS.body.removeAttribute("loading")
	}



/*** interaction ***/
	/* scroll to top */
		ELEMENTS.scrollToTop.addEventListener("click", scrollToTop_action)

		function scrollToTop_action(){
			window.scrollTo(0, 0)
		}


	/* back to cards */
		ELEMENTS.backToCards_top.addEventListener("click", clearURL)
		ELEMENTS.backToCards_bottom.addEventListener("click", clearURL)

		function clearURL (){
			var currentURL = new URL(window.location.href)
			currentURL.search = ""
			currentURL.hash = ""
			window.history.pushState({},"", currentURL)
			displayBlog()
		}


	/* click on a tag button */
		ELEMENTS.KDbutton.addEventListener("click", updateURLTag)
		ELEMENTS.PGPbutton.addEventListener("click", updateURLTag)

		for (var i in ELEMENTS.KDtags){
			ELEMENTS.KDtags[i].addEventListener("click", updateURLTag)
		}

		for (var i in ELEMENTS.PGPtags){
			ELEMENTS.PGPtags[i].addEventListener("click", updateURLTag)
		}

		function updateURLTag(clickInfo){
			var tagValue = clickInfo.target.getAttribute("value").replace(/\s/g, "+")
			var currentURL = new URL(window.location.href)
			if (tagValue) {
				currentURL.search = "tag=" + tagValue
			}
			else {
				currentURL.search = ""
			}
			currentURL.hash = ""
			ELEMENTS.search.value = ""
			window.history.pushState({},"", currentURL)
			displayBlog()
			clickInfo.stopPropagation()
		}


	/* click on a card */
		function updateURLTitle(clickInfo) {
			var card = clickInfo.target.closest(".card")
			var cardValue = card.getAttribute("value").replace(/\s/g, "-")
			var currentURL = new URL(window.location.href)
			currentURL.search = ""
			currentURL.hash = cardValue
			ELEMENTS.search.value = ""
			window.history.pushState({},"", currentURL)
			displayBlog()
		}


	/* enter a search */

		ELEMENTS.search.addEventListener("input", waitToSearch)

		function waitToSearch() {
			clearTimeout(SETTINGS.searchWaitActual)
			SETTINGS.searchWaitActual = setTimeout(updateURLfromSearch, SETTINGS.searchWaitTime)
		}

		function updateURLfromSearch() {
			var searchBarText = ELEMENTS.search.value.trim()
			var currentURL = new URL(window.location.href)
			if (searchBarText) {
				currentURL.search  = "search=" + searchBarText
			}
			else {
				currentURL.search = ""
			}
			currentURL.hash = ""
			window.history.pushState({},"", currentURL)
			displayBlog()
		}


	/* clickGalleryButton */
		function clickGalleryButton(button) {
			var direction = button.className.replace("gallery-","")
			var gallery = button.closest(".gallery")
			var position = Number(gallery.getAttribute("position"))
			var imagesList = Array.from(gallery.querySelectorAll("img"))

			var currentImage = imagesList[position]
				currentImage.removeAttribute("selected")

			if(direction == "left") {
				position = position - 1
				if (position < 0) {
					position = imagesList.length - 1
				}
			}	
			else if (direction == "right"){
				position = position + 1
				if (position >= imagesList.length) {
					position = 0
				}
			}

			imagesList[position].setAttribute("selected","true")

			gallery.setAttribute("position", position)
		}


/*** ON LAUNCH ***/
	displayBlog()
	


