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
});

no.addEventListener("click", function(){
	document.querySelector("h1").innerHTML = "No??? but.... whyyy T^T"
	document.querySelector("h3").remove();
	yes.remove();
	no.remove();
	setTimeout(noMessage, 2000);
	setTimeout(function(){
		location.reload();
	}, 4000);
});