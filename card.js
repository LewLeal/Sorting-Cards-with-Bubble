let btnShuffle = document.querySelector("#btnShuffle");
let btnSort = document.querySelector("#btnSort");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let suits = ["♦", "♥", "♠", "♣"];

let cardOrder = [];

function createCards(elem) {
  let input = document.getElementById("valueCards");
  let valueCards = parseInt(input.value);
  cardOrder = [];

  for (let i = 0; i < valueCards; i++) {
    let randomNumber = Math.floor(Math.random() * numbers.length);
    let randomSuit = Math.floor(Math.random() * suits.length);

    let card = document.createElement("div");
    card.classList.add("card");

    let topSuit = document.createElement("div");
    topSuit.classList.add("top");
    topSuit.innerHTML = suits[randomSuit];

    let middleNumber = document.createElement("div");
    middleNumber.classList.add("middleNumber");
    middleNumber.innerHTML = changeValue(numbers[randomNumber]);

    let bottonSuit = document.createElement("div");
    bottonSuit.classList.add("downSuit");

    if (topSuit.innerHTML === "♥" || topSuit.innerHTML === "♦") {
      topSuit.style.color = "red";
      middleNumber.style.color = "red";
      bottonSuit.style.color = "red";
    } else {
      topSuit.style.color = "black";
      middleNumber.style.color = "black";
      bottonSuit.style.color = "black";
    }

    bottonSuit.innerHTML = topSuit.innerHTML;

    card.appendChild(topSuit);
    card.appendChild(middleNumber);
    card.appendChild(bottonSuit);
    elem.appendChild(card);

    let cardContent = {
      number: numbers[randomNumber],
      html: card.innerHTML,
    };

    cardOrder.push(cardContent);
  }
}
function changeValue(value) {
  switch (value) {
    case 1:
      return "A";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return value;
  }
}

btnShuffle.addEventListener("click", (e) => {
  const cardDeck = document.querySelector("#cardValue");
  cardValue.innerHTML = "";
  createCards(cardDeck);
});

btnSort.addEventListener("click", (e) => {
  let sortDeck = document.getElementById("sortDeck");
  sortDeck.innerHTML = "";

  for (let i = cardOrder.length - 1; i > 0; i--) {
    for (let k = 0; k < i; k++) {
      if (cardOrder[k].number > cardOrder[k + 1].number) {
        let aux = cardOrder[k];
        cardOrder[k] = cardOrder[k + 1];
        cardOrder[k + 1] = aux;
        let stepOne = document.createElement("div");
        stepOne.classList.add("fila");
        sortDeck.appendChild(stepOne);
        var filaBar = sortDeck.childElementCount;
        stepOne.innerHTML = filaBar;

        for (let o = 0; o < cardOrder.length; o++) {
          let cardNew = document.createElement("div");
          cardNew.classList.add("cardNew");
          cardNew.innerHTML = cardOrder[o].html;
          stepOne.appendChild(cardNew);
        }
      }
    }
  }
});
