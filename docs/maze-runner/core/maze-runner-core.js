//Let's say that all levels are 20 X 20 grids.
//Start is always at (0,10)
//End is alwayse at (19, 10)

/**
 * TODO: This code is a train wreck, but it works. ...mostly.
 *
 * Cool ideas:
 * -Make things that require multiple cabbage men.
 * -Maybe you can pass functions to your cabbage man that it will us to try to figure things out.
 * -Maybe there are "traps" which only
 *
 * -Should add wait() which makes the environment progress 1 tick.
 *
 * Functions the cabbage man should implement:
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
    EASY_PASSWORD: "easy-password",
    EASY_PASSWORD2: "easy-password-2",
    EASY_PASSWORD3: "easy-password-3",
    EASY_PASSWORD3_5:"easy-password-3-5",
    EASY_PASSWORD3_7:"easy-password-3-7",
    EASY_PASSWORD4: "easy-password-4",
    EASY_PASSWORD5: "easy-password-5",
    EASY_PASSWORD6: "easy-password-6",
    EASY_PASSWORD6_5:"easy-password-6-5",
    EASY_PASSWORD7: "easy-password-7"
};

var LEVELS = [
    [], //Level 0
    [], //Level 1
    //level2
    [{x:1, y:9, type:CELLTYPES.BOUNDARY},{x:2, y:9, type:CELLTYPES.BOUNDARY},{x:3, y:9, type:CELLTYPES.BOUNDARY},{x:4, y:9, type:CELLTYPES.BOUNDARY},{x:5, y:9, type:CELLTYPES.BOUNDARY},{x:6, y:9, type:CELLTYPES.BOUNDARY},{x:7, y:9, type:CELLTYPES.BOUNDARY},{x:8, y:9, type:CELLTYPES.BOUNDARY},{x:9, y:9, type:CELLTYPES.BOUNDARY},{x:10, y:9, type:CELLTYPES.BOUNDARY},{x:11, y:9, type:CELLTYPES.BOUNDARY},{x:12, y:9, type:CELLTYPES.BOUNDARY},{x:13, y:9, type:CELLTYPES.BOUNDARY},{x:14, y:9, type:CELLTYPES.BOUNDARY},{x:15, y:9, type:CELLTYPES.BOUNDARY},{x:16, y:9, type:CELLTYPES.BOUNDARY},{x:16, y:9, type:CELLTYPES.BOUNDARY},{x:17, y:9, type:CELLTYPES.BOUNDARY},{x:18, y:9, type:CELLTYPES.BOUNDARY},{x:18, y:11, type:CELLTYPES.BOUNDARY},{x:17, y:11, type:CELLTYPES.BOUNDARY},{x:16, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:11, type:CELLTYPES.BOUNDARY},{x:14, y:11, type:CELLTYPES.BOUNDARY},{x:13, y:11, type:CELLTYPES.BOUNDARY},{x:12, y:11, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:10, y:11, type:CELLTYPES.BOUNDARY},{x:9, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:11, type:CELLTYPES.BOUNDARY},{x:7, y:11, type:CELLTYPES.BOUNDARY},{x:6, y:11, type:CELLTYPES.BOUNDARY},{x:5, y:11, type:CELLTYPES.BOUNDARY},{x:4, y:11, type:CELLTYPES.BOUNDARY},{x:3, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:11, type:CELLTYPES.BOUNDARY},{x:1, y:11, type:CELLTYPES.BOUNDARY},{x:1, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:12, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:1, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:8, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:6, type:CELLTYPES.BOUNDARY},{x:4, y:5, type:CELLTYPES.BOUNDARY},{x:3, y:5, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:1, y:5, type:CELLTYPES.BOUNDARY},{x:6, y:8, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:6, y:5, type:CELLTYPES.BOUNDARY},{x:6, y:4, type:CELLTYPES.BOUNDARY},{x:6, y:3, type:CELLTYPES.BOUNDARY},{x:5, y:3, type:CELLTYPES.BOUNDARY},{x:4, y:3, type:CELLTYPES.BOUNDARY},{x:3, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:3, type:CELLTYPES.BOUNDARY},{x:1, y:3, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:8, y:7, type:CELLTYPES.BOUNDARY},{x:8, y:6, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:8, y:4, type:CELLTYPES.BOUNDARY},{x:8, y:3, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:8, y:1, type:CELLTYPES.BOUNDARY},{x:7, y:1, type:CELLTYPES.BOUNDARY},{x:6, y:1, type:CELLTYPES.BOUNDARY},{x:5, y:1, type:CELLTYPES.BOUNDARY},{x:4, y:1, type:CELLTYPES.BOUNDARY},{x:3, y:1, type:CELLTYPES.BOUNDARY},{x:2, y:1, type:CELLTYPES.BOUNDARY},{x:1, y:1, type:CELLTYPES.BOUNDARY},{x:17, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:18, y:7, type:CELLTYPES.BOUNDARY},{x:15, y:8, type:CELLTYPES.BOUNDARY},{x:15, y:7, type:CELLTYPES.BOUNDARY},{x:15, y:6, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:16, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:18, y:5, type:CELLTYPES.BOUNDARY},{x:13, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:7, type:CELLTYPES.BOUNDARY},{x:13, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:5, type:CELLTYPES.BOUNDARY},{x:13, y:4, type:CELLTYPES.BOUNDARY},{x:13, y:3, type:CELLTYPES.BOUNDARY},{x:14, y:3, type:CELLTYPES.BOUNDARY},{x:15, y:3, type:CELLTYPES.BOUNDARY},{x:16, y:3, type:CELLTYPES.BOUNDARY},{x:17, y:3, type:CELLTYPES.BOUNDARY},{x:18, y:3, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:7, type:CELLTYPES.BOUNDARY},{x:11, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:5, type:CELLTYPES.BOUNDARY},{x:11, y:4, type:CELLTYPES.BOUNDARY},{x:11, y:3, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:1, type:CELLTYPES.BOUNDARY},{x:12, y:1, type:CELLTYPES.BOUNDARY},{x:13, y:1, type:CELLTYPES.BOUNDARY},{x:14, y:1, type:CELLTYPES.BOUNDARY},{x:15, y:1, type:CELLTYPES.BOUNDARY},{x:16, y:1, type:CELLTYPES.BOUNDARY},{x:17, y:1, type:CELLTYPES.BOUNDARY},{x:18, y:1, type:CELLTYPES.BOUNDARY},{x:1, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:3, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:14, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:14, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:16, type:CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY},{x:5, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:1, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:12, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:18, y:13, type:CELLTYPES.BOUNDARY},{x:15, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:13, type:CELLTYPES.BOUNDARY},{x:15, y:14, type:CELLTYPES.BOUNDARY},{x:15, y:15, type:CELLTYPES.BOUNDARY},{x:16, y:15, type:CELLTYPES.BOUNDARY},{x:17, y:15, type:CELLTYPES.BOUNDARY},{x:18, y:15, type:CELLTYPES.BOUNDARY},{x:13, y:12, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:13, y:15, type:CELLTYPES.BOUNDARY},{x:13, y:16, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:14, y:17, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:16, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:17, type:CELLTYPES.BOUNDARY},{x:18, y:17, type:CELLTYPES.BOUNDARY},{x:9, y:12, type:CELLTYPES.BOUNDARY},{x:10, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:14, type:CELLTYPES.BOUNDARY},{x:10, y:15, type:CELLTYPES.BOUNDARY},{x:9, y:16, type:CELLTYPES.BOUNDARY},{x:10, y:17, type:CELLTYPES.BOUNDARY},{x:9, y:18, type:CELLTYPES.BOUNDARY},{x:8, y:17, type:CELLTYPES.BOUNDARY},{x:8, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:14, type:CELLTYPES.BOUNDARY},{x:11, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:18, type:CELLTYPES.BOUNDARY},{x:12, y:15, type:CELLTYPES.BOUNDARY},{x:12, y:17, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:14, type:CELLTYPES.BOUNDARY},{x:7, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:18, type:CELLTYPES.BOUNDARY},{x:5, y:18, type:CELLTYPES.BOUNDARY},{x:3, y:18, type:CELLTYPES.BOUNDARY},{x:1, y:18, type:CELLTYPES.BOUNDARY},{x:13, y:18, type:CELLTYPES.BOUNDARY},{x:15, y:18, type:CELLTYPES.BOUNDARY},{x:17, y:18, type:CELLTYPES.BOUNDARY}], //Level 2
    //level3
    [{x: 2, y: 10, type: CELLTYPES.BOUNDARY}, {x:1, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:3, y:8, type:CELLTYPES.BOUNDARY},{x:3, y:7, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:1, y:7, type:CELLTYPES.BOUNDARY},{x:1, y:6, type:CELLTYPES.BOUNDARY},{x:2, y:6, type:CELLTYPES.BOUNDARY},{x:3, y:6, type:CELLTYPES.BOUNDARY},{x:3, y:5, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:1, y:5, type:CELLTYPES.BOUNDARY},{x:1, y:4, type:CELLTYPES.BOUNDARY},{x:2, y:4, type:CELLTYPES.BOUNDARY},{x:3, y:4, type:CELLTYPES.BOUNDARY},{x:3, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:3, type:CELLTYPES.BOUNDARY},{x:1, y:3, type:CELLTYPES.BOUNDARY},{x:1, y:2, type:CELLTYPES.BOUNDARY},{x:2, y:2, type:CELLTYPES.BOUNDARY},{x:3, y:2, type:CELLTYPES.BOUNDARY},{x:3, y:1, type:CELLTYPES.BOUNDARY},{x:2, y:1, type:CELLTYPES.BOUNDARY},{x:1, y:1, type:CELLTYPES.BOUNDARY},{x:5, y:8, type:CELLTYPES.BOUNDARY},{x:5, y:7, type:CELLTYPES.BOUNDARY},{x:5, y:6, type:CELLTYPES.BOUNDARY},{x:5, y:5, type:CELLTYPES.BOUNDARY},{x:5, y:4, type:CELLTYPES.BOUNDARY},{x:5, y:3, type:CELLTYPES.BOUNDARY},{x:5, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:4, type:CELLTYPES.BOUNDARY},{x:6, y:5, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:8, type:CELLTYPES.BOUNDARY},{x:7, y:8, type:CELLTYPES.BOUNDARY},{x:7, y:7, type:CELLTYPES.BOUNDARY},{x:7, y:6, type:CELLTYPES.BOUNDARY},{x:7, y:5, type:CELLTYPES.BOUNDARY},{x:7, y:4, type:CELLTYPES.BOUNDARY},{x:7, y:3, type:CELLTYPES.BOUNDARY},{x:7, y:2, type:CELLTYPES.BOUNDARY},{x:9, y:1, type:CELLTYPES.BOUNDARY},{x:9, y:2, type:CELLTYPES.BOUNDARY},{x:9, y:3, type:CELLTYPES.BOUNDARY},{x:10, y:3, type:CELLTYPES.BOUNDARY},{x:11, y:3, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:10, y:2, type:CELLTYPES.BOUNDARY},{x:10, y:1, type:CELLTYPES.BOUNDARY},{x:11, y:1, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:6, type:CELLTYPES.BOUNDARY},{x:8, y:6, type:CELLTYPES.BOUNDARY},{x:10, y:5, type:CELLTYPES.BOUNDARY},{x:10, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:5, type:CELLTYPES.BOUNDARY},{x:12, y:5, type:CELLTYPES.BOUNDARY},{x:12, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:5, type:CELLTYPES.BOUNDARY},{x:13, y:4, type:CELLTYPES.BOUNDARY},{x:13, y:3, type:CELLTYPES.BOUNDARY},{x:13, y:2, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:14, y:3, type:CELLTYPES.BOUNDARY},{x:14, y:4, type:CELLTYPES.BOUNDARY},{x:14, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:6, type:CELLTYPES.BOUNDARY},{x:15, y:6, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:15, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:3, type:CELLTYPES.BOUNDARY},{x:15, y:2, type:CELLTYPES.BOUNDARY},{x:18, y:8, type:CELLTYPES.BOUNDARY},{x:18, y:9, type:CELLTYPES.BOUNDARY},{x:17, y:9, type:CELLTYPES.BOUNDARY},{x:17, y:8, type:CELLTYPES.BOUNDARY},{x:16, y:8, type:CELLTYPES.BOUNDARY},{x:16, y:9, type:CELLTYPES.BOUNDARY},{x:15, y:9, type:CELLTYPES.BOUNDARY},{x:15, y:8, type:CELLTYPES.BOUNDARY},{x:14, y:8, type:CELLTYPES.BOUNDARY},{x:14, y:9, type:CELLTYPES.BOUNDARY},{x:13, y:9, type:CELLTYPES.BOUNDARY},{x:13, y:8, type:CELLTYPES.BOUNDARY},{x:12, y:8, type:CELLTYPES.BOUNDARY},{x:12, y:9, type:CELLTYPES.BOUNDARY},{x:11, y:9, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:10, y:8, type:CELLTYPES.BOUNDARY},{x:10, y:9, type:CELLTYPES.BOUNDARY},{x:9, y:9, type:CELLTYPES.BOUNDARY},{x:9, y:8, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:8, y:9, type:CELLTYPES.BOUNDARY},{x:7, y:9, type:CELLTYPES.BOUNDARY},{x:6, y:9, type:CELLTYPES.BOUNDARY},{x:5, y:9, type:CELLTYPES.BOUNDARY},{x:16, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:3, type:CELLTYPES.BOUNDARY},{x:16, y:3, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:6, type:CELLTYPES.BOUNDARY},{x:18, y:6, type:CELLTYPES.BOUNDARY},{x:18, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:18, y:7, type:CELLTYPES.BOUNDARY},{x:18, y:11, type:CELLTYPES.BOUNDARY},{x:17, y:11, type:CELLTYPES.BOUNDARY},{x:16, y:11, type:CELLTYPES.BOUNDARY},{x:16, y:12, type:CELLTYPES.BOUNDARY},{x:17, y:12, type:CELLTYPES.BOUNDARY},{x:18, y:12, type:CELLTYPES.BOUNDARY},{x:18, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:16, y:13, type:CELLTYPES.BOUNDARY},{x:14, y:11, type:CELLTYPES.BOUNDARY},{x:14, y:12, type:CELLTYPES.BOUNDARY},{x:14, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:12, type:CELLTYPES.BOUNDARY},{x:13, y:11, type:CELLTYPES.BOUNDARY},{x:12, y:11, type:CELLTYPES.BOUNDARY},{x:12, y:12, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:12, y:14, type:CELLTYPES.BOUNDARY},{x:12, y:15, type:CELLTYPES.BOUNDARY},{x:13, y:15, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:14, y:14, type:CELLTYPES.BOUNDARY},{x:14, y:15, type:CELLTYPES.BOUNDARY},{x:15, y:15, type:CELLTYPES.BOUNDARY},{x:16, y:15, type:CELLTYPES.BOUNDARY},{x:17, y:15, type:CELLTYPES.BOUNDARY},{x:17, y:16, type:CELLTYPES.BOUNDARY},{x:16, y:16, type:CELLTYPES.BOUNDARY},{x:15, y:16, type:CELLTYPES.BOUNDARY},{x:14, y:16, type:CELLTYPES.BOUNDARY},{x:13, y:16, type:CELLTYPES.BOUNDARY},{x:12, y:16, type:CELLTYPES.BOUNDARY},{x:17, y:17, type:CELLTYPES.BOUNDARY},{x:16, y:17, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:14, y:17, type:CELLTYPES.BOUNDARY},{x:12, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:10, y:18, type:CELLTYPES.BOUNDARY},{x:10, y:17, type:CELLTYPES.BOUNDARY},{x:10, y:16, type:CELLTYPES.BOUNDARY},{x:9, y:16, type:CELLTYPES.BOUNDARY},{x:8, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:17, type:CELLTYPES.BOUNDARY},{x:7, y:18, type:CELLTYPES.BOUNDARY},{x:8, y:18, type:CELLTYPES.BOUNDARY},{x:8, y:17, type:CELLTYPES.BOUNDARY},{x:9, y:17, type:CELLTYPES.BOUNDARY},{x:9, y:18, type:CELLTYPES.BOUNDARY},{x:11, y:14, type:CELLTYPES.BOUNDARY},{x:11, y:14, type:CELLTYPES.BOUNDARY},{x:10, y:14, type:CELLTYPES.BOUNDARY},{x:9, y:14, type:CELLTYPES.BOUNDARY},{x:8, y:14, type:CELLTYPES.BOUNDARY},{x:7, y:14, type:CELLTYPES.BOUNDARY},{x:7, y:13, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:10, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:12, type:CELLTYPES.BOUNDARY},{x:10, y:12, type:CELLTYPES.BOUNDARY},{x:9, y:12, type:CELLTYPES.BOUNDARY},{x:8, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:11, type:CELLTYPES.BOUNDARY},{x:9, y:11, type:CELLTYPES.BOUNDARY},{x:10, y:11, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:6, y:11, type:CELLTYPES.BOUNDARY},{x:5, y:11, type:CELLTYPES.BOUNDARY},{x:4, y:11, type:CELLTYPES.BOUNDARY},{x:4, y:12, type:CELLTYPES.BOUNDARY},{x:5, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:5, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:14, type:CELLTYPES.BOUNDARY},{x:5, y:14, type:CELLTYPES.BOUNDARY},{x:5, y:15, type:CELLTYPES.BOUNDARY},{x:5, y:16, type:CELLTYPES.BOUNDARY},{x:5, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:16, type:CELLTYPES.BOUNDARY},{x:4, y:15, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:16, type:CELLTYPES.BOUNDARY},{x:3, y:16, type:CELLTYPES.BOUNDARY},{x:1, y:14, type:CELLTYPES.BOUNDARY},{x:2, y:14, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:1, y:13, type:CELLTYPES.BOUNDARY},{x:1, y:12, type:CELLTYPES.BOUNDARY},{x:2, y:12, type:CELLTYPES.BOUNDARY},{x:3, y:12, type:CELLTYPES.BOUNDARY}],
    //level4
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
        {x: 17, y: 10, type: CELLTYPES.BOUNDARY},{x:3, y:1, type:CELLTYPES.BOUNDARY},{x:4, y:2, type:CELLTYPES.BOUNDARY},{x:5, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:4, type:CELLTYPES.BOUNDARY},{x:7, y:5, type:CELLTYPES.BOUNDARY},{x:8, y:6, type:CELLTYPES.BOUNDARY},{x:9, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:7, type:CELLTYPES.BOUNDARY},{x:12, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:3, type:CELLTYPES.BOUNDARY},{x:16, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:1, type:CELLTYPES.BOUNDARY},{x:17, y:3, type:CELLTYPES.BOUNDARY},{x:18, y:4, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:16, y:6, type:CELLTYPES.BOUNDARY},{x:15, y:7, type:CELLTYPES.BOUNDARY},{x:14, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:7, type:CELLTYPES.BOUNDARY},{x:15, y:6, type:CELLTYPES.BOUNDARY},{x:14, y:6, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:16, y:4, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:18, y:8, type:CELLTYPES.BOUNDARY},{x:16, y:8, type:CELLTYPES.BOUNDARY},{x:12, y:8, type:CELLTYPES.BOUNDARY},{x:10, y:6, type:CELLTYPES.BOUNDARY},{x:9, y:5, type:CELLTYPES.BOUNDARY},{x:8, y:4, type:CELLTYPES.BOUNDARY},{x:7, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:2, type:CELLTYPES.BOUNDARY},{x:5, y:1, type:CELLTYPES.BOUNDARY},{x:7, y:1, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:9, y:3, type:CELLTYPES.BOUNDARY},{x:10, y:4, type:CELLTYPES.BOUNDARY},{x:11, y:5, type:CELLTYPES.BOUNDARY},{x:12, y:4, type:CELLTYPES.BOUNDARY},{x:13, y:3, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:15, y:1, type:CELLTYPES.BOUNDARY},{x:13, y:1, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:12, y:2, type:CELLTYPES.BOUNDARY},{x:10, y:3, type:CELLTYPES.BOUNDARY},{x:12, y:1, type:CELLTYPES.BOUNDARY},{x:10, y:1, type:CELLTYPES.BOUNDARY},{x:9, y:2, type:CELLTYPES.BOUNDARY},{x:9, y:1, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:7, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:5, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:4, type:CELLTYPES.BOUNDARY},{x:3, y:3, type:CELLTYPES.BOUNDARY},{x:4, y:6, type:CELLTYPES.BOUNDARY},{x:3, y:5, type:CELLTYPES.BOUNDARY},{x:5, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:8, type:CELLTYPES.BOUNDARY},{x:3, y:9, type:CELLTYPES.BOUNDARY},{x:6, y:8, type:CELLTYPES.BOUNDARY},
    ],
    //level 5
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
    }, {x: 16, y: 7, type: CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY},{x:7, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:17, type:CELLTYPES.BOUNDARY},{x:6, y:16, type:CELLTYPES.BOUNDARY},{x:4, y:16, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:16, type:CELLTYPES.BOUNDARY},{x:3, y:16, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:14, type:CELLTYPES.BOUNDARY},{x:3, y:14, type:CELLTYPES.BOUNDARY},{x:2, y:14, type:CELLTYPES.BOUNDARY},{x:1, y:14, type:CELLTYPES.BOUNDARY},{x:1, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:3, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:13, type:CELLTYPES.BOUNDARY},{x:10, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:13, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:12, type:CELLTYPES.BOUNDARY},{x:12, y:12, type:CELLTYPES.BOUNDARY},{x:11, y:12, type:CELLTYPES.BOUNDARY},{x:10, y:12, type:CELLTYPES.BOUNDARY},{x:9, y:12, type:CELLTYPES.BOUNDARY},{x:10, y:11, type:CELLTYPES.BOUNDARY},{x:10, y:10, type:CELLTYPES.BOUNDARY},{x:11, y:10, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:10, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:5, type:CELLTYPES.BOUNDARY},{x:11, y:5, type:CELLTYPES.BOUNDARY},{x:11, y:4, type:CELLTYPES.BOUNDARY},{x:10, y:4, type:CELLTYPES.BOUNDARY},{x:10, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:1, type:CELLTYPES.BOUNDARY},{x:10, y:1, type:CELLTYPES.BOUNDARY}
    ],
    //level 6
    [
        //Row 1
        {x: 1, y: 9, type: CELLTYPES.BOUNDARY}, {x: 2, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 9, type: CELLTYPES.BOUNDARY}, {x: 5, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 9, type: CELLTYPES.BOUNDARY}, {x: 8, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 9,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 10, y: 9, type: CELLTYPES.BOUNDARY}, {x: 11, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 12,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 13, y: 9, type: CELLTYPES.BOUNDARY}, {x: 14, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 9, type: CELLTYPES.BOUNDARY}, {x: 17, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 18,
        y: 9,
        type: CELLTYPES.BOUNDARY
    },
        //Row 2
        {x: 1, y: 11, type: CELLTYPES.BOUNDARY}, {x: 2, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 11, type: CELLTYPES.BOUNDARY}, {x: 5, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 11, type: CELLTYPES.BOUNDARY}, {x: 8, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 9,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 10, y: 11, type: CELLTYPES.BOUNDARY}, {x: 11, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 12,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 13, y: 11, type: CELLTYPES.BOUNDARY}, {x: 14, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 11, type: CELLTYPES.BOUNDARY}, {x: 17, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 18,
        y: 11,
        type: CELLTYPES.BOUNDARY
    },{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:2, y:6, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:2, y:4, type:CELLTYPES.BOUNDARY},{x:2, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:2, type:CELLTYPES.BOUNDARY},{x:3, y:2, type:CELLTYPES.BOUNDARY},{x:4, y:2, type:CELLTYPES.BOUNDARY},{x:5, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:2, type:CELLTYPES.BOUNDARY},{x:7, y:2, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:9, y:2, type:CELLTYPES.BOUNDARY},{x:10, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:12, y:2, type:CELLTYPES.BOUNDARY},{x:13, y:2, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:15, y:2, type:CELLTYPES.BOUNDARY},{x:16, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:3, type:CELLTYPES.BOUNDARY},{x:17, y:4, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:6, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:17, y:8, type:CELLTYPES.BOUNDARY},{x:4, y:8, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:6, type:CELLTYPES.BOUNDARY},{x:4, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:4, type:CELLTYPES.BOUNDARY},{x:6, y:4, type:CELLTYPES.BOUNDARY},{x:5, y:4, type:CELLTYPES.BOUNDARY},{x:7, y:4, type:CELLTYPES.BOUNDARY},{x:8, y:4, type:CELLTYPES.BOUNDARY},{x:9, y:4, type:CELLTYPES.BOUNDARY},{x:10, y:4, type:CELLTYPES.BOUNDARY},{x:11, y:4, type:CELLTYPES.BOUNDARY},{x:12, y:4, type:CELLTYPES.BOUNDARY},{x:13, y:4, type:CELLTYPES.BOUNDARY},{x:14, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:15, y:6, type:CELLTYPES.BOUNDARY},{x:15, y:7, type:CELLTYPES.BOUNDARY},{x:15, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:7, type:CELLTYPES.BOUNDARY},{x:13, y:6, type:CELLTYPES.BOUNDARY},{x:12, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:6, type:CELLTYPES.BOUNDARY},{x:10, y:6, type:CELLTYPES.BOUNDARY},{x:9, y:6, type:CELLTYPES.BOUNDARY},{x:8, y:6, type:CELLTYPES.BOUNDARY},{x:7, y:6, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:8, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:9, y:8, type:CELLTYPES.BOUNDARY},{x:10, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:12, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:14, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:16, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:5, y:17, type:CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY},{x:7, y:17, type:CELLTYPES.BOUNDARY},{x:8, y:17, type:CELLTYPES.BOUNDARY},{x:9, y:17, type:CELLTYPES.BOUNDARY},{x:10, y:17, type:CELLTYPES.BOUNDARY},{x:11, y:17, type:CELLTYPES.BOUNDARY},{x:12, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:14, y:17, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:16, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:16, type:CELLTYPES.BOUNDARY},{x:17, y:15, type:CELLTYPES.BOUNDARY},{x:17, y:14, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:12, type:CELLTYPES.BOUNDARY},{x:4, y:12, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:14, type:CELLTYPES.BOUNDARY},{x:4, y:15, type:CELLTYPES.BOUNDARY},{x:5, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:7, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:15, type:CELLTYPES.BOUNDARY},{x:9, y:15, type:CELLTYPES.BOUNDARY},{x:10, y:15, type:CELLTYPES.BOUNDARY},{x:11, y:15, type:CELLTYPES.BOUNDARY},{x:12, y:15, type:CELLTYPES.BOUNDARY},{x:13, y:15, type:CELLTYPES.BOUNDARY},{x:14, y:15, type:CELLTYPES.BOUNDARY},{x:15, y:15, type:CELLTYPES.BOUNDARY},{x:15, y:14, type:CELLTYPES.BOUNDARY},{x:15, y:13, type:CELLTYPES.BOUNDARY},{x:15, y:12, type:CELLTYPES.BOUNDARY},{x:13, y:12, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:13, type:CELLTYPES.BOUNDARY},{x:10, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:13, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:7, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:12, type:CELLTYPES.BOUNDARY},
        //Easy password
        {x: 2, y: 10, type: CELLTYPES.EASY_PASSWORD}
    ],
    //level 7
    [
        //Row 1
        {x: 1, y: 9, type: CELLTYPES.BOUNDARY}, {x: 2, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 9, type: CELLTYPES.BOUNDARY}, {x: 5, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 9, type: CELLTYPES.BOUNDARY}, {x: 8, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 9,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 10, y: 9, type: CELLTYPES.BOUNDARY}, {x: 11, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 12,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 13, y: 9, type: CELLTYPES.BOUNDARY}, {x: 14, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 9, type: CELLTYPES.BOUNDARY}, {x: 17, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 18,
        y: 9,
        type: CELLTYPES.BOUNDARY
    },
        //Row 2
        {x: 1, y: 11, type: CELLTYPES.BOUNDARY}, {x: 2, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 11, type: CELLTYPES.BOUNDARY}, {x: 5, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 11, type: CELLTYPES.BOUNDARY}, {x: 8, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 9,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 10, y: 11, type: CELLTYPES.BOUNDARY}, {x: 11, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 12,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 13, y: 11, type: CELLTYPES.BOUNDARY}, {x: 14, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 11, type: CELLTYPES.BOUNDARY}, {x: 17, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 18,
        y: 11,
        type: CELLTYPES.BOUNDARY
    },{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:2, y:6, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:2, y:4, type:CELLTYPES.BOUNDARY},{x:2, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:2, type:CELLTYPES.BOUNDARY},{x:2, y:1, type:CELLTYPES.BOUNDARY},{x:4, y:1, type:CELLTYPES.BOUNDARY},{x:4, y:2, type:CELLTYPES.BOUNDARY},{x:4, y:3, type:CELLTYPES.BOUNDARY},{x:4, y:4, type:CELLTYPES.BOUNDARY},{x:4, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:6, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:17, y:6, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:4, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:3, type:CELLTYPES.BOUNDARY},{x:17, y:1, type:CELLTYPES.BOUNDARY},{x:15, y:1, type:CELLTYPES.BOUNDARY},{x:15, y:2, type:CELLTYPES.BOUNDARY},{x:15, y:3, type:CELLTYPES.BOUNDARY},{x:15, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:15, y:6, type:CELLTYPES.BOUNDARY},{x:15, y:8, type:CELLTYPES.BOUNDARY},{x:15, y:7, type:CELLTYPES.BOUNDARY},{x:13, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:7, type:CELLTYPES.BOUNDARY},{x:13, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:5, type:CELLTYPES.BOUNDARY},{x:13, y:4, type:CELLTYPES.BOUNDARY},{x:13, y:3, type:CELLTYPES.BOUNDARY},{x:13, y:2, type:CELLTYPES.BOUNDARY},{x:13, y:1, type:CELLTYPES.BOUNDARY},{x:11, y:1, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:4, type:CELLTYPES.BOUNDARY},{x:11, y:3, type:CELLTYPES.BOUNDARY},{x:11, y:5, type:CELLTYPES.BOUNDARY},{x:11, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:7, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:6, y:8, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:6, y:5, type:CELLTYPES.BOUNDARY},{x:6, y:4, type:CELLTYPES.BOUNDARY},{x:6, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:1, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:8, y:7, type:CELLTYPES.BOUNDARY},{x:8, y:6, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:8, y:4, type:CELLTYPES.BOUNDARY},{x:8, y:3, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:8, y:1, type:CELLTYPES.BOUNDARY},{x:2, y:12, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:14, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:16, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:18, type:CELLTYPES.BOUNDARY},{x:4, y:18, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:16, type:CELLTYPES.BOUNDARY},{x:4, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:14, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:14, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:16, type:CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY},{x:6, y:18, type:CELLTYPES.BOUNDARY},{x:8, y:12, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:8, y:14, type:CELLTYPES.BOUNDARY},{x:8, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:16, type:CELLTYPES.BOUNDARY},{x:8, y:17, type:CELLTYPES.BOUNDARY},{x:8, y:18, type:CELLTYPES.BOUNDARY},{x:11, y:12, type:CELLTYPES.BOUNDARY},{x:11, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:14, type:CELLTYPES.BOUNDARY},{x:11, y:15, type:CELLTYPES.BOUNDARY},{x:11, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:17, type:CELLTYPES.BOUNDARY},{x:11, y:18, type:CELLTYPES.BOUNDARY},{x:13, y:12, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:13, y:15, type:CELLTYPES.BOUNDARY},{x:13, y:16, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:18, type:CELLTYPES.BOUNDARY},{x:15, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:13, type:CELLTYPES.BOUNDARY},{x:15, y:14, type:CELLTYPES.BOUNDARY},{x:15, y:15, type:CELLTYPES.BOUNDARY},{x:15, y:16, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:15, y:18, type:CELLTYPES.BOUNDARY},{x:17, y:18, type:CELLTYPES.BOUNDARY},{x:17, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:16, type:CELLTYPES.BOUNDARY},{x:17, y:15, type:CELLTYPES.BOUNDARY},{x:17, y:14, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:12, type:CELLTYPES.BOUNDARY},
        //Easy password2
        {x: 2, y: 10, type: CELLTYPES.EASY_PASSWORD2}
    ],
    //level 8
    [
        //Row 1
        {x: 1, y: 9, type: CELLTYPES.BOUNDARY}, {x: 2, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 9, type: CELLTYPES.BOUNDARY}, {x: 5, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 9, type: CELLTYPES.BOUNDARY}, {x: 8, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 9,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 10, y: 9, type: CELLTYPES.BOUNDARY}, {x: 11, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 12,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 13, y: 9, type: CELLTYPES.BOUNDARY}, {x: 14, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 9, type: CELLTYPES.BOUNDARY}, {x: 17, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 18,
        y: 9,
        type: CELLTYPES.BOUNDARY
    },
        //Row 2
        {x: 1, y: 11, type: CELLTYPES.BOUNDARY}, {x: 2, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 11, type: CELLTYPES.BOUNDARY}, {x: 5, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 11, type: CELLTYPES.BOUNDARY}, {x: 8, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 9,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 10, y: 11, type: CELLTYPES.BOUNDARY}, {x: 11, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 12,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 13, y: 11, type: CELLTYPES.BOUNDARY}, {x: 14, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 11, type: CELLTYPES.BOUNDARY}, {x: 17, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 18,
        y: 11,
        type: CELLTYPES.BOUNDARY
    },{x:1, y:7, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:3, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:5, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:7, y:7, type:CELLTYPES.BOUNDARY},{x:8, y:7, type:CELLTYPES.BOUNDARY},{x:9, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:7, type:CELLTYPES.BOUNDARY},{x:11, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:7, type:CELLTYPES.BOUNDARY},{x:12, y:7, type:CELLTYPES.BOUNDARY},{x:13, y:7, type:CELLTYPES.BOUNDARY},{x:14, y:7, type:CELLTYPES.BOUNDARY},{x:15, y:7, type:CELLTYPES.BOUNDARY},{x:16, y:7, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:18, y:7, type:CELLTYPES.BOUNDARY},{x:1, y:5, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:3, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:5, type:CELLTYPES.BOUNDARY},{x:5, y:5, type:CELLTYPES.BOUNDARY},{x:6, y:5, type:CELLTYPES.BOUNDARY},{x:7, y:5, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:5, type:CELLTYPES.BOUNDARY},{x:10, y:5, type:CELLTYPES.BOUNDARY},{x:11, y:5, type:CELLTYPES.BOUNDARY},{x:12, y:5, type:CELLTYPES.BOUNDARY},{x:13, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:5, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:16, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:18, y:5, type:CELLTYPES.BOUNDARY},{x:1, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:3, type:CELLTYPES.BOUNDARY},{x:3, y:3, type:CELLTYPES.BOUNDARY},{x:3, y:3, type:CELLTYPES.BOUNDARY},{x:4, y:3, type:CELLTYPES.BOUNDARY},{x:5, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:3, type:CELLTYPES.BOUNDARY},{x:7, y:3, type:CELLTYPES.BOUNDARY},{x:8, y:3, type:CELLTYPES.BOUNDARY},{x:9, y:3, type:CELLTYPES.BOUNDARY},{x:10, y:3, type:CELLTYPES.BOUNDARY},{x:11, y:3, type:CELLTYPES.BOUNDARY},{x:12, y:3, type:CELLTYPES.BOUNDARY},{x:13, y:3, type:CELLTYPES.BOUNDARY},{x:14, y:3, type:CELLTYPES.BOUNDARY},{x:15, y:3, type:CELLTYPES.BOUNDARY},{x:16, y:3, type:CELLTYPES.BOUNDARY},{x:17, y:3, type:CELLTYPES.BOUNDARY},{x:18, y:3, type:CELLTYPES.BOUNDARY},{x:12, y:4, type:CELLTYPES.BOUNDARY},{x:10, y:8, type:CELLTYPES.BOUNDARY},{x:9, y:6, type:CELLTYPES.BOUNDARY},{x:7, y:4, type:CELLTYPES.BOUNDARY},{x:17, y:1, type:CELLTYPES.BOUNDARY},{x:16, y:2, type:CELLTYPES.BOUNDARY},{x:15, y:1, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:13, y:1, type:CELLTYPES.BOUNDARY},{x:12, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:1, type:CELLTYPES.BOUNDARY},{x:10, y:2, type:CELLTYPES.BOUNDARY},{x:9, y:1, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:7, y:1, type:CELLTYPES.BOUNDARY},{x:6, y:2, type:CELLTYPES.BOUNDARY},{x:5, y:1, type:CELLTYPES.BOUNDARY},{x:4, y:2, type:CELLTYPES.BOUNDARY},{x:3, y:1, type:CELLTYPES.BOUNDARY},{x:2, y:2, type:CELLTYPES.BOUNDARY},{x:1, y:1, type:CELLTYPES.BOUNDARY},{x:18, y:2, type:CELLTYPES.BOUNDARY},{x:5, y:6, type:CELLTYPES.BOUNDARY},{x:3, y:4, type:CELLTYPES.BOUNDARY},{x:4, y:8, type:CELLTYPES.BOUNDARY},{x:7, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:8, type:CELLTYPES.BOUNDARY},{x:14, y:6, type:CELLTYPES.BOUNDARY},{x:16, y:4, type:CELLTYPES.BOUNDARY},{x:17, y:6, type:CELLTYPES.BOUNDARY},{x:1, y:13, type:CELLTYPES.BOUNDARY},{x:1, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:3, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:5, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:7, y:13, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:13, type:CELLTYPES.BOUNDARY},{x:10, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:13, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:14, y:13, type:CELLTYPES.BOUNDARY},{x:15, y:13, type:CELLTYPES.BOUNDARY},{x:16, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:18, y:13, type:CELLTYPES.BOUNDARY},{x:18, y:15, type:CELLTYPES.BOUNDARY},{x:17, y:15, type:CELLTYPES.BOUNDARY},{x:16, y:15, type:CELLTYPES.BOUNDARY},{x:14, y:15, type:CELLTYPES.BOUNDARY},{x:15, y:15, type:CELLTYPES.BOUNDARY},{x:13, y:15, type:CELLTYPES.BOUNDARY},{x:12, y:15, type:CELLTYPES.BOUNDARY},{x:11, y:15, type:CELLTYPES.BOUNDARY},{x:10, y:15, type:CELLTYPES.BOUNDARY},{x:9, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:15, type:CELLTYPES.BOUNDARY},{x:7, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:5, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:15, type:CELLTYPES.BOUNDARY},{x:3, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:1, y:15, type:CELLTYPES.BOUNDARY},{x:1, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:5, y:17, type:CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY},{x:7, y:17, type:CELLTYPES.BOUNDARY},{x:8, y:17, type:CELLTYPES.BOUNDARY},{x:9, y:17, type:CELLTYPES.BOUNDARY},{x:10, y:17, type:CELLTYPES.BOUNDARY},{x:11, y:17, type:CELLTYPES.BOUNDARY},{x:12, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:14, y:17, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:16, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:17, type:CELLTYPES.BOUNDARY},{x:18, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:12, type:CELLTYPES.BOUNDARY},{x:3, y:14, type:CELLTYPES.BOUNDARY},{x:4, y:16, type:CELLTYPES.BOUNDARY},{x:5, y:18, type:CELLTYPES.BOUNDARY},{x:6, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:14, type:CELLTYPES.BOUNDARY},{x:8, y:12, type:CELLTYPES.BOUNDARY},{x:9, y:14, type:CELLTYPES.BOUNDARY},{x:10, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:18, type:CELLTYPES.BOUNDARY},{x:12, y:16, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:14, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:14, type:CELLTYPES.BOUNDARY},{x:16, y:16, type:CELLTYPES.BOUNDARY},{x:17, y:18, type:CELLTYPES.BOUNDARY},{x:18, y:16, type:CELLTYPES.BOUNDARY},
        //Easy password2
        {x: 2, y: 10, type: CELLTYPES.EASY_PASSWORD2}, {x: 4, y: 10, type: CELLTYPES.EASY_PASSWORD2}
    ],
    //level 9
    [
        //Row 1
        {x:1, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:3, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:5, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:7, y:13, type:CELLTYPES.BOUNDARY},{x:7, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:11, type:CELLTYPES.BOUNDARY},{x:9, y:11, type:CELLTYPES.BOUNDARY},{x:10, y:11, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:12, y:11, type:CELLTYPES.BOUNDARY},{x:13, y:11, type:CELLTYPES.BOUNDARY},{x:14, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:13, type:CELLTYPES.BOUNDARY},{x:16, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:18, y:15, type:CELLTYPES.BOUNDARY},{x:17, y:15, type:CELLTYPES.BOUNDARY},{x:16, y:15, type:CELLTYPES.BOUNDARY},{x:15, y:15, type:CELLTYPES.BOUNDARY},{x:14, y:15, type:CELLTYPES.BOUNDARY},{x:13, y:15, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:13, type:CELLTYPES.BOUNDARY},{x:10, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:14, type:CELLTYPES.BOUNDARY},{x:9, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:15, type:CELLTYPES.BOUNDARY},{x:7, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:5, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:15, type:CELLTYPES.BOUNDARY},{x:3, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:1, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:5, y:17, type:CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY},{x:7, y:17, type:CELLTYPES.BOUNDARY},{x:8, y:17, type:CELLTYPES.BOUNDARY},{x:9, y:17, type:CELLTYPES.BOUNDARY},{x:10, y:17, type:CELLTYPES.BOUNDARY},{x:11, y:17, type:CELLTYPES.BOUNDARY},{x:11, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:15, type:CELLTYPES.BOUNDARY},{x:12, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:14, y:17, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:16, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:1, y:5, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:6, type:CELLTYPES.BOUNDARY},{x:4, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:4, type:CELLTYPES.BOUNDARY},{x:4, y:3, type:CELLTYPES.BOUNDARY},{x:3, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:2, type:CELLTYPES.BOUNDARY},{x:4, y:1, type:CELLTYPES.BOUNDARY},{x:5, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:2, type:CELLTYPES.BOUNDARY},{x:8, y:1, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:8, y:3, type:CELLTYPES.BOUNDARY},{x:8, y:4, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:7, y:5, type:CELLTYPES.BOUNDARY},{x:6, y:5, type:CELLTYPES.BOUNDARY},{x:10, y:6, type:CELLTYPES.BOUNDARY},{x:10, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:3, type:CELLTYPES.BOUNDARY},{x:10, y:3, type:CELLTYPES.BOUNDARY},{x:11, y:3, type:CELLTYPES.BOUNDARY},{x:12, y:4, type:CELLTYPES.BOUNDARY},{x:12, y:3, type:CELLTYPES.BOUNDARY},{x:12, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:6, type:CELLTYPES.BOUNDARY},{x:14, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:4, type:CELLTYPES.BOUNDARY},{x:14, y:3, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:14, y:1, type:CELLTYPES.BOUNDARY},{x:12, y:2, type:CELLTYPES.BOUNDARY},{x:10, y:1, type:CELLTYPES.BOUNDARY},{x:15, y:2, type:CELLTYPES.BOUNDARY},{x:16, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:18, y:4, type:CELLTYPES.BOUNDARY},{x:17, y:4, type:CELLTYPES.BOUNDARY},{x:16, y:4, type:CELLTYPES.BOUNDARY},{x:16, y:5, type:CELLTYPES.BOUNDARY},{x:18, y:6, type:CELLTYPES.BOUNDARY},{x: 1, y: 9, type: CELLTYPES.BOUNDARY}, {x: 2, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 7, type: CELLTYPES.BOUNDARY}, {x: 5, y: 7, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 7,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 7, type: CELLTYPES.BOUNDARY}, {x: 8, y: 7, type: CELLTYPES.BOUNDARY}, {
        x: 9,
        y: 7,
        type: CELLTYPES.BOUNDARY
    }, {x: 10, y: 7, type: CELLTYPES.BOUNDARY}, {x: 11, y: 7, type: CELLTYPES.BOUNDARY}, {
        x: 12,
        y: 7,
        type: CELLTYPES.BOUNDARY
    }, {x: 13, y: 7, type: CELLTYPES.BOUNDARY}, {x: 14, y: 7, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 7,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 7, type: CELLTYPES.BOUNDARY}, {x: 17, y: 7, type: CELLTYPES.BOUNDARY}, {
        x: 18,
        y: 7,
        type: CELLTYPES.BOUNDARY
    },
        {x: 3, y: 8, type: CELLTYPES.BOUNDARY}, {x: 3, y: 7, type: CELLTYPES.BOUNDARY},
        //Row 2
        {x: 1, y: 11, type: CELLTYPES.BOUNDARY}, {x: 2, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 11, type: CELLTYPES.BOUNDARY}, {x: 5, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 9, type: CELLTYPES.BOUNDARY}, {x: 8, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 9,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 10, y: 9, type: CELLTYPES.BOUNDARY}, {x: 11, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 12,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 13, y: 9, type: CELLTYPES.BOUNDARY}, {x: 14, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 9, type: CELLTYPES.BOUNDARY}, {x: 17, y: 9, type: CELLTYPES.BOUNDARY},
        {x: 5, y: 11, type: CELLTYPES.BOUNDARY}, {x: 5, y: 10, type: CELLTYPES.BOUNDARY}, {
        x: 17,
        y: 10,
        type: CELLTYPES.BOUNDARY
    }, {x: 17, y: 11, type: CELLTYPES.BOUNDARY}, {x: 18, y: 11, type: CELLTYPES.BOUNDARY},
        //Easy password2
        {x: 4, y: 9, type: CELLTYPES.EASY_PASSWORD2}, {x: 18, y: 9, type: CELLTYPES.EASY_PASSWORD2}
    ],
    //level 10
    [
        //Offshoots
        {x:3, y:5, type:CELLTYPES.BOUNDARY},{x:3, y:6, type:CELLTYPES.BOUNDARY},{x:3, y:6, type:CELLTYPES.BOUNDARY},{x:3, y:7, type:CELLTYPES.BOUNDARY},{x:3, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:2, y:6, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:1, y:5, type:CELLTYPES.BOUNDARY},{x:1, y:6, type:CELLTYPES.BOUNDARY},{x:1, y:7, type:CELLTYPES.BOUNDARY},{x:1, y:8, type:CELLTYPES.BOUNDARY},{x:4, y:4, type:CELLTYPES.BOUNDARY},{x:4, y:3, type:CELLTYPES.BOUNDARY},{x:4, y:2, type:CELLTYPES.BOUNDARY},{x:5, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:4, type:CELLTYPES.BOUNDARY},{x:5, y:1, type:CELLTYPES.BOUNDARY},{x:3, y:3, type:CELLTYPES.BOUNDARY},{x:7, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:2, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:1, y:1, type:CELLTYPES.BOUNDARY},{x:9, y:1, type:CELLTYPES.BOUNDARY},{x:7, y:5, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:3, type:CELLTYPES.BOUNDARY},{x:9, y:4, type:CELLTYPES.BOUNDARY},{x:10, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:1, type:CELLTYPES.BOUNDARY},{x:7, y:7, type:CELLTYPES.BOUNDARY},{x:8, y:7, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:7, y:8, type:CELLTYPES.BOUNDARY},{x:9, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:7, type:CELLTYPES.BOUNDARY},{x:11, y:7, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:7, type:CELLTYPES.BOUNDARY},{x:14, y:7, type:CELLTYPES.BOUNDARY},{x:14, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:8, type:CELLTYPES.BOUNDARY},{x:16, y:7, type:CELLTYPES.BOUNDARY},{x:16, y:3, type:CELLTYPES.BOUNDARY},{x:15, y:3, type:CELLTYPES.BOUNDARY},{x:13, y:4, type:CELLTYPES.BOUNDARY},{x:12, y:5, type:CELLTYPES.BOUNDARY},{x:16, y:5, type:CELLTYPES.BOUNDARY},{x:18, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:13, y:1, type:CELLTYPES.BOUNDARY},{x:13, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:3, type:CELLTYPES.BOUNDARY},{x:11, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:18, y:12, type:CELLTYPES.BOUNDARY},{x:18, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:14, type:CELLTYPES.BOUNDARY},{x:16, y:14, type:CELLTYPES.BOUNDARY},{x:16, y:15, type:CELLTYPES.BOUNDARY},{x:16, y:16, type:CELLTYPES.BOUNDARY},{x:15, y:16, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:14, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:16, type:CELLTYPES.BOUNDARY},{x:12, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:15, type:CELLTYPES.BOUNDARY},{x:11, y:14, type:CELLTYPES.BOUNDARY},{x:10, y:14, type:CELLTYPES.BOUNDARY},{x:10, y:15, type:CELLTYPES.BOUNDARY},{x:10, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:13, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:8, y:14, type:CELLTYPES.BOUNDARY},{x:7, y:14, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:14, type:CELLTYPES.BOUNDARY},{x:5, y:14, type:CELLTYPES.BOUNDARY},{x:5, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:7, y:16, type:CELLTYPES.BOUNDARY},{x:6, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:17, type:CELLTYPES.BOUNDARY},{x:6, y:18, type:CELLTYPES.BOUNDARY},{x:5, y:18, type:CELLTYPES.BOUNDARY},{x:4, y:18, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:3, y:16, type:CELLTYPES.BOUNDARY},{x:2, y:16, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:14, type:CELLTYPES.BOUNDARY},{x:1, y:14, type:CELLTYPES.BOUNDARY},{x:1, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY}, {x: 4, y: 8, type: CELLTYPES.BOUNDARY}, {x: 4, y: 7, type: CELLTYPES.BOUNDARY}, {
        x: 4,
        y: 6,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 5, type: CELLTYPES.BOUNDARY}, {x: 5, y: 5, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 5,
        type: CELLTYPES.BOUNDARY
    }, {x: 6, y: 6, type: CELLTYPES.BOUNDARY}, {x: 6, y: 7, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 8,
        type: CELLTYPES.BOUNDARY
    },
        //Row 1
        {x: 1, y: 9, type: CELLTYPES.BOUNDARY}, {x: 2, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 9, type: CELLTYPES.BOUNDARY}, {x: 6, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 7,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 8, y: 9, type: CELLTYPES.BOUNDARY}, {x: 9, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 10,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 11, y: 9, type: CELLTYPES.BOUNDARY}, {x: 12, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 13,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 14, y: 9, type: CELLTYPES.BOUNDARY}, {x: 15, y: 9, type: CELLTYPES.BOUNDARY}, {
        x: 16,
        y: 9,
        type: CELLTYPES.BOUNDARY
    }, {x: 17, y: 9, type: CELLTYPES.BOUNDARY}, {x: 18, y: 9, type: CELLTYPES.BOUNDARY},
        //Row 2
        {x: 1, y: 11, type: CELLTYPES.BOUNDARY}, {x: 2, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 3,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 4, y: 11, type: CELLTYPES.BOUNDARY}, {x: 5, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 6,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 7, y: 11, type: CELLTYPES.BOUNDARY}, {x: 8, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 9,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 10, y: 11, type: CELLTYPES.BOUNDARY}, {x: 11, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 12,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 13, y: 11, type: CELLTYPES.BOUNDARY}, {x: 14, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 15,
        y: 11,
        type: CELLTYPES.BOUNDARY
    }, {x: 16, y: 11, type: CELLTYPES.BOUNDARY}, {x: 17, y: 11, type: CELLTYPES.BOUNDARY}, {
        x: 18,
        y: 11,
        type: CELLTYPES.BOUNDARY
    },
        //Easy password2
        {x: 2, y: 10, type: CELLTYPES.EASY_PASSWORD3}, {x: 4, y: 10, type: CELLTYPES.EASY_PASSWORD3}
    ],
    [//11
        {x:1, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:10, type:CELLTYPES.BOUNDARY},{x:2, y:9, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:2, y:6, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:2, y:4, type:CELLTYPES.BOUNDARY},{x:2, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:2, type:CELLTYPES.BOUNDARY},{x:3, y:2, type:CELLTYPES.BOUNDARY},{x:4, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:2, type:CELLTYPES.BOUNDARY},{x:5, y:2, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:7, y:2, type:CELLTYPES.BOUNDARY},{x:9, y:2, type:CELLTYPES.BOUNDARY},{x:10, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:13, y:2, type:CELLTYPES.BOUNDARY},{x:12, y:2, type:CELLTYPES.BOUNDARY},{x:15, y:2, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:16, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:3, type:CELLTYPES.BOUNDARY},{x:17, y:4, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:6, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:17, y:9, type:CELLTYPES.BOUNDARY},{x:17, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:10, type:CELLTYPES.BOUNDARY},{x:17, y:11, type:CELLTYPES.BOUNDARY},{x:18, y:11, type:CELLTYPES.BOUNDARY},{x:1, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:3, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:12, type:CELLTYPES.BOUNDARY},{x:4, y:11, type:CELLTYPES.BOUNDARY},{x:4, y:10, type:CELLTYPES.BOUNDARY},{x:4, y:9, type:CELLTYPES.BOUNDARY},{x:4, y:8, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:6, type:CELLTYPES.BOUNDARY},{x:4, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:4, type:CELLTYPES.BOUNDARY},{x:5, y:4, type:CELLTYPES.BOUNDARY},{x:6, y:4, type:CELLTYPES.BOUNDARY},{x:7, y:4, type:CELLTYPES.BOUNDARY},{x:8, y:4, type:CELLTYPES.BOUNDARY},{x:9, y:4, type:CELLTYPES.BOUNDARY},{x:10, y:4, type:CELLTYPES.BOUNDARY},{x:11, y:4, type:CELLTYPES.BOUNDARY},{x:12, y:4, type:CELLTYPES.BOUNDARY},{x:13, y:4, type:CELLTYPES.BOUNDARY},{x:14, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:15, y:6, type:CELLTYPES.BOUNDARY},{x:15, y:7, type:CELLTYPES.BOUNDARY},{x:15, y:8, type:CELLTYPES.BOUNDARY},{x:15, y:9, type:CELLTYPES.BOUNDARY},{x:15, y:10, type:CELLTYPES.BOUNDARY},{x:15, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:13, type:CELLTYPES.BOUNDARY},{x:16, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:18, y:13, type:CELLTYPES.BOUNDARY},{x:1, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:3, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:15, type:CELLTYPES.BOUNDARY},{x:5, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:14, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:11, type:CELLTYPES.BOUNDARY},{x:6, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:10, type:CELLTYPES.BOUNDARY},{x:6, y:9, type:CELLTYPES.BOUNDARY},{x:6, y:8, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:7, y:6, type:CELLTYPES.BOUNDARY},{x:8, y:6, type:CELLTYPES.BOUNDARY},{x:9, y:6, type:CELLTYPES.BOUNDARY},{x:10, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:6, type:CELLTYPES.BOUNDARY},{x:12, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:7, type:CELLTYPES.BOUNDARY},{x:13, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:9, type:CELLTYPES.BOUNDARY},{x:13, y:10, type:CELLTYPES.BOUNDARY},{x:13, y:11, type:CELLTYPES.BOUNDARY},{x:13, y:12, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:13, y:15, type:CELLTYPES.BOUNDARY},{x:14, y:15, type:CELLTYPES.BOUNDARY},{x:15, y:15, type:CELLTYPES.BOUNDARY},{x:16, y:15, type:CELLTYPES.BOUNDARY},{x:17, y:15, type:CELLTYPES.BOUNDARY},{x:18, y:15, type:CELLTYPES.BOUNDARY},{x:1, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:5, y:17, type:CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY},{x:7, y:17, type:CELLTYPES.BOUNDARY},{x:8, y:17, type:CELLTYPES.BOUNDARY},{x:8, y:16, type:CELLTYPES.BOUNDARY},{x:8, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:14, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:8, y:12, type:CELLTYPES.BOUNDARY},{x:8, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:10, type:CELLTYPES.BOUNDARY},{x:8, y:9, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:9, y:8, type:CELLTYPES.BOUNDARY},{x:10, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:9, type:CELLTYPES.BOUNDARY},{x:11, y:10, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:11, y:12, type:CELLTYPES.BOUNDARY},{x:11, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:14, type:CELLTYPES.BOUNDARY},{x:11, y:15, type:CELLTYPES.BOUNDARY},{x:11, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:17, type:CELLTYPES.BOUNDARY},{x:12, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:14, y:17, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:16, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:17, type:CELLTYPES.BOUNDARY},{x:18, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:1, type:CELLTYPES.EASY_PASSWORD3_5},{x:17, y:1, type:CELLTYPES.EASY_PASSWORD3_5},{x:7, y:1, type:CELLTYPES.EASY_PASSWORD3_5},{x:12, y:1, type:CELLTYPES.EASY_PASSWORD3_5}
    ],
    [//12
        {x:1, y:9, type:CELLTYPES.BOUNDARY},{x:2, y:9, type:CELLTYPES.BOUNDARY},{x:3, y:9, type:CELLTYPES.BOUNDARY},{x:4, y:9, type:CELLTYPES.BOUNDARY},{x:5, y:9, type:CELLTYPES.BOUNDARY},{x:6, y:9, type:CELLTYPES.BOUNDARY},{x:7, y:9, type:CELLTYPES.BOUNDARY},{x:8, y:9, type:CELLTYPES.BOUNDARY},{x:9, y:9, type:CELLTYPES.BOUNDARY},{x:10, y:9, type:CELLTYPES.BOUNDARY},{x:11, y:9, type:CELLTYPES.BOUNDARY},{x:12, y:9, type:CELLTYPES.BOUNDARY},{x:13, y:9, type:CELLTYPES.BOUNDARY},{x:14, y:9, type:CELLTYPES.BOUNDARY},{x:15, y:9, type:CELLTYPES.BOUNDARY},{x:16, y:9, type:CELLTYPES.BOUNDARY},{x:17, y:9, type:CELLTYPES.BOUNDARY},{x:18, y:9, type:CELLTYPES.BOUNDARY},{x:18, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:8, type:CELLTYPES.BOUNDARY},{x:16, y:8, type:CELLTYPES.BOUNDARY},{x:15, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:8, type:CELLTYPES.BOUNDARY},{x:14, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:8, type:CELLTYPES.BOUNDARY},{x:12, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:10, y:8, type:CELLTYPES.BOUNDARY},{x:9, y:8, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:7, y:8, type:CELLTYPES.BOUNDARY},{x:6, y:8, type:CELLTYPES.BOUNDARY},{x:5, y:8, type:CELLTYPES.BOUNDARY},{x:4, y:8, type:CELLTYPES.BOUNDARY},{x:3, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:1, y:8, type:CELLTYPES.BOUNDARY},{x:1, y:7, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:3, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:5, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:7, y:7, type:CELLTYPES.BOUNDARY},{x:8, y:7, type:CELLTYPES.BOUNDARY},{x:9, y:7, type:CELLTYPES.BOUNDARY},{x:11, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:7, type:CELLTYPES.BOUNDARY},{x:12, y:7, type:CELLTYPES.BOUNDARY},{x:13, y:7, type:CELLTYPES.BOUNDARY},{x:14, y:7, type:CELLTYPES.BOUNDARY},{x:15, y:7, type:CELLTYPES.BOUNDARY},{x:16, y:7, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:18, y:7, type:CELLTYPES.BOUNDARY},{x:18, y:6, type:CELLTYPES.BOUNDARY},{x:17, y:6, type:CELLTYPES.BOUNDARY},{x:16, y:6, type:CELLTYPES.BOUNDARY},{x:16, y:6, type:CELLTYPES.BOUNDARY},{x:15, y:6, type:CELLTYPES.BOUNDARY},{x:14, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:6, type:CELLTYPES.BOUNDARY},{x:10, y:6, type:CELLTYPES.BOUNDARY},{x:12, y:6, type:CELLTYPES.BOUNDARY},{x:9, y:6, type:CELLTYPES.BOUNDARY},{x:8, y:6, type:CELLTYPES.BOUNDARY},{x:7, y:6, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:5, y:6, type:CELLTYPES.BOUNDARY},{x:4, y:6, type:CELLTYPES.BOUNDARY},{x:3, y:6, type:CELLTYPES.BOUNDARY},{x:2, y:6, type:CELLTYPES.BOUNDARY},{x:1, y:6, type:CELLTYPES.BOUNDARY},{x:1, y:5, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:3, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:5, type:CELLTYPES.BOUNDARY},{x:5, y:5, type:CELLTYPES.BOUNDARY},{x:6, y:5, type:CELLTYPES.BOUNDARY},{x:7, y:5, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:5, type:CELLTYPES.BOUNDARY},{x:10, y:5, type:CELLTYPES.BOUNDARY},{x:11, y:5, type:CELLTYPES.BOUNDARY},{x:12, y:5, type:CELLTYPES.BOUNDARY},{x:13, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:5, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:16, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:18, y:5, type:CELLTYPES.BOUNDARY},{x:18, y:4, type:CELLTYPES.BOUNDARY},{x:17, y:4, type:CELLTYPES.BOUNDARY},{x:16, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:4, type:CELLTYPES.BOUNDARY},{x:14, y:4, type:CELLTYPES.BOUNDARY},{x:13, y:4, type:CELLTYPES.BOUNDARY},{x:12, y:4, type:CELLTYPES.BOUNDARY},{x:11, y:4, type:CELLTYPES.BOUNDARY},{x:10, y:4, type:CELLTYPES.BOUNDARY},{x:9, y:4, type:CELLTYPES.BOUNDARY},{x:8, y:4, type:CELLTYPES.BOUNDARY},{x:7, y:4, type:CELLTYPES.BOUNDARY},{x:6, y:4, type:CELLTYPES.BOUNDARY},{x:5, y:4, type:CELLTYPES.BOUNDARY},{x:4, y:4, type:CELLTYPES.BOUNDARY},{x:3, y:4, type:CELLTYPES.BOUNDARY},{x:2, y:4, type:CELLTYPES.BOUNDARY},{x:1, y:4, type:CELLTYPES.BOUNDARY},{x:1, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:3, type:CELLTYPES.BOUNDARY},{x:3, y:3, type:CELLTYPES.BOUNDARY},{x:4, y:3, type:CELLTYPES.BOUNDARY},{x:5, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:3, type:CELLTYPES.BOUNDARY},{x:7, y:3, type:CELLTYPES.BOUNDARY},{x:8, y:3, type:CELLTYPES.BOUNDARY},{x:9, y:3, type:CELLTYPES.BOUNDARY},{x:10, y:3, type:CELLTYPES.BOUNDARY},{x:11, y:3, type:CELLTYPES.BOUNDARY},{x:12, y:3, type:CELLTYPES.BOUNDARY},{x:13, y:3, type:CELLTYPES.BOUNDARY},{x:14, y:3, type:CELLTYPES.BOUNDARY},{x:15, y:3, type:CELLTYPES.BOUNDARY},{x:16, y:3, type:CELLTYPES.BOUNDARY},{x:17, y:3, type:CELLTYPES.BOUNDARY},{x:18, y:3, type:CELLTYPES.BOUNDARY},{x:18, y:2, type:CELLTYPES.BOUNDARY},{x:18, y:1, type:CELLTYPES.BOUNDARY},{x:17, y:1, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:16, y:2, type:CELLTYPES.BOUNDARY},{x:16, y:1, type:CELLTYPES.BOUNDARY},{x:15, y:1, type:CELLTYPES.BOUNDARY},{x:15, y:2, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:14, y:1, type:CELLTYPES.BOUNDARY},{x:13, y:1, type:CELLTYPES.BOUNDARY},{x:13, y:2, type:CELLTYPES.BOUNDARY},{x:12, y:2, type:CELLTYPES.BOUNDARY},{x:12, y:0, type:CELLTYPES.BOUNDARY},{x:12, y:1, type:CELLTYPES.BOUNDARY},{x:11, y:1, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:10, y:2, type:CELLTYPES.BOUNDARY},{x:10, y:1, type:CELLTYPES.BOUNDARY},{x:9, y:1, type:CELLTYPES.BOUNDARY},{x:9, y:2, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:8, y:1, type:CELLTYPES.BOUNDARY},{x:7, y:1, type:CELLTYPES.BOUNDARY},{x:7, y:3, type:CELLTYPES.BOUNDARY},{x:7, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:1, type:CELLTYPES.BOUNDARY},{x:5, y:1, type:CELLTYPES.BOUNDARY},{x:5, y:2, type:CELLTYPES.BOUNDARY},{x:4, y:2, type:CELLTYPES.BOUNDARY},{x:4, y:1, type:CELLTYPES.BOUNDARY},{x:3, y:1, type:CELLTYPES.BOUNDARY},{x:3, y:2, type:CELLTYPES.BOUNDARY},{x:2, y:2, type:CELLTYPES.BOUNDARY},{x:2, y:1, type:CELLTYPES.BOUNDARY},{x:1, y:1, type:CELLTYPES.BOUNDARY},{x:1, y:2, type:CELLTYPES.BOUNDARY},{x:2, y:10, type:CELLTYPES.BOUNDARY},{x:2, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:12, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:14, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:16, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:5, y:17, type:CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY},{x:7, y:17, type:CELLTYPES.BOUNDARY},{x:8, y:17, type:CELLTYPES.BOUNDARY},{x:9, y:17, type:CELLTYPES.BOUNDARY},{x:10, y:17, type:CELLTYPES.BOUNDARY},{x:11, y:17, type:CELLTYPES.BOUNDARY},{x:12, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:14, y:17, type:CELLTYPES.BOUNDARY},{x:14, y:17, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:16, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:16, type:CELLTYPES.BOUNDARY},{x:17, y:16, type:CELLTYPES.BOUNDARY},{x:17, y:15, type:CELLTYPES.BOUNDARY},{x:17, y:14, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:12, type:CELLTYPES.BOUNDARY},{x:17, y:11, type:CELLTYPES.BOUNDARY},{x:17, y:10, type:CELLTYPES.BOUNDARY},{x:16, y:10, type:CELLTYPES.BOUNDARY},{x:16, y:11, type:CELLTYPES.BOUNDARY},{x:16, y:12, type:CELLTYPES.BOUNDARY},{x:16, y:13, type:CELLTYPES.BOUNDARY},{x:16, y:14, type:CELLTYPES.BOUNDARY},{x:16, y:15, type:CELLTYPES.BOUNDARY},{x:16, y:16, type:CELLTYPES.BOUNDARY},{x:15, y:16, type:CELLTYPES.BOUNDARY},{x:15, y:15, type:CELLTYPES.BOUNDARY},{x:15, y:14, type:CELLTYPES.BOUNDARY},{x:15, y:13, type:CELLTYPES.BOUNDARY},{x:15, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:10, type:CELLTYPES.BOUNDARY},{x:14, y:10, type:CELLTYPES.BOUNDARY},{x:14, y:11, type:CELLTYPES.BOUNDARY},{x:14, y:12, type:CELLTYPES.BOUNDARY},{x:14, y:13, type:CELLTYPES.BOUNDARY},{x:14, y:14, type:CELLTYPES.BOUNDARY},{x:14, y:15, type:CELLTYPES.BOUNDARY},{x:14, y:16, type:CELLTYPES.BOUNDARY},{x:13, y:16, type:CELLTYPES.BOUNDARY},{x:13, y:15, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:12, type:CELLTYPES.BOUNDARY},{x:13, y:11, type:CELLTYPES.BOUNDARY},{x:13, y:10, type:CELLTYPES.BOUNDARY},{x:12, y:10, type:CELLTYPES.BOUNDARY},{x:12, y:11, type:CELLTYPES.BOUNDARY},{x:12, y:12, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:12, y:14, type:CELLTYPES.BOUNDARY},{x:12, y:15, type:CELLTYPES.BOUNDARY},{x:12, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:15, type:CELLTYPES.BOUNDARY},{x:11, y:14, type:CELLTYPES.BOUNDARY},{x:11, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:12, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:11, y:10, type:CELLTYPES.BOUNDARY},{x:10, y:10, type:CELLTYPES.BOUNDARY},{x:10, y:11, type:CELLTYPES.BOUNDARY},{x:10, y:12, type:CELLTYPES.BOUNDARY},{x:10, y:13, type:CELLTYPES.BOUNDARY},{x:10, y:14, type:CELLTYPES.BOUNDARY},{x:10, y:15, type:CELLTYPES.BOUNDARY},{x:10, y:16, type:CELLTYPES.BOUNDARY},{x:9, y:16, type:CELLTYPES.BOUNDARY},{x:9, y:16, type:CELLTYPES.BOUNDARY},{x:9, y:15, type:CELLTYPES.BOUNDARY},{x:9, y:14, type:CELLTYPES.BOUNDARY},{x:9, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:12, type:CELLTYPES.BOUNDARY},{x:9, y:11, type:CELLTYPES.BOUNDARY},{x:9, y:10, type:CELLTYPES.BOUNDARY},{x:8, y:10, type:CELLTYPES.BOUNDARY},{x:8, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:12, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:8, y:14, type:CELLTYPES.BOUNDARY},{x:8, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:15, type:CELLTYPES.BOUNDARY},{x:7, y:14, type:CELLTYPES.BOUNDARY},{x:7, y:13, type:CELLTYPES.BOUNDARY},{x:7, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:11, type:CELLTYPES.BOUNDARY},{x:7, y:9, type:CELLTYPES.BOUNDARY},{x:7, y:10, type:CELLTYPES.BOUNDARY},{x:6, y:10, type:CELLTYPES.BOUNDARY},{x:6, y:11, type:CELLTYPES.BOUNDARY},{x:6, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:14, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:16, type:CELLTYPES.BOUNDARY},{x:5, y:16, type:CELLTYPES.BOUNDARY},{x:5, y:15, type:CELLTYPES.BOUNDARY},{x:5, y:14, type:CELLTYPES.BOUNDARY},{x:5, y:13, type:CELLTYPES.BOUNDARY},{x:5, y:12, type:CELLTYPES.BOUNDARY},{x:5, y:11, type:CELLTYPES.BOUNDARY},{x:5, y:10, type:CELLTYPES.BOUNDARY},{x:4, y:10, type:CELLTYPES.BOUNDARY},{x:4, y:11, type:CELLTYPES.BOUNDARY},{x:4, y:12, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:14, type:CELLTYPES.BOUNDARY},{x:4, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:16, type:CELLTYPES.BOUNDARY},{x:3, y:16, type:CELLTYPES.BOUNDARY},{x:3, y:15, type:CELLTYPES.BOUNDARY},{x:3, y:14, type:CELLTYPES.BOUNDARY},{x:3, y:13, type:CELLTYPES.BOUNDARY},{x:3, y:12, type:CELLTYPES.BOUNDARY},{x:3, y:11, type:CELLTYPES.BOUNDARY},{x:3, y:10, type:CELLTYPES.BOUNDARY},
        {x:2, y:18, type:CELLTYPES.EASY_PASSWORD3_7},{x:17, y:18, type:CELLTYPES.EASY_PASSWORD3_7},{x:9, y:18, type:CELLTYPES.EASY_PASSWORD3_7}
    ],
    [//13
        {x:1, y:9, type:CELLTYPES.BOUNDARY},{x:1, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:11, type:CELLTYPES.BOUNDARY},{x:3, y:11, type:CELLTYPES.BOUNDARY},{x:3, y:10, type:CELLTYPES.BOUNDARY},{x:3, y:9, type:CELLTYPES.BOUNDARY},{x:1, y:7, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:3, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:6, y:5, type:CELLTYPES.BOUNDARY},{x:6, y:4, type:CELLTYPES.BOUNDARY},{x:6, y:3, type:CELLTYPES.BOUNDARY},{x:6, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:1, type:CELLTYPES.BOUNDARY},{x:5, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:5, type:CELLTYPES.BOUNDARY},{x:3, y:4, type:CELLTYPES.BOUNDARY},{x:2, y:3, type:CELLTYPES.BOUNDARY},{x:1, y:6, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:1, type:CELLTYPES.BOUNDARY},{x:5, y:9, type:CELLTYPES.BOUNDARY},{x:5, y:10, type:CELLTYPES.BOUNDARY},{x:5, y:11, type:CELLTYPES.BOUNDARY},{x:5, y:13, type:CELLTYPES.BOUNDARY},{x:5, y:12, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:3, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:1, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:9, type:CELLTYPES.BOUNDARY},{x:7, y:9, type:CELLTYPES.BOUNDARY},{x:7, y:4, type:CELLTYPES.BOUNDARY},{x:8, y:4, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:7, type:CELLTYPES.BOUNDARY},{x:18, y:11, type:CELLTYPES.BOUNDARY},{x:17, y:11, type:CELLTYPES.BOUNDARY},{x:16, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:13, type:CELLTYPES.BOUNDARY},{x:16, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:15, y:15, type:CELLTYPES.BOUNDARY},{x:16, y:15, type:CELLTYPES.BOUNDARY},{x:17, y:15, type:CELLTYPES.BOUNDARY},{x:12, y:10, type:CELLTYPES.BOUNDARY},{x:13, y:11, type:CELLTYPES.BOUNDARY},{x:14, y:12, type:CELLTYPES.BOUNDARY},{x:10, y:14, type:CELLTYPES.BOUNDARY},{x:11, y:15, type:CELLTYPES.BOUNDARY},{x:11, y:14, type:CELLTYPES.BOUNDARY},{x:10, y:15, type:CELLTYPES.BOUNDARY},{x:12, y:14, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:18, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:16, y:6, type:CELLTYPES.BOUNDARY},{x:18, y:6, type:CELLTYPES.BOUNDARY},{x:16, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:16, y:4, type:CELLTYPES.BOUNDARY},{x:18, y:3, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:16, y:3, type:CELLTYPES.BOUNDARY},{x:14, y:6, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:15, y:1, type:CELLTYPES.BOUNDARY},{x:9, y:5, type:CELLTYPES.BOUNDARY},
        {x:8, y:9, type:CELLTYPES.BOUNDARY},{x:9, y:9, type:CELLTYPES.BOUNDARY},{x:10, y:9, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:10, y:12, type:CELLTYPES.BOUNDARY},{x:9, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:12, type:CELLTYPES.BOUNDARY},{x:8, y:12, type:CELLTYPES.BOUNDARY},{x:2, y:16, type:CELLTYPES.BOUNDARY},{x:3, y:16, type:CELLTYPES.BOUNDARY},{x:4, y:16, type:CELLTYPES.BOUNDARY},{x:5, y:16, type:CELLTYPES.BOUNDARY},{x:6, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:17, type:CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY},{x:5, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:12, y:11, type:CELLTYPES.BOUNDARY},{x:17, y:9, type:CELLTYPES.BOUNDARY},{x:16, y:9, type:CELLTYPES.BOUNDARY},{x:18, y:9, type:CELLTYPES.BOUNDARY},{x:15, y:9, type:CELLTYPES.BOUNDARY},{x:14, y:9, type:CELLTYPES.BOUNDARY},{x:14, y:8, type:CELLTYPES.BOUNDARY},{x:7, y:7, type:CELLTYPES.BOUNDARY},{x:9, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:7, type:CELLTYPES.BOUNDARY},{x:11, y:7, type:CELLTYPES.BOUNDARY},{x:11, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:5, type:CELLTYPES.BOUNDARY},{x:11, y:4, type:CELLTYPES.BOUNDARY},{x:10, y:3, type:CELLTYPES.BOUNDARY},{x:9, y:2, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:12, y:2, type:CELLTYPES.BOUNDARY},{x:13, y:2, type:CELLTYPES.BOUNDARY},{x:13, y:3, type:CELLTYPES.BOUNDARY},{x:14, y:4, type:CELLTYPES.BOUNDARY},{x:13, y:6, type:CELLTYPES.BOUNDARY},{x:14, y:5, type:CELLTYPES.BOUNDARY},{x:13, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:10, type:CELLTYPES.BOUNDARY},{x:7, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:8, y:14, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:14, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:17, type:CELLTYPES.BOUNDARY},{x:10, y:17, type:CELLTYPES.BOUNDARY},{x:11, y:17, type:CELLTYPES.BOUNDARY},{x:12, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:16, type:CELLTYPES.BOUNDARY},{x:15, y:17, type:CELLTYPES.BOUNDARY},{x:16, y:17, type:CELLTYPES.BOUNDARY},{x:16, y:18, type:CELLTYPES.BOUNDARY},{x:15, y:18, type:CELLTYPES.BOUNDARY},{x:18, y:17, type:CELLTYPES.BOUNDARY},{x:12, y:8, type:CELLTYPES.BOUNDARY},
        {x:2, y:8, type:CELLTYPES.EASY_PASSWORD4},{x:4, y:8, type:CELLTYPES.EASY_PASSWORD4},{x:8, y:8, type:CELLTYPES.EASY_PASSWORD4},{x:11, y:9, type:CELLTYPES.EASY_PASSWORD4},{x:14, y:10, type:CELLTYPES.EASY_PASSWORD4}

    ],
    [//14
        {x:18, y:1, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:3, type:CELLTYPES.BOUNDARY},{x:16, y:3, type:CELLTYPES.BOUNDARY},{x:15, y:4, type:CELLTYPES.BOUNDARY},{x:16, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:5, type:CELLTYPES.BOUNDARY},{x:12, y:5, type:CELLTYPES.BOUNDARY},{x:12, y:4, type:CELLTYPES.BOUNDARY},{x:12, y:3, type:CELLTYPES.BOUNDARY},{x:13, y:3, type:CELLTYPES.BOUNDARY},{x:13, y:2, type:CELLTYPES.BOUNDARY},{x:12, y:1, type:CELLTYPES.BOUNDARY},{x:11, y:1, type:CELLTYPES.BOUNDARY},{x:10, y:2, type:CELLTYPES.BOUNDARY},{x:9, y:2, type:CELLTYPES.BOUNDARY},{x:9, y:3, type:CELLTYPES.BOUNDARY},{x:8, y:4, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:6, type:CELLTYPES.BOUNDARY},{x:9, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:6, type:CELLTYPES.BOUNDARY},{x:10, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:7, type:CELLTYPES.BOUNDARY},{x:12, y:2, type:CELLTYPES.BOUNDARY},{x:11, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:12, y:8, type:CELLTYPES.BOUNDARY},{x:12, y:9, type:CELLTYPES.BOUNDARY},{x:12, y:10, type:CELLTYPES.BOUNDARY},{x:11, y:10, type:CELLTYPES.BOUNDARY},{x:10, y:10, type:CELLTYPES.BOUNDARY},{x:9, y:10, type:CELLTYPES.BOUNDARY},{x:9, y:11, type:CELLTYPES.BOUNDARY},{x:10, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:9, type:CELLTYPES.BOUNDARY},{x:8, y:10, type:CELLTYPES.BOUNDARY},{x:7, y:8, type:CELLTYPES.BOUNDARY},{x:7, y:9, type:CELLTYPES.BOUNDARY},{x:7, y:9, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:7, y:7, type:CELLTYPES.BOUNDARY},{x:5, y:6, type:CELLTYPES.BOUNDARY},{x:5, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:8, type:CELLTYPES.BOUNDARY},{x:3, y:8, type:CELLTYPES.BOUNDARY},{x:3, y:9, type:CELLTYPES.BOUNDARY},{x:4, y:9, type:CELLTYPES.BOUNDARY},{x:4, y:10, type:CELLTYPES.BOUNDARY},{x:4, y:11, type:CELLTYPES.BOUNDARY},{x:4, y:11, type:CELLTYPES.BOUNDARY},{x:5, y:11, type:CELLTYPES.BOUNDARY},{x:5, y:12, type:CELLTYPES.BOUNDARY},{x:4, y:12, type:CELLTYPES.BOUNDARY},{x:5, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:14, type:CELLTYPES.BOUNDARY},{x:7, y:14, type:CELLTYPES.BOUNDARY},{x:7, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:16, type:CELLTYPES.BOUNDARY},{x:8, y:17, type:CELLTYPES.BOUNDARY},{x:9, y:17, type:CELLTYPES.BOUNDARY},{x:10, y:17, type:CELLTYPES.BOUNDARY},{x:10, y:16, type:CELLTYPES.BOUNDARY},{x:9, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:16, type:CELLTYPES.BOUNDARY},{x:11, y:15, type:CELLTYPES.BOUNDARY},{x:11, y:14, type:CELLTYPES.BOUNDARY},{x:12, y:14, type:CELLTYPES.BOUNDARY},{x:14, y:14, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:14, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:14, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:13, type:CELLTYPES.BOUNDARY},{x:16, y:12, type:CELLTYPES.BOUNDARY},{x:16, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:11, type:CELLTYPES.BOUNDARY},{x:16, y:10, type:CELLTYPES.BOUNDARY},{x:17, y:9, type:CELLTYPES.BOUNDARY},{x:16, y:9, type:CELLTYPES.BOUNDARY},{x:17, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:7, y:18, type:CELLTYPES.EASY_PASSWORD5},{x:11, y:18, type:CELLTYPES.EASY_PASSWORD5}
    ],
    [//15
        {x:18, y:11, type:CELLTYPES.BOUNDARY},{x:16, y:11, type:CELLTYPES.BOUNDARY},{x:17, y:11, type:CELLTYPES.BOUNDARY},{x:16, y:10, type:CELLTYPES.BOUNDARY},{x:15, y:10, type:CELLTYPES.BOUNDARY},{x:14, y:10, type:CELLTYPES.BOUNDARY},{x:14, y:9, type:CELLTYPES.BOUNDARY},{x:13, y:9, type:CELLTYPES.BOUNDARY},{x:12, y:9, type:CELLTYPES.BOUNDARY},{x:12, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:10, y:8, type:CELLTYPES.BOUNDARY},{x:10, y:7, type:CELLTYPES.BOUNDARY},{x:9, y:7, type:CELLTYPES.BOUNDARY},{x:8, y:7, type:CELLTYPES.BOUNDARY},{x:8, y:6, type:CELLTYPES.BOUNDARY},{x:7, y:6, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:6, y:5, type:CELLTYPES.BOUNDARY},{x:5, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:4, type:CELLTYPES.BOUNDARY},{x:3, y:4, type:CELLTYPES.BOUNDARY},{x:2, y:4, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:2, y:6, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:9, type:CELLTYPES.BOUNDARY},{x:2, y:10, type:CELLTYPES.BOUNDARY},{x:2, y:11, type:CELLTYPES.BOUNDARY},{x:1, y:11, type:CELLTYPES.BOUNDARY},{x:3, y:6, type:CELLTYPES.BOUNDARY},{x:3, y:5, type:CELLTYPES.BOUNDARY},{x:4, y:6, type:CELLTYPES.BOUNDARY},{x:5, y:6, type:CELLTYPES.BOUNDARY},{x:3, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:5, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:7, y:7, type:CELLTYPES.BOUNDARY},{x:3, y:8, type:CELLTYPES.BOUNDARY},{x:4, y:8, type:CELLTYPES.BOUNDARY},{x:5, y:8, type:CELLTYPES.BOUNDARY},{x:6, y:8, type:CELLTYPES.BOUNDARY},{x:7, y:8, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:9, y:8, type:CELLTYPES.BOUNDARY},{x:3, y:10, type:CELLTYPES.BOUNDARY},{x:3, y:9, type:CELLTYPES.BOUNDARY},{x:4, y:9, type:CELLTYPES.BOUNDARY},{x:5, y:9, type:CELLTYPES.BOUNDARY},{x:6, y:9, type:CELLTYPES.BOUNDARY},{x:7, y:9, type:CELLTYPES.BOUNDARY},{x:8, y:9, type:CELLTYPES.BOUNDARY},{x:9, y:9, type:CELLTYPES.BOUNDARY},{x:10, y:9, type:CELLTYPES.BOUNDARY},{x:11, y:9, type:CELLTYPES.BOUNDARY},{x:4, y:10, type:CELLTYPES.BOUNDARY},{x:5, y:10, type:CELLTYPES.BOUNDARY},{x:6, y:10, type:CELLTYPES.BOUNDARY},{x:7, y:10, type:CELLTYPES.BOUNDARY},{x:8, y:10, type:CELLTYPES.BOUNDARY},{x:9, y:10, type:CELLTYPES.BOUNDARY},{x:10, y:10, type:CELLTYPES.BOUNDARY},{x:11, y:10, type:CELLTYPES.BOUNDARY},{x:12, y:10, type:CELLTYPES.BOUNDARY},{x:13, y:10, type:CELLTYPES.BOUNDARY},{x:3, y:11, type:CELLTYPES.BOUNDARY},{x:4, y:11, type:CELLTYPES.BOUNDARY},{x:5, y:11, type:CELLTYPES.BOUNDARY},{x:6, y:11, type:CELLTYPES.BOUNDARY},{x:7, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:11, type:CELLTYPES.BOUNDARY},{x:9, y:11, type:CELLTYPES.BOUNDARY},{x:10, y:11, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:12, y:11, type:CELLTYPES.BOUNDARY},{x:13, y:11, type:CELLTYPES.BOUNDARY},{x:14, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:11, type:CELLTYPES.BOUNDARY},{x:16, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:12, type:CELLTYPES.BOUNDARY},{x:14, y:12, type:CELLTYPES.BOUNDARY},{x:14, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:12, y:14, type:CELLTYPES.BOUNDARY},{x:11, y:14, type:CELLTYPES.BOUNDARY},{x:10, y:14, type:CELLTYPES.BOUNDARY},{x:10, y:15, type:CELLTYPES.BOUNDARY},{x:9, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:15, type:CELLTYPES.BOUNDARY},{x:8, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:16, type:CELLTYPES.BOUNDARY},{x:6, y:16, type:CELLTYPES.BOUNDARY},{x:6, y:17, type:CELLTYPES.BOUNDARY},{x:5, y:17, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:13, y:12, type:CELLTYPES.BOUNDARY},{x:12, y:12, type:CELLTYPES.BOUNDARY},{x:11, y:12, type:CELLTYPES.BOUNDARY},{x:10, y:12, type:CELLTYPES.BOUNDARY},{x:9, y:12, type:CELLTYPES.BOUNDARY},{x:8, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:12, type:CELLTYPES.BOUNDARY},{x:5, y:12, type:CELLTYPES.BOUNDARY},{x:4, y:12, type:CELLTYPES.BOUNDARY},{x:3, y:12, type:CELLTYPES.BOUNDARY},{x:2, y:12, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:11, y:13, type:CELLTYPES.BOUNDARY},{x:10, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:13, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:7, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:5, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:13, type:CELLTYPES.BOUNDARY},{x:3, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:14, type:CELLTYPES.BOUNDARY},{x:8, y:14, type:CELLTYPES.BOUNDARY},{x:7, y:14, type:CELLTYPES.BOUNDARY},{x:6, y:14, type:CELLTYPES.BOUNDARY},{x:5, y:14, type:CELLTYPES.BOUNDARY},{x:4, y:14, type:CELLTYPES.BOUNDARY},{x:3, y:14, type:CELLTYPES.BOUNDARY},{x:2, y:14, type:CELLTYPES.BOUNDARY},{x:7, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:5, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:15, type:CELLTYPES.BOUNDARY},{x:3, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:5, y:16, type:CELLTYPES.BOUNDARY},{x:4, y:16, type:CELLTYPES.BOUNDARY},{x:3, y:16, type:CELLTYPES.BOUNDARY},{x:2, y:16, type:CELLTYPES.BOUNDARY},{x:4, y:18, type:CELLTYPES.BOUNDARY},{x:3, y:18, type:CELLTYPES.BOUNDARY},{x:2, y:18, type:CELLTYPES.BOUNDARY},{x:3, y:17, type:CELLTYPES.BOUNDARY},{x:2, y:17, type:CELLTYPES.BOUNDARY},{x:1, y:9, type:CELLTYPES.EASY_PASSWORD6},{x:1, y:7, type:CELLTYPES.EASY_PASSWORD6},{x:1, y:5, type:CELLTYPES.EASY_PASSWORD6},{x:1, y:3, type:CELLTYPES.EASY_PASSWORD6}
    ],
    [
        //16
        {x:1, y:9, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:3, y:7, type:CELLTYPES.BOUNDARY},{x:4, y:6, type:CELLTYPES.BOUNDARY},{x:5, y:5, type:CELLTYPES.BOUNDARY},{x:6, y:4, type:CELLTYPES.BOUNDARY},{x:7, y:3, type:CELLTYPES.BOUNDARY},{x:8, y:2, type:CELLTYPES.BOUNDARY},{x:9, y:1, type:CELLTYPES.BOUNDARY},{x:1, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:12, type:CELLTYPES.BOUNDARY},{x:3, y:13, type:CELLTYPES.BOUNDARY},{x:4, y:14, type:CELLTYPES.BOUNDARY},{x:5, y:15, type:CELLTYPES.BOUNDARY},{x:6, y:16, type:CELLTYPES.BOUNDARY},{x:7, y:17, type:CELLTYPES.BOUNDARY},{x:8, y:18, type:CELLTYPES.BOUNDARY},{x:4, y:11, type:CELLTYPES.BOUNDARY},{x:5, y:12, type:CELLTYPES.BOUNDARY},{x:6, y:13, type:CELLTYPES.BOUNDARY},{x:7, y:14, type:CELLTYPES.BOUNDARY},{x:8, y:15, type:CELLTYPES.BOUNDARY},{x:9, y:16, type:CELLTYPES.BOUNDARY},{x:10, y:17, type:CELLTYPES.BOUNDARY},{x:11, y:18, type:CELLTYPES.BOUNDARY},{x:4, y:9, type:CELLTYPES.BOUNDARY},{x:5, y:8, type:CELLTYPES.BOUNDARY},{x:6, y:7, type:CELLTYPES.BOUNDARY},{x:7, y:6, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:4, type:CELLTYPES.BOUNDARY},{x:10, y:3, type:CELLTYPES.BOUNDARY},{x:11, y:2, type:CELLTYPES.BOUNDARY},{x:12, y:1, type:CELLTYPES.BOUNDARY},{x:7, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:12, type:CELLTYPES.BOUNDARY},{x:9, y:13, type:CELLTYPES.BOUNDARY},{x:10, y:14, type:CELLTYPES.BOUNDARY},{x:11, y:15, type:CELLTYPES.BOUNDARY},{x:12, y:16, type:CELLTYPES.BOUNDARY},{x:13, y:17, type:CELLTYPES.BOUNDARY},{x:14, y:18, type:CELLTYPES.BOUNDARY},{x:7, y:9, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:9, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:6, type:CELLTYPES.BOUNDARY},{x:11, y:5, type:CELLTYPES.BOUNDARY},{x:12, y:4, type:CELLTYPES.BOUNDARY},{x:13, y:3, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:15, y:1, type:CELLTYPES.BOUNDARY},{x:10, y:9, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:12, y:7, type:CELLTYPES.BOUNDARY},{x:13, y:6, type:CELLTYPES.BOUNDARY},{x:14, y:5, type:CELLTYPES.BOUNDARY},{x:15, y:4, type:CELLTYPES.BOUNDARY},{x:16, y:3, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:18, y:1, type:CELLTYPES.BOUNDARY},{x:10, y:11, type:CELLTYPES.BOUNDARY},{x:11, y:12, type:CELLTYPES.BOUNDARY},{x:12, y:13, type:CELLTYPES.BOUNDARY},{x:13, y:14, type:CELLTYPES.BOUNDARY},{x:14, y:15, type:CELLTYPES.BOUNDARY},{x:15, y:16, type:CELLTYPES.BOUNDARY},{x:16, y:17, type:CELLTYPES.BOUNDARY},{x:17, y:18, type:CELLTYPES.BOUNDARY},{x:13, y:9, type:CELLTYPES.BOUNDARY},{x:14, y:8, type:CELLTYPES.BOUNDARY},{x:15, y:7, type:CELLTYPES.BOUNDARY},{x:16, y:6, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:18, y:4, type:CELLTYPES.BOUNDARY},{x:13, y:11, type:CELLTYPES.BOUNDARY},{x:14, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:13, type:CELLTYPES.BOUNDARY},{x:16, y:14, type:CELLTYPES.BOUNDARY},{x:17, y:15, type:CELLTYPES.BOUNDARY},{x:18, y:16, type:CELLTYPES.BOUNDARY},{x:16, y:9, type:CELLTYPES.BOUNDARY},{x:17, y:8, type:CELLTYPES.BOUNDARY},{x:18, y:7, type:CELLTYPES.BOUNDARY},{x:16, y:11, type:CELLTYPES.BOUNDARY},{x:17, y:12, type:CELLTYPES.BOUNDARY},{x:18, y:13, type:CELLTYPES.BOUNDARY},
        {x:3, y:10, type:CELLTYPES.EASY_PASSWORD6_5},{x:6, y:10, type:CELLTYPES.EASY_PASSWORD6_5},{x:9, y:10, type:CELLTYPES.EASY_PASSWORD6_5},{x:12, y:10, type:CELLTYPES.EASY_PASSWORD6_5},{x:15, y:10, type:CELLTYPES.EASY_PASSWORD6_5}
    ],
    [//17
        {x:1, y:9, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:3, y:9, type:CELLTYPES.BOUNDARY},{x:4, y:8, type:CELLTYPES.BOUNDARY},{x:5, y:9, type:CELLTYPES.BOUNDARY},{x:6, y:8, type:CELLTYPES.BOUNDARY},{x:7, y:9, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:9, y:9, type:CELLTYPES.BOUNDARY},{x:10, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:9, type:CELLTYPES.BOUNDARY},{x:12, y:8, type:CELLTYPES.BOUNDARY},{x:13, y:9, type:CELLTYPES.BOUNDARY},{x:14, y:8, type:CELLTYPES.BOUNDARY},{x:15, y:9, type:CELLTYPES.BOUNDARY},{x:16, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:9, type:CELLTYPES.BOUNDARY},{x:18, y:8, type:CELLTYPES.BOUNDARY},{x:18, y:12, type:CELLTYPES.BOUNDARY},{x:17, y:11, type:CELLTYPES.BOUNDARY},{x:16, y:12, type:CELLTYPES.BOUNDARY},{x:15, y:11, type:CELLTYPES.BOUNDARY},{x:14, y:12, type:CELLTYPES.BOUNDARY},{x:13, y:11, type:CELLTYPES.BOUNDARY},{x:12, y:12, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:10, y:12, type:CELLTYPES.BOUNDARY},{x:9, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:11, type:CELLTYPES.BOUNDARY},{x:6, y:12, type:CELLTYPES.BOUNDARY},{x:5, y:11, type:CELLTYPES.BOUNDARY},{x:4, y:12, type:CELLTYPES.BOUNDARY},{x:3, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:12, type:CELLTYPES.BOUNDARY},{x:1, y:11, type:CELLTYPES.BOUNDARY}, {x:3, y:10, type:CELLTYPES.EASY_PASSWORD7},{x:17, y:10, type:CELLTYPES.EASY_PASSWORD7},{x:7, y:10, type:CELLTYPES.EASY_PASSWORD7},{x:13, y:10, type:CELLTYPES.EASY_PASSWORD7}
    ],
    [//18
        {x:1, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:10, type:CELLTYPES.BOUNDARY},{x:2, y:9, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:2, y:7, type:CELLTYPES.BOUNDARY},{x:2, y:6, type:CELLTYPES.BOUNDARY},{x:2, y:5, type:CELLTYPES.BOUNDARY},{x:2, y:4, type:CELLTYPES.BOUNDARY},{x:2, y:3, type:CELLTYPES.BOUNDARY},{x:2, y:2, type:CELLTYPES.BOUNDARY},{x:3, y:3, type:CELLTYPES.BOUNDARY},{x:4, y:4, type:CELLTYPES.BOUNDARY},{x:5, y:5, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:7, y:7, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:9, y:9, type:CELLTYPES.BOUNDARY},{x:10, y:10, type:CELLTYPES.BOUNDARY},{x:11, y:11, type:CELLTYPES.BOUNDARY},{x:12, y:12, type:CELLTYPES.BOUNDARY},{x:13, y:13, type:CELLTYPES.BOUNDARY},{x:14, y:14, type:CELLTYPES.BOUNDARY},{x:15, y:15, type:CELLTYPES.BOUNDARY},{x:16, y:16, type:CELLTYPES.BOUNDARY},{x:4, y:1, type:CELLTYPES.BOUNDARY},{x:5, y:2, type:CELLTYPES.BOUNDARY},{x:6, y:3, type:CELLTYPES.BOUNDARY},{x:7, y:4, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:6, type:CELLTYPES.BOUNDARY},{x:10, y:7, type:CELLTYPES.BOUNDARY},{x:11, y:8, type:CELLTYPES.BOUNDARY},{x:12, y:9, type:CELLTYPES.BOUNDARY},{x:13, y:10, type:CELLTYPES.BOUNDARY},{x:14, y:11, type:CELLTYPES.BOUNDARY},{x:15, y:12, type:CELLTYPES.BOUNDARY},{x:16, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:14, type:CELLTYPES.BOUNDARY},{x:17, y:16, type:CELLTYPES.BOUNDARY},{x:18, y:16, type:CELLTYPES.BOUNDARY},{x:17, y:13, type:CELLTYPES.BOUNDARY},{x:17, y:12, type:CELLTYPES.BOUNDARY},{x:17, y:11, type:CELLTYPES.BOUNDARY},{x:17, y:10, type:CELLTYPES.BOUNDARY},{x:17, y:9, type:CELLTYPES.BOUNDARY},{x:18, y:9, type:CELLTYPES.BOUNDARY}
    ],
    [//19
        {x:1, y:9, type:CELLTYPES.BOUNDARY},{x:2, y:9, type:CELLTYPES.BOUNDARY},{x:2, y:10, type:CELLTYPES.BOUNDARY},{x:2, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:12, type:CELLTYPES.BOUNDARY},{x:2, y:13, type:CELLTYPES.BOUNDARY},{x:2, y:14, type:CELLTYPES.BOUNDARY},{x:2, y:15, type:CELLTYPES.BOUNDARY},{x:2, y:16, type:CELLTYPES.BOUNDARY},{x:3, y:18, type:CELLTYPES.BOUNDARY},{x:4, y:17, type:CELLTYPES.BOUNDARY},{x:5, y:16, type:CELLTYPES.BOUNDARY},{x:6, y:15, type:CELLTYPES.BOUNDARY},{x:7, y:14, type:CELLTYPES.BOUNDARY},{x:8, y:13, type:CELLTYPES.BOUNDARY},{x:9, y:12, type:CELLTYPES.BOUNDARY},{x:10, y:11, type:CELLTYPES.BOUNDARY},{x:11, y:10, type:CELLTYPES.BOUNDARY},{x:12, y:9, type:CELLTYPES.BOUNDARY},{x:13, y:8, type:CELLTYPES.BOUNDARY},{x:14, y:7, type:CELLTYPES.BOUNDARY},{x:15, y:6, type:CELLTYPES.BOUNDARY},{x:16, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:4, type:CELLTYPES.BOUNDARY},{x:3, y:15, type:CELLTYPES.BOUNDARY},{x:4, y:14, type:CELLTYPES.BOUNDARY},{x:5, y:13, type:CELLTYPES.BOUNDARY},{x:6, y:12, type:CELLTYPES.BOUNDARY},{x:7, y:11, type:CELLTYPES.BOUNDARY},{x:8, y:10, type:CELLTYPES.BOUNDARY},{x:9, y:9, type:CELLTYPES.BOUNDARY},{x:10, y:8, type:CELLTYPES.BOUNDARY},{x:11, y:7, type:CELLTYPES.BOUNDARY},{x:12, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:4, type:CELLTYPES.BOUNDARY},{x:15, y:3, type:CELLTYPES.BOUNDARY},{x:16, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:18, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:5, type:CELLTYPES.BOUNDARY},{x:17, y:6, type:CELLTYPES.BOUNDARY},{x:17, y:7, type:CELLTYPES.BOUNDARY},{x:17, y:8, type:CELLTYPES.BOUNDARY},{x:17, y:9, type:CELLTYPES.BOUNDARY},{x:17, y:10, type:CELLTYPES.BOUNDARY},{x:17, y:11, type:CELLTYPES.BOUNDARY},{x:18, y:11, type:CELLTYPES.BOUNDARY},{x:1, y:18, type:CELLTYPES.BOUNDARY},{x:2, y:18, type:CELLTYPES.BOUNDARY}
    ],
    [//20
        {x:1, y:11, type:CELLTYPES.BOUNDARY},{x:2, y:11, type:CELLTYPES.BOUNDARY},{x:3, y:10, type:CELLTYPES.BOUNDARY},{x:4, y:10, type:CELLTYPES.BOUNDARY},{x:5, y:9, type:CELLTYPES.BOUNDARY},{x:6, y:9, type:CELLTYPES.BOUNDARY},{x:7, y:8, type:CELLTYPES.BOUNDARY},{x:8, y:8, type:CELLTYPES.BOUNDARY},{x:9, y:7, type:CELLTYPES.BOUNDARY},{x:10, y:7, type:CELLTYPES.BOUNDARY},{x:11, y:6, type:CELLTYPES.BOUNDARY},{x:12, y:6, type:CELLTYPES.BOUNDARY},{x:13, y:5, type:CELLTYPES.BOUNDARY},{x:14, y:5, type:CELLTYPES.BOUNDARY},{x:15, y:4, type:CELLTYPES.BOUNDARY},{x:16, y:4, type:CELLTYPES.BOUNDARY},{x:1, y:9, type:CELLTYPES.BOUNDARY},{x:2, y:8, type:CELLTYPES.BOUNDARY},{x:3, y:8, type:CELLTYPES.BOUNDARY},{x:4, y:7, type:CELLTYPES.BOUNDARY},{x:5, y:7, type:CELLTYPES.BOUNDARY},{x:6, y:6, type:CELLTYPES.BOUNDARY},{x:7, y:6, type:CELLTYPES.BOUNDARY},{x:8, y:5, type:CELLTYPES.BOUNDARY},{x:9, y:5, type:CELLTYPES.BOUNDARY},{x:10, y:4, type:CELLTYPES.BOUNDARY},{x:11, y:4, type:CELLTYPES.BOUNDARY},{x:12, y:3, type:CELLTYPES.BOUNDARY},{x:13, y:3, type:CELLTYPES.BOUNDARY},{x:14, y:2, type:CELLTYPES.BOUNDARY},{x:15, y:2, type:CELLTYPES.BOUNDARY},{x:16, y:2, type:CELLTYPES.BOUNDARY},{x:17, y:2, type:CELLTYPES.BOUNDARY},{x:18, y:2, type:CELLTYPES.BOUNDARY},{x:16, y:5, type:CELLTYPES.BOUNDARY},{x:16, y:6, type:CELLTYPES.BOUNDARY},{x:16, y:7, type:CELLTYPES.BOUNDARY},{x:16, y:8, type:CELLTYPES.BOUNDARY},{x:16, y:9, type:CELLTYPES.BOUNDARY},{x:16, y:10, type:CELLTYPES.BOUNDARY},{x:16, y:11, type:CELLTYPES.BOUNDARY},{x:17, y:11, type:CELLTYPES.BOUNDARY},{x:18, y:11, type:CELLTYPES.BOUNDARY}
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

    var idSalt = 1000000000;

    function showSpeech(prompt, text, x, y) {
        idSalt++;
        var html = '<div id="' + idSalt + '" class="speech"><div class="prompt">' + prompt + '</div><div class="floatLeft">--&gt</div><div class="speech-text">' + text + '</div></div>';
        $("#maze").append($(html).css("left", (x * 50 - 10) + "px").css("top", (y * 50 - 10) + "px"));
        window.setTimeout((function (salt) {
            /*            $("#" + salt).fadeOut(1000, function(){
             $("#" + salt).remove();
             });*/
        }).bind(this, idSalt), 1000);
    }

    function createCellDiv(cell) {
        var idString = cell.x + "_" + cell.y;
        getMazeDiv().append('<div id="' + idString + '" class="box ' + cell.type + '"></div>');
    }

    function makeOpen(cell) {
        var idString = "#" + cell.x + "_" + cell.y;
        $(idString).removeClass(cell.type).addClass(CELLTYPES.OPEN);
    }

    function renderPrompt(cell) {
        var idString = "#" + cell.x + "_" + cell.y;
        var ren = "";
        if(cell.prompt.prompt instanceof Array){
            ren = arrayToString(cell.prompt.prompt);
        } else {
            ren = cell.prompt.prompt;
        }
        $(idString).html(ren);
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

    function assignPrompts() {
        for (var x = 0; x < 20; x++) {
            for (var y = 0; y < 20; y++) {
                var cell = maze[x][y];
                if (cell.type.indexOf("password") > -1) {
                    cell.prompt = createPasswordPrompt(x, y);
                    renderPrompt(cell);
                }
            }
        }
    }

    function doWin() {
        window.setTimeout(function () {
            playerWon = true;
            if (window.confirm("You won. Do you want to go to the next level?")) {
                level = level + 1;
                window.location.href = "../level" + level + "/level" + level + ".html"
            }
        }, 100);
    }

    function doLose(msg) {
        window.setTimeout(function () {
            playerLost = true;
            alert(msg);
            actionList.clear();
        }, 100);
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
            assignPrompts();

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
                if(!actionList.actions[i]){
                    return;
                }

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

    //need 5
    var level11Colors = [["RED", "DER"], ["CYAN", "NAYC"], ["BLUE", "EULB"], ["GRAY", "YARG"], ["PINK", "KNIP"]];
    function createPasswordPrompt(x, y) {
        var cell = maze[x][y];
        var expected = "";
        var prompt = "";

        if (cell.type == CELLTYPES.EASY_PASSWORD) {
            prompt = Math.floor(Math.random() * 10);
            return prompt > 5 ? {expected: "BIG", prompt: prompt} : {expected: "SMALL", prompt: prompt};
        }

        if (cell.type == CELLTYPES.EASY_PASSWORD2) {
            prompt = Math.floor(Math.random() * 2) + 2;
            return prompt > 1 ? {expected: "BIG", prompt: prompt} : {expected: "SMALL", prompt: prompt};
        }

        if(cell.type == CELLTYPES.EASY_PASSWORD3_5){
            prompt = Math.floor(Math.random() * 99);
            return {expected: (prompt + 1)/2, prompt:prompt};
        }

        if (cell.type == CELLTYPES.EASY_PASSWORD3) {
            prompt = Math.floor(Math.random() * 10);
            return {expected: (prompt * 2) + 1, prompt: prompt};
        }

        if(cell.type == CELLTYPES.EASY_PASSWORD3_7){
            prompt = Math.floor(Math.random() * 3 +1); //1,2,3
            if(prompt == 1){
                expected = "ONE";
            } else if(prompt == 2){
                expected = "TWO";
            } else if(prompt == 3){
                expected = "THREE";
            }
            return {expected:expected, prompt:prompt};
        }

        if(cell.type == CELLTYPES.EASY_PASSWORD4 && level11Colors.length){
            var n = Math.floor(Math.random()*level11Colors.length);
            var color = level11Colors[n];
            level11Colors = clip(level11Colors, n);
            return {expected: color[1], prompt:color[0]};
        } else if (cell.type == CELLTYPES.EASY_PASSWORD4){
            return cell.prompt;
        }

        if(cell.type == CELLTYPES.EASY_PASSWORD5){
            prompt = Math.floor(Math.random() * 100);
            return {expected: prompt%2==0, prompt:prompt};
        }

        if(cell.type == CELLTYPES.EASY_PASSWORD6){
            prompt = Math.floor(Math.random() * 100);
            return {expected: prompt%2==0 ? prompt : prompt + 1, prompt: prompt};
        }

        if(cell.type == CELLTYPES.EASY_PASSWORD6_5){
            prompt = [Math.floor(Math.random() *10), Math.floor(Math.random() *10), Math.floor(Math.random() *10), Math.floor(Math.random() *10)];
            return {expected: prompt[2], prompt: prompt};
        }

        if(cell.type == CELLTYPES.EASY_PASSWORD7) {
            prompt = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
            if(prompt[0] > prompt[1]){
                expected = 0;
            } else if (prompt[1] > prompt[0]){
                expected = 1;
            } else {
                expected = "EQUAL";
            }
            return {expected: expected, prompt: prompt};
        }

        return {expected: expected, prompt: prompt};
    }

    function doTick() {
        assignPrompts();
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
            return !(type != CELLTYPES.OPEN && type != CELLTYPES.START && type != CELLTYPES.END);
        };

        var checkWin = function () {
            if (maze[self._x][self._y].type == CELLTYPES.END) {
                doWin();
            }
        };

        var moveTo = function (x, y) {
            //do tick
            doTick();

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
            dir = ("" + dir || "").toUpperCase();
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
                var prompt = maze[x][y].prompt;

                if (typeof fn != "function") {
                    doLose("Your decide function wasn't a function. Instead it was " + fn);
                    return;
                }


                if (maze[x][y].type.indexOf("password") == -1) {
                    doLose("You tried to say a password, but cabbage man isn't at a password block");
                    return;
                }

                var userAnswer = fn(prompt.prompt);
                showSpeech(prompt.prompt, userAnswer, self._x, self._y);
                if (prompt.expected === userAnswer) {
                    makeOpen(maze[x][y]);
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
            MazeRunner.actionList.acceptingSubmissions = true;
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
        initLevel8: function () {
            doRunLevel(8);
        },
        initLevel9: function () {
            doRunLevel(9);
        },
        initLevel10: function () {
            doRunLevel(10);
        },
        initLevel11: function () {
            doRunLevel(11);
        },
        initLevel12: function () {
            doRunLevel(12);
        },
        initLevel13: function () {
            doRunLevel(13);
        },
        initLevel14: function () {
            doRunLevel(14);
        },
        initLevel15: function () {
            doRunLevel(15);
        },
        initLevel16: function () {
            doRunLevel(16);
        },
        initLevel17: function () {
            doRunLevel(17);
        },
        initLevel18: function () {
            doRunLevel(18);
        },
        initLevel19: function () {
            doRunLevel(19);
        },
        initLevel20: function () {
            doRunLevel(20);
        },
        initLevel21: function() {
            doRunLevel(21);
        },
        initLevel22: function(){
            doRunLevel(22);
        },
        initLevel23: function(){
            doRunLevel(23);
        },
        initLevel24: function(){
            doRunLevel(24);
        },
        initLevel25: function(){
            doRunLevel(25);
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

var buildList = [];
var enableLevelBuilding = function(){
    $(".box").each(function(){
        $(this).click(function(){
            var id = this.id.split("_");
            buildList.push({x: id[0], y:id[1], type: CELLTYPES.BOUNDARY});
            $("#" + this.id).addClass(CELLTYPES.BOUNDARY);
        });
    });
};

var stringifyLevel = function(){
    var result = '';
    for(var i = 0; i< buildList.length; i++){
        var cell = buildList[i];
        result += "{x:" + cell.x + ", y:" + cell.y + ", type:CELLTYPES.BOUNDARY},";
    }
    return result;
};

//return an array that doesn't contain the n'th element.
var clip = function(arr, n){
    var result = [], j = 0;
    for(var i = 0; i < arr.length; i++){
        if(i!=n){
            result[j] = arr[i];
            j++;
        }
    }
    return result;
};

var arrayToString = function(arr){
  return "[" + arr + "]";
};