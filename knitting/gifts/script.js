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
				text: "Christmas Lamb for Grandma Fran - designed and knitted by Elizabeth Ford",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/753619996/IMG_6673_medium2.JPG"
			},
			{
				text: "Love You to Pieces socks - pattern (Warm and Cozy Socks) by Linden Down",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/706285143/IMG_20200523_134948340_medium2.jpg"
			},
			{
				text: "Clyde - pattern (Frog and Toad) by Kristina Ingrid McGowan",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/720854700/IMG_1456_medium2.JPG"
			},
			
			{
				text: "Fingerless Gloves for Aunt Ellyn - knitted from a compilation of patterns, with crocheted by Naztazia for decoration",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/499460026/IMG_20171225_154028489_medium2.jpg"
			},
			{
				text: "Shrimp for Apollo - pattern (LaPrawnda the Shrimp) by Ashley Dorian Medwig",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/792367869/27_Shrimp_on_a_String_knitting_medium2.jpg"
			},
			{
				text: "Shrimp Lo Mein - modified version of pattern (LaPrawnda the Shrimp) by Ashley Dorian Medwig, with yarn as lo mein",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/792367860/25_Shrimp_and_Noodles_knitting_medium2.jpg"
			},
			{
				text: "Game of Thrones House Stark banner for Dan - pattern (Game of Thrones: Stark House Sigil) by Jessica Halleck",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/346989472/1917989_10153912949938120_3904975645707112954_n_medium2.jpg"
			},
			{
				text: "Legwarmers for Brittany - pattern (chunky cabled boot cuffs) by Debbie Andriulli",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/343438082/tumblr_nzhnokyw2n1tdp74do1_540_medium2.jpg"
			},
			{
				text: "Orca for Connie - pattern (Oedipus the Orca) by Ali Tong",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/343078307/tumblr_nz88x0tbmi1tdp74do3_540_medium2.jpg"
			},
			{
				text: "Wallet for James - designed and knitted by Elizabeth Ford",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/330390480/20151010_224529__1__medium2.jpg"
			},
			{
				text: "Mr. Bunny's brother, Mr. Bunny - designed and knitted by Elizabeth Ford",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/320205028/IMG_0686_medium2.JPG"
			},
			{
				text: "Pansies for Mom - pattern (Granny's Pansy) by Dedri Uys",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/302248974/IMG_1080_medium2.JPG"
			},
			{
				text: "Bunny for Audrey - designed and knitted by Elizabeth Ford",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/280414883/IMG_0912_medium2.jpg"
			},
			
			{
				text: "Explogo Bunny for Max - designed and knitted by Elizabeth Ford",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/274957935/20141230_113723_medium2.jpg"
			},
			{
				text: "Koala for Kevin - pattern (Koala) by Sally Muir and Joanna Osborne",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/283450282/IMG_0883_medium2.jpg"
			},
			{
				text: "Socks for Grandpa Jim - pattern (Basic Socks) by Cindy Guggemos",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/234317617/IMG_6141_medium2.JPG"
			},
			{
				text: "Fiesta - pattern (Don the Dillo - knit armadillo) by Gabrielle Thériault",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/234313469/IMG_6148_medium2.jpg"
			},
			{
				text: "Scarf for Dad - designed and knitted by Elizabeth Ford",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/135726355/IMG_4188_medium2.jpg"
			},
			{
				text: "Kitty Pi for Mae - pattern (Kitty Pi) by Wendy D. Johnson",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/116582075/IMG_3873_medium2.JPG"
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
