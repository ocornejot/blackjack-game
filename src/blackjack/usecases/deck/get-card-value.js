/**
 * Gets the numeric value of the card.
 * @param {string} value 
 * @returns {number} Numeric value
 */
export const getCardValue = (value) => {
  if (!value) throw new Error('value is required');

  if (!/^([A|K|Q|J]|[2-9]{1}|10)[S|D|C|H]$/g.test(value))
    throw 'Value could not be found.';

  if (/^[A][S|D|C|H]$/g.test(value)) return 11;
  if (/^[K|Q|J][S|D|C|H]$/g.test(value)) return 10;

  return parseInt(value);
};