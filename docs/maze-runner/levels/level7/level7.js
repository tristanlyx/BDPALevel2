

    function decidePassword(prompt){
        if(prompt > 1){
            return "BIG";
        } else {
            return "SMALL";
        }
    }

    function runLevel(){
        var cabbageMan = new MazeRunner.CabbageMan();
        cabbageMan.moveRight();
        cabbageMan.calculatePassword("RIGHT", decidePassword);
        cabbageMan.moveRight(18);
    }
