export const stringToRows = (s: string) => {
  const rows = s.split("\n");
  return rows;
};

export const stringTo2dArray = (s: string) => {
  const rows = stringToRows(s);
  const columns = rows.map(s => {
    return [...s];
  })
  return columns;
};

export const reverseWord = (s: string) => {
  return s.split("").reverse().join("");
};

export const wordIsInString = (word: string, s: string) => {
  let index = s.indexOf(word);
  return index;
};

export const searchHorizonal = (word: string) => (wordsearch: Array<Array<string>>): number => {
  let reversedWord = reverseWord(word);
  let occurencesArray = wordsearch.map(stringArray => {
    let s = stringArray.join("");
    let foundWordIndex = wordIsInString(word, s);
    let foundReverseWordIndex = wordIsInString(reversedWord, s);
    return (foundWordIndex > -1 ? 1 : 0) + (foundReverseWordIndex > -1 ? 1 : 0);
  });
  let occurences = occurencesArray.reduce((a, b) => a + b, 0);
  return occurences;
};

export const searchVertical = (word: string) => (wordsearch: Array<Array<string>>): number => {
  let verticalToHorizontalArray = rotateArray90Degrees(wordsearch);
  let occurences = searchHorizonal(word)(verticalToHorizontalArray);
  return occurences;
};

export const rotateArray90Degrees = (wordsearch: Array<Array<string>>): Array<Array<string>> => {
  let firstRow = wordsearch[0];
  let rotatedArray: Array<Array<string>> = [];
  for(let y = 0; y < wordsearch.length; y++) {
    rotatedArray.push([]);
    for(let x = 0; x < firstRow.length; x++) {
      let inverseY = wordsearch.length - y;
      rotatedArray[inverseY].push(wordsearch[x][y]);
    }
  }
  return rotatedArray;
};

//TODO
//12345
//67890

//1
//62
//73
//84
//95
//0
export const rotateArray45Degrees = (wordsearch: Array<Array<string>>): Array<Array<string>> => {
  let firstRow = wordsearch[0];
  let rotatedArray: Array<Array<string>> = [];
  return rotatedArray;
};

//TODO
export const rotateArray135Degrees = (wordsearch: Array<Array<string>>): Array<Array<string>> => {
  let firstRow = wordsearch[0];
  let rotatedArray: Array<Array<string>> = [];
  return rotatedArray;
};

export const searchForWordInstances = (word: string) => (wordsearch: string) => {
  return 0;
};

const main = async () => {
};

if (import.meta.main) {
  main();
}