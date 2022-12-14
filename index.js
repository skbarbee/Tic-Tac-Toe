//set variables
const gameGrid = document.querySelectorAll('.game')
const readOut = document.querySelector('#status')
const restart = document.querySelector('#reset')
const gameResults = document.querySelector("#results")
const drawTracker = document.querySelector(".grid")
//console.log(drawTracker)

const O = "0"
const X = "X"

let currentPlayer = X
let spaces = Array(9).fill(null)



const startGame = () =>{
    gameGrid.forEach(game => game.addEventListener('click',clickSquare))
    gameGrid.forEach(game => game.addEventListener('click',gameDraw))
    
}

function clickSquare(e) {
    const id = e.target.id
   // A cell should not be able to be replayed once marked. 
   // You should not be able to click remaining empty cells after the game is over. 
    if(!spaces[id] && (playerHasWon()== false)){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        //console.log(e.target.id, spaces)

//Check those combinations on the board contents after every move.
        if(playerHasWon()!==false){
            gameResults.innerText=(`${currentPlayer}-player has won!`)
            
        }else if (currentPlayer = currentPlayer == X){
            currentPlayer = O
            //Display a message to indicate which turn is about to be played.
            document.getElementById("status").innerText= (`Player O's turn!`)
            } else{
            currentPlayer = X
            document.getElementById("status").innerText= (`Player X's turn!`)
        }
    }
}


const winnerWinner =[
    // horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    // diagonal
    [0,4,8],
    [2,4,6]
]
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
const playerHasWon = () => {
    for (const condition of winnerWinner) {
        let [a,b,c] = condition

        if(spaces[a] && (spaces[a] == spaces[b]) && (spaces[a] == spaces[c])){
            return [a,b,c]
        }
        
    }return false
}



// Add a reset button that will clear the contents of the board.
const newGame = () => {
    spaces.fill(null)
    gameGrid.forEach(game => game.innerText= (" "))
    currentPlayer = X
    readOut.innerText = ("Let's play! X you're first!")
    gameResults.innerText=(" ")
}

// Detect draw conditions (ties/cat's game)

const gameDraw = () => {
    let draw = 0
    for (i=0; i<spaces.length; i++){
    console.log(spaces[i])
        if(spaces[i]!== null ){
        
        draw++
       // console.log(`this is draw ${draw}`)
    } if ((draw === 9) && (playerHasWon()== false)){
        gameResults.innerText = ("It's a tie!")
        console.log("tie")
        
    }
}
}

gameDraw();

startGame();
clickSquare();
clickSquare();
newGame();

