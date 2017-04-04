

function decidePassword(prompt){
    var expected = "";
    if(prompt == 1){
        expected = "ONE";
    } else if(prompt == 2){
        expected = "TWO";
    } else if(prompt == 3){
        expected = "THREE";
    }
    return expected;
}

function runLevel(){
    var cabbageMan = new MazeRunner.CabbageMan();
    cabbageMan.moveRight(1);
    cabbageMan.moveDown(8);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(7);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(8);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(2);
    cabbageMan.moveUp(8);
    cabbageMan.moveRight(1);
}
