export default function getCornerBox(state) {
  const corners = [0, 2, 6, 8];
  const temp = [];
  for (let i = 0; i < 4; i += 1) {
    if (state.board[corners[i]].innerText === '') {
      temp.push(corners[i]);
    }
  }
  const randomIndex = Math.floor(Math.random() * temp.length);
  return temp[randomIndex];
}