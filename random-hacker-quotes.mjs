import hackerQuotes from 'hacker-quotes';
import {getRandomInteger} from './util.mjs';

function getRandomQuote() {
  const index = getRandomInteger(0, hackerQuotes.length);
  return hackerQuotes[index];
}

export {getRandomQuote};