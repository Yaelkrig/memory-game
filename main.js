const cards = [
  { name: "A" },
  { name: "A" },
  { name: "B" },
  { name: "B" },
  { name: "C" },
  { name: "C" },
  { name: "D" },
  { name: "D" },
  { name: "E" },
  { name: "E" },
  { name: "F" },
  { name: "F" },
  { name: "G" },
  { name: "G" },
  { name: "H" },
  { name: "H" },
  { name: "I" },
  { name: "I" },
  { name: "J" },
  { name: "J" },
  { name: "K" },
  { name: "K" },
  { name: "L" },
  { name: "L" },
  { name: "M" },
  { name: "M" },
  { name: "N" },
  { name: "N" },
  { name: "O" },
  { name: "O" },
  { name: "P" },
  { name: "P" },
  { name: "Q" },
  { name: "Q" },
  { name: "R" },
  { name: "R" },
  { name: "S" },
  { name: "S" },
  { name: "T" },
  { name: "T" },
  { name: "U" },
  { name: "U" },
  { name: "V" },
  { name: "V" },
  { name: "W" },
  { name: "W" },
  { name: "X" },
  { name: "X" },
  { name: "Y" },
  { name: "Y" },
  { name: "Z" },
  { name: "Z" },
];
let clicked = []
function random(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (i = 0; i < 100; i++) {
    let a1 = random(0, arr.length);
    let a2 = random(0, arr.length);
    if (a1 == a2) {
      i--;
      continue;
    }
    swap(arr, a1, a2);
  }
}

function main() {

  shuffle(cards);
  for (let idx in cards) {
    createCardElement(idx)
  }
}

let check = (i1, i2, arr) => arr[i1].name === arr[i2].name && i1 != i2;
const cardClicked = (evn) => {
  const cardEl = evn.target;
  const idx = cardEl.id;
  cardEl.innerHTML = cards[idx].name
}

function createCardElement(idx) {
  const board = document.getElementById("board");
  // <div></div>
  const cardEl = document.createElement("div");
  cardEl.id = idx
  // <div>C</div>
  // cardEl.innerHTML = card.name;
  cardEl.className = "card"
  // <div class = "card" >C</div>
  cardEl.onclick = cardClicked
  board.appendChild(cardEl);
  // <div class = "card" >C</div>
}

window.onload = () => {
  main();
}

function twoCards() {

}


// let num1 = 2; //Number(prompt("enter a number"));
// let num2 = 3; //Number(prompt("enter another number"));

