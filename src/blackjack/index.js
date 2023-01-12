import { createDeck, takeCard, computerTurn, playerPointsHandler, appendNewCard } from "./usecases/deck"; 


const miModule = (() => {
  'use strict';

  let deck = [];
  const cardTypes = ['C', 'D', 'H', 'S'];
  const specialCards = ['A', 'J', 'Q', 'K'];

  let playerPoints = [];

  //HTML references
  const buttonsRef = {
    newGame: document.querySelector('#btn-new-game'),
    takeCard: document.querySelector('#btn-take-card'),
    finish: document.querySelector('#btn-finish'),
  };

  const smalls = document.querySelectorAll('small');
  const playersCards = document.querySelectorAll('.players-cards');

  const initGame = (numPlayers = 1) => {
    deck = createDeck(cardTypes, specialCards);
    playerPoints = [];
    for (let i = 0; i <= numPlayers; i++) {
      playerPoints.push(0);
    }

    buttonsRef.finish.disabled = false;
    buttonsRef.takeCard.disabled = false;
    playersCards.forEach((elem) => (elem.innerText = ''));
    smalls.forEach((elem) => (elem.innerText = '0'));
    playerPoints[0] = 0;
    playerPoints[1] = 0;
  };

  //Events
  buttonsRef.takeCard.addEventListener('click', () => {
    const card = takeCard(deck);
    const points = playerPointsHandler(card, 0, playerPoints, smalls);
    appendNewCard(card, 0, playersCards);

    if (points > 21) {
      console.warn('You lose.');
      buttonsRef.takeCard.disabled = true;
      buttonsRef.finish.disabled = true;
      computerTurn(points, deck, playerPoints, smalls, playersCards);
    } else if (points === 21) {
      console.warn('21 achieved');
      buttonsRef.finish.disabled = true;
      buttonsRef.takeCard.disabled = true;
      computerTurn(points, deck, playerPoints, smalls, playersCards);
    }
  });

  buttonsRef.finish.addEventListener('click', () => {
    buttonsRef.finish.disabled = true;
    buttonsRef.takeCard.disabled = true;
    computerTurn(playerPoints[0], deck, playerPoints, smalls, playersCards);
  });

  buttonsRef.newGame.addEventListener('click', () => {
    initGame();
  });

  return {
    newGame: initGame
  }
})();

