var score = 0;

function show(id){
    var el = document.getElementById(id);
    el.classList.remove("hidden");
}

function hide(id){
    var el = document.getElementById(id);
    el.classList.add("hidden")
}

function addPoints(points){
    score = score + points;
    document.getElementById("score").innerHTML = score;
}

function doLevel1(){
    var answerString = prompt("Answer?");
    var answerNumber = Number(answerString);
    addPoints(12 - Math.abs(12 - answerNumber));
    window.alert("You said " + answerString + " and there were 12");
    hide("level1");
    show("level2");
}

function doLevel2(){
    var answerString = prompt("Answer?");
    var answerNumber = Number(answerString);
    addPoints(2 - Math.abs(2 - answerNumber));
    window.alert("You said " + answerString + " and there were 2");
    hide("level2");
    show("level3");
}

function doLevel3(){
    var answerString = prompt("Answer?");
    var answerNumber = Number(answerString);
    addPoints(0 - Math.abs(0 - answerNumber));
    window.alert("You said " + answerString + " and there were 0");
}