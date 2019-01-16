$(document).ready(
	function() {
		
		$(document).on("click", "#generate", function() {
			var letters = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "L", "M", "N", "O", "P", "L", "M", "N", "O", "P", "R", "S", "T", "R", "S", "T", "R", "S", "T", "U", "U"];

			//Math.random = random number 0-1; * 26 - to make it be a bigger number; Math.floor = round down, makes it an integer 0-25; [variable name].length - calculates length of array
			var generateLetter = Math.floor(Math.random() * letters.length );

			// letters [0/1/2/3/etc.]
			$("#letter").empty().append(letters[generateLetter]);
		});
	}
);