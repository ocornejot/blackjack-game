
/**
 * Takes the card on the top of the deck.
 * @param {array<string>} deck 
 * @returns {array<string>} Cards deck
 */
export const takeCard = (deck) => {
  if (!deck || !deck.length) throw 'The deck is empty.';

  return deck.pop();
};