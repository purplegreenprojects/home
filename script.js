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
		contentSection: document.querySelector("#content"),
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
		filterProjects()
	}

// USER ACTIONS
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

	// click on mediums dropdown to change it
	// (call function - last part of this row)
	ELEMENTS.filtersMediumSelect.addEventListener("change", buildTopicsList)

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

	ELEMENTS.filtersMediumSelect.addEventListener("change", setAboutView)

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

		filterProjects()
	}


// GENERATE CARDS
	// FILTER PROJECTS
		function filterProjects(){
			var medium = ELEMENTS.filtersMediumSelect.value
			
			// FILTER BY MEDIUM
			if (medium == "learner") {
				var filteredProjects = []
			}

			else if (medium == "maker") {
				var filteredProjects = PROJECTS
			}

			else {
				var filteredProjects = PROJECTS.filter(filterByMedium)
			}


			// ??? -- filter by TOPIC (dropdown selection) and SEARCH


			// SORT
				filteredProjects.sort(sortByDate)

			populateCards(filteredProjects)
		}

		function filterByMedium(project){
			// (INEFFICIENT WAY OF DOING IT)
			// if (project.tags.includes(medium) || project.keywords.includes(medium)) {
			// 	return true
			// }
			// else {
			// 	return false
			// }

			// (BETTER WAY OF DOING IT)	
			return (project.tags.includes(medium) || project.keywords.includes(medium))
		}

		function sortByDate(projectA, projectB) {
			return new Date(projectA.date).getTime() - new Date(projectB.date).getTime() // ???
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

					projectData.photos?.forEach(addPicture)
					function addPicture(pictureURL) {
						var picture = document.createElement("div")
						picture.className = "project-gallery-picture"
						picture.style.backgroundImage = "url(" + pictureURL + ")"
						pictureArea.appendChild(picture)
					}

				var leftArrow = document.createElement("button")
				leftArrow.className = "project-gallery-arrow-left"
				leftArrow.innerHTML = "&larr;"
				leftArrow.addEventListener("click", changePicturePrevious)
				gallery.appendChild(leftArrow)

				var rightArrow = document.createElement("button")
				rightArrow.className = "project-gallery-arrow-right"
				rightArrow.innerHTML = "&rarr;"
				rightArrow.addEventListener("click", changePictureNext)
				gallery.appendChild(rightArrow)

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
				projectDescription.innerText = projectData.description
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



		function changePicturePrevious() {
			// ???
		}

		function changePictureNext() {
			// ???
		}

		function searchByTag() {
			// ???
		}
