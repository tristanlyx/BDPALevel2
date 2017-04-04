

function decidePassword(prompt){

}

function runLevel() {
    var cabbageMan = new MazeRunner.CabbageMan();
    cabbageMan.moveRight();
    cabbageMan.moveUp(9);
    cabbageMan.moveRight();

    for(var i = 0; i< 14; i = i + 1){
        cabbageMan.moveRight();
        cabbageMan.moveDown();
    }

    cabbageMan.moveRight(2);
    cabbageMan.moveUp(5);
    cabbageMan.moveRight();
}