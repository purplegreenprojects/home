// ELEMENTS
	var ELEMENTS = {
		nameButton: document.querySelector("#name-button"),
		about: document.querySelector("#about"),
	}

// USER ACTIONS
	ELEMENTS.nameButton.addEventListener("click",toggleAbout)

	function toggleAbout(){
		if (ELEMENTS.about.getAttribute("collapsed")) {
			ELEMENTS.about.removeAttribute("collapsed")
		}
		else {
			ELEMENTS.about.setAttribute("collapsed",true)
		}
	}