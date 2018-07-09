function isGameOver(board, player) {
  let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
  ]

  wins.forEach(win => {
    if(board[win[0]].innerText === player && board[win[1]].innerText === player && board[win[2]].innerText === player) {
      console.log('WINNNNN')
      return true
    }
  })

  return false
}

function selectComputerMove(board) {
  //look for any empty pairs and place for win

  //look for any other empty player pairs and place for block

  //look for an emtpy row/column/diagonal

  //otherwise, place randomly
}

function findPairs(board) {

}

function main() {
  let currentTurn = 0
  const players = ['X', 'O']

  const board = document.querySelectorAll("div.square")
  board.forEach(square => {
    square.addEventListener('click', e => {
      if(e.target.innerText === '') {
        e.target.innerText = players[currentTurn % 2]
        isGameOver(board, players[currentTurn % 2])
        currentTurn++
      }
    })
  })
}

main()