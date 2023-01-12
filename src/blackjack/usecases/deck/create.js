import { shuffle } from "underscore";

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

/**
 * Creates a new deck.
 * @returns {Array<String>} returns a new deck.
 */
export const createDeck = () => {
  //Creates the numeric cards for each card type.
  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
  }

  //Creates the special cards for each special card.
  for (let type of types) {
    for (let special of specials) {
      deck.push(special + type);
    }
  }

  return shuffle(deck);
};