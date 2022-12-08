const board = document.getElementById('board')
const squaresNumber = 400
const colors = [
  "#0000FF",
  "#42AAFF",
  "#78DBE2",
  "#6A5ACD",
  "#003153",
  "#77DDE7",
  "#3F888F",
  "#3E5F8A",
];

const setColor = (el) => {
  const color = getRandomColor()
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
const removeColor = (el) => {
  el.style.backgroundColor = '#1d1d1d'
  el.style.boxShadow = `0 0 2px #000`
}
const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))
  board.append(square);
}