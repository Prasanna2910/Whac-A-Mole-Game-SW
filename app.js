const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole');
  });
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  console.log(randomPosition);
}
randomSquare()