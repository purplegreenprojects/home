// ELEMENTS
	var ELEMENTS = {
		nameButton: document.querySelector("#name-button"),
		about: document.querySelector("#about"),
		filtersMediumSelect: document.querySelector("#filters-medium"),
		filtersTopicSelect: document.querySelector("#filters-topic"),
		filtersClearButton: document.querySelector("#filters-clear"),
		filtersSearchInput: document.querySelector("#filters-search"),
		filtersSubmitButton: document.querySelector("#filters-submit")
	}

// CONSTANTS
	var CONSTANTS = {
		defaultMedium: "learner",
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

		// select "learner" (the default medium, as defined in CONSTANTS) as value of mediums dropdown
		ELEMENTS.filtersMediumSelect.value = CONSTANTS.defaultMedium
		// in the topicsselect dropdown, populate with options associated with "learner"
		buildTopicsList()
	}

// USER ACTIONS
	ELEMENTS.nameButton.addEventListener("click",toggleAbout)

	function toggleAbout(){
		if (ELEMENTS.about.getAttribute("collapsed")) {
			ELEMENTS.about.removeAttribute("collapsed")
		}
		else {
			ELEMENTS.about.setAttribute("collapsed",true)
		}
	}

	// click on mediums dropdown to change it
	// (call function - last part of this row)
	ELEMENTS.filtersMediumSelect.addEventListener("change", buildTopicsList)

	// (define function)
	function buildTopicsList(){
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







