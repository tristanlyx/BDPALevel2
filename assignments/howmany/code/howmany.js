function doLevel1() {
    var userAnswer = prompt("Write your answer down below.");
	var correctAnswer1 = ("satellites");
	if (userAnswer == correctAnswer1){
		alert("That's right!"); addPoints(10);
	}else{
		alert("You got it wrong, the answer was " + correctAnswer1 + "." ); addPoints(-10);
		}			
	hide("level1"); 
	show("level2");
}
function doLevel2(){
	var userAnswer = prompt("Write your answer down below.");
	var correctAnswer2 = (60);
	correctAnswer2 = Number(correctAnswer2);
	if (userAnswer == correctAnswer2){
		alert("That's right!"); addPoints(10);
	}else{
		alert("You got it wrong, the answer was " + correctAnswer2 + "."); addPoints(-10);
		}
	hide("level2");
	show("level3");
}
function doLevel3(){
	var userAnswer = prompt("Write your answer down below.");
	var correctAnswer3 = "true"
	if (userAnswer == correctAnswer3){
		alert("That's right!"); addPoints(10);
		}else{
		alert("You got it wrong, the answer was " + correctAnswer3 + "."); 
		addPoints(-10);
		}
	hide("level3");
	show("finish");
}
function doNext(){
	hide("finish");
	show("level4");
	}
function showScore() {
	var finalScore
	finalScore = "Your final score is " + score;
	alert(finalScore);
}
function doStage1() {
	var userAnswer = prompt("Write your answer here.");
	var correctAnswer = ("Dumbo");
	if (userAnswer == correctAnswer) {
		alert("That's right!"); 
	}
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