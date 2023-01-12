
import { getCardValue } from "./get-card-value";

export const playerPointsHandler = (card, playerTurn, playerPoints, smalls) => {
  playerPoints[playerTurn] = playerPoints[playerTurn] + getCardValue(card);
  smalls[playerTurn].innerText = playerPoints[playerTurn];

  return playerPoints[playerTurn];
};