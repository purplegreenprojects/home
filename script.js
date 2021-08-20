window.onload = function(){

	// COLORS
		var colors = {
			"transparent": "transparent",
			"dark-gray": "#222222",
			"medium-gray": "#777777",
			"light-gray": "#dddddd",
			"greens": ["#275E38", "#46AB65", "#2C6B3F", "#1C4529", "#01403A", "#1A5C46", "#014D46", "#148865", "#30A981", "#258263"]
		}

	// PROJECTS
		var projects = [

		//PURPLE
				{
					"container": "KDboxes",
					"name": "Carrots",
					"icons": ["KD", "carrots"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/499459582/IMG_20171220_224717998_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/crocheted-carrots",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Franny",
					"icons": ["KD", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/728168086/upload_medium2"],
					"link": "https://www.ravelry.com/projects/eef25/knitpicks-fable-fur-bunny",
					"description": "I may end up keeping this friend for myself... This bunny is just SO fuzzy."	
				},

				{
					"container": "KDboxes",
					"name": "Fish",
					"icons": ["KD", "fish"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/791016771/IMG_20200909_155149000_HDR_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/crocheted-fish",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Taylor",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/715763214/upload_medium2"],
					"link": "https://www.ravelry.com/projects/eef25/taylor-the-yellow-and-white-striped-knitten",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Mice",
					"icons": ["KD", "mouse"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/715785584/upload_medium2"],
					"link": "https://www.ravelry.com/projects/eef25/crocheted-mice",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Fred",
					"icons": ["KD", "puppy"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/715756211/upload_medium2"],
					"link": "https://www.ravelry.com/projects/eef25/fred-the-red-golden-retriever",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Banjo",
					"icons": ["KD", "puppy"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/715732787/upload_medium2"],
					"link": "https://www.ravelry.com/projects/eef25/banjo-commission",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "First Horse",
					"icons": ["KD", "horse", "gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/788401266/IMG_20210530_132707411_copy_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/first-horse#",
					"description": "First horse, designed by me"	
				},

				{
					"container": "KDboxes",
					"name": "Pedro",
					"icons": ["KD", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/601963453/upload_medium2"],
					"link": "https://www.ravelry.com/projects/eef25/tan-corduroy-bunny-pedro",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Teddy",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/715766025/upload_medium2"],
					"link": "https://www.ravelry.com/projects/eef25/teddy-the-fuzzy-brown-bunny",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Callie",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/624068854/IMG_20190425_212607532.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/callie-the-calico-kitten",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Adrienne",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/602057334/upload"],
					"link": "https://www.ravelry.com/projects/eef25/adrienne-the-corduroy-cat-dark-gray-and-white",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Valentine",
					"icons": ["KD", "puppy"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://kniterativedesigns.files.wordpress.com/2021/02/img_7407.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/valentine-the-pink-dog",
					"description": "Valentine's Day Dog"	
				},

				{
					"container": "KDboxes",
					"name": "Charlotte",
					"icons": ["KD", "puppy"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/715759067/upload_medium2"],
					"link": "https://www.ravelry.com/projects/eef25/charlotte-the-black-lab",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Rosie",
					"icons": ["KD", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/715730393/IMG_20180224_011125925.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/rosie---the-rabbiter",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Nibbles",
					"icons": ["KD", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/601983891/IMG_2394_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/nibbles-for-jenn-commissioned-by-max",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Bartholomew",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/716636800/upload"],
					"link": "https://www.ravelry.com/projects/eef25/bartholomew-the-gray-striped-knitten",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Hilda",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/461689204/img_20170727_023820157_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/siamese-kitten",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Isabella",
					"icons": ["KD", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/437404910/thumb_IMG_5603_1024_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/pink-bunny-revising-the-pattern-isabella",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Marcus",
					"icons": ["KD", ""],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/465091358/img_20170814_174417151_hdr_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/border-collie-marcus",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Apollo",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/432698020/IMG_5092_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/apollo-knitten",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Lady",
					"icons": ["KD", "puppy"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/422467321/IMG_4630_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/lady-dog-for-grandma-fran",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Brave Bunny",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/347319067/IMG_1829_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/bravery-bunny-for-grandpa-john",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Jack",
					"icons": ["KD", "puppy"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/406325404/IMG_4388_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/jack-the-black-lab-take-2",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Chloe",
					"icons": ["KD", "puppy"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/400065447/tumblr_oe1ba1oje81tdp74do1_1280_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/chloe-the-yellow-lab",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Thomas",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/767144841/tree_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/thomas-the-orange-knitten",
					"description": ""
				},


				{
					"container": "KDboxes",
					"name": "First puppy",
					"icons": ["KD", "puppy"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/381698603/tumblr_o8y199hecg1tdp74do2_540_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/black-lab-first-knitted-dog",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Claire",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/367053653/IMG_2592_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/claire-the-yellow-cat",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Amelia",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/767149356/amelia_medium2.png"],
					"link": "https://www.ravelry.com/projects/eef25/amelia-the-light-gray-cat",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Luca",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/368115695/IMG_2655_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/luca-the-dark-gray-cat",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Baby Bunny",
					"icons": ["KD", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/363878603/tumblr_o3x5t7hpun1tdp74do1_1280_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/baby-bunny-for-aunt-ellyn",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Waldorf",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/361759651/tumblr_o3jiroc1cj1tdp74do5_1280_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/tuxedo-kitten-for-dad",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Pat",
					"icons": ["KD", ""],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/767148815/pat_medium2.png"],
					"link": "https://www.ravelry.com/projects/eef25/pat-the-gray-fuzzy-cat",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Penelope",
					"icons": ["KD", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/384669806/IMG_3393_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/impossibly-fuzzy-bunny",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Candy Corn",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/338274958/tumblr_ny5mtdy6hu1tdp74do3_1280_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/candy-corn-cat",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "Olivia",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/325852176/IMG_0823_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/olivia-the-small-grey-cat",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "T. O'Malley",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/325852600/20150802_190136_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/thomas-omalley",
					"description": ""
				},

				{
					"container": "KDboxes",
					"name": "First knitten",
					"icons": ["KD", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/325853300/IMG_0969_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/lucky-black-cat",
					"description": ""
				},

			/* --------------------- */

				{
					"container": "cubeShelf",
					"name": "Norway (Felted) Slippers",
					"icons": ["mine", "slippers"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/796170370/IMG_20210717_122341652_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/family-of-slippers",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Christmas Lamb for Grandma Fran",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/753619996/IMG_6673_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/christmas-lamb-for-grandma-fran",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Make a Wish sweater",
					"icons": ["mine", "sweater"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/790736421/IMG_7966_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/make-a-wish",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Clyde",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/720854700/IMG_1456_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/frog-and-toad",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "I love you to pieces socks",
					"icons": ["gift", "socks"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/706285143/IMG_20200523_134948340_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/warm-and-cozy-socks",
					"description": "For Grandpa Jim, as promised."	
				},

				{
					"container": "cubeShelf",
					"name": "Fingerless Gloves for Aunt Ellyn",
					"icons": ["gift", "gloves"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/499460026/IMG_20171225_154028489_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/fingerless-gloves-for-aunt-ellyn",
					"description": "Rosie!"	
				},

				{
					"container": "cubeShelf",
					"name": "Shrimp for Apollo",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/792367869/27_Shrimp_on_a_String_knitting_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/laprawnda-the-shrimp",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Shrimp Lo Mein",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/792367860/25_Shrimp_and_Noodles_knitting_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/laprawnda-the-shrimp",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Brain Hat",
					"icons": ["mine", "hat"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/499457012/IMG_20171119_141609481_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/brain-hat",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Icebreaker Shawl",
					"icons": ["mine"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/499453538/IMG_20171020_144049822_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/the-age-of-brass-and-steam-kerchief",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Cozy Cardigan",
					"icons": ["mine", "sweater"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/352500027/IMG_2049_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/paulie",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "GoT Banner for Dan",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/347317663/IMG_1900_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/house-stark-banner-for-dan",
					"description": ""
				},


				{
					"container": "cubeShelf",
					"name": "Legwarmers for Brittany",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/343438082/tumblr_nzhnokyw2n1tdp74do1_540_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/chunky-cabled-boot-cuffs",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Orca for Connie",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/343078307/tumblr_nz88x0tbmi1tdp74do3_540_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/oedipus-the-orca",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "'20s Hat'",
					"icons": ["mine"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/343079178/1915263_1042385855804003_2147850894420508260_n_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/cloche-a-la-mode",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Convertible Mittens",
					"icons": ["mine"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/343080004/12366425_1042385789137343_3721396389953934140_n_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/flip-top-mittens-l32244",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Wallet for James",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/330390480/20151010_224529__1__medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/explogo-phone-case-for-james",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Autumn Leaves",
					"icons": ["mine", "sweater"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/318662543/20150810_130308_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/sprig",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Mr. Bunny's brother",
					"icons": ["gift", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/320205028/IMG_0686_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/mr-bunnys-brother-mr-bunny",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Pansies for Mom",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/302248974/IMG_1080_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/grannys-pansy",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Bunny for Audrey",
					"icons": ["gift", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/280414883/IMG_0912_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/bunny-for-audrey",
					"description": "Rosie!"	
				},

				{
					"container": "cubeShelf",
					"name": "Explogo Bunny",
					"icons": ["mine", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/277562543/IMG_0753_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/explogo-bunny-20",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Knitted Explogo",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/275549486/20141229_171749_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/explogo-phone-case-for-max",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Explogo Bunny for Max",
					"icons": ["gift", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/274957935/20141230_113723_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/explogo-bunny-for-max",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Koala for Kevin",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/283450282/IMG_0883_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/koala",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Beaded Christmas Ball",
					"icons": ["mine"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/248682142/IMG_0263_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/deck-the-balls",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Socks for Grandpa Jim",
					"icons": ["gift", "socks"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/234317617/IMG_6141_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/basic-socks",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "3 in 1 Sweater",
					"icons": ["mine", "sweater"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/232302414/IMG_6091_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/3-in-1",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Fiesta",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/234313469/IMG_6148_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/don-the-dillo-knit-armadillo",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "First bunny",
					"icons": ["mine", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/237977865/IMG_6361_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/yet-another-bunny",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Purple Cables sweater",
					"icons": ["mine", "sweater"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/201256413/IMG_5599_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/easy-top-down-raglan-knitalong",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Tempest in a Teapot",
					"icons": ["mine", "sweater"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/167055957/IMG_5118_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/tempest",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Mae's Cousin",
					"icons": ["mine", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/144140493/IMG_4534_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/knitted-bunny-3",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Scarf for Dad",
					"icons": ["gift", "scarf"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/135726355/IMG_4188_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/scarf-for-dad",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Synesthesia Scarf",
					"icons": ["mine", "scarf"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/117113968/Photo_on_2012-08-22_at_22.49_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/noro-striped-scarf",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "String of Purls",
					"icons": ["mine", "hat"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/165693196/521624_10151531925712668_161794041_n_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/noro-striped-scarf",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Evelyn",
					"icons": ["mine", "bunny"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/115956044/IMG_3569_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/knitted-bunny",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Qwerty Monster",
					"icons": ["mine", "stuffie", "myFavorites"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/792368016/32_Confetti_Creature_knitting_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/qwerty-monster",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Thomas I - first cat ever",
					"icons": ["mine", "knitten"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/115958952/IMG_2518_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/thomas-the-cat",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Worry Whale",
					"icons": ["mine", "myFavorites"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/89934393/IMG_2330_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/hazel-the-humpback-whale",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Sweater for Mr. Bunny",
					"icons": ["mine"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-g.ravelrycache.com/uploads/eef25/62765626/IMG_0877_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/iphoodie-ipod-iphone-hoodie-2",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "iPod Hoodie Cozy",
					"icons": ["mine"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/61756596/IMG_0825_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/iphoodie-ipod-iphone-hoodie",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "First Sweater Ever",
					"icons": ["mine", "sweater"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/767520498/IMG_20200727_105739298_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/95-33-jacket-with-circle-effect",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "Kitty Pi for Mae",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/116582075/IMG_3873_medium2.JPG"],
					"link": "https://www.ravelry.com/projects/eef25/kitty-pi",
					"description": ""
				},

				{
					"container": "cubeShelf",
					"name": "First Project",
					"icons": ["mine", "myFavorites"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://images4-f.ravelrycache.com/uploads/eef25/792367967/30_Rainbow_Yarn_-_yarn_of_color_medium2.jpg"],
					"link": "https://www.ravelry.com/projects/eef25/first-project",
					"description": ""
				},

			/* ------------------- */
				{
					"container": "sewingdresser",
					"name": "Iris Moneta",
					"icons": ["dress"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/06/14/IMG_8025.JPG?itok=xThyw_BA"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/iris-moneta",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Water Moneta",
					"icons": ["dress"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/06/14/IMG_7987.JPG?itok=UeUGINLH"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/water-moneta",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Purple Moneta",
					"icons": ["dress"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/06/14/IMG_6324.JPG?itok=QBKdrc5l"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/purple-moneta-also-made-out-sheet-new-one-time",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Practice Gray Moneta",
					"icons": ["dress"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/06/15/IMG_20200927_182034631.jpg?itok=3_59kC6l"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/practice-moneta-old-gray-bedsheet-version",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Embroidered Flowers Knit Top",
					"icons": ["shirt"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/04/IMG_20201010_223156708.jpg?itok=NPJXEdGV"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/knit-top-practice",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Practice Gray Knit Top",
					"icons": ["shirt"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/06/15/IMG_20201007_230719591.jpg?itok=TDJbAITI"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/knit-top-practice",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Knitting skirt",
					"icons": ["skirt"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20200602_172303769.jpg?itok=pxUVqM-7"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/skirts-me-no-pattern-1-yard-fabric-each",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Sunflower skirt",
					"icons": ["skirt"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/04/IMG_20180916_144742677_HDR.jpg?itok=yVOict1_"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/skirts-me-no-pattern-1-yard-fabric-each",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Nintendo Switch case",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/06/25/20%20Gameboy%20cover%20sewing%201.jpg?itok=XiQZO09J"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/nintendo-switch-case",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Big Girl (Reversible) Bag",
					"icons": ["bag"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20180911_070641305.jpg?itok=hPWpfXH1"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/big-girl-bag-reversible",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Bags for Mom and Grandma",
					"icons": ["bag"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20171224_132413237.jpg?itok=C7fb4cuD"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/tote-bags-mom-and-grandma",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Adventure Bag",
					"icons": ["bag"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20170715_204102926.jpg?itok=bl7MGkJm"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/adventure-bag",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Cat Hood",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/14/IMG_20201231_154403468_0.jpg?itok=ImKnGP-H"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/cat-hood",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Sushi PJ pants",
					"icons": ["gift", "PJpants"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/04/IMG_20210102_151356772.jpg?itok=YX37B5Ku"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/pj-pants-various-people-over-years",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Monsters Inc. PJ Shorts",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/14/IMG_20210714_163941760.jpg?itok=2Ocds1O_"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/pj-pants-various-people-over-years",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Knitting PJ pants",
					"icons": ["PJpants"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/14/IMG_20210714_161445130.jpg?itok=y1OkFmFy"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/pj-pants-various-people-over-years",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Music Blanket",
					"icons": ["gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/15/IMG_20180830_130435931.jpg?itok=eJIc4H1v"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/music-blanket",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Music PJ pants",
					"icons": ["PJpants", "gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20210708_201628945.jpg?itok=0SEk-Sd_"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/pj-pants-various-people-over-years",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Majora's Mask PJ pants",
					"icons": ["gift", "PJpants"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/04/IMG_20191210_185504811_HDR.jpg?itok=clUAn9Kx"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/pj-pants-various-people-over-years",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Windwaker PJ pants",
					"icons": ["PJpants", "gift"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_20210708_201857742.jpg?itok=q7Q9EbF1"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/pj-pants-various-people-over-years",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Butterfly Chair cover",
					"icons": ["home"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/IMG_1384.JPG?itok=JS5jtgiT"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/butterfly-chair-covercushion",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Doll Tent",
					"icons": ["FF", "doll"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/dog%20sleeping%20bag%20and%20tent.png?itok=Lugu8zhV"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/tent-and-sleeping-bags-18-dolls",
					"description": ""
				},
				{
					"container": "sewingdresser",
					"name": "Doll Sofa Bed",
					"icons": ["FF", "doll"],
					"color": colors["transparent"],
					"viewer": "bulletinBoard-purple",
					"photos": ["https://www.textillia.com/system/files/styles/large/private/img/2021/07/09/doll%20couch.png?itok=k0zjIx4t"],
					"link": "https://www.textillia.com/members/purplegreenprojects/projects/18-doll-sofa-bed",
					"description": ""
				},

		// WHITE

				{
					"container": "deskshelf0",
					"name": "",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "",
					"photos": [""],
					"link": "writing/", 
					"description": ""
				},

				{
					"container": "deskshelf1",
					"name": "Favorite Places",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["favoriteplaces/images/2.jpg", "favoriteplaces/images/3.jpg", "favoriteplaces/images/4.jpg", "favoriteplaces/images/5.jpg", "favoriteplaces/images/6.jpg", "favoriteplaces/images/7.jpg"],
					"link": "favoriteplaces/", 
					"description": ""
				},	

				{
					"container": "deskshelf1",
					"name": "Nova Scotia",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["novascotia/images/1.jpg", "novascotia/images/2.jpg", "novascotia/images/3.jpg", "novascotia/images/4.jpg", "novascotia/images/5.jpg", "novascotia/images/6.jpg", "novascotia/images/7.jpg", "novascotia/images/8.jpg", "novascotia/images/9.jpg", "novascotia/images/10.jpg", "novascotia/images/11.jpg", "novascotia/images/12.jpg", "novascotia/images/13.jpg", "novascotia/images/14.jpg", "novascotia/images/15.jpg", "novascotia/images/16.jpg", "novascotia/images/17.jpg", "novascotia/images/18.jpg"],
					"link": "novascotia/", 
					"description": ""
				},

				{
					"container": "deskshelf1",
					"name": "Montreal",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["montreal/images/1.jpg", "montreal/images/2.jpg", "montreal/images/3.jpg", "montreal/images/4.jpg"],
					"link": "montreal/",
					"description": ""
				},

				{
					"container": "deskshelf1",
					"name": "England",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["england/images/9.jpg", "england/images/12.jpg", "england/images/14.jpg", "england/images/15.jpg", "england/images/16.jpg", "england/images/19.jpg"],
					"link": "england/",
					"description": ""
				},

				{
					"container": "deskshelf1",
					"name": "San Francisco",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["sanfran/images/5.jpg", "sanfran/images/6.jpg", "sanfran/images/10.jpg", "sanfran/images/16.jpg", "sanfran/images/24.jpg", "sanfran/images/25.jpg"],
					"link": "sanfran/",
					"description": ""
				},

				{
					"container": "deskshelf1",
					"name": "Massachusetts",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["massachusetts/images/1.jpg","massachusetts/images/2.jpg","massachusetts/images/3.jpg","massachusetts/images/4.jpg","massachusetts/images/5.jpg","massachusetts/images/6.jpg","massachusetts/images/7.jpg","massachusetts/images/8.jpg","massachusetts/images/9.jpg","massachusetts/images/10.JPG","massachusetts/images/11.JPG","massachusetts/images/12.jpg","massachusetts/images/13.jpg","massachusetts/images/14.jpg","massachusetts/images/15.jpg","massachusetts/images/16.jpg","massachusetts/images/17.JPG","massachusetts/images/18.JPG","massachusetts/images/19.JPG",],
					"link": "massachusetts/",
					"description": ""
				},

				{
					"container": "deskshelf2",
					"name": "Shaker High School",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["educationprofession/images/SHS.JPG", "educationprofession/images/SHS1.JPG"], //"education/images/diplomaSHS.jpg"
					"link": "https://www.northcolonie.org",
					"description": ""
				},

				{
					"container": "deskshelf2",
					"name": "Binghamton University",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["educationprofession/images/Bing.jpg", "educationprofession/images/Bing1.jpg"], //"education/images/diplomaBing.jpg"
					"link": "https://www.binghamton.edu/",
					"description": ""
				},

				{
					"container": "deskshelf2",
					"name": "SUNY New Paltz",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["educationprofession/images/NP.JPG", "educationprofession/images/NP1.JPG"], //"education/images/diplomaNP"
					"link": "https://www.newpaltz.edu/commdis",
					"description": ""
				},

				{
					"container": "deskshelf2",
					"name": "SLP/Literacy",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["educationprofession/images/SLP.jpg"],
					"link": "https://drive.google.com/drive/folders/15hO_LddoZryhhteHKZASoAAZQ4MsbJBp?usp=sharing",
					"description": ""
				},

				{
					"container": "deskshelf3",
					"name": "interesting",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["stories/images/1.jpg", "stories/images/2.jpg", "stories/images/3.jpg", "stories/images/4.jpg", "stories/images/5.jpg", "stories/images/6.jpg", "stories/images/7.jpg", "stories/images/8.jpg", "stories/images/9.jpg", "stories/images/10.jpg", "stories/images/11.jpg", "stories/images/12.jpg", "stories/images/13.jpg", "stories/images/14.jpg", "stories/images/15.jpg", "stories/images/16.jpg", "stories/images/17.jpg"],
					"link": "stories/",
					"description": ""
				},
				{
					"container": "deskshelf3",
					"name": "sky",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["sky/images/1.jpg", "sky/images/2.jpg", "sky/images/3.jpg", "sky/images/4.jpg", "sky/images/5.jpg", "sky/images/6.jpg", "sky/images/7.jpg", "sky/images/8.jpg", "sky/images/9.jpg", "sky/images/10.jpg", "sky/images/11.jpg", "sky/images/12.jpg", "sky/images/13.jpg", "sky/images/14.jpg", "sky/images/15.jpg", "sky/images/16.jpg", "sky/images/17.JPG", "sky/images/18.jpg"],
					"link": "sky/",
					"description": ""
				},
				{
					"container": "deskshelf3",
					"name": "animals",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["animals/images/2.jpg", "animals/images/3.jpg", "animals/images/4.jpg"],
					"link": "animals/",
					"description": ""
				},
				{
					"container": "deskshelf3",
					"name": "plants",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["plants/images/1.jpg", "plants/images/2.jpg", "plants/images/3.jpg", "plants/images/4.jpg", "plants/images/5.jpg", "plants/images/6.jpg", "plants/images/7.jpg", "plants/images/8.JPG", "plants/images/9.JPG", "plants/images/10.JPG", "plants/images/11.JPG", "plants/images/12.JPG", "plants/images/13.JPG", "plants/images/14.JPG", "plants/images/15.JPG", "plants/images/16.jpg"],
					"link": "plants/",
					"description": ""
				},
				{
					"container": "deskshelf3",
					"name": "water",
					"icons": [],
					"color": colors["transparent"],
					"viewer": "window",
					"photos": ["water/images/1.jpg", "water/images/2.jpg", "water/images/3.jpg", "water/images/4.JPG", "water/images/5.JPG", "water/images/6.JPG", "water/images/7.JPG", "water/images/8.JPG", "water/images/9.JPG", "water/images/10.JPG", "water/images/11.JPG"],
					"link": "water/",
					"description": ""
				},

		// GREEN

				{
					"container": "shelf-long",
					"name": "Blender Cafe",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/blendercafe.gif"],
					"link": "blender/#image-1",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "bud vase",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/budvase.png"],
					"link": "blender/#image-2",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "bagels",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/bagels.png"],
					"link": "blender/#image-3",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "pinic breakfast",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/breakfastpicnic.png"],
					"link": "blender/#image-4",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "bread",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/bread.png"],
					"link": "blender/#image-5",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "apples",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/apples.png"],
					"link": "blender/#image-6",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "teddy bear",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/teddybear.png"],
					"link": "blender/#image-7",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "neon sign",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/neonsign.png"],
					"link": "blender/#image-8",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "cube shelf",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/shelf_cube.png"],
					"link": "blender/#image-9",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "yoga mat",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/yogamat.png"],
					"link": "blender/#image-10",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "desk",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/desk_drawing.png"],
					"link": "blender/#image-11",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "bulletin board",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/bulletinboard.png"],
					"link": "blender/#image-12",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "piano",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/piano.png"],
					"link": "blender/#image-13",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "sewing machine",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/sewingmachine.png"],
					"link": "blender/#image-14",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "dress form",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/sewingdressform.png"],
					"link": "blender/#image-15",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "banker's lamp",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/lamp_banker.png"],
					"link": "blender/#image-16",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "G'pa Chair",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/chair_gpa.png"],
					"link": "blender/#image-17",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "end table",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/table_end.png"],
					"link": "blender/#image-18",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "plant",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/plant_pothos.png"],
					"link": "blender/#image-19",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "poang chair",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/chair_poang.png"],
					"link": "blender/#image-20",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "floor lamp",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/lamp_floor.png"],
					"link": "blender/#image-21",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "reading lamp",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/lamp_reading.png"],
					"link": "blender/#image-22",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "book",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/books.png"],
					"link": "blender/#image-23",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "notebook",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["blender/images/compositionnotebooks.png"],
					"link": "blender/#image-24",
					"description": ""
				},

				{
					"container": "shelf-long",
					"name": "room",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["images/all.png"],
					"link": "blender/#image-25",
					"description": ""
				},
			/* --------------------------- */
				{
					"container": "shelf-medium",
					"name": "Snow Sculptures",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/2011snowbunny.jpg"],
					"link": "snowsculptures/", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Nova Scotia",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/novascotia.png"],
					"link": "art/#image-2", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "PurpleGreen",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/onionandpepper.png"],
					"link": "art/#image-3", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Knitting",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/knitting.png"],
					"link": "art/#image-4", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "KD Logo",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/kdlogofull.png"],
					"link": "art/#image-5", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "KD Friends",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/kdfurryfriends.png"],
					"link": "art/#image-6", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Kayaking",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/kayaking.png"],
					"link": "art/#image-7", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Water Lillies",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/waterlillies.png"],
					"link": "art/#image-8", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Oranges",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/oranges.png"],
					"link": "art/#image-9", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Cherries",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/cherries.png"],
					"link": "art/#image-10", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Blueberries",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/blueberries.png"],
					"link": "art/#image-11", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Clothesline",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/clothesline.png"],
					"link": "art/#image-12", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Stormy Laundry",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/stormylaundry.png"],
					"link": "art/#image-13", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Sunflowers",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/sunflowers.png"],
					"link": "art/#image-14", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "Pansies",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/pansies.png"],
					"link": "art/#image-15", 
					"description": ""
				},

				{
					"container": "shelf-medium",
					"name": "meteoriteMiner",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["art/images/meteoriteminer.png"],
					"link": "art/#image-16", 
					"description": ""
				},

			
			/* ------------------------------ */
				{
					"container": "shelf-short",
					"name": "Clock",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/clock.png"], //iframe with actual clock?
					"link": "clock/", 
					"description": ""
				},

				{
					"container": "shelf-short",
					"name": "Bubblewrap",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/bubblewrap.png"],
					"link": "bubblewrap/", 
					"description": ""
				},

				{
					"container": "shelf-short",
					"name": "RandomLetter",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/randomletter.png"],
					"link": "randomletter/", 
					"description": ""
				},

				{
					"container": "shelf-short",
					"name": "Synesthesia",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/synesthesia.png"],
					"link": "synesthesia/", 
					"description": ""
				},

				{
					"container": "shelf-short",
					"name": "Memory",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/memory.png"],
					"link": "memory/", 
					"description": ""
				},

				{
					"container": "shelf-short",
					"name": "KD Custom Orders",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/kdcustom.png"],
					"link": "kdcustomorder/", 
					"description": ""	
				},

				{
					"container": "shelf-short",
					"name": "yarnSwatter",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/yarnswatter.png"],
					"link": "yarnswatter/", 
					"description": ""
				},

				{
					"container": "shelf-short",
					"name": "carrotCollector",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/carrotcollector10.png"],
					"link": "carrotcollector/", 
					"description": ""
				},

				{
					"container": "shelf-short",
					"name": "SciFi Sounds",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/scifisounds.png"],
					"link": "scifisoundboard/", 
					"description": ""
				},

				{
					"container": "shelf-short",
					"name": "Window",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/window_winter.png"],
					"link": "window/#winter", 
					"description": ""
				},

				{
					"container": "shelf-short",
					"name": "nimbusNotes",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/nimbusnotes.png"],
					"link": "https://nimbusnotes.herokuapp.com", 
					"description": ""
				},

				{
					"container": "shelf-short",
					"name": "PurpleGreen Projects",
					"icons": [],
					"color": chooseRandom(colors.greens),
					"viewer": "bulletinBoard-green",
					"photos": ["coding/images/oldpurplegreenprojects.png"],
					"link": "oldpurplegreenprojectsroom/", 
					"description": ""
				},
				
			/* ----------------------- */
				{
					"container": "piano-musicStand",
					"name": "Chroma",
					"icons": [],
					"color": "orange", //image - album artwork
					"viewer": "bulletinBoard-green",
					"photos": ["music/images/Chroma.png"], //associated images / eventually music video
					"link": "music/Chroma.mp3", //music file - click to play/pause
					"description": ""	
				},

				{
					"container": "piano-musicStand",
					"name": "Whether",
					"icons": [],
					"color": "blue", //image - album artwork
					"viewer": "bulletinBoard-green",
					"photos": ["music/images/Whether.png"], //associated images / eventually music video
					"link": "music/Whether.mp3", //music file - click to play/pause
					"description": ""	
				},

				{
					"container": "piano-musicStand",
					"name": "Elephant",
					"icons": [],
					"color": "red", //image - album artwork
					"viewer": "bulletinBoard-green",
					"photos": ["music/images/Elephant.jpg"], //associated images / eventually music video
					"link": "music/Elephant.mp3", //music file - click to play/pause
					"description": ""	
				},

				{
					"container": "piano-musicStand",
					"name": "These Days",
					"icons": [],
					"color": "purple", //image - album artwork
					"viewer": "bulletinBoard-green",
					"photos": ["music/images/TheseDays.jpg"], //associated images / eventually music video
					"link": "music/TheseDays.mp3",
					"description": ""	
				},

				{
					"container": "piano-musicStand",
					"name": "Chaos in Circles",
					"icons": [],
					"color": "sienna", //image - album artwork
					"viewer": "bulletinBoard-green",
					"photos": ["music/images/ChaosinCircles.jpg"], //associated images / eventually music video
					"link": "music/ChaosinCircles.mp3", //music file - click to play/pause
					"description": ""	
				},

				{
					"container": "piano-musicStand",
					"name": "EveryTime",
					"icons": [],
					"color": "orchid", //image - album artwork
					"viewer": "bulletinBoard-green",
					"photos": ["music/images/EveryTime.jpg"], //associated images / eventually music video
					"link": "music/EveryTime.mp3", //music file - click to play/pause
					"description": ""	
				},

				{
					"container": "piano-musicStand",
					"name": "Collecting Carrots",
					"icons": [],
					"color": "brown", //image - album artwork
					"viewer": "bulletinBoard-green",
					"photos": ["music/images/CollectingCarrots.png"], //associated images / eventually music video
					"link": "music/CollectingCarrots.mp3", //music file - click to play/pause
					"description": ""	
				},

			]  

	// ELEMENTS
		var buttons = {
			"all-purple": document.getElementById("all-purple"),
			"all-white": document.getElementById("all-white"),
			"all-green": document.getElementById("all-green"),
			"purple-all": document.getElementById("purple-all"),
			"white-all": document.getElementById("white-all"),
			"green-all": document.getElementById("green-all")
		}

		var walls = {
			"all": document.getElementById("all"),
			"purple": document.getElementById("purple"),
			"white": document.getElementById("white"),
			"green": document.getElementById("green")
		}

		var containers = {
			"container": document.getElementById("container"),
			"backgroundVideo": document.getElementById("background-video"),
			"backgroundVideoSource": document.getElementById("background-video-source"),
			"KDboxes": document.getElementById("KDboxes"),
			"cubeShelf": document.getElementById("cubeShelf"),
			"sewingdresser": document.getElementById("sewingdresser"),
			"deskshelf0": document.getElementById("deskshelf0"),
			"deskshelf1": document.getElementById("deskshelf1"),
			"deskshelf2": document.getElementById("deskshelf2"),
			"deskshelf3": document.getElementById("deskshelf3"),
			"shelf-long": document.getElementById("shelf-long"),
			"shelf-medium": document.getElementById("shelf-medium"),
			"shelf-short": document.getElementById("shelf-short"),
			"piano-musicStand": document.getElementById("piano-musicStand"),
		}

		var scrollersLeft = Array.from(document.querySelectorAll(".scrollArrow-left"))
		var scrollersRight = Array.from(document.querySelectorAll(".scrollArrow-right"))
		var scrollersUp = Array.from(document.querySelectorAll(".scrollArrow-up"))
		var scrollersDown = Array.from(document.querySelectorAll(".scrollArrow-down"))
		var scrollers = scrollersLeft.concat(scrollersRight).concat(scrollersUp).concat(scrollersDown)
		
		var viewers = {
			"bulletinBoard-purple": document.getElementById("bulletinBoard-purple"),
			"window": document.getElementById("window"),
			"desktop": document.getElementById("desktop"),
			"bulletinBoard-green": document.getElementById("bulletinBoard-green"),
		}

		var searchIcon = document.getElementById("searchIcon")
		var modalSearch = document.getElementById("modalSearch")
		var blurLayer = document.getElementById("blurLayer")
		var searchX = document.getElementById("searchX")
		var searchBar = document.getElementById("searchBar")
		var resultsList = document.getElementById("resultsList")

		var audio = {
			"player": document.getElementById("musicPlayer"),
			"source": document.getElementById("musicPlayer-source")
		}

	// LISTENERS
		buildButtons()

		for (var i in buttons){
			buttons[i].addEventListener("click", changeWall)
		}

		for (var i in scrollers) {
			scrollers[i].addEventListener("click", clickScrollArrow)
		}

		searchIcon.addEventListener("click", openSearch)

		searchX.addEventListener("click", closeSearch)

		blurLayer.addEventListener("click", closeSearch)

		searchBar.addEventListener("input", findResults)

// FUNCTIONS
	var selectTimeout = null
	var noneTimeout = null

	function changeWall(event){
		clearInterval(selectTimeout)
		clearInterval(noneTimeout)

		var ids = event.target.id.split("-")
		// ["all", "green"]

		for (var i in buttons) {
			buttons[i].setAttribute("disabled", true)
		}

		containers.backgroundVideo.style.opacity = 1
		containers.backgroundVideoSource.src = "videos/" + ids[0] + "-to-" + ids[1] + ".mov"
		containers.backgroundVideo.load()
		containers.backgroundVideo.play()

		containers.backgroundVideo.oncanplaythrough = function() {
			walls[ids[0]].setAttribute("selected", false)
			//<div id="all" class="wall" selected="false">

			selectTimeout = setTimeout(function(){
				walls[ids[1]].setAttribute("selected", true)
				noneTimeout = setTimeout(function(){
					containers.backgroundVideoSource.src = ""
					containers.backgroundVideo.style.opacity = 0

					for (var i in buttons) {
						buttons[i].removeAttribute("disabled")
					}
				},1000)
			},1000)
		}
	}

	function buildButtons(){
		var selectedMusic = false

		for (var i in projects){
			var button = document.createElement("a")
			button.id = "project-" + projects[i].name.replace(" ", "")
			button.innerText = projects[i].name
			button.setAttribute("photos", JSON.stringify(projects[i].photos)) // list of photo urls
			button.setAttribute("viewer", projects[i].viewer)
			button.addEventListener("mouseenter", hoverOn)
			button.addEventListener("mouseleave", hoverOff)
			button.style["background-color"] = projects[i].color

			if (projects[i].container == "piano-musicStand") {
				button.addEventListener("click", changeMusic)
				button.setAttribute("audio", projects[i].link)
				button.style["background-image"] = "url(" + projects[i].photos[0] + ")"
				
				
				if (!selectedMusic) {
					button.setAttribute("selected", true)
					selectedMusic = true
				}
			}
			else if (projects[i].link && projects[i].link.length) {
				button.target = "_blank"
				button.href = projects[i].link
			}
			// ^ if it's music, attach click listener for play/pause - otherwise, it's a link
			
			
			containers[projects[i].container].appendChild(button)

			for (var j in projects[i].icons){
				var icon = document.createElement("span")
				icon.className = "icon " + projects[i].icons[j]
				button.appendChild(icon)
			}
		}
	}

	function clickScrollArrow(event) {
		var button = event.target
		var container = containers[button.getAttribute("container")]
		var direction = button.className.split("-")[1]
		
		if (direction == "left" || direction == "right") {
			var width = Number(window.getComputedStyle(container).width.replace("px", ""))
			if (direction == "left") { // if it's moving left
				container.scrollLeft = container.scrollLeft - width
			}
			else { // else... if it's moving right
				container.scrollLeft = container.scrollLeft + width
			}
		}

		else { // if it's up or down
			var height = Number(window.getComputedStyle(container).height.replace("px",""))
			if (direction == "up") { // if it's up
				container.scrollTop = container.scrollTop - height
			}
			else { // if it's down
				container.scrollTop = container.scrollTop + height
			}
		}
	}	

	function hoverOn(event) {
		var button = event.target
		var viewerID = button.getAttribute("viewer")
		var viewer = viewers[viewerID]
		var photoURLs = button.getAttribute("photos")
		var photoURL = chooseRandom(JSON.parse(photoURLs))
		viewer.setAttribute("preview", true)
		viewer.style["background-image"] = "url(" + photoURL + ")"
		viewer.style["background-color"] = "black" 
	}

	function hoverOff(event) {
		var button = event.target
		var viewerID = button.getAttribute("viewer")
		var viewer = viewers[viewerID]
		viewer.removeAttribute("preview")
		viewer.style["background-image"] = ""
		viewer.style["background-color"] = "transparent"
	}

	function changeMusic(event) {
		var button = event.target
		var trackCovers = Array.from(containers["piano-musicStand"].children)

		for(var i in trackCovers) {
			trackCovers[i].removeAttribute("selected")
		}

		button.setAttribute("selected", true)

		var audioAddress = audio.source.src.split("/")

		if ("music/" + audioAddress[audioAddress.length - 1] == button.getAttribute("audio")) {
			if (audio.player.paused) {
				audio.player.play()
			}
			else {
				audio.player.pause()
			}
		}
		else {
			audio.source.src = button.getAttribute("audio")
			audio.player.currentTime = 0
			audio.player.load()
			audio.player.play()
		}
	}

	function chooseRandom(array) {
		return array[Math.floor(Math.random() * array.length)]
	}

	function openSearch() {
		modalSearch.setAttribute("visible", true)
		blurLayer.setAttribute("visible", true)
		containers.container.setAttribute("blur", true)

		searchBar.value = ""
		searchBar.focus()
	}

	function closeSearch() {
		modalSearch.setAttribute("visible", false)
		blurLayer.setAttribute("visible", false)
		containers.container.setAttribute("blur", false)
	}

	function findResults() {
		var searchText = searchBar.value.trim()
			searchText = searchText.toLowerCase()
		
		resultsList.innerHTML = ""

		if (searchText.length > 2) {
			var results = projects.filter(function(project) {
				return project.name.toLowerCase().includes(searchText)
			})

			if (results.length > 1) {
				results.sort(function(a, b) {
					var resultPositionA = a.name.toLowerCase().indexOf(searchText)
					var resultPositionB = b.name.toLowerCase().indexOf(searchText)

					return (resultPositionA - resultPositionB)
				})
			}

			for (var i in results) {
				displayResult(results[i])
			}
		}
	}

	function displayResult(project) {
		var result = document.createElement("a")
		result.className = "searchResult"
		result.href = project.link
		result.target = "_blank"
		result.addEventListener("click", closeSearch)
		resultsList.appendChild(result)

		var image = document.createElement("div")
		image.className = "searchImage"
		image.style.backgroundImage = "url(" + project.photos[0] + ")"
		result.appendChild(image)

		var text = document.createElement("div")
		text.className = "searchText"
		text.innerText = project.name
		result.appendChild(text)
	}

}
