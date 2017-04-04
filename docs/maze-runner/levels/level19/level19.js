

function decidePassword(prompt){

}

function runLevel() {
    var cabbageMan = new MazeRunner.CabbageMan();
    cabbageMan.moveRight();
    cabbageMan.moveDown(7);
    cabbageMan.moveRight();

    for(var i = 0; i< 14; i = i + 1){
        cabbageMan.moveRight();
        cabbageMan.moveUp();
    }

    cabbageMan.moveRight(2);
    cabbageMan.moveDown(7);
    cabbageMan.moveRight();
}