/**
 * Takes the card on the top of the deck.
 * @param {Array<string>} deck 
 * @returns {Array<string>} Cards deck
 */
export const takeCard = (deck) => {
  if (!deck || !deck.length) throw 'The deck is empty.';

  return deck.pop();
};