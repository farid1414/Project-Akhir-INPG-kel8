const btnLebihBanyak = document.querySelector(".btn-lebih-banyak");
const cardPortofolio = document.querySelectorAll(".card-porto");

let currentCard = 2;
btnLebihBanyak.addEventListener("click", () => {
  for (let i = currentCard; i < currentCard + 2; i++) {
    if (cardPortofolio[i]) {
      cardPortofolio[i].style.display = "block";
    }
  }
  currentCard += 2;
  if (currentCard >= cardPortofolio.length) {
    event.target.style.display = "none";
  }
});
