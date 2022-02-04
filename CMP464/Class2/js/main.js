/* define application constant variables */
const winningCombos = []

/* define application state variables */
let board;
let turn = "X"

/* DOM functions: caching element references */
const squares = Array.from(document.querySelectorAll('#board div'))
console.log(squares)


/* DOM functions: add event listeners to our elements */
document.getElementById('board').addEventListener('click', handleTurn)

/* General Gameplay functions */

function handleTurn(event){
    console.log("Clicked!")
    let index = squares.findIndex((square) => {
        return square === event.target
    })
    board[index] = turn

    turn = turn === 'X' ? 'O' : 'X';
    render()
}

function init() {
    board = ['','','',
            '','','',
            '','','',]
    render()
}

function render(){
    board.forEach((mark, index) => {
        squares[index].textContent = mark
    })
}

init()