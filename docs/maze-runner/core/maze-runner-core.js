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
 * Level 2) Just go straight across an open maze with 10 calls
 * Level 3) You can pass a distance parameter
 * Level 4) Practice moving through a static "easy" maze.
 * Level 5) 1 More easy Maze
 *
 * Level 6) Single Simple Password Block
 * Level 7) Multiple complex password blocks.
 * Level ) Random fire blocks
 * Level ) Looping hand holding
 * Level ) Looping do it yourself
 *
 *
 *
 */

var CELLTYPES = {
    BOUNDARY: "boundary",
    OPEN: "open",
    START: "start",
    END: "end",
    EASY_PASSWORD: "easy-password"
};

var LEVELS = [
    [], //Level 0
    [], //Level 1
    [], //Level 2
    [{x: 2, y: 10, type: CELLTYPES.BOUNDARY}],
    [   //Upper left block
        {x: 1, y: 1, type: CELLTYPES.BOUNDARY}, {x: 1, y: 2, type: CELLTYPES.BOUNDARY}, {
        x: 1,
        y: 3,
        type: CELLTYPES.BOUNDARY
    }, {x: 1, y: 4, type: CELLTYPES.BOUNDARY}, {x: 1, y: 5, type: CELLTYPES.BOUNDARY}, {
        x: 1,
        y: 6,
        type: CELLTYPES.BOUNDARY
    }, {x: 2, y: 1, type: CELLTYPES.BOUNDARY}, {x: 2, y: 2, type: CELLTYPES.BOUNDARY}, {
        x: 2,
        y: 3,
        type: CELLTYPES.BOUNDARY
    }, {x: 2, y: 4, type: CELLTYPES.BOUNDARY}, {x: 2, y: 5, type: CELLTYPES.BOUNDARY}, {
        x: 2,
        y: 6,
        type: CELLTYPES.BOUNDARY
    }, {x: 2, y: 7, type: CELLTYPES.BOUNDARY}, {x: 2, y: 8, type: CELLTYPES.BOUNDARY}, {
        x: 2,
        y: 9,
        type: CELLTYPES.BOUNDARY
    },
        //Lower right block
        {x: 18, y: 18, type: CELLTYPES.BOUNDARY}, {x: 17, y: 17, type: CELLTYPES.BOUNDARY}, {
        x: 16,
        y: 16,
        type: CELLTYPES.BOUNDARY
    }, {x: 15, y: 15, type: CELLTYPES.BOUNDARY}, {x: 15, y: 16, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 17,
        type: CELLTYPES.BOUNDARY
    }, {x: 15, y: 18, type: CELLTYPES.BOUNDARY}, {x: 16, y: 16, type: CELLTYPES.BOUNDARY}, {
        x: 17,
        y: 16,
        type: CELLTYPES.BOUNDARY
    }, {x: 18, y: 16, type: CELLTYPES.BOUNDARY},
        //Middle block
        {x: 7, y: 10, type: CELLTYPES.BOUNDARY}, {x: 7, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 7,
        y: 12,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 13, type: CELLTYPES.BOUNDARY}, {x: 7, y: 14, type: CELLTYPES.BOUNDARY}, {
        x: 7,
        y: 15,
        type: CELLTYPES.BOUNDARY
    }, {x: 8, y: 15, type: CELLTYPES.BOUNDARY}, {x: 9, y: 15, type: CELLTYPES.BOUNDARY}, {
        x: 10,
        y: 15,
        type: CELLTYPES.BOUNDARY
    }, {x: 11, y: 15, type: CELLTYPES.BOUNDARY}, {x: 12, y: 15, type: CELLTYPES.BOUNDARY}, {
        x: 13,
        y: 15,
        type: CELLTYPES.BOUNDARY
    },
        {x: 1, y: 7, type: CELLTYPES.BOUNDARY}, {x: 2, y: 7, type: CELLTYPES.BOUNDARY}, {
        x: 2,
        y: 8,
        type: CELLTYPES.BOUNDARY
    }, {x: 2, y: 9, type: CELLTYPES.BOUNDARY}, {x: 2, y: 10, type: CELLTYPES.BOUNDARY}, {
        x: 2,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 2, y: 12, type: CELLTYPES.BOUNDARY}, {x: 2, y: 13, type: CELLTYPES.BOUNDARY}, {
        x: 2,
        y: 14,
        type: CELLTYPES.BOUNDARY
    }, {x: 2, y: 15, type: CELLTYPES.BOUNDARY}, {x: 2, y: 16, type: CELLTYPES.BOUNDARY}, {
        x: 2,
        y: 17,
        type: CELLTYPES.BOUNDARY
    },
        {x: 3, y: 16, type: CELLTYPES.BOUNDARY},
        {x: 4, y: 18, type: CELLTYPES.BOUNDARY},
        {x: 18, y: 3, type: CELLTYPES.BOUNDARY}, {x: 15, y: 4, type: CELLTYPES.BOUNDARY},
        {x: 8, y: 15, type: CELLTYPES.BOUNDARY},
        {x: 17, y: 10, type: CELLTYPES.BOUNDARY}
    ],
    [
        //upper left block
        {x: 1, y: 1, type: CELLTYPES.BOUNDARY}, {x: 1, y: 2, type: CELLTYPES.BOUNDARY}, {
        x: 1,
        y: 3,
        type: CELLTYPES.BOUNDARY
    }, {x: 1, y: 4, type: CELLTYPES.BOUNDARY}, {x: 1, y: 5, type: CELLTYPES.BOUNDARY}, {
        x: 1,
        y: 6,
        type: CELLTYPES.BOUNDARY
    }, {x: 2, y: 1, type: CELLTYPES.BOUNDARY}, {x: 2, y: 2, type: CELLTYPES.BOUNDARY}, {
        x: 2,
        y: 3,
        type: CELLTYPES.BOUNDARY
    }, {x: 2, y: 4, type: CELLTYPES.BOUNDARY}, {x: 2, y: 5, type: CELLTYPES.BOUNDARY}, {
        x: 2,
        y: 6,
        type: CELLTYPES.BOUNDARY
    }, {x: 2, y: 7, type: CELLTYPES.BOUNDARY}, {x: 2, y: 8, type: CELLTYPES.BOUNDARY}, {
        x: 2,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 3, y: 1, type: CELLTYPES.BOUNDARY}, {x: 3, y: 2, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 3,
        type: CELLTYPES.BOUNDARY
    }, {x: 3, y: 4, type: CELLTYPES.BOUNDARY}, {x: 3, y: 5, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 6,
        type: CELLTYPES.BOUNDARY
    }, {x: 3, y: 7, type: CELLTYPES.BOUNDARY},
        //The go around
        {x: 1, y: 11, type: CELLTYPES.BOUNDARY}, {x: 2, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 11, type: CELLTYPES.BOUNDARY}, {x: 5, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 4,
        y: 10,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 9, type: CELLTYPES.BOUNDARY}, {x: 5, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 5,
        y: 8,
        type: CELLTYPES.BOUNDARY
    }, {x: 5, y: 7, type: CELLTYPES.BOUNDARY}, {x: 5, y: 6, type: CELLTYPES.BOUNDARY}, {
        x: 5,
        y: 5,
        type: CELLTYPES.BOUNDARY
    }, {x: 5, y: 4, type: CELLTYPES.BOUNDARY}, {x: 5, y: 3, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 2,
        type: CELLTYPES.BOUNDARY
    }, {x: 5, y: 9, type: CELLTYPES.BOUNDARY}, {x: 4, y: 1, type: CELLTYPES.BOUNDARY},
        //Lower right block
        {x: 18, y: 18, type: CELLTYPES.BOUNDARY}, {x: 17, y: 17, type: CELLTYPES.BOUNDARY}, {
        x: 16,
        y: 16,
        type: CELLTYPES.BOUNDARY
    }, {x: 15, y: 15, type: CELLTYPES.BOUNDARY}, {x: 15, y: 16, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 17,
        type: CELLTYPES.BOUNDARY
    }, {x: 15, y: 18, type: CELLTYPES.BOUNDARY}, {x: 16, y: 16, type: CELLTYPES.BOUNDARY}, {
        x: 17,
        y: 16,
        type: CELLTYPES.BOUNDARY
    }, {x: 18, y: 16, type: CELLTYPES.BOUNDARY}, {x: 18, y: 15, type: CELLTYPES.BOUNDARY}, {
        x: 18,
        y: 14,
        type: CELLTYPES.BOUNDARY
    }, {x: 17, y: 15, type: CELLTYPES.BOUNDARY},
        //Middle block
        {x: 7, y: 10, type: CELLTYPES.BOUNDARY}, {x: 7, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 7,
        y: 12,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 13, type: CELLTYPES.BOUNDARY}, {x: 7, y: 14, type: CELLTYPES.BOUNDARY}, {
        x: 7,
        y: 15,
        type: CELLTYPES.BOUNDARY
    }, {x: 8, y: 15, type: CELLTYPES.BOUNDARY}, {x: 9, y: 15, type: CELLTYPES.BOUNDARY}, {
        x: 10,
        y: 15,
        type: CELLTYPES.BOUNDARY
    }, {x: 11, y: 15, type: CELLTYPES.BOUNDARY}, {x: 12, y: 15, type: CELLTYPES.BOUNDARY}, {
        x: 13,
        y: 15,
        type: CELLTYPES.BOUNDARY
    },
        //Vertical bar
        {x: 8, y: 1, type: CELLTYPES.BOUNDARY}, {x: 8, y: 2, type: CELLTYPES.BOUNDARY}, {
        x: 8,
        y: 3,
        type: CELLTYPES.BOUNDARY
    }, {x: 8, y: 4, type: CELLTYPES.BOUNDARY}, {x: 8, y: 5, type: CELLTYPES.BOUNDARY}, {
        x: 8,
        y: 6,
        type: CELLTYPES.BOUNDARY
    }, {x: 8, y: 7, type: CELLTYPES.BOUNDARY}, {x: 8, y: 8, type: CELLTYPES.BOUNDARY}, {
        x: 8,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 8, y: 10, type: CELLTYPES.BOUNDARY}, {x: 8, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 8,
        y: 12,
        type: CELLTYPES.BOUNDARY
    }, {x: 8, y: 13, type: CELLTYPES.BOUNDARY}, {x: 8, y: 4, type: CELLTYPES.BOUNDARY}, {
        x: 8,
        y: 15,
        type: CELLTYPES.BOUNDARY
    }, {x: 8, y: 16, type: CELLTYPES.BOUNDARY}, {x: 8, y: 17, type: CELLTYPES.BOUNDARY},
        //rubble lower left
        {x: 6, y: 15, type: CELLTYPES.BOUNDARY}, {x: 4, y: 15, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 15,
        type: CELLTYPES.BOUNDARY
    }, {x: 2, y: 15, type: CELLTYPES.BOUNDARY}, {x: 1, y: 15, type: CELLTYPES.BOUNDARY},
        //Rubble upper right
        {x: 18, y: 3, type: CELLTYPES.BOUNDARY}, {x: 15, y: 4, type: CELLTYPES.BOUNDARY},
        //right bend
        {x: 18, y: 11, type: CELLTYPES.BOUNDARY}, {x: 17, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 16,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 10, type: CELLTYPES.BOUNDARY}, {x: 16, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 16,
        y: 8,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 7, type: CELLTYPES.BOUNDARY}
    ],
    [
        //Row 1
        {x: 1, y: 9, type: CELLTYPES.BOUNDARY},{x: 2, y: 9, type: CELLTYPES.BOUNDARY},{x: 3, y: 9, type: CELLTYPES.BOUNDARY},{x: 4, y: 9, type: CELLTYPES.BOUNDARY},{x: 5, y: 9, type: CELLTYPES.BOUNDARY},{x: 6, y: 9, type: CELLTYPES.BOUNDARY},{x: 7, y: 9, type: CELLTYPES.BOUNDARY},{x: 8, y: 9, type: CELLTYPES.BOUNDARY},{x: 9, y: 9, type: CELLTYPES.BOUNDARY},{x: 10, y: 9, type: CELLTYPES.BOUNDARY},{x: 11, y: 9, type: CELLTYPES.BOUNDARY},{x: 12, y: 9, type: CELLTYPES.BOUNDARY},{x: 13, y: 9, type: CELLTYPES.BOUNDARY},{x: 14, y: 9, type: CELLTYPES.BOUNDARY},{x: 15, y: 9, type: CELLTYPES.BOUNDARY},{x: 16, y: 9, type: CELLTYPES.BOUNDARY},{x: 17, y: 9, type: CELLTYPES.BOUNDARY},{x: 18, y: 9, type: CELLTYPES.BOUNDARY},
        //Row 2
        {x: 1, y: 11, type: CELLTYPES.BOUNDARY},{x: 2, y: 11, type: CELLTYPES.BOUNDARY},{x: 3, y: 11, type: CELLTYPES.BOUNDARY},{x: 4, y: 11, type: CELLTYPES.BOUNDARY},{x: 5, y: 11, type: CELLTYPES.BOUNDARY},{x: 6, y: 11, type: CELLTYPES.BOUNDARY},{x: 7, y: 11, type: CELLTYPES.BOUNDARY},{x: 8, y: 11, type: CELLTYPES.BOUNDARY},{x: 9, y: 11, type: CELLTYPES.BOUNDARY},{x: 10, y: 11, type: CELLTYPES.BOUNDARY},{x: 11, y: 11, type: CELLTYPES.BOUNDARY},{x: 12, y: 11, type: CELLTYPES.BOUNDARY},{x: 13, y: 11, type: CELLTYPES.BOUNDARY},{x: 14, y: 11, type: CELLTYPES.BOUNDARY},{x: 15, y: 11, type: CELLTYPES.BOUNDARY},{x: 16, y: 11, type: CELLTYPES.BOUNDARY},{x: 17, y: 11, type: CELLTYPES.BOUNDARY},{x: 18, y: 11, type: CELLTYPES.BOUNDARY},
        //Easy password
        {x: 2, y: 10, type: CELLTYPES.EASY_PASSWORD}
    ]

];

var playerWon = false;
var playerLost = false;

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

    function makeOpen(cell) {
        var idString = "#" + cell.x + "_" + cell.y;
        $(idString).removeClass(cell.type).addClass(CELLTYPES.OPEN);
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

    function applyLevelCells(overrides) {
        for (var i = 0; i < overrides.length; i++) {
            var cell = overrides[i];
            maze[cell.x][cell.y].type = cell.type;
        }
    }

    function createMazeDivs() {
        for (var y = 0; y < 20; y++) {
            for (var x = 0; x < 20; x++) {
                createCellDiv(maze[x][y]);
            }
        }
    }

    function doWin() {
        playerWon = true;
        if (window.confirm("You won. Do you want to go to the next level?")) {
            level = level + 1;
            window.location.href = "../level" + level + "/level" + level + ".html"
        }
    }

    function doLose(msg) {
        playerLost = true;
        alert(msg);
        actionList.clear();
    }

    var level;

    function doRunLevel(levelNumber) { //Student fn is called runLevel
        try {
            level = levelNumber;
            actionList.acceptingSubmissions = true;
            createMazeContainerDiv();
            initEmptyMaze();
            applyLevelCells(LEVELS[levelNumber]);
            createMazeDivs();

            if (levelNumber == 1) {
                return; //we're done.
            }

            if (typeof runLevel != "undefined") {
                runLevel();
                actionList.submit(function () {
                    if (!playerWon) {
                        alert("Warning! You didn't complete the maze");
                    }
                });
                actionList.run();
            } else {
                alert("Warning! runLevel function is not defined");
            }
            actionList.acceptingSubmissions = false;
        } catch (e) {
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
                    window.setTimeout(doStuff, 200);
                }
            };
            doStuff();
        },
        clear: function () {
            actionList.actions = [];
        }
    };

    function createPasswordPrompt(x, y) {
        var expected = "";
        var prompt = "";
        return {expected: expected, prompt: prompt};
    }

    function CabbageMan() {
        var self = this;
        self._x = 0;
        self._y = 10;

        var doElMove = function (x1, y1, x2, y2) {
            getCellDiv(x1, y1).html("");
            getCellDiv(x2, y2).html("X");
        };

        var moveAllowed = function (x, y) {
            var type = maze[x][y].type;
            if (type == CELLTYPES.BOUNDARY) {
                return false;
            }

            if(type == CELLTYPES.EASY_PASSWORD){
                return false;
            }

            return true;
        };

        var checkWin = function () {
            if (maze[self._x][self._y].type == CELLTYPES.END) {
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
                doLose("You Lost! couldn't move to x=" + x + " y=" + y);
            }

            //Check for done
            checkWin();
        };

        doElMove(0, 0, self._x, self._y);

        self.moveLeft = function (d) {
            for (var i = 0; i < (d || 1); i++) {
                actionList.submit(function () {
                    moveTo(self._x - 1, self._y);
                }.bind(self));
            }
        };

        self.moveUp = function (d) {
            for (var i = 0; i < (d || 1); i++) {
                actionList.submit(function () {
                    moveTo(self._x, self._y - 1);
                }.bind(self));
            }
        };

        self.moveRight = function (d) {
            for (var i = 0; i < (d || 1); i++) {
                actionList.submit(function () {
                    moveTo(self._x + 1, self._y);
                }.bind(self));
            }
        };

        self.moveDown = function (d) {
            for (var i = 0; i < (d || 1); i++) {
                actionList.submit(function () {
                    moveTo(self._x, self._y + 1);
                }.bind(self));
            }
        };

        self.calculatePassword = function (dir, fn) {
            dir = (+dir || "").toUpperCase();
            actionList.submit(function () {
                var x, y;
                if (dir == "LEFT") {
                    x = self._x - 1;
                    y = self._y;
                } else if (dir == "UP") {
                    x = self._x;
                    y = self._y - 1;
                } else if (dir == "RIGHT") {
                    x = self._x + 1;
                    y = self._y;
                } else if (dir == "DOWN") {
                    x = self._x;
                    y = self._y + 1;
                } else {
                    doLose("I expected a direction but you said " + dir);
                    return;
                }
                var prompt = createPasswordPrompt(x, y);

                var userAnswer = fn(prompt.prompt);
                if (prompt.expected === userAnswer) {
                    maze[x][y].type = CELLTYPES.OPEN;
                } else {
                    doLose("The block said " + prompt.prompt + " and you said " + userAnswer +
                        " but you should have said " + prompt.expected);
                }
            });
        }
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
        initLevel5: function () {
            doRunLevel(5);
        },
        initLevel6: function () {
            doRunLevel(6);
        },
        initLevel7: function () {
            doRunLevel(7);
        },
        CabbageMan: CabbageMan,
        actionList: actionList
    };
})(jQuery);


var davidSkipLevel1 = function () {
    MazeRunner.actionList.acceptingSubmissions = false;
    var cabbage = new MazeRunner.CabbageMan();
    for (var i = 0; i < 19; i++) {
        cabbage.moveRight();
    }
};