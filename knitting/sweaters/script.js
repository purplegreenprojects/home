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
				text: "Norway Slippers (felted) - based on Family of Slippers by Chris de Longpré",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/796170370/IMG_20210717_122341652_medium2.jpg"
			},
			{
				text: "Make a Wish - pattern by Joji Locatelli",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/790736421/IMG_7966_medium2.JPG"
			},
			{
				text: "Brain Hat - pattern by by Alana Noritake",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/499457012/IMG_20171119_141609481_medium2.jpg"
			},
			{
				text: "Icebreak Shawl - pattern (The Age of Brass and Steam Kerchief) by Orange Flower Yarn",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/499453538/IMG_20171020_144049822_medium2.jpg"
			},
			{
				text: "20s Hat - pattern (Cloche a la mode) by Turit Wilroy",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/343079178/1915263_1042385855804003_2147850894420508260_n_medium2.jpg"
			},

			{
				text: "Convertible Mittens - pattern (Flip-Top Mittens #L32244) by Lion Brand Yarn",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/343080004/12366425_1042385789137343_3721396389953934140_n_medium2.jpg"
			},

			{
				text: "Autumn Leaves - pattern (Sprig) by by Alana Dakos",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/318662543/20150810_130308_medium2.jpg"
			},
			{
				text: "3 in 1 Sweater - pattern (3 in 1) by alfa knits",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/232302414/IMG_6091_medium2.jpg"
			},
			{
				text: "Purple Cables Sweater - pattern based on Easy Top-Down Raglan Knitalong by Susan B. Anderson",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/201256413/IMG_5599_medium2.jpg"
			},

			{
				text: "Tempest in a Teapot - pattern (Tempest) by Ann Weaver",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/167055957/IMG_5118_medium2.jpg"
			},
			{
				text: "Cozy Cardigan - pattern (paulie) by Isabell Kraemer",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/352500027/IMG_2049_medium2.JPG"
			},
			{
				text: "Synesthesia Scarf - pattern (Noro Striped Scarf) by Jared Flood",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/117113968/Photo_on_2012-08-22_at_22.49_medium2.jpg"
			},
			{
				text: "String of Purls hat - pattern (Hurricane Hat) by Andrea Guldin",
				url: "https://images4-g.ravelrycache.com/uploads/eef25/165693196/521624_10151531925712668_161794041_n_medium2.jpg"
			},
			{
				text: "First Sweater - pattern (95-33 Jacket with circle effect) by DROPS design",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/767520498/IMG_20200727_105739298_medium2.jpg"
			},
			{
				text: "First Project - a 'square,' started by Grandma Fran, finished (creatively) by me at around age 6",
				url: "https://images4-f.ravelrycache.com/uploads/eef25/792367967/30_Rainbow_Yarn_-_yarn_of_color_medium2.jpg"
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
