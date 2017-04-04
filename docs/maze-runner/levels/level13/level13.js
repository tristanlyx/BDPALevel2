

function decidePassword(prompt){
    if(prompt == "CYAN"){
        return "NAYC";
    } else if (prompt == "PINK") {
        return "KNIP";
    } else if (prompt == "RED"){
        return "DER";
    } else if (prompt=="BLUE"){
        return "EULB";
    } else if (prompt == "GRAY"){
        return "YARG"
    }
}

function runLevel(){
    var cabbageMan = new MazeRunner.CabbageMan();
    cabbageMan.moveRight(2);
    cabbageMan.moveUp();
    cabbageMan.calculatePassword("UP", decidePassword);
    cabbageMan.moveUp();
    cabbageMan.moveRight();
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(4);
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(4);
    cabbageMan.calculatePassword("DOWN", decidePassword);
    cabbageMan.moveDown();
    cabbageMan.moveRight(2);
    cabbageMan.moveDown();
    cabbageMan.calculatePassword("RIGHT", decidePassword);
    cabbageMan.moveRight(6);
}
