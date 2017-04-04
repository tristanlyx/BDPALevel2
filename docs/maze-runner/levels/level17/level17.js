

function decidePassword(prompt){
    var expected;
    if(prompt[0] > prompt[1]){
        expected = 0;
    } else if (prompt[1] > prompt[0]){
        expected = 1;
    } else {
        expected = "EQUAL";
    }
    return expected;
}

function runLevel() {
    var cabbageMan = new MazeRunner.CabbageMan();
    cabbageMan.moveRight(2);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(4);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(6);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(4);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(3);
}