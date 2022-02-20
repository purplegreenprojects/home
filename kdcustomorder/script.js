$(document).ready(function() {

	//YARN COLOR INFORMATION
			// Object = {
			// 	"key":"value",
			// 	"key":"value",
			// 	"key":"value"
			// }

			// Array = ["value","value","value"];
			// (index =    0,      1,      2)

			var Pipsqueak = {
				//"Color":["url","light/dark"], // "key": [0,1],

				"White":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59005-162059-B-PIP-WhiteyWhite.jpg",
				"Vanilla":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59008-162059-B-PIP-Vanilla_1.jpg",
				"Chocolate":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59012-162059-B-PIP-Chocolate.jpg",
				"Lemon":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59610-162059-B-PIP-LemonSwirl.jpg",
				"Baby Blue":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59128-162059-B-PIP-BabyBlue.jpg",
				"Blue Swirl":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59115-162059-B-PIP-BlueJeansSwirl_1.jpg",
				"Denim":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59114-162059-B-PIP-Denim.jpg",
				"Ice Blue":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59745-162059-B-PIP-BlueIce.jpg",
				"Baby Pink":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59421-162059-B-PIP-TickleMePink_1.jpg",
				"Pink Swirl":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/s/w/sw-58413-162058-b-pip-pinkswirl-copy.jpg",
				"Neopolitan":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59245-162059-B-PIP-Neopolitan.jpg",
				"Grape":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/s/w/sw-59332-162059-bernat-pipsqueak-grape.jpg",
				"Lime":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59222-162059-B-PIP-LimeGreen.jpg",
				"Funny Bunny":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59744-162059-B-PIP-FunnyBunny.jpg",
				"Candy Girl":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59415-162059-B-PIP-CandyGirl.jpg",
				"Sittin' Pretty":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59315-162059-B-PIP-SittinPretty.jpg",
				"Baby Baby":"http://yarnspirations.s3.amazonaws.com/catalog/product/cache/1/thumbnail/150x/9df78eab33525d08d6e5fb8d27136e95/S/W/SW-59306-162059-B-PIP-BabyBaby.jpg"
			}

			var Homespun = {
				"White":"https://d2d00szk9na1qq.cloudfront.net/Product/7deac14c-a209-45a0-9db0-7c259e5ba7e8/Images/Medium_LBY-205.jpg",
				"Cream":"https://d2d00szk9na1qq.cloudfront.net/Product/24ef842a-b3f6-4765-b610-55bffb1e63e5/Images/Medium_LBY-243.jpg",
				"Rococo":"https://d2d00szk9na1qq.cloudfront.net/Product/d92c17db-d056-4b2e-ab4a-e4cdd51650e8/Images/Medium_LBY-248.jpg",
				"Barley":"https://d2d00szk9na1qq.cloudfront.net/Product/4e37b5dc-971b-4ccc-957a-23de0ad48c60/Images/Large_LBY-246.jpg",
				"Clouds":"https://d2d00szk9na1qq.cloudfront.net/Product/4c7672af-4a79-4677-ba94-b32238b6072e/Images/Medium_0326187.jpg",
				"Edwardian":"https://d2d00szk9na1qq.cloudfront.net/Product/25bc937e-a6a8-419c-91d0-d02f88e98ccd/Images/Medium_LBY-251.jpg",
				"Golden":"https://d2d00szk9na1qq.cloudfront.net/Product/d3648357-a709-459e-b98f-f0413234d05e/Images/Medium_LBY-208.jpg",
				"Sand Dune":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-sand-dune-2.gif",
				"Shaker":"https://d2d00szk9na1qq.cloudfront.net/Product/87bc06a5-2793-4233-95a6-a538bc5b412c/Images/Medium_LBY-249.jpg",
				"Black":"https://d2d00szk9na1qq.cloudfront.net/Product/2af5de9f-faca-4854-90f3-bb3e79ab04bc/Images/Medium_LBY-253.jpg",
				"Spice":"http://www.lionbrand.com/stores/eyarn/pictures/790-425a.jpg",
				"Sierra":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-sierra-5.gif",
				"Desert Mountain":"http://ep.yimg.com/ay/yhst-35918166028110/lion-brand-homespun-yarn-desert-mountain-3.gif",
				"Colonial":"http://ep.yimg.com/ay/yhst-132146841436290/homespun-yarn-colonial-8.jpg",
				"Montana Sky":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-montana-sky-6.gif",
				"Plum":"https://d2d00szk9na1qq.cloudfront.net/Product/78161e82-74d1-44c4-b43e-9abe09db649b/Images/Large_0326186.jpg",
				"Cherry Blossom":"http://ep.yimg.com/ay/yhst-132146841436290/homespun-yarn-cherry-blossom-8.jpg",
				"Coral Reef":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-coral-reef-7.jpg",
				"Delft":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-delft-6.gif",
				"Mimosa":"http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AAPM_PRD/on/demandware.static/-/Sites-sales-catalog/default/dw60532bff/images/products/3416625.jpg?sw=1500&sh=1500",
				"Mixed Berries":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010790P_mixed-berries.tif&wid=480&cvt=jpeg",
				"Ocean":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw8c97741c/images/hi-res/17/1777408.jpg?sw=350&sh=350&sm=fit",
				"Olive":"http://www.deramores.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0008_8_2.jpg",
				"Parfait":"https://d2d00szk9na1qq.cloudfront.net/Product/f6dc1478-dace-4314-b28a-bd1bb16b0289/Images/Large_LBY-262.jpg", 
				"Pesto":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-pesto-7.jpg",
				"Purple Haze":"http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AAPM_PRD/on/demandware.static/-/Sites-sales-catalog/default/dwd701d6bd/images/products/3416658.jpg?sw=1500&sh=1500", 
				"Regency":"http://ep.yimg.com/ay/yhst-132146841436290/homespun-yarn-regency-7.jpg",
				"Waterfall":"https://d2d00szk9na1qq.cloudfront.net/Product/f2afd136-89a0-49d7-b757-e51f26071b4e/Images/Large_LBY-957.jpg", 
				"Wildfire":"https://d2d00szk9na1qq.cloudfront.net/Product/ecde95f4-6148-4911-ba43-6ecb87971810/Images/Large_LBY-265.jpg",
				"Pearls":"https://d2d00szk9na1qq.cloudfront.net/Product/ab5b3190-3022-44db-8a1a-189a8d4e8ec7/Images/Large_LBY-269.jpg",
				"Blue Moon":"https://d2d00szk9na1qq.cloudfront.net/Product/890ed4a7-aeb1-4ffc-ad61-2710f49169bb/Images/Large_0326189.jpg",
				"Claret":"https://d2d00szk9na1qq.cloudfront.net/Product/9184ac23-0b5e-4a04-9df2-987139126e3e/Images/Large_0345364.jpg",
				"Forest":"http://ep.yimg.com/ay/yhst-73078103945512/lion-brand-homespun-yarn-forest-2.gif",
				"Petunia Stripes":"http://isv.cdn.loveknitting.com/index.php/v1/images/90770789-314f-455e-800b-94ae7bee6321.jpg"
			}

			var Caron = {
				"White":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw3b695d73/images/hi-res/54/5408000.jpg?sw=350&sh=350&sm=fit",
				"Off White":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw053043ec/images/hi-res/54/5408034.jpg?sw=350&sh=350&sm=fit",
				"Maize":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwbd8c2a2e/images/hi-res/10/10105153.jpg?sw=350&sh=350&sm=fit",
				"Sunshine":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwc21f48dc/images/hi-res/10/10617686.jpg?sw=350&sh=350&sm=fit",
				"Gold":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9f7d8a45/images/hi-res/13/13922091.jpg?sw=350&sh=350&sm=fit",
				"Bone":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw7810334b/images/hi-res/54/5408059.jpg?sw=350&sh=350&sm=fit",
				"Grey":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwb66ad859/images/hi-res/62/6206171.jpg?sw=350&sh=350&sm=fit",
				"Charcoal":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw189b7ad7/images/hi-res/12/12436713.jpg?sw=350&sh=350&sm=fit",
				"Black":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw79e9545a/images/hi-res/54/5408216.jpg?sw=350&sh=350&sm=fit",
				"Pumpkin":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwedd0ef6e/images/hi-res/12/12664496.jpg?sw=350&sh=350&sm=fit",
				"Taupe":"http://media.woolwarehouse.co.uk/media/catalog/product/cache/1/image/750x500/9df78eab33525d08d6e5fb8d27136e95/c/r/cr_simplysoft_9783_0.jpg",
				"Persimmon":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw439173a3/images/hi-res/10/10617678.jpg?sw=350&sh=350&sm=fit",
				"Soft Pink":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw1e353ca0/images/hi-res/54/5408125.jpg?sw=350&sh=350&sm=fit",
				"Victorian Rose":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw47d6e3fb/images/hi-res/54/5413760.jpg?sw=350&sh=350&sm=fit",
				"Strawberry":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw453b1d5e/images/hi-res/10/10821767.jpg?sw=350&sh=350&sm=fit",
				"Light Country Peach":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw8ce663df/images/hi-res/54/5408265.jpg?sw=350&sh=350&sm=fit",
				"Fushia":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw7edef1b4/images/hi-res/12/12864633.jpg?sw=350&sh=350&sm=fit",
				"Iris":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw42806259/images/hi-res/98/9857673.jpg?sw=350&sh=350&sm=fit",
				"Lavender Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw0a99de8b/images/hi-res/10/10617694.jpg?sw=350&sh=350&sm=fit",
				"Country Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw6fd2b053/images/hi-res/54/5408091.jpg?sw=350&sh=350&sm=fit",
				"Light Country Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwb66208de/images/hi-res/54/5413984.jpg?sw=350&sh=350&sm=fit",
				"Soft Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9ea82edc/images/hi-res/54/5408083.jpg?sw=350&sh=350&sm=fit",
				"Dark Country Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwd5230a0d/images/hi-res/54/5408158.jpg?sw=350&sh=350&sm=fit",
				"Royal Blue":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw60ebd93b/images/hi-res/12/12664488.jpg?sw=350&sh=350&sm=fit",
				"Cobalt":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw4824dabd/images/hi-res/13/13922109.jpg?sw=350&sh=350&sm=fit",
				"Ocean":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw3f502766/images/hi-res/10/10617892.jpg?sw=350&sh=350&sm=fit",
				"Pagoda":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw9036e9a7/images/hi-res/10/10105203.jpg?sw=350&sh=350&sm=fit",
				"Green":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw56ceae88/images/hi-res/15/15015944.jpg?sw=350&sh=350&sm=fit",
				"Dark Sage":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwb8659b72/images/hi-res/54/5408190.jpg?sw=350&sh=350&sm=fit",
				"Pistachio":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw0408c115/images/hi-res/10/10105161.jpg?sw=350&sh=350&sm=fit",
				"Woodland":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwdc7bfa89/images/hi-res/15/15015928.jpg?sw=350&sh=350&sm=fit"
			}	

			var Parfait = {
				"White":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw842d4a99/images/hi-res/12/12866711.jpg?sw=350&sh=350&sm=fit",
				"Cream":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw463aa837/images/hi-res/12/12866216.jpg?sw=350&sh=350&sm=fit",
				"Black":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dweb2e6019/images/hi-res/12/12866299.jpg?sw=350&sh=350&sm=fit",
				"Licorice":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dw382ebecc/images/hi-res/12/12866869.jpg?sw=350&sh=350&sm=fit",
				"Candy Corn":"http://demandware.edgesuite.net/sits_joann/dw/image/v2/AAMM_PRD/on/demandware.static/-/Sites-joann-product-catalog/default/dwc69c4f8b/images/hi-res/12/12866836.jpg?sw=350&sh=350&sm=fit",
				"Toffee":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_toffee.tif&wid=1000=&cvt=jpeg",
				"Butter":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_butter.tif&wid=480&cvt=jpeg",
				"Lemon Ice":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_lemon-ice.tif&wid=480&cvt=jpeg",
				"Cotton Candy":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_cotton-candy.tif&wid=480&cvt=jpeg",
				"Cherry":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_cherry.tif&wid=480&cvt=jpeg",
				"Cherry Pie":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_cherry-pie.tif&wid=480&cvt=jpeg",
				"Meringue":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_meringue.tif&wid=480&cvt=jpeg",
				"Rock Candy":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_rock-candy.tif&wid=480&cvt=jpeg",
				"Menthe":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_creme-de-menthe.tif&wid=480&cvt=jpeg",
				"Lemon Blueberry":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_lemon-blueberry.tif&wid=480&cvt=jpeg",
				"Blueberry":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_blueberry.tif&wid=480&cvt=jpeg",
				"Wintergreen":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_wintergreen.tif&wid=480&cvt=jpeg",
				"Melon":"https://ii.herrschners.com/fcgi-bin/iipsrv.fcgi?FIF=/images/herrschners/source/products/010222P_melon.tif&wid=480&cvt=jpeg"
			}

			var KnitPicks = {
				"Blackberry":"http://d2q9kw5vp0we94.cloudfront.net/regular/24157.jpg",
				"White":"http://d2q9kw5vp0we94.cloudfront.net/regular/25315.jpg",
				"Black":"http://d2q9kw5vp0we94.cloudfront.net/regular/25316.jpg",
				"Whisker":"http://d2q9kw5vp0we94.cloudfront.net/regular/24800.jpg",
				"Hawk":"http://d2q9kw5vp0we94.cloudfront.net/regular/25312.jpg",
				"Coffee":"http://d2q9kw5vp0we94.cloudfront.net/regular/26673.jpg",
				"Carrot":"http://d2q9kw5vp0we94.cloudfront.net/regular/25771.jpg",
				"Doe":"http://d2q9kw5vp0we94.cloudfront.net/regular/24797.jpg",
				"Ivory":"http://d2q9kw5vp0we94.cloudfront.net/regular/24162.jpg",
				"Flamingo":"http://d2q9kw5vp0we94.cloudfront.net/regular/24154.jpg",
				"Peony":"http://d2q9kw5vp0we94.cloudfront.net/regular/24423.jpg",
				"Pomegranate":"http://d2q9kw5vp0we94.cloudfront.net/regular/24160.jpg",
				"Rosehip":"http://d2q9kw5vp0we94.cloudfront.net/regular/25769.jpg",
				"Lady Slipper":"http://d2q9kw5vp0we94.cloudfront.net/regular/25767.jpg",
				"Fairytale":"http://d2q9kw5vp0we94.cloudfront.net/regular/25313.jpg",
				"Lilac":"http://d2q9kw5vp0we94.cloudfront.net/regular/24798.jpg",
				"Sea Foam":"http://d2q9kw5vp0we94.cloudfront.net/regular/24153.jpg",
				"Marlin":"http://d2q9kw5vp0we94.cloudfront.net/regular/24422.jpg",
				"Planetarium":"http://d2q9kw5vp0we94.cloudfront.net/regular/24159.jpg",
				"Light blue":"http://d2q9kw5vp0we94.cloudfront.net/regular/25311.jpg",
				"Comfy Marina":"http://d2q9kw5vp0we94.cloudfront.net/regular/25768.jpg",
				"Honey Dew":"http://d2q9kw5vp0we94.cloudfront.net/regular/24152.jpg",
				"Peapod":"http://d2q9kw5vp0we94.cloudfront.net/regular/24801.jpg",
				"Jalapeno":"http://d2q9kw5vp0we94.cloudfront.net/regular/24420.jpg",
				"Celestial":"http://d2q9kw5vp0we94.cloudfront.net/regular/25314.jpg"
			}

			var yarn = {
				"Caron Simply Soft":[Caron,"this is caron"],
				"KnitPicks Comfy":[KnitPicks,"this is knitpicks"],
				"Lion Brand Homespun":[Homespun,"This is lion brand"],
				"Bernat Pipsqueak":[Pipsqueak,"This is bernat"],
				"Premier Parfait":[Parfait,"and this is parfait"]
			}

	//FUNCTIONS

		//get from URL
		function get(search) {
			//gets the part of the URL after the basic stuff and turns it into a string, then gets rid of the ? by starting one after that
			var data = String (location.search).substr(1);
			var dataArray = data.split("&");
			var pairsArray = [];
			var i = 0;
			while (i < dataArray.length) {
				var index = dataArray[i].substring(0,dataArray[i].indexOf("="));
				var value = dataArray[i].substring(dataArray[i].indexOf("=")+1);
				value = value.replace(/\*/g, " ");
				pairsArray[index] = value;
				i++;
			}

			if (typeof pairsArray[search] === "undefined") {
				return "";
			}
			else {
				return pairsArray[search];
			}
		}


		//searches for index, returns value - if value has a length of zero, that's the page you're on
		function loadPageContents() {

			if ( get("start").length === 0) {
				var pagePicked = "welcome";
			}
			else if ( get("item").length === 0) {
				var pagePicked = "item";
			}
			else if ( get("yarn").length === 0) {
				var pagePicked = "yarn";
			}
			else if ( get("mc").length === 0) {
				var pagePicked = "mc";
			}
			else if ( get("cc").length === 0) {
				var pagePicked = "cc";
			}
			else if ( get("cc_areas").length === 0) {
				var pagePicked = "cc_areas";
			}
			else if ( get("accent_color").length === 0) {
				var pagePicked = "accent_color";
			}
			else if ( get("submit").length === 0) {
				var pagePicked = "email";
			}

			else {
				var pagePicked = "success";
			}

			console.log(pagePicked);

			buildPage(pagePicked);
		}

		//"Create" Functions
			function createPreviews() {
				$("#preview").empty()
				.append("<div class='previewdiv_profile'></div>")
				.append("<div class='previewdiv_face'></div>")
				.append("<div class='previewdiv_zoom'></div>");
			}

			function createCat() {
				$(".previewdiv_face").empty()
					.append("<div id='catface' class='catpart_face previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='catface_nose' class='catpart_face previewPart' style='background-color: pink'></div>")
					.append("<div id='catface_nose_line' class='catpart_face previewPart line' style='background-color: black'></div>")
					.append("<div id='catface_pupil_left' class='catpart_face previewPart pupils' style='background-color: black'></div>")
					.append("<div id='catface_pupil_leftSPOT' class='catpart_face previewPart' style='background-color: white'></div>")
					.append("<div id='catface_pupil_right' class='catpart_face previewPart pupils' style='background-color: black'></div>")
					.append("<div id='catface_pupil_rightSPOT' class='catpart_face previewPart' style='background-color: white'></div>")
					.append("<div id='catface_iris_left' class='catpart_face previewPart accentable' style='background-color: white'></div>")
					.append("<div id='catface_iris_right' class='catpart_face previewPart accentable' style='background-color: white'></div>")
					.append("<div id='catface_ear_left' class='catpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='catface_ear_right' class='catpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='catface_chin' class='catpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='catface_nose-area' class='catpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='catface_muzzle' class='catpart_face previewPart yarnable contrastable' style='background-color: black'></div>")

				$(".previewdiv_profile").empty()
					.append("<div id='catprofile' class='catpart_profile previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='catprofile_legline_front' class='catpart_profile previewPart line'></div>")
					.append("<div id='catprofile_legline_back' class='catpart_profile previewPart line'></div>")
					.append("<div id='catprofile_nose' class='catpart_profile previewPart'></div>")
					.append("<div id='catprofile_eye' class='catpart_profile previewPart line accentable'></div>")
					.append("<div id='catprofile_ears' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='catprofile_nose-area' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='catprofile_muzzle' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='catprofile_stomach' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='catprofile_chin' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='catprofile_paw_front_left' class='catpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
					.append("<div id='catprofile_paw_front_right' class='catpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
					.append("<div id='catprofile_paw_back_left' class='catpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
					.append("<div id='catprofile_paw_back_right' class='catpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
					.append("<div id='catprofile_tail' class='catpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")

				$(".contrastable").hide();
			}

			function createCatButtons() {
				//Liz, make sure you update this - James
				// ears, nose area, muzzle, chin
				$("#optionsScroll").empty()
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_ears,catface_ear_right,catface_ear_left'>Ears</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_nose-area,catface_nose-area'>Nose Area</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_muzzle,catface_muzzle'>Muzzle</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_chin,catprofile_stomach,catface_chin'>Chin and Stomach</button>")

					.append("<button class='btn btn-lg btn-default cc_areas_button left-half-button' value='catprofile_paw_front_right'>Right Front Paw</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button right-half-button' value='catprofile_paw_back_right'>Right Back Paw</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button left-half-button' value='catprofile_paw_front_left'>Left Front Paw</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button right-half-button' value='catprofile_paw_back_left'>Left Back Paw</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='catprofile_tail'>Tail</button>");
			}

			function createDog() {
				$(".previewdiv_face").empty()
					.append("<div id='dogface' class='dogpart_face previewPart yarnable' style='background-color: black' background-repeat: no-repeat; background-size: contain'></div>")
					.append("<div id='dogface_nose' class='dogpart_face previewPart' style='background-color: black' background-repeat: no-repeat; background-size: contain'></div>")
					.append("<div id='dogface_nose_line' class='dogpart_face previewPart line' style='background-color: white' background-repeat: no-repeat; background-size: contain'></div>")
					.append("<div id='dogface_mouth_line' class='dogpart_face previewPart line' style='background-color: white' background-repeat: no-repeat; background-size: contain'></div>")
					
					.append("<div id='dogface_ear_left' class='dogpart_face previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='dogface_ear_left_LINE' class='dogpart_face previewPart line' style='background-color: white'></div>")
					.append("<div id='dogface_ear_right' class='dogpart_face previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='dogface_ear_right_LINE' class='dogpart_face previewPart line' style='background-color: white'></div>")
					.append("<div id='dogface_chin' class='dogpart_face previewPart yarnable' style='background-color: black'></div>")
						
					.append("<div id='dogface_pupil_left' class='dogpart_face previewPart pupils' style='background-color: black'></div>")
					.append("<div id='dogface_pupil_leftSPOT' class='dogpart_face previewPart' style='background-color: white'></div>")
					.append("<div id='dogface_pupil_right' class='dogpart_face previewPart pupils' style='background-color: black'></div>")
					.append("<div id='dogface_pupil_rightSPOT' class='dogpart_face previewPart' style='background-color: white'></div>")
						
						.append("<div id='dogface_iris_left' class='dogpart_face previewPart accentable' style='background-color: white'></div>")
						.append("<div id='dogface_iris_right' class='dogpart_face previewPart accentable' style='background-color: white'></div>")
						.append("<div id='dogface_ear_leftCC' class='dogpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
						.append("<div id='dogface_ear_rightCC' class='dogpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
						.append("<div id='dogface_nose-area' class='dogpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
						.append("<div id='dogface_muzzle' class='dogpart_face previewPart yarnable contrastable' style='background-color: black'></div>")
						.append("<div id='dogface_chinCC' class='dogpart_face previewPart yarnable contrastable' style='background-color: black'></div>")

				$(".previewdiv_profile").empty()
					.append("<div id='dogprofile' class='dogpart_profile previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='dogprofile_legline_front' class='dogpart_profile previewPart line' style='background-color: white'></div>")
					.append("<div id='dogprofile_backFRONTLEG' class='dogpart_profile previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='dogprofile_legline_back' class='dogpart_profile previewPart line' style='background-color: white'></div>")
					.append("<div id='dogprofile_backBACKLEG' class='dogpart_profile previewPart yarnable' style='background-color: black'></div>")
					

					.append("<div id='dogprofile_ears' class='dogpart_profile previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='dogprofile_ear_line' class='dogpart_profile previewPart line' style='background-color: white'></div>")
					.append("<div id='dogprofile_nose' class='dogpart_profile previewPart' style='background-color:black'></div>")
					.append("<div id='dogprofile_nose_line' class='dogpart_profile previewPart line' style='background-color:white'></div>")
					.append("<div id='dogprofile_eye' class='dogpart_profile previewPart line accentable' style='background-color:white'></div>")

					.append("<div id='dogprofile_earsCC' class='dogpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='dogprofile_nose-area' class='dogpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='dogprofile_muzzle' class='dogpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='dogprofile_shoulders' class='dogpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='dogprofile_chin_chest' class='dogpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='dogprofile_paw_front_left' class='dogpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
					.append("<div id='dogprofile_paw_front_right' class='dogpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
					.append("<div id='dogprofile_paw_back_left' class='dogpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
					.append("<div id='dogprofile_paw_back_right' class='dogpart_profile yarnable previewPart contrastable' style='background-color: black'></div>")
					.append("<div id='dogprofile_stomach' class='dogpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")
					.append("<div id='dogprofile_tail' class='dogpart_profile previewPart yarnable contrastable' style='background-color: black'></div>")

				$(".contrastable").hide();
			}

			function createDogButtons() {

				$("#optionsScroll").empty()
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='dogprofile_earsCC,dogface_ear_rightCC,dogface_ear_leftCC'>Ears</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='dogprofile_nose-area,dogface_nose-area'>Nose Area</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='dogprofile_muzzle,dogface_muzzle'>Muzzle</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='dogprofile_shoulders,dogprofile_paw_front_right,dogprofile_paw_front_left'>Shoulders</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='dogprofile_chin_chest,dogprofile_stomach,dogface_chinCC'>Chin, Chest, and Stomach</button>")

					.append("<button class='btn btn-lg btn-default cc_areas_button left-half-button' value='dogprofile_paw_front_right'>Right Front Paw</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button right-half-button' value='dogprofile_paw_back_right'>Right Back Paw</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button left-half-button' value='dogprofile_paw_front_left'>Left Front Paw</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button right-half-button' value='dogprofile_paw_back_left'>Left Back Paw</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='dogprofile_tail'>Tail</button>");
			}

			function createBunny() {
				$(".previewdiv_face").empty()
					.append("<div id='bunnyface' class='bunnypart_face previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='bunnyface_pupil_left' class='bunnypart_face previewPart pupils' style='background-color: black'></div>")
					.append("<div id='bunnyface_pupil_right' class='bunnypart_face previewPart pupils' style='background-color: black'></div>")
					.append("<div id='bunnyface_pupilSPOT_left' class='bunnypart_face previewPart' style='background-color: White'></div>")
					.append("<div id='bunnyface_pupilSPOT_right' class='bunnypart_face previewPart' style='background-color: white'></div>")
					.append("<div id='bunnyface_eyeline_left' class='bunnypart_face previewPart line' style='background-color:white'></div>")
					.append("<div id='bunnyface_eyeline_right' class='bunnypart_face previewPart line' style='background-color:white'></div>")
					.append("<div id='bunnyface_nose' class='bunnypart_face previewPart accentable' style='background-color:pink'></div>")
					.append("<div id='bunnyface_chin' class='bunnypart_face previewPart yarnable contrastable' style='background-color:black'></div>")
						
				$(".previewdiv_profile").empty()
					//permanent
					.append("<div id='bunnyprofile' class='bunnypart_profile previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='bunnyprofile_ear_front' class='bunnypart_profile previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='bunnyprofile_ear_back' class='bunnypart_profile previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='bunnyprofile_ear_line' class='bunnypart_profile line' style='background-color:white'></div>")
					.append("<div id='bunnyprofile_backleg' class='bunnypart_profile previewPart yarnable' style='background-color: black'></div>")
					.append("<div id='bunnyprofile_backleg_line' class='bunnypart_profile line' style='background-color:white'></div>")
					.append("<div id='bunnyprofile_eye' class='bunnypart_profile pupils' style='background-color:white'></div>")
					.append("<div id='bunnyprofile_nose' class='bunnypart_profile' style='background-color:pink'></div>")

					//variable
					.append("<div id='bunnyprofile_ear_inner' class='bunnypart_profile accentable' style='background-color:white'></div>")
					.append("<div id='bunnyprofile_chin' class='bunnypart_profile yarnable contrastable' style='background-color:white'></div>")
					.append("<div id='bunnyprofile_stomach' class='bunnypart_profile yarnable contrastable' style='background-color:white'></div>")
					.append("<div id='bunnyprofile_tail_whole' class='bunnypart_profile yarnable contrastable' style='background-color:white'></div>")
					.append("<div id='bunnyprofile_tail_half' class='bunnypart_profile yarnable contrastable' style='background-color:white'></div>");

				$(".contrastable").hide();
			}

			function createBunnyButtons() {
				//Liz, make sure you update this - James
				$("#optionsScroll").empty()
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='bunnyprofile_tail_whole'>tail</button>")
					.append("<button class='btn btn-lg btn-default cc_areas_button' value='bunnyprofile_chin,bunnyface_chin,bunnyprofile_stomach'>chin and stomach</button>");
			}

		//build page(s)
			//instructions will be based on which page is passed in as your input (item, yarn, mc, etc.)

	function buildPage(pagePicked) {

		// WELCOME
			if (pagePicked === "welcome") {

				//remove extra divs
					$("#header").remove();
					$("#options").remove();
					$("#preview").remove();
					$("#content").remove();

				//append the welcome message and start button
					$("body").append("<a id='e-logo' href='https://purplegreenprojects.com' target='_blank'></a>")
					$("body").append("<div id='welcome1'></div>");

					$("#welcome1").append("<div id='welcome_fulllogo' alt='Kniterative Designs'></div>")
						
						.after("<div id='welcome2'>Welcome to the Kniterative Designs custom orders website.<div id='welcome2_textbody'>Here you can design your own knitted animal by choosing the yarn texture, yarn color, and pattern that you want.<br>Feel free to try different combinations until you find the one that's just right.<br>Ready?</div></div>");
					$("#welcome2").append("<button id='start' class='btn btn-lg' style='background-color:gray'><b>Enter Site</b></button>");

				//Click
					$(document).on("click","#start",function() {
						console.log("hi james")
						location.search = "start=true";
					});
			}

		// ITEM
			else if (pagePicked === "item") {

				//checkmarks
					$("#animal_true").hide();
					$("#texture_true").hide();
					$("#color_true").hide();
					$("#details_true").hide();
					$("#placeorder_true").hide();

				//append the item options
					$("#optionsScroll").empty()
					.append("<button id='CAT' class='btn btn-lg btn-default itembutton' value='cat'>Cat</button>")
					.append("<button id='DOG' class='btn btn-lg btn-default itembutton' value='dog'>Dog</button>")
					.append("<button id='BUNNY' class='btn btn-lg btn-default itembutton' value='bunny'>Bunny</button>");
					
				//append the item preview
					createPreviews();

					$("#preview").append("<div id='catdogbunny_for_mobile'></div>");

				//Hover Cat	
					$(document).on("mouseenter", "#CAT", function() {
						$(this).removeClass("btn-default").addClass("btn-success");
						createCat();
						$("#catdogbunny_for_mobile").hide();
					});
					$(document).on("mouseleave", "#CAT", function() {
						$(this).addClass("btn-default").removeClass("btn-success");
						createPreviews();
						$("#catdogbunny_for_mobile").show();
					});

				//Hover Dog
					$(document).on("mouseenter", "#DOG", function() {
						$(this).removeClass("btn-default").addClass("btn-success");
						createDog();
						$("#catdogbunny_for_mobile").hide();
					});

					$(document).on("mouseleave", "#DOG", function() {
						$(this).addClass("btn-default").removeClass("btn-success");
						createPreviews();
						$("#catdogbunny_for_mobile").show();
					});
			

				//Hover Bunny
					$(document).on("mouseenter", "#BUNNY", function() {
						$(this).removeClass("btn-default").addClass("btn-success");
						createBunny();
						$("#catdogbunny_for_mobile").hide();
					});

					$(document).on("mouseleave", "#BUNNY", function() {
						$(this).addClass("btn-default").removeClass("btn-success");
						createPreviews();
						$("#catdogbunny_for_mobile").show();
					});

				//Click
					$(document).on("click", ".itembutton", function() {
						var item = this.value;
						location.search = location.search + "&item=" + item;
					});
			}

		// YARN
			else if (pagePicked === "yarn") {
				console.log(get("item"));

				//checkmarks
					$("#animal_true").show();
					$("#texture_true").hide();
					$("#color_true").hide();
					$("#details_true").hide();
					$("#placeorder_true").hide();

				//get array of keys (yarntypes)
					var keys = Object.keys(yarn);

				//append the yarn options	
					$("#optionsScroll").empty();

					for (i = 0; i < keys.length; i++) {
						$("#optionsScroll").append("<button id='" + keys[i].replace(/\s/g,"_") + "' class='btn btn-lg btn-default yarnbutton' value='" + keys[i] + "' title='" + yarn[ keys[i] ][1] + "'>" + keys[i] + "</button>");
					}

				//append the yarn preview	
					createPreviews();

				//createCat		
					if( get("item") === "cat") {
						createCat();
					}

				//createDog		
					if( get("item") === "dog") {
						createDog();
					}

				//createBunny	
					else if ( get("item") === "bunny") {
						createBunny();
					}

				//Hover
					$(document).on("mouseenter", ".yarnbutton", function() {
						$(this).removeClass("btn-default").addClass("btn-success");
						var yarn = this.value;
						console.log (yarn);
						$(".previewdiv_zoom").css("background-image", "url(images/"+yarn.replace(/ /g, "%20")+".jpg)").css("background-size", "250%");
						$(".yarnable").css("background-image", "url(images/"+yarn.replace(/ /g, "%20")+".jpg)");
						$(".line").css("background-color", "black");
					});
					$(document).on("mouseleave", ".yarnbutton", function() {
						$(this).addClass("btn-default").removeClass("btn-success");
						$(".previewdiv_zoom").css("background-image", "none").css("background-color", "rgba(000,000,000,0)");	
						$(".yarnable").css("background-image", "none").css("background-color", "black");
						$(".line").css("background-color", "white");
					});

				//Click	
					$(document).on("click", ".yarnbutton", function() {
						var yarn = this.value;
						location.search = location.search + "&yarn=" + yarn;
					});
			}

		// MC (MAIN COLOR)
			else if (pagePicked === "mc") {

				//checkmarks
					$("#animal_true").show();
					$("#texture_true").show();
					$("#color_true").hide();
					$("#details_true").hide();
					$("#placeorder_true").hide();

				$("#optionsScroll").empty();

				createPreviews();

				//get yarn type from data div
					var yarntype = get("yarn");
					yarntype = yarntype.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(yarntype);

				//get array of keys (colors for that yarn type)
					keys = Object.keys(yarn[yarntype][0]);
					console.log(keys);

				//loop through the keys to create the option buttons for all colors
					for (i = 0; i < keys.length; i++) {
						$("#optionsScroll").append("<button id='" + keys[i] + "' class='btn btn-lg btn-default mcbutton' value='" + yarn[yarntype][0][ keys[i] ] + "'>" + keys[i] + "</button>");
					}
				
				//append the preview divs
					createPreviews();

				//createCat		
					if ( get("item") === "cat") {
						createCat();
					}

				//createBunny	
					else if ( get("item") === "bunny") {
						createBunny();
					}

				//createDog
					else if ( get("item") === "dog") {
						createDog();
					}

				//Hover
					$(document).on("mouseenter", ".mcbutton", function() {
						$(this).removeClass("btn-default").addClass("btn-success");
						var mc = this.value;
						$(".previewdiv_zoom").css("background-image", "url("+mc+")").css("background-size", "250%");
						$(".yarnable").css("background-image", "url("+mc+")");
						$(".line").css("background-color", "black");
					});
					$(document).on("mouseleave", ".mcbutton", function() {
						$(this).addClass("btn-default").removeClass("btn-success");
						$(".previewdiv_zoom").css("background-image", "none").css("background-color", "rgba(000,000,000,0)");	
						$(".yarnable").css("background-image", "none").css("background-color", "black");
						$(".line").css("background-color", "white");
					});

				//Click	
					$(document).on("click", ".mcbutton", function() {
						var MC = this.id;
						location.search = location.search + "&mc=" + MC;
					});
			}

		// CC (CONTRASTING COLOR)
			else if (pagePicked === "cc") {

				//checkmarks
					$("#animal_true").show();
					$("#texture_true").show();
					$("#color_true").hide();
					$("#details_true").hide();
					$("#placeorder_true").hide();

				$("#optionsScroll").empty();

				createPreviews();

				//get yarn type from data div
					var yarntype = get("yarn");
					yarntype = yarntype.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(yarntype);

				//get MC from data div
					var mainColor = get("mc");
					mainColor = mainColor.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(mainColor);

				//get array of keys (colors for that yarn type)
					keys = Object.keys(yarn[yarntype][0]);
					console.log(keys);

				//loop through the keys to create the option buttons for all colors
					$("#optionsScroll").append("<button id= 'noCC' class='btn btn-lg btn-primary ccbutton' value='" + yarn[yarntype][0][mainColor] + "'>No Contrasting Color</button>");
					for (i = 0; i < keys.length; i++) {
						if (keys[i] !== mainColor) {
							$("#optionsScroll").append("<button id='" + keys[i] + "' class='btn btn-lg btn-default ccbutton' value='" + yarn[yarntype][0][ keys[i] ] + "'>" + keys[i] + "</button>");
						}
					}
				
				//append the preview divs
					createPreviews();

				//createCat		
					if ( get("item") === "cat") {
						createCat();
					}

				//createBunny	
					else if ( get("item") === "bunny") {
						createBunny();
					}

				//createDog
					else if ( get("item") === "dog") {
						createDog();
					}

				//add mainColor
					var mcURL = yarn[yarntype][0][mainColor];
					$(".previewdiv_zoom").css("background-image", "url("+mcURL+")").css("background-size","250%");	
					$(".yarnable").css("background-image", "url("+mcURL+")");

				//Hover
					$(document).on("mouseenter", ".ccbutton", function() {
						$(this).removeClass("btn-default").addClass("btn-success");
						var cc = this.value;
						$(".previewdiv_zoom").css("background-image", "url("+cc+")").css("background-size", "250%");
						$(".contrastable").show().css("background-image", "url("+cc+")");
						$(".line").css("background-color", "black");
					});
					$(document).on("mouseleave", ".ccbutton", function() {
						$(this).addClass("btn-default").removeClass("btn-success");
						$(".previewdiv_zoom").css("background-image", "url("+mcURL+")").css("background-size","250%");	
						$(".contrastable").hide().css("background-image", "url("+mcURL+")");
						$(".line").css("background-color", "black");
					});

				//Click	
					$(document).on("click", ".ccbutton", function() {
						var CC = this.id;
						location.search = location.search + "&cc=" + CC;

						if (CC === "noCC") {
							location.search = location.search + "&cc=noCC&cc_areas=noCC";
						}
					});
			}

		// CC AREAS (CONTRASTING COLOR AREAS)
			else if (pagePicked === "cc_areas") {

				//checkmarks
					$("#animal_true").show();
					$("#texture_true").show();
					$("#color_true").show();
					$("#details_true").hide();
					$("#placeorder_true").hide();

				$("#optionsScroll").empty();

				createPreviews();

				//get item from URL
					var item = get("item");
					item = item.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(item);

				//get yarn type from data div
					var yarntype = get("yarn");
					yarntype = yarntype.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(yarntype);

				//get MC from data div
					var mainColor = get("mc");
					mainColor = mainColor.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(mainColor);

				//get CC from data div
					var contrastingColor = get("cc");
					contrastingColor = contrastingColor.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(contrastingColor);

				//append the preview divs
					createPreviews();

				//createCat		
					if( get("item") === "cat") {
						createCat();
						createCatButtons();
					}

				//createBunny	
					else if ( get("item") === "bunny") {
						createBunny();
						createBunnyButtons();
					}

				//createDog
					else if ( get("item") === "dog") {
						createDog();
						createDogButtons();
					}

				//create extra noCC button and Submit button
					$("#optionsLock").append("<button class='btn btn-primary btn-lg' id='cc_areas_submit' style='height: 75px; font-size: 36px'>Submit</button>");
					$("#optionsLock").append("<button id='noCC_areas' class='btn btn-lg btn-danger' value='noCC' style='height: 50px'>No Contrasting Areas</button>");

					$("#optionsLock").css("height","125px");
					$("#optionsScroll").css("height","calc(100% - 150px");

				//add mainColor
					var mcURL = yarn[yarntype][0][mainColor];
					$(".previewdiv_zoom").css("background-image", "url("+mcURL+")").css("background-size","250%");	
					$(".yarnable").css("background-image", "url("+mcURL+")");

				//add contrastingColor
					var ccURL = yarn[yarntype][0][contrastingColor];

				//Hover
					$(document).on("mouseenter", ".cc_areas_button", function() {
						if(!$(this).hasClass("active")) {
							$(this).removeClass("btn-default").addClass("btn-success");
							var cc_areas = this.value;
							cc_areasArray = cc_areas.split(/,|\%2C/g);

							for (i = 0; i < cc_areasArray.length; i++) {
								$("#" + cc_areasArray[i]).show().css("background-image", "url(" + ccURL + ")");
							}
						}
					});
					$(document).on("mouseleave", ".cc_areas_button", function() {
						if (!$(this).hasClass("active")) {
							$(this).addClass("btn-default").removeClass("btn-success");
							var cc_areas = this.value;
							cc_areasArray = cc_areas.split(/,|\%2C/g);

							for (i = 0; i < cc_areasArray.length; i++) {
								$("#" + cc_areasArray[i]).hide().css("background-image", "url(" + mcURL + ")");
							}
						}
					});

				//Click	
					$(document).on("click", ".cc_areas_button", function() {
						$(this).toggleClass("active");
					});

				//Submit
					$(document).on("click", "#cc_areas_submit", function() {
						var areasArray = [];
						$(".active").each( function(index) {
							areasArray.push(this.value);
						});

						var cc_areas_final = areasArray.join(",");

						location.search = location.search + "&cc_areas="+cc_areas_final;
					});

				//No Contrasting Areas
					$(document).on("click", "#noCC_areas", function() {
						location.search = String (location.search).substring(0, String (location.search).indexOf("&cc=")) + "&cc=noCC&cc_areas=noCC";
					});
			}

		// ACCENT COLOR
			else if (pagePicked === "accent_color") {

				//checkmarks
					$("#animal_true").show();
					$("#texture_true").show();
					$("#color_true").show();
					$("#details_true").hide();
					$("#placeorder_true").hide();

				$("#optionsScroll").empty();

				createPreviews();

				//get item from data div
					var item = get("item");
					item = item.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(item);

				//get yarn type from data div
					var yarntype = get("yarn");
					yarntype = yarntype.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(yarntype);

				//get MC from data div
					var mainColor = get("mc");
					mainColor = mainColor.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(mainColor);

				//get CC from data div
					var contrastingColor = get("cc");
					contrastingColor = contrastingColor.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(contrastingColor);

				//get active CC_areas from data div
					var active_cc_areas = get("cc_areas");
					active_cc_areas = active_cc_areas.replace(/%20/g, " ").replace(/\+/g, " ");
					active_cc_areasArray = active_cc_areas.split(/,|\%2C/g);
					console.log(active_cc_areasArray);

				//append the preview divs
					createPreviews();

				//createCat		
					if ( get("item") === "cat") {
						createCat();
					}

				//createBunny	
					else if ( get("item") === "bunny") {
						//createBunny();
						location.search = location.search + "&accent_color=none";
					}

				//createDog
					else if ( get("item") === "dog") {
						createDog();
					}

				//add mainColor
					var mcURL = yarn[yarntype][0][mainColor];
					$(".previewdiv_zoom").css("background-image", "url("+mcURL+")").css("background-size","250%");	
					$(".yarnable").css("background-image", "url("+mcURL+")");

				//add contrastingColor
					var ccURL = yarn[yarntype][0][contrastingColor];
					for (i = 0; i < active_cc_areasArray.length; i++) {
						$("#" + active_cc_areasArray[i]).show().css("background-image", "url("+ccURL+")");
					}

				//eye color buttons
					if ( (get("item") === "cat") || (get("item") === "dog") ) {
						var eyeColors = {
							"brown":"#4d0000",
							"yellow":"#ffff80",
							"blue":"#b3d9ff",
							"green":"#ccff66",
							"red":"#ff3300",
							"purple":"#800080",
							"orange":"#ff9933",
							"black":"#000000"
						}

						var keys = Object.keys(eyeColors);

						for (i = 0; i < keys.length; i++) {
							$("#optionsScroll").append("<button class='btn btn-lg btn-default accent_color_button' value='" + keys[i] + "' style='border: 5px solid " + eyeColors[keys[i]] + "'>" + keys[i] + "</button>");
						}
					}

				//ear color buttons
					else if ( get("item") === "bunny") {
						//you do you, Liz
					}


				//Hover
					$(document).on("mouseenter", ".accent_color_button", function() {
						var accent_color = $(this).css("border-color");
						$(this).removeClass("btn-default").css("background-color",accent_color);
						$(".accentable").css("background-image","none").css("background-color", accent_color);
					});
					$(document).on("mouseleave", ".accent_color_button", function() {
						$(this).css("background-color","white").addClass("btn-default");
						$(".accentable").css("background-image","url(" + mcURL + ")");
					});

				//Click	
					$(document).on("click", ".accent_color_button", function() {
						var accent_color = this.value;
						location.search = location.search + "&accent_color=" + accent_color;
					});
			}

		// EMAIL
			else if (pagePicked === "email") {

				//checkmarks
					$("#animal_true").show();
					$("#texture_true").show();
					$("#color_true").show();
					$("#details_true").show();
					$("#placeorder_true").hide();

				$("#optionsScroll").empty();

				createPreviews();

					var start = get("start")
					console.log(start);

				//get item from data div
					var item = get("item");
					item = item.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(item);

				//get yarn type from data div
					var yarntype = get("yarn");
					yarntype = yarntype.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(yarntype);

				//get MC from data div
					var mainColor = get("mc");
					mainColor = mainColor.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(mainColor);

				//get CC from data div
					var contrastingColor = get("cc");
					contrastingColor = contrastingColor.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(contrastingColor);

				//get active CC_areas from data div
					var active_cc_areas = get("cc_areas");
					active_cc_areas = active_cc_areas.replace(/%20/g, " ").replace(/\+/g, " ");
					active_cc_areasArray = active_cc_areas.split(/,|\%2C/g);
					console.log(active_cc_areasArray);

				//get accent color
					var accent_color = get("accent_color");
					accent_color = accent_color.replace(/%20/g, " ").replace(/\+/g, " ");
					console.log(contrastingColor);

				//append the preview divs
					createPreviews();

				//createCat		
					if ( get("item") === "cat") {
						createCat();
					}

				//createBunny	
					else if ( get("item") === "bunny") {
						createBunny();
					}

				//createDog
					else if ( get("item") === "dog") {
						createDog();
					}

				//add mainColor
					var mcURL = yarn[yarntype][0][mainColor];
					$(".previewdiv_zoom").css("background-image", "url("+mcURL+")").css("background-size","250%");	
					$(".yarnable").css("background-image", "url("+mcURL+")");

				//add contrastingColor
					var ccURL = yarn[yarntype][0][contrastingColor];
					for (i = 0; i < active_cc_areasArray.length; i++) {
						$("#" + active_cc_areasArray[i]).show().css("background-image", "url("+ccURL+")");
					}

				//add eye color
					if ( (get("item") === "cat") || (get("item") === "dog") ) {
						var eyeColors = {
							"brown":"#4d0000",
							"yellow":"#ffff80",
							"blue":"#b3d9ff",
							"green":"#ccff66",
							"red":"#ff3300",
							"purple":"#800080",
							"orange":"#ff9933",
							"black":"#000000"
						}
						$(".accentable").css("background-color", eyeColors[accent_color]);
						$(".accentable").css("background-color", eyeColors[accent_color]);
					}

				//add ear color
					else if ( get("item") === "bunny") {
						//you do you, Liz
					}

				//Order Details
					if ( get("cc") === "noCC") {
						contrastingColor = "no contrasting color";
						active_cc_areas = "no contrasting areas";
					}
					else {
						console.log("triggered");
						active_cc_areas = "";
						for (i = 0; i < active_cc_areasArray.length; i++) {
							active_cc_areasArray[i] = active_cc_areasArray[i].replace(item,"").replace("profile","").replace("face","").replace("_"," ").trim();
							if (!(active_cc_areas.indexOf(active_cc_areasArray[i]) > -1)) {
								active_cc_areas = active_cc_areas + active_cc_areasArray[i] + ", ";
							}
						}
						active_cc_areas = active_cc_areas.slice(0,(active_cc_areas.length) - 2);
					}

					$("#optionsScroll").append("<div id='congratulations'></div>");
					$("#congratulations").append("Your " + item + " looks great! I'll start knitting it right away!")
						.append("<br>Please give me your email address so I can contact you regarding your order.")

				//buttons
					$("#optionsScroll").append("<input type='email' class='form-control' id='email' placeholder='Your email address'></input>")
					.append("<div id='errorMessage'></div>")
					.append("If you have any special requests, please  list them here:")
					.append("<textarea rows='5' class='form-control' id='details' placeholder='Add additional details here...'></textarea>")
					.append("<button class='btn btn-primary btn-lg' id='submit' style='height: 100px; font-size: 36px'>Place Order! <i class='fa fa-thumbs-o-up'></i></button>")
					.append("<button class='btn btn-danger btn-lg' id='cancel'><i class='fa fa-trash-o'></i> Start Over</button>");

				//Submit
					$(document).on("click", "#submit", function() {
						var email = $("#email").val();
						var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
						if ((email.length > 0) && (regex.test(email))) {
							var notes = $("#details").val();

							if (!(notes.length > 0)) {
								notes = "-";
							}
							else {
								notes = notes.replace(/\'/g,"’");
							}

							$("#options").append("<iframe height='0' width='0' frameborder='0' src='https://script.google.com/macros/s/AKfycbzL6ubgMPxnkSAXGbDepVPE0MJi2GSL7p-Z5zow9uAXU7l9gawt/exec" + location.search + "&email=" + email + "&notes=" + notes + "'></iframe>");

							var Timeout = setTimeout(function() {
								location.search = location.search + "&submit=true";
							}, 1000);
						}
						else {
							$("#errorMessage").empty().append('<div class="alert alert-danger" role="alert">Please enter a valid email address so I can contact you!</div>')
						}
					});

				//Cancel	
					$(document).on("click", "#cancel", function() {
						location.search = "?start=true";
					});
			}

		// SUCCESS (Confirmation Page)
			else if (pagePicked === "success") {

				//checkmarks
					$("#animal_true").show();
					$("#texture_true").show();
					$("#color_true").show();
					$("#details_true").show();
					$("#placeorder_true").show();

				$("#preview").remove();
				$("#options").remove();
				$("#content").html("<div id='successMessage'>Success!<br>Thank you for your order.<br><br><a target='_blank' href=" + location.search.replace(/\&submit\=[^\&]*/g,"") + "'>See and share your new friend by clicking here!</a></div>");
			}
	
	}
	
	loadPageContents();

	//go back to any step
		$("#step1").on("click", function(){
			var url = String(location.search)

			// regex - &item=[animal] until... (NOT ^) &, until the &
			url = url.replace(/\&item\=[^\&]*/g,"")

			url = url.replace(/\&cc_areas\=[^\&]*/g,"")

			url = url.replace(/\&accent_color\=[^\&]*/g,"")

			url = url.replace(/\&submit\=[^\&]*/g,"")

			location.search = url
		})

		$("#step2").on("click", function(){
			var url = String(location.search)

			url = url.replace(/\&yarn\=[^\&]*/g,"")

			url = url.replace(/\&mc\=[^\&]*/g,"")

			url = url.replace(/\&cc\=[^\&]*/g,"")

			url = url.replace(/\&submit\=[^\&]*/g,"")

			location.search = url
		})

		$("#step3").on("click", function(){
			var url = String(location.search)

			url = url.replace(/\&mc\=[^\&]*/g,"")

			url = url.replace(/\&cc\=[^\&]*/g,"")

			url = url.replace(/\&submit\=[^\&]*/g,"")

			location.search = url
		})

		$("#step4").on("click", function(){
			var url = String(location.search)

			url = url.replace(/\&cc_areas\=[^\&]*/g,"")

			url = url.replace(/\&accent_color\=[^\&]*/g,"")

			url = url.replace(/\&submit\=[^\&]*/g,"")

			location.search = url
		})

		$("#step5").on("click", function(){
			var url = String(location.search)

			url = url.replace(/\&submit\=[^\&]*/g,"")

			location.search = url
		})

});

