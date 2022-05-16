var css = document.querySelector("h3");
var hexvalue = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function fancyBackground() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";	
}

function resetColor() {
	fancyBackground();
}

function setGradient() {
	fancyBackground();
}

function randomColor() {
	var hexchars = "0123456789ABCDEF";
	var hash = "#";
	for (i=0; i<6; i++) {
		hash += hexchars[math.floor(math.random() * 16)];
		console.log(hash);
	}
	return hash;
}

function generateColor() {
	color1.value = randomColor();
	color2.value = randomColor();
	fancyBackground();
	hexvalue.textContent = "linear-gradient(to right, " + color1.value 
	 +", " + color2.value + ");";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", generateColor);