var cellWidth = 20; //Width of a box as defined in the css. 
var containerWidth = 200; //Width of the container as defined in the css 
var updateInterval = 100; //How many milliseconds between game updates. 

/*
Our startGame() function tells the browser to call updateGame() every 100 milliseconds.
The browser does this by scheduling a task internally. This task is assigned and ID by 
the browser, which we can use to stop it by calling window.clearInterval(taskId). 
*/
var taskId = 0; 

/*
The gameState variable holds the 2D Array that we'll use to keep track of which cells
are alive and which ones are dead. gameState is initially created using the 
createNewGameState() function, and is updated by the updateGame() function. 
*/
var gameState;


/*
This function is called once our HTML loads in the browser. It sets up our HTML and 
creates the first gameState. Once this function runs, our game is ready for the user
to activate cells and click the "Start" button. 
*/
window.onload = function(){
	createHTMLCells(); 
	gameState = createNewGameState(); 
}; 

//This function is called when the "Start" button is clicked. It starts the animation.
function startGame(){
	if(taskId == 0){
		//Tell the browser to call updateGame() ever 100 milliseconds (updateInterval). 
		taskId = window.setInterval(updateGame, updateInterval); 
	}
}

//This function is called when the "Stop" button is clicked. 
function stopGame(){
	//Tell the browser to stop calling updateGame(); 
	window.clearInterval(taskId); 
	taskId = 0; 
}

/*
	#1) 
	This function should use the containerWidth and cellWidth variables defined
above to calculate how many cells we can fit in one row of the grid, and return the result.
For example, if the container is 100px wide and each box is 20px wide, then we can fit 5 
cells in one row of the gird. Test this function by execut    ing this command in the console: 
	getContainerWidthInCells()
The answer should be printed out to the console. 
*/
function getContainerWidthInCells(){
	return 0; //Change this line so that it returns the correct value.  	
}

/*
	#2) 
	When we create our grid of html div's, we want to assign each an id with it's
x and y coordinates. For example, the cell over 2 and down 3 (x=2, y=3) should have an 
id of "2,3". This function should create the id string and return the result. To test 
out this function, make these calls from the console in chrome: 
	createIdString(0, 1) //Should print "0,1"
	createIdString(5, 4) //Should print "5,4"
*/
function createIdString(x, y){
	return "WrongId"; //Change this line so that it returns the correct id String. 
}

/*
	#3) 
	This function should use document.getElementById() to get the container div
and return the result. To test out this function call it from the console in chrome: 
	getContainerDiv()
The HTML of the container div should be printed out.  
*/
function getContainerDiv(){
	//Use document.getElementById to get the div and then return it. 
}


/*
	#4) 
	This function changes the background color of the passed in div to be whatever
color you decide dead cells should be. To test out this function call these commands in 
chrome: 
	var containerDiv = getContainerDiv(); 
	changeToDeadColor(containerDiv); 
When you execute these commands, the container div should become colored. 
*/
function changeToDeadColor(div){
	//div.style.backgroundColor equal to whatever "dead" color you want to use. 
}

/*
	#5) 
	This function is responsible for creating a new HTML div that will be used to show
one of our grid cells. It does this by using document.createElement to create a blank div
element. Then it sets the div's 'className', 'id', and 'onclick' properties. Next it 
calls changeToDeadColor, to make make the cell appear dead. Finally, it returns the div. 
*/
function createHTMLCell(x, y){
	var div = {}; //Replace {}. Use document.createElement to create a div. See: http://tinyurl.com/qes3cjg
	div.className = ""; //Replace "" with the proper class name. Hint: Look in the CSS. 
	div.id = ""; //Replace "". Use your createIdString function. 
	div.onclick = toggleCellState;   
	//Call changeToDeadColor() remember to pass in the div. 
	//Return the div.  
}

/*
	This function loops through all of the x and y values that our grid will use, creates
a new HTML cell corresponding to that x and y, and inserts the HTML cell into the grid. 
You get this one for free. 
*/
function createHTMLCells(){
	var widthInCells = getContainerWidthInCells(); 
	var containerDiv = getContainerDiv(); 
	for(var y=0; y<widthInCells; y++){
		for(var x=0; x<widthInCells; x++){
			var cellDiv = createHTMLCell(x, y); 
			containerDiv.appendChild(cellDiv); 
		}
	}	
}

/*
	#6) 
	This function returns the cell div corresponding to the passed in x and y value. 
To test this function call it in chrome dev tools like this: 
	getDiv(0, 0) //A div's html should be printed the console. 
	getDiv(10, 9) //A div's html should be printed to the console. 
*/
function getDiv(x, y){
	//First use createIdString to create the id coresponding to x and y. 
	//Next use document.getElementById to get the div. 
	//Finally return the div. 
}

/*
	#7) 
	This function is just like changeToDeadColor() except that it changes the cell to 
whatever color you pick to represent the "alive" state. Test out this function in chrome 
by using these commands: 
	var div = getDiv(3, 2); 
	changeToAliveColor(div); 
You should see the color of the div at x=3, y=2 change. 
*/
function changeToAliveColor(div){
	
}

/*
	#8) 
	This function is called whenever a grid cell is clicked. It toggles the cell's color
and also updates the gameState 2D Array to indicate that the cell is alive or dead. Test
out this function by doing two things: 
	1) When you click on cells in the grid, they should change color. 
	2) execute the command: printGameState() in the console and verify that the cell you 
	clicked has an X marking it as being alive. 
*/
function toggleCellState(){
	//You get these first four lines for free. 
	//They figure out what the x and y coordinates of the clicked cell are. 
	console.log("You clicked " + this.id); 
	var xy = this.id.split(","); 
	var x = xy[0]; //Y coordinate of clicked cell. 
	var y = xy[1]; //x coordinate of clicked cell. 

	if(isAlive(x, y)){
		//Change the color 
		//set gameState[x][y] equald to the proper boolean value
	} else {
		//Change the color 
		//set gameState[x][y] equald to the proper boolean value
	}
}

/*
	#9) 
	This function returns true if the cell at (x,y) is alive, and false if it is dead.
When you click on a cell in the grid, you'll see a message in the console that says "You
clicked x,y". For example if you clicked the cell at x=6 y=2, you'd see a message that 
says "You clicked 6,2". Test this function by doing these things: 
	1a) Click one of the cells to make it become alive. 
	1b) Note the x and y coordinates of the cell as they appear in the console 
	1c) in the console execute: isAlive(x, y) using those coordinates for x and y. The word
		"True" should be displayed in the console. 

	2a) Pick some cell that is dead. cell (0, 0), for example. (Provided you didn't click it)
	2b) In the console execute: isAlive(0, 0). The word "False" should be displayed. 
*/
function isAlive(x, y){
	var width = getContainerWidthInCells(); //You get this line for free. 

	/*
	Because of the way this program is implemented (x, y) might not be a valid cell in our grid. 
	For example (-1, -1) is not on the grid, nor is (999, 999). Therefore: 
		1) If x or y is less than 0 this function should return false. 
		2) If x or y, is greater than or equal to width this function should return false.
		3) Finally, return the value of gameState[x][y]
	*/

	return false; //Replace this line with the logic outlined above.  
}

/*
	#10) 
	This function will return the number of live neighbors the cell at x,y has. Consider a
Cell named CellXY located at the coordinates (x,y). The coordinates of CellXY's neighbors 
are shown by this drawing: 

				(x-1, y-1) | (x , y-1) | (x+1, y-1)
				-----------+-----------+-----------
				(x-1, y  ) | (CellXY ) | (x+1, y  )
				-----------+-----------+-----------
				(x-1, y+1) | (x , y+1) | (x+1, y+1)

If, for example, three of these neighboring cells are alive, then countLiveNeighbors(x,y)
should return 3. How should you implement this function? Here's a HINT: You have created 
a function called isAlive(x, y) that returns a boolean, TRUE or FALSE, depending on whether
the cell at (x, y) is alive or dead. In Javascript booleans can be added like numbers. E.g.
	TRUE + TRUE + TRUE = 3
	TRUE + FALSE + TRUE = 2
	FALSE + FALSE + FALSE = 0
Therefore, to get the number of live neighbors, you just need to add up the result of
isAlive() for each of the cell's neighboring coordinates. 

To test this function do the following: 
	1a) In the grid, create the "blinker" pattern, i.e. three live cells in a row. 
	1b) The coordinates will be printed to the console. Note the coordinates (x,y) of the middle cell
	1c) Call countLiveNeighbors(x,y) with those coordinates. The number 2 should be returned 

	2a) Pick some cell with no live neighbors. 
	2b) Call countLiveNeighbors() passing in that cell's coordinates. 0 should be returned. 
 */
function countLiveNeighbors(x, y){
	return  0; //Replace this with the proper logic. 
}

/*
	#11)
	This function should figure out if the cell at the given (x,y) coordinates should be
alive or dead in the next generation. If it should be alive, this function returns true.
If it should be dead, this function returns false. Once you're done implementing this 
function, you're program should be complete. Proceed to steps #12 and #13 below.  
*/
function calculateNewCellState(x, y){
	//You get these two lines for free. 
	var alive = isAlive(x, y); 
	var liveNeighbors = countLiveNeighbors(x, y);

	/*
	In this function you will need to implement the rules of Conway's Game of Life using four if-statements: 
	1) Any live cell with fewer than two live neighbours dies, as if caused by under-population.
	2) Any live cell with two or three live neighbours lives on to the next generation.
	3) Any live cell with more than three live neighbours dies, as if by over-population.
	4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	*/

	//Finally if none of 1-4 apply, then we're dealing with a lonely neighborless dead cell that should stay dead. 
	return false; 
}

/*
	STEP 12: 
	Your program should now be complete. Test it out by creating some of the example life
patterns such as the "Block" and the "Blinker". You can find more example paterns here: 
https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns
If your life program isn't working, you'll need to debug it. Ask an instructor for help
with this, or, if you're feeling daring, try to debug it yourself. 
*/

/*
	STEP 13: 
	You have now tested your life program and verified that it works properly. You're now 
ready to make your grid bigger. Do this by: 

1) Changing the container's width and height to be larger in life.css. Note that both
the width and the height must be the same size, and must be a multiple of 20, the cell size

2) There is a variable called "var containerWidth" at the top of this file. Update it
to have the value you chose. 

Make sure you save both files. Then test out your bigger and better life game. 
*/


///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//all functions implemented below are provided for you. 


/*
This function is responsible for creating a new game state. A game state is a 2D array.
If the cell at x=3, y=2 is alive then gameState[3][2] = true. This function does not 
set the global gameState variable dirrectly, however. Instead it simply returns the 2D
array it creates. 
*/
function createNewGameState(){
	var newGameState = []; 
	var widthInCells = getContainerWidthInCells(); 
	for(var x=0; x<widthInCells; x++){
		newGameState[x] = []; 
		for(var y=0; y<widthInCells; y++){
			newGameState[x][y] = false; 
		}
	}
	return newGameState; 
}

/*
After the game has started, this function is called by the browser every 100 milliseconds. 
When called, this function examines the current gameState and creates the next one by 
updating the gameState array and changing the color of our grid cells. 
*/
function updateGame(){
	var newGameState = createNewGameState(); 
	var widthInCells = getContainerWidthInCells(); 
	for(var x=0; x<widthInCells; x++){
		for(var y=0; y<widthInCells; y++){
			var div = getDiv(x, y); 
			var newCellIsAlive = calculateNewCellState(x, y); 
			newGameState[x][y] = newCellIsAlive; 
			if(newCellIsAlive){
				changeToAliveColor(div); 
			} else {
				changeToDeadColor(div); 
			}
		}
	}
	gameState = newGameState; 
}

/*
This function isn't involved in running our game. Instead it is provided so that you can
print out the gameState in a readable format. To use this functioin just type this 
command in the console: 
	printGameState() 
*/
function printGameState(grid){
	var gameToPrint=grid||gameState, output="", width=getContainerWidthInCells(),
	writeLineRow = function(){
		output += "\r\n";
		for(var i=0; i<width; i++){
			output += "-+--";
		}
		output += "\r\n";
	};

	output += " "; 
	for(var x=0; x<width; x++){
		output += "| " + x + " ";
	}

	for(var y=0; y<width; y++){
		writeLineRow(); 
		output += y; 
		for(x=0; x<width; x++){
			output += gameToPrint[x][y] ? "| X " : "|   "; 
		}
	}

	console.log(output); 
}


