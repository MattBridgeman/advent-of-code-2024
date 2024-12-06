export const stringToRows = (s: string) => {
  const rows = s.split("\n");
  return rows;
};

export const reverseWord = (s: string) => {
  return s.split("").reverse().join("");
};

export const wordIsInString = (word: string, s: string) => {
  let index = s.indexOf(word);
  return index;
};

export const searchHorizonal = (word: string) => (wordsearch: string[]): number => {
  let reversedWord = reverseWord(word);
  let occurencesArray = wordsearch.map(s => {
    let foundWordIndex = wordIsInString(word, s);
    let foundReverseWordIndex = wordIsInString(reversedWord, s);
    return (foundWordIndex > -1 ? 1 : 0) + (foundReverseWordIndex > -1 ? 1 : 0);
  });
  let occurences = occurencesArray.reduce((a, b) => a + b, 0);
  return occurences;
};

export const searchForWordInstances = (word: string) => (wordsearch: string) => {
  return 0;
};

const main = async () => {
};

if (import.meta.main) {
  main();
}