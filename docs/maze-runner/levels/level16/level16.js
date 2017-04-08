

function decidePassword(prompt){
    return prompt[2];
}

function runLevel() {
    var cabbageMan = new MazeRunner.CabbageMan();
    cabbageMan.moveRight(2);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(3);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(3);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(3);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(3);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(5);
}