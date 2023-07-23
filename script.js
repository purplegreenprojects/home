// TO DO ???
	// Liz & James codin' stuff
		// style medium dropdown
		// medium: right-align; filters: left-align
		// display filters list with indented subcategories
		// --> verify sort by date
		// --> review photography galleries & other projects
		// --> add pictures to intro section
		// --> friend of ...		
		// resumé PDF
		// filter bar - mobile styling
		// url parameters
		// stream ?

	// projects JSON additions/revisions
		// add dates 
		// fix tags in projects json (& duplicate tags for capitalization)
		// switch tutorial links to be in description instead of external links button
		// reassess descriptions
		// finish intro blurb for about section
		// friends page project cards / links
		// add more recent projects
		// album artwork shouldn't show on music medium
		// missing project pictures

// ELEMENTS
	var ELEMENTS = {
		header: document.querySelector("#header"),
		nameButton: document.querySelector("#name-button"),
		about: document.querySelector("#about"),
		filtersMediumSelect: document.querySelector("#filters-medium"),
		filtersTopicSelect: document.querySelector("#filters-topic"),
		filtersClearButton: document.querySelector("#filters-clear"),
		filtersSearchInput: document.querySelector("#filters-search"),
		filtersSubmitButton: document.querySelector("#filters-submit"),
		filtersSuggestions: document.querySelector("#filters-suggestions"),
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
					"Kniterative Designs": "kd",
					"bunnies": "bunnies",
					"cats": "cats",
					"dogs": "dogs",
					"horses (& unicorns)": "horses",
					"fish": "fish",
					"mice": "mice",
					"carrots": "carrots",
					"bags": "bags",
				}
			},			
			knitter: {
				tag: "knitting",
				topics: {
					"gifts": "gifts",
					"clothes":"clothes",
					"sweaters": "sweaters",
					"skirts": "skirts",
					"accessories": "accessories",
					"hats": "headwear",
					"scarves, cowls, & shawls": "neckwear",
					"mittens & gloves": "handwear",
					"toys": "toys",
					"Kniterative Designs": "kd",
					"bunnies": "bunnies",
					"cats": "cats",
					"dogs": "dogs",
					"horses (& unicorns)": "horses",
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
					"dresses": "dresses",
					"shirts": "shirts",
					"skirts": "skirts",
					"pajamas": "pajamas",
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
					"music": "music",
					"music for album": "album",
					"music with lyrics": "lyrics",
					"music for Explorchestra": "Explorchestra",
					"music for Explo Expos": "Explo Expo",
					"music for Music Challenges": "music challenges",
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
					"tools":"code tools",
					"games": "code games",
					"experiments": "code experiments",
					"past portfolios": "portfolios"
				}
			},
			explorer: {
				tag: "explore",
				topics: {
					"places": "photographed places",
					
				}
			},
			friend: {
				tag: "collaboration",
				topics: {
				}
			}
		}
	}

// SETUP
	buildMediumsList()

	function buildMediumsList(){
		// loop through the mediums object, for each key (learner, knitter, etc.), create a new html option element, with a value of that key and innerhtml (label) of that key
		for (var key in CONSTANTS.mediums){
			var option = document.createElement("option")
			option.value = key
			option.innerText = key
			ELEMENTS.filtersMediumSelect.appendChild(option)
		}

		// select the default medium (e.g. "maker" or "learner"), as defined in CONSTANTS as value of mediums dropdown
		ELEMENTS.filtersMediumSelect.value = CONSTANTS.defaultMedium
		// in the topicsselect dropdown, populate with options associated with "learner"
		buildTopicsList()
		setAboutView()
	}

// USER ACTIONS
	// ABOUT
		// clicking on the name button (Elizabeth Ford) triggers the function
		ELEMENTS.nameButton.addEventListener("click",toggleAbout)

		function toggleAbout(){
		// if the about section (#header) has an attribute (like id="" or class="") of collapsed="true"... then remove that attribute
		if (ELEMENTS.header.getAttribute("collapsed")) {
			ELEMENTS.filtersMediumSelect.value = "learner"
		}
		// otherwise (if it doesn't have that attribute), add the attribute "collapsed" and set it to "true" (collapsed="true")
		else {
			ELEMENTS.filtersMediumSelect.value = "maker"
		}

		setAboutView()
	}

		function setAboutView(){
			var medium = ELEMENTS.filtersMediumSelect.value
			// if the medium (the value of #filters-medium) is "learner"
			if (medium == "learner") {
				// ... open up the about section (remove the "collapsed" attribute), set the #filters-search placeholder text to "skills", make it so you can't type in that search field, and disable the search button
				ELEMENTS.header.removeAttribute("collapsed")
				ELEMENTS.filtersSearchInput.setAttribute("placeholder", "skills")
				ELEMENTS.filtersSearchInput.setAttribute("disabled", true)
				ELEMENTS.filtersSubmitButton.setAttribute("disabled",true)
			}
			// if the medium (the value of #filters-medium) is anything except "learner", collapse the about section (by setting the collapse attribute to "true"), set the placeholder text in #filters-search to "...projects", and make the text field and submit button accessible again (by removing "disabled" attribute)
			else {
				ELEMENTS.header.setAttribute("collapsed",true)
				ELEMENTS.filtersSearchInput.setAttribute("placeholder", "...projects")
				ELEMENTS.filtersSearchInput.removeAttribute("disabled")
				ELEMENTS.filtersSubmitButton.removeAttribute("disabled")
			}
			ELEMENTS.nameButton.blur()
			filterProjects()
		}

	// FILTERS
		// click on mediums dropdown to change it
		// (call function - last part of this row)
		ELEMENTS.filtersMediumSelect.addEventListener("change", buildTopicsList)
		ELEMENTS.filtersMediumSelect.addEventListener("change", setAboutView)

		// (define function)
		function buildTopicsList(){
			ELEMENTS.filtersSearchInput.value = ""

			// the value of medium that is selected
			var medium = ELEMENTS.filtersMediumSelect.value
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
			var medium = ELEMENTS.filtersMediumSelect.value
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
				topicButton.innerHTML = topics[i]
				topicButton.value = topics[i]
				topicButton.addEventListener("click",searchByTag)
				ELEMENTS.filtersSuggestions.appendChild(topicButton) 
			}

			filterProjects()
		}

		ELEMENTS.filtersClearButton.addEventListener("click", resetFilteredTopics)
		function resetFilteredTopics(){
			ELEMENTS.filtersSearchInput.value = ""
			buildFilteredTopicsList()
			ELEMENTS.filtersSearchInput.focus()
		}	

		function searchByTag(event) {
			var tagButton = event.target
			var termForSearch = tagButton.value
			ELEMENTS.filtersSearchInput.value = termForSearch
			buildFilteredTopicsList()
		}

		for (var i in ELEMENTS.contentEmptyTagButtons){
			ELEMENTS.contentEmptyTagButtons[i].addEventListener("click", searchByTag)
		}

		ELEMENTS.contentEmptyButton.addEventListener("click", resetToMaker)
		function resetToMaker(){
			ELEMENTS.filtersMediumSelect.value = "maker"
			buildTopicsList()
			setAboutView()
			ELEMENTS.filtersSearchInput.value = ""
			buildFilteredTopicsList()
			ELEMENTS.filtersSearchInput.focus()
		}

// GENERATE CARDS
	// FILTER PROJECTS
		function filterProjects(){
			var medium = ELEMENTS.filtersMediumSelect.value
			var search = ELEMENTS.filtersSearchInput.value.trim().toLowerCase()
			
			// FILTER BY MEDIUM
			if (medium == "learner") {
				var filteredProjects = []
			}

			else if (medium == "maker") {
				var filteredProjects = PROJECTS
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
				filteredProjects.sort(sortByDate)
				function sortByDate(projectA, projectB) {
					return new Date(projectB.date).getTime() - new Date(projectA.date).getTime() // ???
				}

				if (medium == "maker") {
					filteredProjects.sort(sortByFeatured)
					function sortByFeatured(projectA, projectB) {
						if (projectB.featured && !projectA.featured) {
							return 1
						}
						return 0
					}
				}

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
						picture.style.backgroundImage = "url(" + pictureURL + ")"
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

				var projectName = document.createElement("h2")
				projectName.className = "project-name"
				projectName.innerText = projectData.name
				infoContainer.appendChild(projectName)

				var tagsSection = document.createElement("div")
				tagsSection.className = "project-section-tags"
				infoContainer.appendChild(tagsSection)

					projectData.tags?.forEach(addTag)
					function addTag(tagText) {
						var tag = document.createElement("button")
						tag.className = "project-section-tags-tag"
						tag.innerText = tagText
						tag.value = tagText
						tag.addEventListener("click", searchByTag)
						tagsSection.appendChild(tag)
					}

				var projectDescription = document.createElement("p")
				projectDescription.className = "project-description"
				projectDescription.innerHTML = projectData.description
				infoContainer.appendChild(projectDescription)

				var linksSection = document.createElement("div")
				linksSection.className = "project-section-links"
				infoContainer.appendChild(linksSection)

					projectData.links?.forEach(addLink)
					function addLink(linkObject) {
						var link = document.createElement("a")
						link.className = "project-section-links-link"
						link.innerText = linkObject.text
						link.href = linkObject.url
						link.target = "_blank"
						linksSection.appendChild(link)
					}
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
