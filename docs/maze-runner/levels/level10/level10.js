

    function decidePassword(prompt){
        return prompt * 2 + 1
    }

    function runLevel(){
        var cabbageMan = new MazeRunner.CabbageMan();
        cabbageMan.moveRight();
        cabbageMan.calculatePassword("RIGHT", decidePassword);
        cabbageMan.moveRight(2);
        cabbageMan.calculatePassword("RIGHT", decidePassword);
        cabbageMan.moveRight(17);
    }
