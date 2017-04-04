

function decidePassword(prompt){
    return prompt % 2 == 0;
}

function runLevel(){
    var cabbageMan = new MazeRunner.CabbageMan();
    cabbageMan.moveRight();
    cabbageMan.moveDown(8);
    cabbageMan.moveRight(5);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(4);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(7);
    cabbageMan.moveUp(8);
    cabbageMan.moveRight(2);
}
