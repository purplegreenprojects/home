// CURRENT PROJECT 
	var currentProject = null

// ELEMENTS
	var ELEMENTS = {
		headerRowRight: document.getElementById("headerRow-right"),
		searchBar: document.getElementById("searchBar"),
		searchForm: document.getElementById("searchForm"),
		resultsList: document.getElementById("resultsList"),
		galleryContainer: document.getElementById("galleryContainer"),
		galleryImage: document.getElementById("gallery-image"),
		galleryArrowLeft: document.getElementById("gallery-leftArrow"),
		galleryArrowRight: document.getElementById("gallery-rightArrow"),
		nameContainer: document.getElementById("nameContainer"),
		tagsContainer: document.getElementById("tagsContainer"),
		descriptionContainer: document.getElementById("descriptionContainer"),
		linksContainer: document.getElementById("linksContainer"),
	}

// CONSTANTS
	var CONSTANTS = {
		searchResults_shortlist: 20,
		spinTime: 1000,
		emojiMap: {
			"sewn": "&#x1FAA1;",
			"knitted": "&#x1F9F6;",
			"digital": "&#x1F4BB;",
			"paintings": "&#x1F58C;",
			"drawings": "&#9999;&#65039;",
			"glass": "&#x1FA9F;",
			"photographed": "&#x1F4F7;",
			// "code":"&#x1f469; &#x200d; &#x1f4bb;",
			// "3d": "&#xFE0F;",
		}
	}

// Nav bar - Project Categories (and subcategories)
	var arrayOfCategories = [
		{
			category: {
				href: "art",
				text: "art"
			},
			subcategories: [
				{
					href: "3d art",
					text: "3d"
				},
				{
					href: "digital art",
					text: "digital"
				},
				{
					href: "paintings art",
					text: "paintings"
				},
				{
					href: "drawings art",
					text: "drawings"
				},

				{
					href: "other art",
					text: "other art"
				},
			]
		},
		{
			category: {
				href: "writing",
				text: "writing"
			},
			subcategories: [
				{
					href: "blog",
					text: "blog"
				},
				{
					href: "couplets poetry",
					text: "couplets"
				},
				{
					href: "writing",
					text: "other writing"
				},
			]
		},
		{
			category: {
				href: "sewing",
				text: "sewing"
			},
			subcategories: [
				{
					href: "sewn bags",
					text: "bags"
				},
				{
					href: "sewn dresses",
					text: "dresses"
				},
				{
					href: "sewn shirts",
					text: "shirts"
				},
				{
					href: "sewn skirts",
					text: "skirts"
				},
				{
					href: "sewn pj pants",
					text: "pj pants"
				},
				{
					href: "sewn toys",
					text: "toys"
				},
				{
					href: "sewn other sewing",
					text: "other sewing"
				},
			]
		},
		{
			category: {
				href: "knitting",
				text: "knitting"
			},
			subcategories: [
				{
					href: "Kniterative Designs",
					text: "Kniterative Designs"
				},
				{
					href: "knitted gifts",
					text: "gifts"
				},
				{
					href: "knitted clothes",
					text: "clothes"
				},
				{
					href: "knitted accessories",
					text: "accessories"
				},
				{
					href: "knitted toys",
					text: "toys"
				},
				{
					href: "knitted other knitting",
					text: "other knitting"
				},
			]
		},
		
		{
			category: {
				href: "photography",
				text: "photography"
			},
			subcategories: [
				{
					href: "photographed stories",
					text: "stories"
				},

				{
					href: "photographed abstract",
					text: "abstract"
				},
				
				{
					href: "photographed nature",
					text: "nature"
				},
				
				{
					href: "photographed places",
					text: "favorite places"
				},
				
			]
		},
		{
			category: {
				href: "music",
				text: "music"
			},
			subcategories: [
				{
					href: "finished music",
					text: "finished compositions"
				},
				{
					href: "music challenges",
					text: "music challenges"
				},
				{
					href: "Explorchestra",
					text: "Explorchestra"
				},




				// {
				// 	href: "Chroma",
				// 	text: "Chroma"
				// },
				// {
				// 	href: "Whether",
				// 	text: "Whether"
				// },
				// {
				// 	href: "Elephant",
				// 	text: "Elephant"
				// },
				// {
				// 	href: "These Days",
				// 	text: "These Days"
				// },
				// {
				// 	href: "Chaos in Circles",
				// 	text: "Chroma Snapshot: Chaos in Circles"
				// },
				// {
				// 	href: "EveryTime",
				// 	text: "EveryTime"
				// },
				// {
				// 	href: "Collecting Carrots",
				// 	text: "Collecting Carrots"
				// },
			]
		},
		{
			category: {
				href: "code",
				text: "code"
			},
			subcategories: [
				{
					href: "code tools",
					text: "tools"
				},
				{
					href: "code games",
					text: "games"
				},
				{
					href: "code experiments",
					text: "experiments"
				},
				{
					href: "code past portfolios",
					text: "past portfolios"
				},
			]
		},

		{
			category: {
				href: "random",
				text: ""
			}
		},

		// {
		// 	category: {
		// 		href: "experiences",
		// 		text: "experiences"
		// 	},
		// 	subcategories: [
		// 		{
		// 			href: "vacations",
		// 			text: "vacations"
		// 		},
		// 		{
		// 			href: "Demo Day",
		// 			text: "Demo Day"
		// 		},
		// 		{
		// 			href: "Train Line Walks",
		// 			text: "Train Line Walks"
		// 		},
		// 		{
		// 			href: "Explorchestra",
		// 			text: "Explorchestra"
		// 		},
		// 	]
		// },
	]

// translate text to emoji
	function textToEmoji(phrase){
		var words = phrase.split(" ")

		for (var i in words) {
			if(CONSTANTS.emojiMap[words[i]]) {
				words[i] = CONSTANTS.emojiMap[words[i]]
			}
		}

		return words.join(" ")
	}


// navBuild function
	function navBuild(){
		for (var i in arrayOfCategories) {
			var outerBox = document.createElement("div")
			outerBox.id = "tag-" + arrayOfCategories[i].category.href
			outerBox.className = "nav-outerBox"
			ELEMENTS.headerRowRight.appendChild(outerBox)

			var navSubcategoriesOuter = document.createElement("div")
			navSubcategoriesOuter.className = "nav-subcategories-outer"
			outerBox.appendChild(navSubcategoriesOuter)

			var navSubcategories = document.createElement("div")
			navSubcategories.className = "nav-subcategories"
			navSubcategoriesOuter.appendChild(navSubcategories)


			for (var a in arrayOfCategories[i].subcategories) {
				var navtagSubcategory = document.createElement("a")
				navtagSubcategory.className = "nav-tag"
				navtagSubcategory.addEventListener("click", clickTagLink)
				navtagSubcategory.href = "?search=" + encodeURIComponent(arrayOfCategories[i].subcategories[a].href)
				navtagSubcategory.innerHTML = arrayOfCategories[i].subcategories[a].text
				navSubcategories.appendChild(navtagSubcategory)
			}

			var navCategory = document.createElement("div")
			navCategory.className = "nav-category"
			if (arrayOfCategories[i].category.href == "random") {
				navCategory.title = "show some random projects"
				ELEMENTS.randomButton = navCategory
			}
			outerBox.appendChild(navCategory)

			var navtagCategory = document.createElement("a")
			navtagCategory.className = "nav-tag"
			navtagCategory.addEventListener("click", clickTagLink)
			navtagCategory.href = "?search=" + encodeURIComponent(arrayOfCategories[i].category.href)
			navtagCategory.innerHTML = arrayOfCategories[i].category.text
			navCategory.appendChild(navtagCategory)
		}
	}

// calling navBuild function
	navBuild()

// search
	function populateSearchfromURL(){
		if (window.location.search) {
			// cut up the search string
				var urlParameterString = window.location.search.slice(1)
				var arrayofPairs = urlParameterString.split("&")
				var parameterObject = {}
				for (var i in arrayofPairs) {
					var pair = arrayofPairs[i].split("=")
					parameterObject[pair[0].toLowerCase().trim()] = decodeURIComponent(pair[1]).trim()
				}

				if (parameterObject.search) {
					// populate search bar
						ELEMENTS.searchBar.value = parameterObject.search
					
					// actually run the search
						displaySearchResults(parameterObject.search)
				}
		}

		if (window.location.hash) {
			// grab project name
				var projectName = window.location.hash.slice(1).trim()
				if (projectName) {
					projectName = decodeURIComponent(projectName).toLowerCase().trim()
					var project = PROJECTS.find(function(potentialMatch) {
						return potentialMatch.name.toLowerCase().trim() == projectName
					})

					if (project) {
						displayProject(project.name, true)
					}
					else {
						window.location.hash = ""
					}
				}
		}
	}

// call populateSearchfromURL function
	populateSearchfromURL()

// clickTagLink - add to history w/out reloading page
	function clickTagLink(event){
		event.preventDefault()
		var searchResultString = event.target.href.split("=")[1]
		ELEMENTS.searchBar.value = decodeURIComponent(searchResultString)
		submitSearch()

		if (searchResultString == "random"){
			ELEMENTS.randomButton.setAttribute("spin", true)
			setTimeout(function(){
				ELEMENTS.randomButton.removeAttribute("spin")
			}, CONSTANTS.spinTime)
		}

		event.target.blur()
	}

// search - hit enter (submit search)
	function submitSearch() {
		var search = ELEMENTS.searchBar.value.trim()

		// add to browser history
			var currentURL = new URL(window.location.href)
			if (search) {
				currentURL.search = "search=" + search
			}
			else {
				currentURL.search = ""
			}
			window.history.pushState({},"", currentURL)

		// actually run the search
			displaySearchResults(search)
	}

// event listener for submitting the search bar form
	ELEMENTS.searchForm.addEventListener("submit", submitSearch)


// actually run the search
	function displaySearchResults(searchString) {
		ELEMENTS.resultsList.innerHTML = ""

		if (!searchString) {
			var searchInstructions = document.createElement("div")
			searchInstructions.innerText = "Please enter a valid search term OR choose one of the categories or subcategories from the menu."
			searchInstructions.id = "searchInstructions"
			ELEMENTS.resultsList.appendChild(searchInstructions)
		}
		else if (searchString.toLowerCase() == "random") {
			var copyofProjects_RandomSort = sortRandom(PROJECTS)
			for (var i = 0; i < CONSTANTS.searchResults_shortlist; i++) {
				createSearchResult(copyofProjects_RandomSort[i])
			}
			displayProject(copyofProjects_RandomSort[0].name, true)
		}
		else {
			var lowercasedSearch = searchString.toLowerCase().trim()
			var copyofProjects_search = PROJECTS.filter(function(project){
				if (project.name.toLowerCase().includes(lowercasedSearch)){
					return true
				}

				else {
					for (var i in project.tags) {
						if (project.tags[i].toLowerCase() == lowercasedSearch) {
							return true
						}
					}
					for (var i in project.keywords) {
						if (project.keywords[i].toLowerCase() == lowercasedSearch) {
							return true
						}
					}
				}

				return false
			})

			if (copyofProjects_search.length > 0) {
				for (var i in copyofProjects_search) {
					createSearchResult(copyofProjects_search[i])
				}
			}
			else {
				var searchInstructions = document.createElement("div")
				searchInstructions.innerText = "No search results found. Please enter a valid search term OR choose one of the categories or subcategories from the menu."
				searchInstructions.id = "searchInstructions"
				ELEMENTS.resultsList.appendChild(searchInstructions)
			}
		}
	}


// creates a search result
	function createSearchResult(project) {
		var result = document.createElement("button")
			result.className = "searchResult"
			result.value = project.name
		ELEMENTS.resultsList.appendChild(result)

		if (project.tags[0]) {
			var resultTag = document.createElement("span")
				resultTag.className = "searchResult-tag"
				resultTag.innerHTML = textToEmoji(project.tags[0])
			result.appendChild(resultTag)
		}

		var resultName = document.createElement("div")
			resultName.className = "searchResult-name"
			resultName.innerText = project.name
		result.appendChild(resultName)

		result.addEventListener("click", clickSearchResult)
	}

// click search result
	function clickSearchResult(event) {
		var projectName = event.target.closest(".searchResult").value
		if (projectName) {
			displayProject(projectName, true)
		}
	}

// detect hash change
	window.addEventListener("hashchange", detectHashChange)
	function detectHashChange(event) {
		// grab project name
			var projectName = window.location.hash.slice(1).trim()
			if (projectName) {
				projectName = decodeURIComponent(projectName).toLowerCase().trim()
				var project = PROJECTS.find(function(potentialMatch) {
					return potentialMatch.name.toLowerCase().trim() == projectName
				})

				if (project) {
					displayProject(project.name, false)
				}
				else {
					window.location.hash = ""
				}
			}
	}


// random sort function
	function sortRandom(array) {
		var copiedArray = JSON.parse(JSON.stringify(array))
		
		var x = copiedArray.length
		while (x > 0) {
			var y = Math.floor(Math.random() * x)
			x = x - 1
			var temp = copiedArray[x]
			copiedArray[x] = copiedArray[y]
			copiedArray[y] = temp
		}

		return copiedArray
	}

// display project
	function displayProject(projectName, setHash){
		var project = PROJECTS.find(function(potentialMatch){
			return potentialMatch.name == projectName
		})

		if (!project) {
			if (setHash) {
				window.location.hash = ""
			}

			currentProject = null

			ELEMENTS.nameContainer.innerText = "404: Not Found"
			ELEMENTS.tagsContainer.innerText = "404: Not Found"
			ELEMENTS.descriptionContainer.innerHTML = "404: Not Found"
			ELEMENTS.linksContainer.innerText = "404: Not Found"

			ELEMENTS.galleryImage.style.backgroundImage = "none"
			ELEMENTS.galleryImage.setAttribute("displayedImage", 0)
		}
		else {
			currentProject = project

			// set url
				if (setHash) {
					var currentURL = new URL(window.location.href)
						currentURL.hash = "#" + encodeURIComponent(projectName)
					window.history.pushState({},"", currentURL)
				}
			
			// tags
				ELEMENTS.tagsContainer.innerText = ""
				for (var i in project.tags) {
					var tagLink = document.createElement("a")
					tagLink.className = "tagLink"
					tagLink.innerHTML = textToEmoji(project.tags[i])
					tagLink.href = "?search=" + encodeURIComponent(project.tags[i])
					tagLink.addEventListener("click",clickTagLink)
					ELEMENTS.tagsContainer.appendChild(tagLink)
				}
			
			// project name
				ELEMENTS.nameContainer.innerText = project.name

			// gallery projects
				if (project.slides) {
					// description
						ELEMENTS.descriptionContainer.innerHTML = ""
						if (project.slides[0].audio) {
							var audio = document.createElement("audio")
							audio.controls = true
							audio.autoplay = true
							audio.loop = true
							audio.src = project.slides[0].audio
							ELEMENTS.descriptionContainer.appendChild(audio)
						}
						
						var paragraph = document.createElement("p")
						paragraph.innerText = project.slides[0].description
						ELEMENTS.descriptionContainer.appendChild(paragraph)

					// links
						ELEMENTS.linksContainer.innerText = ""
						for (var i in project.slides[0].links) {
							var linkLink = document.createElement("a")
							linkLink.className = "linkLink"
							linkLink.innerText = project.slides[0].links[i].text
							linkLink.href = project.slides[0].links[i].url
							linkLink.target = "_blank"
							ELEMENTS.linksContainer.appendChild(linkLink)
						}

					// gallery	
						ELEMENTS.galleryImage.style.backgroundImage = "url(" + project.slides[0].photo + ")"
						ELEMENTS.galleryImage.setAttribute("displayedImage", 0)

						if (project.slides[0].photo) {
							ELEMENTS.galleryContainer.removeAttribute("hideArrows")
						}
						else {
							ELEMENTS.galleryContainer.setAttribute("hideArrows", true)
						}

				}

			// normal projects
				else {
					// description
						ELEMENTS.descriptionContainer.innerHTML = ""
						if (project.audio) {
							var audio = document.createElement("audio")
							audio.controls = true
							audio.autoplay = true
							audio.loop = true
							audio.src = project.audio
							ELEMENTS.descriptionContainer.appendChild(audio)
						}
						
						var paragraph = document.createElement("p")
						paragraph.innerText = project.description
						ELEMENTS.descriptionContainer.appendChild(paragraph)

					// links
						ELEMENTS.linksContainer.innerText = ""
						for (var i in project.links) {
							var linkLink = document.createElement("a")
							linkLink.className = "linkLink"
							linkLink.innerText = project.links[i].text
							linkLink.href = project.links[i].url
							linkLink.target = "_blank"
							ELEMENTS.linksContainer.appendChild(linkLink)
						}

					// gallery	
						ELEMENTS.galleryImage.style.backgroundImage = "url(" + project.photos[0] + ")"
						ELEMENTS.galleryImage.setAttribute("displayedImage", 0)

						if (project.photos.length > 1) {
							ELEMENTS.galleryContainer.removeAttribute("hideArrows")
						}
						else {
							ELEMENTS.galleryContainer.setAttribute("hideArrows", true)
						}
				}
		}
	}

// click gallery left/right
	function clickGallery_left() {
		var currentImageIndex = Number(ELEMENTS.galleryImage.getAttribute("displayedImage"))
		currentImageIndex = currentImageIndex - 1

		// gallery projects
			if (currentProject.slides) {
				if (currentImageIndex < 0) {
					currentImageIndex = currentProject.slides.length - 1
				}

				// description
					ELEMENTS.descriptionContainer.innerHTML = ""
					if (currentProject.slides[currentImageIndex].audio) {
						var audio = document.createElement("audio")
						audio.controls = true
						audio.autoplay = true
						audio.loop = true
						audio.src = currentProject.slides[currentImageIndex].audio
						ELEMENTS.descriptionContainer.appendChild(audio)
					}
					
					var paragraph = document.createElement("p")
					paragraph.innerText = currentProject.slides[currentImageIndex].description
					ELEMENTS.descriptionContainer.appendChild(paragraph)

				// links
					ELEMENTS.linksContainer.innerText = ""
					for (var i in currentProject.slides[currentImageIndex].links) {
						var linkLink = document.createElement("a")
						linkLink.className = "linkLink"
						linkLink.innerText = currentProject.slides[currentImageIndex].links[i].text
						linkLink.href = currentProject.slides[currentImageIndex].links[i].url
						linkLink.target = "_blank"
						ELEMENTS.linksContainer.appendChild(linkLink)
					}

				var currentImage = currentProject.slides[currentImageIndex].photo
			}

		// normal projects
			else {
				if (currentImageIndex < 0) {
					currentImageIndex = currentProject.photos.length - 1
				}

				var currentImage = currentProject.photos[currentImageIndex]
			}
			
		ELEMENTS.galleryImage.style.backgroundImage = "url(" + currentImage + ")"
		ELEMENTS.galleryImage.setAttribute("displayedImage", currentImageIndex)
	}


	function clickGallery_right() {
		var currentImageIndex = Number(ELEMENTS.galleryImage.getAttribute("displayedImage"))
		currentImageIndex = currentImageIndex + 1
	
		// gallery projects
			if (currentProject.slides) {
				if (currentImageIndex >= currentProject.slides.length) {
					currentImageIndex = 0
				}

				// description
					ELEMENTS.descriptionContainer.innerHTML = ""
					if (currentProject.slides[currentImageIndex].audio) {
						var audio = document.createElement("audio")
						audio.controls = true
						audio.autoplay = true
						audio.loop = true
						audio.src = currentProject.slides[currentImageIndex].audio
						ELEMENTS.descriptionContainer.appendChild(audio)
					}
					
					var paragraph = document.createElement("p")
					paragraph.innerText = currentProject.slides[currentImageIndex].description
					ELEMENTS.descriptionContainer.appendChild(paragraph)

				// links
					ELEMENTS.linksContainer.innerText = ""
					for (var i in currentProject.slides[currentImageIndex].links) {
						var linkLink = document.createElement("a")
						linkLink.className = "linkLink"
						linkLink.innerText = currentProject.slides[currentImageIndex].links[i].text
						linkLink.href = currentProject.slides[currentImageIndex].links[i].url
						linkLink.target = "_blank"
						ELEMENTS.linksContainer.appendChild(linkLink)
					}

				var currentImage = currentProject.slides[currentImageIndex].photo
			}

		// normal projects	
			else {
				if (currentImageIndex >= currentProject.photos.length) {
					currentImageIndex = 0
				}

				var currentImage = currentProject.photos[currentImageIndex]
			}

		ELEMENTS.galleryImage.style.backgroundImage = "url(" + currentImage + ")"
		ELEMENTS.galleryImage.setAttribute("displayedImage", currentImageIndex)
	}


// click listeners for left/right gallery arrows
	ELEMENTS.galleryArrowLeft.addEventListener("click",clickGallery_left)

	ELEMENTS.galleryArrowRight.addEventListener("click", clickGallery_right)










