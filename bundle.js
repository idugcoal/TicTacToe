function isGameOver(board ) {
  if (
    board[0].innerText === board[1].innerText === board[2].innerText ||
    board[3].innerText === board[4].innerText === board[5].innerText ||
    board[6].innerText === board[7].innerText === board[8].innerText ||
    board[0].innerText === board[3].innerText === board[6].innerText ||
    board[1].innerText === board[4].innerText === board[7].innerText ||
    board[2].innerText === board[5].innerText === board[8].innerText ||
    board[0].innerText === board[4].innerText === board[8].innerText ||
    board[2].innerText === board[4].innerText === board[6].innerText) 
  {
    console.log('true')
    return true
    
  }

  else{
    console.log(
      board[0].innerText.trim(), board[1].innerText.trim(), board[2].innerText.trim(),
      'false', board)
    return false
  }
}

function main() {
  var board = document.querySelectorAll("div.square")

  var players = ['X', 'O']
  var currentTurn = 0
  isGameOver(board)
}

main()