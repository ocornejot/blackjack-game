import { takeCard } from "./take-one-card";
import { appendNewCard } from "./append-new-card";
import { playerPointsHandler } from "./player-points-handler";

const determineWinner = (playerPoints) => {
  const [minimumPoints, points] = playerPoints;

  setTimeout(() => {
    if (points === minimumPoints) {
      alert('Nobody wins.');
    } else if (minimumPoints > 21) {
      alert('Computer wins');
    } else if (points > 21) {
      alert('Player wins');
    } else {
      alert('Computer wins');
    }
  }, 100);
};

export const computerTurn = (minimumPoints, deck, playerPoints, smalls, playersCards) => {
  let points = 0;
  do {
    const card = takeCard(deck);
    points = playerPointsHandler(card, playerPoints.length - 1, playerPoints, smalls);
    appendNewCard(card, playerPoints.length - 1, playersCards);

    if (minimumPoints > 21) {
      break;
    }
  } while (points < minimumPoints && minimumPoints <= 21);

  determineWinner(playerPoints);
};
