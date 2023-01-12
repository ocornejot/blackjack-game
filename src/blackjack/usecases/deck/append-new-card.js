export const appendNewCard = (card, turn, playersCards) => {
  const cardImg = document.createElement('img');
  cardImg.src = `assets/cards/${card}.png`;
  cardImg.classList.add('game-card');
  playersCards[turn].append(cardImg);
};