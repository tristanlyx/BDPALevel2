

function decidePassword(prompt){

}

function runLevel() {
    var cabbageMan = new MazeRunner.CabbageMan();
    for(var i = 0; i < 7; i++){
        cabbageMan.moveRight(2);
        cabbageMan.moveUp();
    }
    cabbageMan.moveRight(4);
    cabbageMan.moveDown(7);
    cabbageMan.moveRight();
}