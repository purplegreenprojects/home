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
			id: "kniterativedesigns",
			color: "white",
			image: "../kd/kdfavicon.png"
		},
		// {
		// 	text: "Kniterative Designs (all)",
		// 	url: "../KD/index.html",
		// 	color: "#4F1A70"
		// },
			{
				text: "bunnies",
				url: "../KD/bunnies/index.html",
				color: "#A84CB8"
			},
			{
				text: "knittens",
				url: "../KD/knittens/index.html",
				color: "#632D6C"
			},
			{
				text: "puppies",
				url: "../KD/puppies/index.html",
				color: "#94419C"
			},
			{
				text: "horses",
				url: "../KD/horses/index.html",
				color: "#4B2252"
			},
			{
				text: "carrots, fish, mice",
				url: "../KD/carrotsfishmice/index.html",
				color: "#823F98"
			},
		{
			id: "knitting",
			color: "white",
			image: "https://static.thenounproject.com/png/85003-200.png"
		},
		// {
		// 	text: "knitting (all)",
		// 	url: "../knitting/index.html",
		// 	color: "#4F1A70"
		// },
			{
				text: "accessories sweaters &",
				url: "../knitting/sweaters/index.html",
				color: "#BB00FF"
			},
			{
				text: "gifts",
				url: "../knitting/gifts/index.html",
				color: "#8D44A6"
			},

			{
				text: "pre-KD animals",
				url: "../knitting/prekdanimals/index.html",
				color: "#4B2252"
			},


		{
			id: "sewing",
			color: "white",
			image: "https://static.thenounproject.com/png/1461754-200.png"
		},
		// {
		// 	text: "sewing (all)",
		// 	url: "../sewing/index.html",
		// 	color: "#4F1A70"
		// },
			{
				text: "dresses",
				url: "../sewing/dresses/index.html",
				color: "#632D6C"
			},

			{
				text: "skirts & tops",
				url: "../sewing/skirtstops/index.html",
				color: "#8D44A6"
			},

			{
				text: "bags",
				url: "../sewing/bags/index.html",
				color: "#4B2252"
			},

			{
				text: "PJ pants",
				url: "../sewing/pjpants/index.html",
				color: "#8D44A6"
			},

			{
				text: "misc. accessories",
				url: "../sewing/accessories/index.html",
				color: "#BB00FF"
			},

		{
			id: "writing",
			color: "white",
			image: "https://static.thenounproject.com/png/364832-200.png"
		},
			{
				text: "poetry",
				url: "../writing/index.html",
				color: "#444ead"
			},

		{
			id: "travel",
			color: "white",
			image: "https://static.thenounproject.com/png/1126595-200.png"
		},
			{
				text: "Favorite Places",
				url: "../favoriteplaces/index.html",
				color: "#222059"
			},
			{
				text: "Nova Scotia",
				url: "../novascotia/index.html",
				color: "#00A6D6"
			},
			{
				text: "Montreal",
				url: "../montreal/index.html",
				color: "#773C60"
			},
			{
				text: "England",
				url: "../england/index.html",
				color: "#502E5C"
			},
			{
				text: "San Francisco",
				url: "../sanfran/index.html",
				color: "#4A71E7"
			},
			{
				text: "Massachusetts",
				url: "../massachusetts/index.html",
				color: "#007E81"
			},

		{
			id: "photography",
			color: "white",
			image: "https://static.thenounproject.com/png/12273-200.png"
		},

			{
				text: "stories",
				url: "../stories/index.html",
				color: "#502E5C"
			},
			{
				text: "sky",
				url: "../sky/index.html",
				color: "#222059"
			},
			{
				text: "animals",
				url: "../animals/index.html",
				color: "#00A6D6"
			},
			{
				text: "plants",
				url: "../plants/index.html",
				color: "#005A43"
			},
			{
				text: "water",
				url: "../water/index.html",
				color: "#4A71E7"
			},

		{
			id: "blender",
			color: "white",
			image: "https://static.thenounproject.com/png/644733-200.png"
		},

			{
				text: "Blender projects (all)",
				url: "../blender/index.html",
				color: "#275E38"
			},

		{
			id: "art",
			color: "white",
			image: "https://static.thenounproject.com/png/839744-200.png"
		},

			{
				text: "art (all)",
				url: "../art/index.html",
				color: "#2C6B3F"
			},
			{
				text: "Snow Sculptures",
				url: "../snowSculptures/index.html",
				color: "#46AB65"
			},
		{
			id: "coding",
			color: "white",
			image: "https://static.thenounproject.com/png/549370-200.png"
		},

			{
				text: "coding (all)",
				url: "../coding/index.html",
				color: "#2C6B3F"
			},
		{
			id: "music",
			color: "white",
			image: "https://static.thenounproject.com/png/27186-200.png"
		},

			{
				text: "music (all)",
				url: "../music/index.html",
				color: "#2C6B3F"
			},
			// {
			// text: "Chroma",
			// url: "../music/chroma/index.html",
			// color: "#2C6B3F"
			// },
			// {
			// text: "Whether",
			// url: "../music/whether/index.html",
			// color: "#2C6B3F"
			// },
			// {
			// text: "Elephant",
			// url: "../music/elephant/index.html",
			// color: "#2C6B3F"
			// },
			// {
			// text: "These Days",
			// url: "../music/thesedays/index.html",
			// color: "#2C6B3F"
			// },
			// {
			// text: "Chaos in Circles",
			// url: "../music/chaosincircles/index.html",
			// color: "#2C6B3F"
			// },
			// {
			// text: "EveryTime",
			// url: "../music/everytime/index.html",
			// color: "#2C6B3F"
			// },
			// {
			// text: "Collecting Carrots",
			// url: "../music/collectingcarrots/index.html",
			// color: "#2C6B3F"
			// },

		]

	/*** buildPage ***/
		buildPage()
		function buildPage() {
			// current container
				var currentContainer = null

			// loop through list
				for (var i in LIST) {
					// id --> create parent
						if (LIST[i].id) {
							var parentBlock = document.createElement("div")
								parentBlock.id = LIST[i].id
								parentBlock.className = "parent-block"
							ELEMENTS.list.appendChild(parentBlock)
							currentContainer = parentBlock
						}

					// create block
						var block = document.createElement("div")
							block.className = "link-block"
							block.style.backgroundColor = LIST[i].color
						currentContainer.appendChild(block)

					// spacer
						if (LIST[i].image) {
							var image = document.createElement("div")
								image.className = "link-block-spacer"
								image.style.backgroundImage = "url(" + LIST[i].image + ")"
							block.appendChild(image)
						}

					// create link
						else if (LIST[i].url) {
							var link = document.createElement("a")
								link.className = "link-block-inner"
								link.setAttribute("href", LIST[i].url)
								link.addEventListener("click", function(event) {
									window.top.location = event.target.getAttribute("href")
								})
								link.innerText = LIST[i].text
							block.appendChild(link)
						}
				}

			// hash?
				if (window.location.hash) {
					var id = window.location.hash
					document.querySelector(id).setAttribute("selected", true)
				}
		}

	/*** moveLeft ***/
		ELEMENTS.left.addEventListener("click", moveLeft)
		function moveLeft() {
			if (!ELEMENTS.list.firstChild) {
				return
			}
			try {
				ELEMENTS.list.scrollLeft -= 250
			} catch (error) {
				console.log(error)
			}
		}

	/*** moveRight ***/
		ELEMENTS.right.addEventListener("click", moveRight)
		function moveRight() {
			if (!ELEMENTS.list.firstChild) {
				return
			}
			ELEMENTS.list.scrollLeft += 250
		}
}

// travel globe - https://static.thenounproject.com/png/329849-200.png
// //school books - https://static.thenounproject.com/png/37271-200.png
// photography camera - https://static.thenounproject.com/png/4808-200.png
// blender computer - https://static.thenounproject.com/png/644733-200.png
// //music - 