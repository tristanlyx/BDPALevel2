//Let's say that all levels are 20 X 20 grids.
//Start is always at (0,10)
//End is alwayse at (19, 10)

/**
 * Cool ideas:
 * -Make things that require multiple cabbage men.
 * -Maybe you can pass functions to your cabbage man that it will us to try to figure things out.
 * -Maybe there are "traps" which only
 *
 * -Should add wait() which makes the environment progress 1 tick.
 *
 * Functions the cabage man should implement:
 * --Maybe some kind of getPassword thing that does some calculation.
 * --
 *
 * =====Level Ideas=====
 * Level 1) Go straight across the open maze from the console (this one doesn't link to any js)
 *
 * Level 2) Just go straight across an open maze with 10 calls
 * Level 3) You can pass a distance parameter
 * Level 4) Practice moving through a static "easy" maze.
 * Level 5) 1 More easy Maze
 * Level 6)
 *
 *
 *
 */

var CELLTYPES = {
    BOUNDARY: "boundary",
    OPEN: "open",
    START: "start",
    END: "end"
};

var gameOver = false;

var MazeRunner = (function ($) {
    function getLevelDiv() {
        return $("#level");
    }

    function getMazeDiv() {
        return $("#maze");
    }

    function createMazeContainerDiv() {
        getLevelDiv().append('<div id="maze"></div>')
    }

    function createCellDiv(cell) {
        var idString = cell.x + "_" + cell.y;
        getMazeDiv().append('<div id="' + idString + '" class="box ' + cell.type + '"></div>');
    }

    function getCellDiv(x, y) {
        var idString = "#" + x + "_" + y;
        return $(idString);
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

    function doWin(){
        if(window.confirm("You won. Do you want to go to the next level?")){
            level = level + 1;
            window.location.href = "../level" + level + "/level" + level + ".html"
        }
    }

    var level;
    function doRunLevel(levelNumber) { //Student fn is called runLevel
        try {
            level = levelNumber;
            actionList.acceptingSubmissions = true;
            createMazeContainerDiv();
            initEmptyMaze();
            //TODO: create level-specific stuff on this line.
            createMazeDivs();

            if (levelNumber == 1) {
                return; //we're done.
            }

            if (typeof runLevel != "undefined") {
                runLevel();
                actionList.run();
                if (!gameOver) {
                    alert("Warning! You didn't complete the maze");
                }
            } else {
                alert("Warning! runLevel function is not defined");
            }
            actionList.acceptingSubmissions = false;
        } catch (e){
            actionList.acceptingSubmissions = false;
            throw e;
        }
    }

    var actionList = {
        actions: [],
        acceptingSubmissions: false,
        submit: function (fn) {
            if (actionList.acceptingSubmissions) {
                actionList.actions.push(fn);
            } else {
                fn();
            }
        },
        run: function () {
            var i = 0;
            var doStuff = function () {
                actionList.actions[i]();
                i++;
                if (i < actionList.actions.length) {
                    window.setTimeout(doStuff, 2000);
                }
            };
            doStuff();
        }
    };

    function CabbageMan() {
        var self = this;
        self._x = 0;
        self._y = 10;

        var doElMove = function (x1, y1, x2, y2) {
            getCellDiv(x1, y1).html("");
            getCellDiv(x2, y2).html("X");
        };

        var moveAllowed = function (x, y) {
            if (gameOver) {
                return false;
            }

            if (maze[x][y].type == CELLTYPES.BOUNDARY) {
                return false;
            }

            return true;
        };

        var checkWin = function () {
            if (maze[self._x][self._y].type == CELLTYPES.END) {
                gameOver = true;
                doWin();
            }
        };

        var moveTo = function (x, y) {
            //Do move
            if (moveAllowed(x, y)) {
                doElMove(self._x, self._y, x, y);
                self._x = x;
                self._y = y;
            } else {
                gameOver = true;
            }

            //Check for done
            checkWin();
        };

        doElMove(0, 0, self._x, self._y);

        self.moveLeft = function () {
            actionList.submit(function () {
                moveTo(self._x - 1, self._y);
            }.bind(self));
        };

        self.moveUp = function () {
            actionList.submit(function () {
                moveTo(self._x, self._y - 1);
            }.bind(self));
        };

        self.moveRight = function () {
            actionList.submit(function () {
                moveTo(self._x + 1, self._y);
            }.bind(self));
        };

        self.moveDown = function () {
            actionList.submit(function () {
                moveTo(self._x, self._y + 1);
            }.bind(self));
        };
    }

    return {
        initLevel1: function () {
            doRunLevel(1);
        },
        initLevel2: function () {
            doRunLevel(2);
        },
        initLevel3: function () {
            doRunLevel(3);
        },
        initLevel4: function () {
            doRunLevel(4);
        },
        CabbageMan: CabbageMan,
        actionList: actionList
    };
})(jQuery);


var davidSkipLevel1 = function(){
    MazeRunner.actionList.acceptingSubmissions = false;
    var cabbage = new MazeRunner.CabbageMan();
    for(var i = 0; i<19; i++){
        cabbage.moveRight();
    }
};