function displayTime() {
	var time = new Date()
	var hours = time.getHours()
	var minutes = time.getMinutes()
	var seconds = time.getSeconds()

	var hoursAngle = hours / 12 * -360
	var minutesAngle = minutes / 60 * -360
	var secondsAngle = seconds / 60 * -360

	document.querySelector("#hour").style.transform = "rotate(" + hoursAngle + "deg)"
	document.querySelector("#minute").style.transform = "rotate(" + minutesAngle + "deg)"
	document.querySelector("#second").style.transform = "rotate(" + secondsAngle + "deg)"
}

displayTime()
setInterval(displayTime, 1000)