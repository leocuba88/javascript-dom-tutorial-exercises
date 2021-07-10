let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elDiv = document.createElement("div");
	elDiv.innerHTML = "Hello World";
	elDiv.style.background = "yellow";
	document.body.appendChild(elDiv);
});
