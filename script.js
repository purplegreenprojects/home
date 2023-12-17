// TO DO
	// After MVP
		// mobile 404 screen - lower font size
		// resize large pics
		// lazy loading (for blog too)
		// friends of... cards - galleries for Grandma Fran, Grandpa Jim... (& link to...?)
		// exporer of... card for Upstate NY
		// Selections from Sketchbooks gallery
		// Knitting (in Green) -- get pic of painting (and find pic of giving to Grandma?)
		// find old pic of snow bunnies - add to project gallery (as first pic)
		// Demo Day -- slide decks?

		// add more recent projects
		// add galleries of WIP photos - esp. if otherwise no external link! (ex: KD logo; paintings)
		// links in about paragraphs (to set project searches)
		// if medium and search combo doesn't yield anything, in "empty" section, can we suggest any mediums that would yield a result with that search term?
		// stream ?
		// teacher of... (knitting slide deck, OG stories, SLP summative doc, etc.)
		// ..."one stitch at a time" slides??
		// filtered by season
		// filtered by featured?
		// further refine tags
		// explo banner


// ELEMENTS
	var ELEMENTS = {
		header: document.querySelector("#header"),
		nameButton: document.querySelector("#name-button"),
		about: document.querySelector("#about"),
		filtersMediumForm: document.querySelector("#filters-medium-form"),
		filtersMediumCurrent: document.querySelector("#filters-medium-current"),
		filtersMediumOptions: document.querySelector("#filters-medium-options"),
		filtersTopicSelect: document.querySelector("#filters-topic"),
		filtersClearButton: document.querySelector("#filters-clear"),
		filtersSearchInput: document.querySelector("#filters-search"),
		filtersSuggestions: document.querySelector("#filters-suggestions"),
		content: document.querySelector("#content"),
		contentSection: document.querySelector("#content-cards"),
		contentEmptyButton: document.querySelector("#content-empty-all-projects-button"),
		contentEmptyTagButtons: Array.from(document.querySelectorAll("#content-empty .content-empty-button")),
	}

// CONSTANTS
	var CONSTANTS = {
		defaultMedium: "maker",
		mediums: {
			learner: {
				tag: "learning",
				topics: {
					"speech-language pathology, literacy, & research": "resume"
				}
			},
			maker: {
				tag: "*",
				topics: {
				}
			},
			designer: {
				tag: "design",
				topics: {
					"Kniterative Designs": "kniterative designs",
					"   prototypes":"prototypes",
					"   bunnies": "bunnies",
					"   cats": "cats",
					"   dogs": "dogs",
					"   horses (& unicorns)": "horses",
					"   fish": "fish",
					"   mice": "mice",
					"   carrots": "carrots",
					"bags": "bags",
					"home decor":"home decor"
				}
			},			
			knitter: {
				tag: "knitting",
				topics: {
					"gifts": "gifts",
					"clothes":"clothes",
					"   sweaters": "sweaters",
					"   skirts": "skirts",
					"accessories": "accessories",
					"   hats, etc.": "headwear",
					"   scarves, cowls, & shawls": "neckwear",
					"   mittens & gloves": "handwear",
					"toys": "toys",
					"Kniterative Designs": "kniterative designs",
					"   bunnies": "bunnies",
					"   cats": "cats",
					"   dogs": "dogs",
					"   horses (& unicorns)": "horses",
				}
			},
			crocheter: {
				tag: "crochet",
				topics: {
				}
			},
			sewist: {
				tag: "sewing",
				topics: {
					"bags": "bags",
					"clothes": "clothes",
					"   dresses": "dresses",
					"   shirts": "shirts",
					"   skirts": "skirts",
					"   pajamas": "pajamas",
					"toys": "toys",
				}
			},
			artist: {
				tag: "art",
				topics: {
					"drawings": "drawing",
					"paintings": "painting",
					"sculptures":  "sculpture",
					"digital art": "digital art",
					"3D models, scenes, & animations": "3d art",
				}
			},
			composer: {
				tag: "music",
				topics: {
					"Chroma album": "album",
					"Explorchestra": "explorchestra",
					"   Explo Expos": "explo expo",
					"Music Challenges": "music challenges",
				}
			},
			photographer: {
				tag: "photography",
				topics: {
					"abstracts": "abstract",
					"story starters": "stories",
					"night light": "night",
					"nature": "nature",
				}
			},
			writer: {
				tag: "writing",
				topics: {
					"poetry": "poetry",
					"blogs": "blog",
				}
			},
			coder: {
				tag: "code",
				topics: {
					"tools":"tools",
					"games": "games",
					"experiments": "experiments",
					"portfolios": "portfolios"
				}
			},
			explorer: {
				tag: "explore",
				topics: {
				}
			},
			friend: {
				tag: "collaboration",
				topics: {
				}
			}
		}
	}

	var OBSERVER = new IntersectionObserver(loadPictures)

// SETUP
	onStart()
	function onStart() {
		var parameterObject = detectURLParameters()
		buildMediumsList(parameterObject)

		if (parameterObject.search) {
			ELEMENTS.filtersSearchInput.value = parameterObject.search
		}

		setAboutView()
		filterProjects()
	}

	
	function detectURLParameters() {
		var parameterString = window.location.search.slice(1)
		var parameterPairs = parameterString.split("&")
		var parameterObject = {}
		for (var i in parameterPairs) {
			var pair = parameterPairs[i].split("=")
			var key = pair[0]
			var value = pair[1]
			parameterObject[key] = decodeURIComponent(value).trim()
		}
		return parameterObject
	}

	function buildMediumsList(parameterObject){
		// loop through the mediums object, for each key (learner, knitter, etc.), create a new html option element, with a value of that key and innerhtml (label) of that key
		for (var i in CONSTANTS.mediums) {
			var mediumButton = document.createElement("button")
			mediumButton.className = "filter-medium-suggestion"
			mediumButton.innerText = i
			mediumButton.value = i
			mediumButton.addEventListener("mousedown", updateBasedOnMedium)
			ELEMENTS.filtersMediumOptions.appendChild(mediumButton)
		}

		if (parameterObject.persona && Object.keys(CONSTANTS.mediums).includes(parameterObject.persona)) {
			ELEMENTS.filtersMediumCurrent.value = parameterObject.persona
		}
		else {
			// select the default medium (e.g. "maker" or "learner"), as defined in CONSTANTS as value of mediums dropdown
			ELEMENTS.filtersMediumCurrent.value = CONSTANTS.defaultMedium
		}
		// in the topicsselect dropdown, populate with options associated with "learner"
		buildTopicsList()		
	}

// USER ACTIONS
	// ABOUT
		// clicking on the name button (Elizabeth Ford) triggers the function
		ELEMENTS.nameButton.addEventListener("click",toggleAbout)

		function toggleAbout(){
			// if the about section (#header) has an attribute (like id="" or class="") of collapsed="true"... then remove that attribute
			if (ELEMENTS.header.getAttribute("collapsed")) {
				ELEMENTS.filtersMediumCurrent.value = "learner"
				ELEMENTS.filtersSearchInput.value = ""
			}
			// otherwise (if it doesn't have that attribute), add the attribute "collapsed" and set it to "true" (collapsed="true")
			else {
				ELEMENTS.filtersMediumCurrent.value = "maker"
			}

			setAboutView()
			filterProjects()
			updateURL()
		}

		function setAboutView(){
			var medium = ELEMENTS.filtersMediumCurrent.value
			// if the medium (the value of #filters-medium) is "learner"
			if (medium == "learner") {
				// ... open up the about section (remove the "collapsed" attribute), set the #filters-search placeholder text to "skills", make it so you can't type in that search field, and disable the search button
				ELEMENTS.header.removeAttribute("collapsed")
				ELEMENTS.filtersSearchInput.setAttribute("placeholder", "skills")
				ELEMENTS.filtersSearchInput.setAttribute("disabled", true)
			}
			// if the medium (the value of #filters-medium) is anything except "learner", collapse the about section (by setting the collapse attribute to "true"), set the placeholder text in #filters-search to "...projects", and make the text field and submit button accessible again (by removing "disabled" attribute)
			else {
				ELEMENTS.header.setAttribute("collapsed",true)
				if (medium == "friend") {
					ELEMENTS.filtersSearchInput.setAttribute("placeholder", "...")
				}
				else if (medium == "explorer") {
					ELEMENTS.filtersSearchInput.setAttribute("placeholder", "places")
				}
				else {
					ELEMENTS.filtersSearchInput.setAttribute("placeholder", "...projects")
				}
				ELEMENTS.filtersSearchInput.removeAttribute("disabled")
			}
			ELEMENTS.nameButton.blur()
		}

	// FILTERS
		ELEMENTS.filtersMediumCurrent.addEventListener("focus", learnerToMakerFocus)
		function learnerToMakerFocus(){
			if (ELEMENTS.filtersMediumCurrent.value == "learner") {
				ELEMENTS.filtersMediumCurrent.value = "maker"
				setAboutView()
				filterProjects()
				updateURL()
			}
		}

		// click on mediums dropdown to change it
		// (call function - last part of this row)
		function updateBasedOnMedium(event) {
			ELEMENTS.filtersMediumCurrent.value = event.target.value
			buildTopicsList()
			setAboutView()
			filterProjects()
			updateURL()
			setTimeout(function() {
				ELEMENTS.filtersSearchInput.focus()
			}, 0)
			ELEMENTS.content.scrollTo(0, 0)
		}

		// (define function)
		function buildTopicsList(){
			ELEMENTS.filtersSearchInput.value = ""

			// the value of medium that is selected
			var medium = ELEMENTS.filtersMediumCurrent.value
			// within the mediums object, the particular medium that's selected (based on the html value of that selected medium)
			var topics = CONSTANTS.mediums[medium].topics
			
			// clearing the children (innerHTML) and html value (what's checked) of the other dropdown
			ELEMENTS.filtersTopicSelect.innerHTML = ""
			ELEMENTS.filtersTopicSelect.value = ""

			// hard-coded in first option "..."
			var option = document.createElement("option")
			option.value = "*"
			option.innerText = "..."
			ELEMENTS.filtersTopicSelect.appendChild(option)

			// dynamically build rest of topics list from mediums.topics
			for (var key in topics) {
				var option = document.createElement("option")
				option.value = key
				option.innerText = key
				ELEMENTS.filtersTopicSelect.appendChild(option)
			}
		}
	
		ELEMENTS.filtersSearchInput.addEventListener("focus", buildFilteredTopicsList)
		ELEMENTS.filtersSearchInput.addEventListener("input", buildFilteredTopicsList)
		function buildFilteredTopicsList(){
			ELEMENTS.filtersSuggestions.innerHTML = ""
			var medium = ELEMENTS.filtersMediumCurrent.value
			var topics = Object.keys(CONSTANTS.mediums[medium].topics)
			var searchString = ELEMENTS.filtersSearchInput.value.trim().toLowerCase()
			if (searchString.length) {
				topics = topics.filter(filterTopicsBySearch)
				function filterTopicsBySearch(topic) {
					// really, this is an if() with "return true" inside, but James made me make it 1 line
					return topic.trim().toLowerCase().includes(searchString)
				}
			}	

			for (var i in topics) {
				var topicButton = document.createElement("button")
				topicButton.className = "filter-topic-suggestion"
				topicButton.innerText = topics[i]
				topicButton.value = CONSTANTS.mediums[medium].topics[topics[i]].trim()
				topicButton.addEventListener("mousedown", searchByTag)
				ELEMENTS.filtersSuggestions.appendChild(topicButton)
			}

			filterProjects()
			updateURL()
		}

		ELEMENTS.filtersClearButton.addEventListener("click", resetFilteredTopics)
		function resetFilteredTopics(){
			ELEMENTS.filtersSearchInput.value = ""
			buildFilteredTopicsList()
			ELEMENTS.filtersSearchInput.focus()
			updateURL()
		}	

		function searchByTag(event) {
			var tagButton = event.target
			var termForSearch = tagButton.value

			if (!tagButton.className.includes("filter-topic-suggestion")) {
				ELEMENTS.filtersMediumCurrent.value = "maker"
			}
			ELEMENTS.filtersSearchInput.value = termForSearch
			buildFilteredTopicsList()
			updateURL()
		}

		for (var i in ELEMENTS.contentEmptyTagButtons){
			ELEMENTS.contentEmptyTagButtons[i].addEventListener("click", searchByTag)
		}
		ELEMENTS.contentEmptyButton.addEventListener("click", resetToMaker)
		function resetToMaker(){
			ELEMENTS.filtersMediumCurrent.value = "maker"
			ELEMENTS.filtersSearchInput.value = ""
			setAboutView()
			filterProjects()
			buildTopicsList()
			buildFilteredTopicsList()
			ELEMENTS.filtersSearchInput.focus()
			updateURL()
		}

		function updateURL(){
			var currentMedium = ELEMENTS.filtersMediumCurrent.value
			var currentSearch = ELEMENTS.filtersSearchInput.value.trim()
			var currentParameters = detectURLParameters()

			if (currentParameters.medium == currentMedium && currentParameters.search == currentSearch) {
				return
			}
			else {
				var newParameterString = "?persona=" + currentMedium

				if (currentSearch) {
					newParameterString = newParameterString + "&search=" + currentSearch
				}

				var currentURL = new URL(window.location.href)
				currentURL.search = newParameterString
				window.history.replaceState({},"", currentURL)
			}
		}

// GENERATE CARDS
	// FILTER PROJECTS
		function filterProjects(){
			var medium = ELEMENTS.filtersMediumCurrent.value
			var search = ELEMENTS.filtersSearchInput.value.trim().toLowerCase()
				// FILTER BY MEDIUM
			if (medium == "learner") {
				var filteredProjects = []
			}

			else if (medium == "maker") {
				var filteredProjects = JSON.parse(JSON.stringify(PROJECTS))
			}

			else if (medium == "friend") {
				var filteredProjects = JSON.parse(JSON.stringify(FRIENDS))
			}

			else if (medium == "explorer") {
				var filteredProjects = JSON.parse(JSON.stringify(PLACES))
			}

			else {
				var craft = CONSTANTS.mediums[medium].tag
				var filteredProjects = PROJECTS.filter(filterByMedium)
				function filterByMedium(project){
					// (INEFFICIENT WAY OF DOING IT)
					// if (project.tags.includes(craft) || project.keywords.includes(craft)) {
					// 	return true
					// }
					// else {
					// 	return false
					// }

					// (BETTER WAY OF DOING IT)	
					return (project.tags.includes(craft) || project.keywords.includes(craft))
				}
			}

			// filter by TOPIC (dropdown selection) and SEARCH
				if (search.length) {
					var filteredProjects = filteredProjects.filter(filterBySearch)
					function filterBySearch(project){
						return (project.name.trim().toLowerCase().includes(search) || project.tags.includes(search) || project.keywords.includes(search))
					}
				}

			// SORT
				if (medium !== "friend" && medium !== "explorer") {
					filteredProjects = filteredProjects.sort(sortByDate)
					function sortByDate(projectA, projectB) {
						return (new Date(projectB.date).getTime()) - (new Date(projectA.date).getTime())
					}
				}

				// if (medium == "maker") {
				// 	filteredProjects.sort(sortByFeatured)
				// 	function sortByFeatured(projectA, projectB) {
				// 		if (projectB.featured && !projectA.featured) {
				// 			return 1
				// 		}
				// 		return -1
				// 	}
				// }

			// add cards that meet filter requirements to content section
				populateCards(filteredProjects)
		}

	// POPULATE CARDS SECTION
		function populateCards(filteredProjects) {
			ELEMENTS.contentSection.innerHTML = ""

			filteredProjects.forEach(buildCard)
		}

	// BUILD A CARD
		function buildCard(projectData) {
			var card = document.createElement("div")
			card.className = "project-card"
			ELEMENTS.contentSection.appendChild(card)

			var gallery = document.createElement("div")
			gallery.className = "project-gallery"
			card.appendChild(gallery)

				var pictureArea = document.createElement("div")
				pictureArea.className = "project-gallery-pictures"
				gallery.appendChild(pictureArea)

					var alreadySet = false

					projectData.photos?.forEach(addPicture)
					function addPicture(pictureURL) {
						var picture = document.createElement("div")
						picture.className = "project-gallery-picture"
						picture.setAttribute("laterloadImage", pictureURL)
						// picture.style.backgroundImage = "url(" + pictureURL + ")"
						pictureArea.appendChild(picture)
					if (!alreadySet) {
							alreadySet = true

							picture.setAttribute("active", true)
						}
					}

				if (projectData.photos?.length > 1) {
					var leftArrow = document.createElement("button")
						leftArrow.className = "project-gallery-arrow-left"
						leftArrow.innerHTML = "&lt;"
						leftArrow.addEventListener("click", changePicturePrevious)
					gallery.appendChild(leftArrow)

					var rightArrow = document.createElement("button")
						rightArrow.className = "project-gallery-arrow-right"
						rightArrow.innerHTML = "&gt;"
						rightArrow.addEventListener("click", changePictureNext)
					gallery.appendChild(rightArrow)
				}

			var infoContainer = document.createElement("div")
				infoContainer.className = "project-info"
			card.appendChild(infoContainer)

				var link = document.createElement("a")
					link.className = "project-link"
					link.title = projectData.name
					if (projectData.link && projectData.link.length) {
						link.href = projectData.link
						link.target = "_blank"
					}
					else {
						link.setAttribute("disabled", true)
					}
				infoContainer.appendChild(link)

				var projectName = document.createElement("h2")
					projectName.className = "project-name"
					projectName.innerText = projectData.name
				link.appendChild(projectName)

				var projectDescription = document.createElement("p")
					projectDescription.className = "project-description"
					projectDescription.innerHTML = projectData.description
				infoContainer.appendChild(projectDescription)

			OBSERVER.observe(card)
		}


	// PICTURES
		function changePicturePrevious(event) {
			// closest is like queryselector, but "up" - ancestor (parent, etc.)
			var gallery = event.target.closest(".project-gallery")
			var pictureArea = gallery.querySelector(".project-gallery-pictures")
			var pictures = Array.from(pictureArea.querySelectorAll(".project-gallery-picture"))
			var activePicIndex = pictures.findIndex(findActivePic)

			function findActivePic(picture) {
				return picture.getAttribute("active")
			}

			if (activePicIndex == 0){
				var newPicIndex = pictures.length - 1
			}
			else {
				var newPicIndex = activePicIndex - 1
			}

			pictures[activePicIndex].removeAttribute("active")
			pictures[newPicIndex].setAttribute("active", true)
		}

		function changePictureNext(event) {
			// closest is like queryselector, but "up" - ancestor (parent, etc.)
			var gallery = event.target.closest(".project-gallery")
			var pictureArea = gallery.querySelector(".project-gallery-pictures")
			var pictures = Array.from(pictureArea.querySelectorAll(".project-gallery-picture"))
			var activePicIndex = pictures.findIndex(findActivePic)

			function findActivePic(picture) {
				return picture.getAttribute("active")
			}

			if (activePicIndex < pictures.length - 1){
				var newPicIndex = activePicIndex + 1
			}
			else {
				var newPicIndex = 0
			}

			pictures[activePicIndex].removeAttribute("active")
			pictures[newPicIndex].setAttribute("active", true)
		}

		function loadPictures(cards) {
			for (var i in cards){
				if (cards[i].isIntersecting) {
					var cardElement = cards[i].target
					var imageElements = Array.from(cardElement.querySelectorAll(".project-gallery-picture"))
					
					for(var j in imageElements){
						var picture = imageElements[j]
						var pictureURL = picture.getAttribute("laterloadImage")

						if (pictureURL) {
							picture.removeAttribute("laterloadImage")
							picture.style.backgroundImage = "url(" + pictureURL + ")"
						}
					}
				}
			}
		}
