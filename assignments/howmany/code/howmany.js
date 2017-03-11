function doLevel1() {
	alert("Is this right?");
	hide("level1"); 
	show("level2");
}
function doLevel2(){
	alert("This is correct?");
	hide("level2");
	show("level3");
}
function doLevel3(){
	alert("I'm pretty sure this is okay...");
	hide("level3");
}
function show(id) {
	var el = document.getElementById(id);
	el.classList.remove("hidden");
}
function hide(id){
	var el = document.getElementById(id);
	el.classList.add("hidden")
}
var score = 0;
function addPoints(points){
	score = score + points;
	document.getElementById("score").innerHTML = score;
}