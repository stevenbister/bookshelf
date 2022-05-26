/**
 *
 * @param {String} string string to be pluralised
 * @param {Number} count Number of items to pluralise the string or not
 * @returns
 */
const pluralise = (string, count) => (count !== 1 ? `${string}s` : string);

export default pluralise;
