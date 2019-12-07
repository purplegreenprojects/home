$(document).ready(function() {

	var photos = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg", "8.jpg", "9.jpg"];
	
	for (i = 0; i < photos.length; i++) {
		$("#carousel").append("<div id='photo" + String(photos[i]).replace(".jpg","") + "' class='photo' style='background-image: url(photos/" + photos[i] + ")'></div>");
		$("#navCircles").append("<div id='circle" + String(photos[i]).replace(".jpg","") + "' class='circle'></div>");
	}

//MY ADDITION (captions)
	var captions = [
		"To Google!",
		"Hmm. Okay. The code makes sense and...Oh. Except you don't drink coffee.",
		"...Or more accurately, 'I love commenting.' Because that's all that is.",
		"Grandstanding much? Don't worry, I won't get your mom this shirt. Alan might consider buying it for his mom. Also, can we talk about the fact that this woman is clearly not a mom? She's way too young to have a kid who's a 'freaking awesome programmer,' unless the kid is like a 4-year-old savant.",
		"I mean... they're not wrong.","Again, totally accurate. But probably not the shirt for you.",
		"True again! (On you, of course. Though the model isn't bad-looking either. But you're cuter.) But I know you wouldn't wear it.", 
		"Nope.", 
		"...No comment."];
	var captionNum = 0;
	
	//for (i = 0; i < captions.length; i++) {
		//$("#divtotherightofthephotocarousel").append("<div>" + string(captions[i]) + "</div>");
	//}
//-------

	$("#carousel .photo:first").before($("#carousel .photo:last"));
	$("#carousel .photo:first").next().addClass("active");
	$("#navCircles .circle:first").addClass("filled");

	$(document).on("click","#right",function() {
		$("#carousel").animate({left: "-1000px"}, 500);
		setTimeout(function() {
			goRight();
		}, 510);
//MY ADDITION (caption)
		//$("#divtotherightofthephotocarousel").append("<div>" + caption[#] + "</div>");
	});

	$(document).on("click","#left",function() {
		$("#carousel").animate({left: "0px"}, 500);
		setTimeout(function() {
			goLeft();
		}, 510);
	});

	$(document).on("click",".circle",function() {
		var currentCircle = String($(".filled").attr("id")).substring(6);
		var newCircle = String($(this).attr("id")).substring(6);

		if (newCircle < currentCircle) {
			for (i = currentCircle; i > newCircle; i--) {
				goLeft();
			}
		}
		else if (newCircle > currentCircle) {
			for (i = currentCircle; i < newCircle; i++) {
				goRight();
			}
		}

	});

	function goRight () {
		$("#carousel").css("left","-500px");
		$("#carousel .photo:last").after($("#carousel .photo:first"));
		$(".active").removeClass("active");
		$("#carousel .photo:first").next().addClass("active"); changeCircles();
		$("#divtotherightofthephotocarousel").empty(); 
		captionNum++;
			if(captionNum > captions.length-1){
  				captionNum = 0;
			}
		$("#divtotherightofthephotocarousel").append("<div>" + captions[captionNum] + "</div>");
	}

	function goLeft () {
		$("#carousel").css("left","-500px");
		$("#carousel .photo:first").before($("#carousel .photo:last"));
		$(".active").removeClass("active");
		$("#carousel .photo:first").next().addClass("active");
		changeCircles();
		$("#divtotherightofthephotocarousel").empty(); 
		captionNum--;
			if(captionNum < 0){
			  captionNum = captions.length-1;
			}
		$("#divtotherightofthephotocarousel").append("<div>" + captions[captionNum] + "</div>");
	}

	function changeCircles () {
		var currentPhoto = String($(".active").attr("id")).substring(5);
		$(".circle").removeClass("filled");
		$("#circle" + currentPhoto).addClass("filled");
	}

});