//Bubble Wrap

$(document).ready(function() {

//Bubble loop -- create x bubbles
	var counter = 0;

	while(counter < 238) {
		counter = counter + 1;

		$("body").append("<div class='size blue circle sound'></div>");
	}

//Clicking stuff
	var audio = new Audio("pop.mp3");

	$(document).on("click",".circle",function() {

		if(! $(this).hasClass("popped")) {

			//Pop!
	    	audio.play();

			$(this).addClass("popped").removeClass("sound");

			$(this).empty().append("<div class='size white star popped'></div>");

		}

if(location.search !=="?forReal"){

		if($(".star").length > 10) {

			$("body").empty().css("background-color", "#ffb3b3").append("<div class='snark'>Don't you have anything better to do?</div>")

			setTimeout(function(){
				$("body").empty().append("<div class='snark'>No?</div>")
			},3000);

			setTimeout(function(){
				$("body").empty().append("<div class='snark' style='font-size: 75px'>Well then, carry on.<br>Loading more bubble wrap in</div>")
			},6000);

			setTimeout(function(){
				$("body").append("<div class='snark'>...3...</div>")
			},7000);

			setTimeout(function(){
				$("body").append("<div class='snark'>...2...</div>")
			},8000);

			setTimeout(function(){
				$("body").append("<div class='snark'>...1...</div>")
			},9000);

			setTimeout(function(){
				location.search = "?forReal";
			},10000);
		};
}

	if($(".star").length > 237) {
		$("body").empty().css("background-color", "#85e085").append("<div class='congrats'><b>Congratulations!<b></div>")

		setTimeout(function(){
			$("body").append("<div class='congrats'><br>You're either really dedicated...</div>")
		},2000);

		setTimeout(function(){
			$("body").append("<div class='congrats'>...or really bored.</div>")
		},4000);

		setTimeout(function(){
			location.reload();
		},7000);

	}
	});

});