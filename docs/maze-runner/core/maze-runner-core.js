//Let's say that all levels are 20 X 20 grids.
//Start is always at (0,10)
//End is alwayse at (19, 10)

var CELLTYPES = {
    BOUNDARY: "boundary",
    OPEN: "open",
    START: "start",
    END: "end"
};


var MazeRunner = (function ($) {
    function getLevelDiv() {
        return $("#level");
    }

    function getMazeDiv(){
        return $("#maze");
    }

    function createMazeContainerDiv(){
        getLevelDiv().append('<div id="maze"></div>')
    }

    function createCellDiv(cell) {
        var idString = cell.x + "_" + cell.y;
        getMazeDiv().append('<div id="' + idString + '" class="box ' + cell.type + '"></div>');
    }

    var maze = [];

    function Cell(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        return this;
    }

    function initEmptyMaze() {
        for (var x = 0; x < 20; x++) {
            maze[x] = [];
            for (var y = 0; y < 20; y++) {
                var type = CELLTYPES.OPEN;
                if (x == 0 || x == 19 || y == 0 || y == 19) {
                    type = CELLTYPES.BOUNDARY;
                }
                maze[x][y] = new Cell(x, y, type);
            }
        }
        maze[0][10] = new Cell(0, 10, CELLTYPES.START);
        maze[19][10] = new Cell(19, 10, CELLTYPES.END);
    }

    function createMazeDivs() {
        for (var y = 0; y < 20; y++) {
            for (var x = 0; x < 20; x++) {
                createCellDiv(maze[x][y]);
            }
        }
    }

    function createLevel() {
        createMazeContainerDiv();
        initEmptyMaze();
        createMazeDivs();
    }

    function CabbageMan() {
        return this;
    }

    return {
        initLevel1: function () {
            createLevel();
        },
        CabbageMan: CabbageMan
    };
})(jQuery);