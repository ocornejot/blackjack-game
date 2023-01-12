import { shuffle } from "underscore";

/**
 * Creates a new deck.
 * @param {array<String>} cardTypes 
 * @param {array<String>} specialCards 
 * @returns {array<String>} returns a new deck.
 */
export const createDeck = (cardTypes, specialCards) => {

  if (!cardTypes || cardTypes === 0) 
    throw new Error('carTypes is required.');

  if (!specialCards || specialCards === 0) 
    throw new Error('specialCards is required.');

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let type of cardTypes) {
      deck.push(i + type);
    }
  }

  for (let type of cardTypes) {
    for (let especial of specialCards) {
      deck.push(especial + type);
    }
  }

  return shuffle(deck);
};