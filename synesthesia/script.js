$(document).ready(function() {

//function (instructions)
	function printText() {
		var text = $("#enterText").val()
		var letterList = text.split("");

		var output = "";

		for (letter of letterList) {
			output = output + "<span class='allLetters _" + letter.toLowerCase() + "'>" + letter + "</span>";
		}

		$("#colorText").html(output);
		$("#hoverText").html(output);

	}

//call the function
	$("#originalText").on("keyup", function() {
		printText()
		clearInterval(window.finishTyping)

		window.finishTyping = setTimeout(function(){
			swoosh()
		},3000)
	})

//swoosh function
	function swoosh(){
		console.log("swooshing")
		window.swooshLoop = setInterval(function(){
				console.log(0)
			var swooshing = $(".swoosh")
			if (swooshing.length == 0) {
				console.log(1)
				$("#hoverText").find("span").first().addClass("swoosh")
			}
			else {
				console.log(2)
				$(".swoosh").removeClass("swoosh")

				var nextSwoosh = $(swooshing).next()
				if (nextSwoosh.length !== 0) {
					console.log(3)
					$(nextSwoosh).addClass("swoosh")
				}
				else {
					console.log(4)
					clearInterval(window.swooshLoop)
				}
			}
		},100)
	}

});
