

function decidePassword(prompt){
    if(prompt % 2 == 0){
        return prompt;
    } else {
        return prompt + 1;
    }
}

function runLevel(){
    var cabbageMan = new MazeRunner.CabbageMan();
    cabbageMan.moveRight();
    cabbageMan.calculatePassword("UP", decidePassword);
    cabbageMan.moveUp(2);
    cabbageMan.calculatePassword("UP", decidePassword);
    cabbageMan.moveUp(2);
    cabbageMan.calculatePassword("UP", decidePassword);
    cabbageMan.moveUp(2);
    cabbageMan.calculatePassword("UP", decidePassword);
    cabbageMan.moveUp();
    cabbageMan.moveRight(17);
    cabbageMan.moveDown(7);
    cabbageMan.moveRight();
}
