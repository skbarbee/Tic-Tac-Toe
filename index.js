//set variables
const gameGrid = document.querySelectorAll('game')
    console.log(`This should return 9 items ${gameGrid}`)
const readOut = document.querySelector('#status')
    console.log(`This should return 1 item  ${readOut}`)
const restart = document.querySelector('#reset')
    console.log(`This should return 1 items ${restart}`)
// what wins: horizontal, vertical, diagonal
const winnerWinner=[
    //horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal
    [0,4,7],
    [2,4,6]
]
let options = ["","","","","","","","",""]

const letsPlay = () =>{
    
}


// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O

const clickSquare = () =>{

    
} 
// Upon marking of an individual cell, use JavaScript to add an X or O to the cell,
const updateCell = () =>{

}
//according to whose turn it is.
const takeTurn = () => {

}

// A cell should not be able to be replayed once marked.
// You should not be able to click remaining empty cells after the game is over.
const noCheating = () => {

}

// Add a reset button that will clear the contents of the board.
const newGame = () => {

}
// Display a message to indicate which turn is about to be played.
const gameStatus = () => {

}
// Detect draw conditions (ties/cat's game)
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
//Check those combinations on the board contents after every move.
const gameResults = () => {

}
