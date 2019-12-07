$(document).ready(function() {

	$("#theperfectdesign").mouseenter (function() {	
		$("#styleANDcode").empty().append("<div id='style'><img src='shirtstyle.jpg'</img></div>").append("<br><div id='code'><img src='shirtcode.jpg'</img></div>");
		console.log("add shirts before preview button")
		$("#buttons").append("<div id='preview' class='btn btn-success' style='font-size: 28px'>Preview</div>")
	});

	$("#buttons").click(function(){
		console.log("preview triggered")
		$("#shirts").empty().html("<div id='black'><br><br><br><br><br>This is my <u>official</u><br>Underblue t-shirt</div><div id='blue'><br><br><br><br><br>This is my <u>official</u><br>Underblue t-shirt</div>")
		$("#buttons").empty("#preview")
			.append("<a id='yes' href='mymistake.html' target='_blank' class='btn btn-success' style='font-size: 28px'>Great! I would totally wear either of those shirts to an Underblue gig! Such a great fashion statement.</a>")
			.append("<a id='no' href='tryagain.html' target='_blank'class='btn btn-danger' style='font-size: 28px'>Umm...Liz? Have you lost your mind?</a>");
	});
	
	// if $("#no").click(function(){
	// 	$("#preview").append("<div>Wrong Answer. Try again.</div>");
		
	// });


});


