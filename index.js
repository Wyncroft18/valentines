const yes = document.querySelector("#yes");
const no = document.querySelector("#no");

function noMessage() {
	document.querySelector("h1").innerHTML = "Let's try that again"
}

yes.addEventListener("click", function(){
	document.querySelector("h1").innerHTML = "Thank you! I love you! Mwah";
	document.querySelector("h3").remove();
	yes.remove();
	no.remove();
	setTimeout(function(){
		const sound = document.createElement("audio");
		sound.src = "./music.mp3";
		sound.autoplay = "autoplay";
		document.querySelector("#container").appendChild(sound);
	}, 2000);
});

no.addEventListener("click", function(){
	document.querySelector("h1").innerHTML = "No??? but.... whyyy T^T"
	document.querySelector("h3").remove();
	yes.remove();
	no.remove();
	setTimeout(noMessage, 3000);
	setTimeout(function(){
		location.reload();
	}, 5000);
});