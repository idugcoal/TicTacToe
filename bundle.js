function isGameOver(board, player) {
  if (
    board[0].innerText === player && board[1].innerText === player && board[2].innerText === player ||
    board[3].innerText === player && board[4].innerText === player && board[5].innerText === player ||
    board[6].innerText === player && board[7].innerText === player && board[8].innerText === player ||
    board[0].innerText === player && board[3].innerText === player && board[6].innerText === player ||
    board[1].innerText === player && board[4].innerText === player && board[7].innerText === player ||
    board[2].innerText === player && board[5].innerText === player && board[8].innerText === player ||
    board[0].innerText === player && board[4].innerText === player && board[8].innerText === player ||
    board[2].innerText === player && board[4].innerText === player && board[6].innerText === player) 
  {
    console.log(player, 'wins')
    return true
  }

  else{
    console.log('false')
    return false
  }
}

function main() {
  let currentTurn = 0
  const players = ['X', 'O']

  const board = document.querySelectorAll("div.square")
  
  board.forEach(square => {
    square.addEventListener('click', e => {
      e.target.innerText = players[currentTurn % 2]
      isGameOver(board, players[currentTurn % 2])
      currentTurn++
    })
  })
}

main()