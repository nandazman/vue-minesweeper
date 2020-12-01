# Rules
## grid
- grid is generated after player click one cell, so the player will not lose in first click.
- find algoritm to generate bomb first rather than random number of bomb.
- after player click first cell, it should be generate all other cell to right left and top bottom.
- at least one cell away from first clicked cell to free from bomb.
- so after player click -> generate bomb and prevent bomb inside clicked first cell and 1 cell away from it -> generate the number.

## gameplay
- if user click empty cell -> reveal other empty cell or number (not bomb)
- if empty cell is revealed -> reveal other empty cell or number (not bomb)

# Something in mind
- first click user on cell will be empty.
- then one cell away from it will be empty as well.
- then generate all the bombs.
- then generate number from top left to bottom right.
- if bomb is found then add one to cell around it.

# First psuedo code for state
grid = [[undefined,undefined,undefined,undefined,undefined,undefined],
        [undefined,undefined,undefined,undefined,undefined,undefined],
        [undefined,undefined,undefined,undefined,undefined,undefined],
        [undefined,undefined,undefined,undefined,undefined,undefined]]
if(userFirstClick) {
  emptyClickedCell(coordinate); // set cell to zero
  emptyCellAroundCell(coordinate); // set cell to zero
  generateBomb(); // will randomly place bomb ('x') form top left to bottom right that still undefined
  generateNumber(); // will generate number based on bomb (double loop). 
                    // and will give value zero to other cell if its undefined or add +1 if its a number
  startTimer();
  startGame();
}