// how we're not doing it
    // let request = new XMLHttpRequest()
    //     request.open("GET", url, true)
    //     request.setRequestHeader("Authorization", "Basic " + encodedCredentials)
    //     request.onreadystatechange = function() {
    //         if (this.readyState == 4 && this.status == 200) {
    //             console.log(request.responseText)
    //         }
    //     }
    //     request.send()


/* globals */
	let username = "read-01d8f2678ffe3f3292bc2003d34f3511"
	let password = "vX7eFwx+cgUC3HvVhk4IAv1tr5OKSll7Vrdpe3yq"
	let encodedCredentials = btoa(username + ":" + password)
	let baseURL = "https://www.ravelry.com/patterns/library/"
	let apiURLBefore = "https://api.ravelry.com/patterns/"
	let apiURLAfter = ".json"
	let retries = 10
	let backgroundImageLoop = null
	let loopTime = 3000

/* clickButton */
	document.getElementById("fetchProject").addEventListener("click", clickButton)

	function clickButton(){
		retries--
		if(retries >= 0){
			let randomNumber = Math.floor(Math.random() * 2500000)
			fetchProject(randomNumber)
		}
		else {
			window.location.reload()
		}
	}

/* fetchProject */
	function fetchProject(projectID) {
		let apiURL = apiURLBefore + projectID + apiURLAfter
		fetch(apiURL, {
			method: "GET",
			headers: {
				"Authorization": "Basic " + encodedCredentials
			}
		})
		.then(function(response){
			return response.json()
		})
		.then(handlePatternData)
		.catch(clickButton)

	}

/* handlePatternData */
	function handlePatternData(responseJSON) {
		let pattern = responseJSON.pattern
		let medium = pattern.craft.name

		if(medium != document.getElementById("medium").value) {
			clickButton()
			return
		}

		retries = 10

		let name = pattern.name
		let patternURL = baseURL + pattern.permalink

		let photoURLs = []
		for(let i = 0; i < pattern.photos.length; i++){
			if (pattern.photos[i].medium_url) {
				photoURLs.push(pattern.photos[i].medium_url)
			}
			else if (pattern.photos[i].small_url) {
				photoURLs.push(pattern.photos[i].small_url)
			}
			else if (pattern.photos[i].shelved_url) {
				photoURLs.push(pattern.photos[i].shelved_url)
			}
			else if (pattern.photos[i].thumbnail_url) {
				photoURLs.push(pattern.photos[i].thumbnail_url)
			}
		}

		displayPatternData(name, patternURL, photoURLs)
	}

/* displayPatternData */
	function displayPatternData(name, patternURL, photoURLs) {
		document.getElementById("projectName").innerText = name 
		document.getElementById("projectName").href = patternURL
		document.getElementById("backgroundImage").style.backgroundImage = "url(" + photoURLs[0] + ")"
		document.getElementById("backgroundImage").setAttribute("photos", JSON.stringify(photoURLs))
		document.getElementById("backgroundImage").setAttribute("photoIndex", 0)
		clearInterval(backgroundImageLoop)
		backgroundImageLoop = setInterval(changeImage,loopTime)
	}

/* changeImage */
	function changeImage(){
		let photoIndex = document.getElementById("backgroundImage").getAttribute("photoIndex")
		photoIndex = Number(photoIndex)
		let photoURLs = document.getElementById("backgroundImage").getAttribute("photos")
		photoURLs = JSON.parse(photoURLs)
		photoIndex++

		if (photoIndex > photoURLs.length - 1) {
			photoIndex = 0
		}

		document.getElementById("backgroundImage").style.backgroundImage = "url(" + photoURLs[photoIndex] + ")"
		document.getElementById("backgroundImage").setAttribute("photoIndex", photoIndex)
	}
