

function decidePassword(prompt){
    return (prompt + 1) / 2
}

function runLevel(){
    var cabbageMan = new MazeRunner.CabbageMan();
    cabbageMan.moveRight(1);
    cabbageMan.moveUp(9);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(5);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(5);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(5);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(2);
    cabbageMan.moveDown(9);
    cabbageMan.moveRight(1);
}
