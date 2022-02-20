
var textThreshold = 30

var blurbs = {
	text1: ["Champ,","Fact:","Everybody says","Wow...", "Check it:","Seriously though,", "Real talk -", "Just saying...", "Self,","Know this:","News alert:","This just in:", "Hey you,", "Excuse me, but", "Experts agree","Ask anyone -", "In my opinion,","Hear ye, hear ye:", "Okay, listen up:","Hey, so...", "Just want to let you know that","It is my duty to inform you that","I need to point out that","You should know that", "I don't know if anyone has ever told you this, but", "Hold up:", "I sincerely hope you're aware that", "You should know that"],
	text2: ["the mere idea of you","your soul","your hair today","everything you do", "everything you are","your personal style","every thought you think","that sparkle in your eye","your very essence","your presence here", "what you got going on","the essential you","your life's journey","everything that you stand for","that saucy personality", "that brain of yours", "that beautiful mind of yours", "your contribution to the word","your choice of attire","your outfit","the way you roll","the way you showed up today","what you bring to the table","whatever your secret is","everything about you","your wholehearted self","your authentic self", "your kind heart", "your thoughtful contribution","your kindness","your creativity"],
	text3: ["has serious game,","gets me every time,","rains magic,","raises the roof,","gets the party started,","is paying off big time,", "shows serious skills,","shimmers and shines,","is a national treasure,", "is the next big thing,", "is a sparkle factory,","warms my heart,", "should be taught in school,","makes my world go 'round,","is 100% legit,","is the next big thing,","is so courageously you,", "is just so beautiful in every way,","makes everyone smile,","is so deliciously daring,","is so emblematic of who you are,","makes the world better,","is so worth celebrating,","is a testament to the amazing person you are,","fills everyone up with good feelings,","gives everyone the warm fuzzies,","is one of a kind,","is an inspiration,","should keep on keeping on,","brings so much joy,"],
	text4: ["24/7.","every single day.","can I get an amen?","and that's a fact.","so treat yourself!","you hear me?","understand?","that's just science.","would I lie?","for reals.","for sure.","100%.","mic drop.","you hidden gem.","period.","now let's dance!","high five!","say it again!", "according to the latest poll.","so get used to it!","and there's nothing you can do but accept it.","so there.","and that's the truth.","trust me.","you beautiful person."]
}

document.querySelector("#container").addEventListener("click", generateCompliment)

generateCompliment()

function generateCompliment() {
	for (var i in blurbs) {
		var blurb = blurbs[i][Math.floor(Math.random() * blurbs[i].length)]
		document.querySelector("#" + i).innerText = blurb
		
		if (blurb.length > textThreshold) {
			document.querySelector("#" + i).className = "text textamount-lots"
		}
		else {
			document.querySelector("#" + i).className = "text"
		}
	}
}

//"makes the sun shine a little brighter,"