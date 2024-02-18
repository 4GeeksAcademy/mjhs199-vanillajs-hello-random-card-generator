import "./style.css";

function generateRandomCard() {
  const topSuit = document.getElementById("topSuit");
  const cardNum = document.getElementById("cardNum");
  const bottomSuit = document.getElementById("bottomSuit");

  const cardArr = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A"
  ];
  const suitArr = ["♥", "♠", "♣", "♦"];

  const randomCardIndex = Math.floor(Math.random() * cardArr.length);
  const randomSuitIndex = Math.floor(Math.random() * suitArr.length);

  topSuit.innerText = suitArr[randomSuitIndex];
  bottomSuit.innerText = suitArr[randomSuitIndex];
  cardNum.innerText = cardArr[randomCardIndex];

  topSuit.className = "";
  bottomSuit.className = "";

  switch (suitArr[randomSuitIndex]) {
    case "♦":
      topSuit.classList.add("diamond");
      bottomSuit.classList.add("diamond");
      break;
    case "♥":
      topSuit.classList.add("heart");
      bottomSuit.classList.add("heart");
      break;
    case "♠":
      topSuit.classList.add("spade");
      bottomSuit.classList.add("spade");
      break;
    case "♣":
      topSuit.classList.add("club");
      bottomSuit.classList.add("club");
      break;
    default:
      break;
  }
}

const generateCardBtn = document.getElementById("generateCardBtn");
window.onload = generateRandomCard;
generateCardBtn.addEventListener("click", generateRandomCard);
