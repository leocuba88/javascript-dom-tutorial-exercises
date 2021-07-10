let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let node = document.createElement("Li");
	let textNode = document.createTextNode("Forth element");
	node.appendChild(textNode);
	document.getElementById("myList").appendChild(node);
});
