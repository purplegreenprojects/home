$(document).ready(function() {

	$("#theperfectdesign").mouseenter (function() {	
		$("#styleANDcode").empty().append("<div id='style'><img src='shirtstyle.jpg'</img></div>").append("<br><div id='code'><img src='shirtcodeBAD.jpg'</img></div>");
		console.log("add shirts before preview button")
		$("#buttons").append("<div id='preview' class='btn btn-success'>Show me</div>")
	});

	$("#buttons").click(function(){
		console.log("preview triggered")
		$("#shirts").empty().html("<div style='color:black' id='black'><br><br><br><br><br>This is my <u>official</u><br>Underblue t-shirt</div><div style='color: blue' id='blue'><br><br><br><br><br>This is my <u>official</u><br>Underblue t-shirt</div>");
		$("#buttons").empty("#preview")
			.append("<span>Now, I know the last thing you'd want would be some boring (but super soft) <b>PLAIN T-SHIRTS</b>.<br>I'm sure you'll be disappointed that they don't look like I envisioned.<br><br>(*sigh*)<br><br></span><header>But... go check your shirt drawer.</header>");
	});
	

});
