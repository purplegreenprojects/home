function tickTock() {
	var angleSec  = (new Date().getSeconds()                                 ) * -360 / 60 + "deg"
	var angleMin  = (new Date().getMinutes() + (new Date().getSeconds() / 60)) * -360 / 60 + "deg"
	var angleHour = (new Date().getHours()   + (new Date().getMinutes() / 60)) * -360 / 12 + "deg"



	document.getElementById("second").style.transform = "rotate(" + angleSec  + ")"
	document.getElementById("minute").style.transform = "rotate(" + angleMin  + ")"
	document.getElementById("hour"  ).style.transform = "rotate(" + angleHour + ")"
}

setInterval(tickTock, 1000)