var elements = {
	pool: document.querySelector("#pool"),
	shuffleDraw: document.querySelector("#shuffleDraw"),
	pick: document.querySelector("#pick"),
	remove: document.querySelector("#remove"),
	history: document.querySelector("#history")
}

elements.shuffleDraw.addEventListener("click", drawWord)
function drawWord() {
	var wordList = elements.pool.value.split(/\s?,\s?|\n/g)

	var word = wordList[Math.floor(Math.random() * wordList.length)]

	elements.pick.value = word
}

elements.remove.addEventListener("click", removePick)
function removePick() {
	var word = elements.pick.value
	if (word.length == 0) {
		return
	}
	elements.pick.value = ""

	var wordList = elements.pool.value.split(/\s?,\s?|\n/g)

	wordList = wordList.filter(function(w){
		return (w.toLowerCase() !== word.toLowerCase())
	})

	elements.pool.value = wordList.join(", ")

	var historyList = elements.history.value
	if (historyList.length == 0) {
		historyList = word
	}

	else {
		historyList = historyList + ", " + word
	}

	elements.history.value = historyList
}

