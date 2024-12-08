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

//123
//456
//789

//1
//42
//753
//86
//9

// 1
// 1

export const rotateArray45Degrees = (wordsearch: Array<Array<string>>): Array<Array<string>> => {
  let firstRow = wordsearch[0];
  const width = firstRow.length;
  const height = wordsearch.length;
  const maxDiagonal = Math.min(width, height);
  const maxRotatedRows = width + height - 1;
  let rotatedArray: Array<Array<string>> = [];
  // rotatedArray.fill([], 0, maxRotatedRows);
  // for(let x = 0; x < width; x++) {
  //   for(let y = 0; y < height; y++) {
  //     const flippedX = 0;
  //     const flippedY = 0;

  //   }
  // }
  for(let y = 0; y < maxRotatedRows; y++) {
    rotatedArray.push([]);
    const diffY = (height - 1) - y;
    // const overflowY = Math.min(0, diffY);
    const endOverflowX = maxRotatedRows - y;
    const overflowX = Math.min(Math.min(y + 1, maxDiagonal), endOverflowX);
    for(let x = 0; x < overflowX; x++) {
      rotatedArray[y].push('0');
      // const rotatedX = x - y;
      // const rotatedY = normalizedY;
      // if(rotatedX < 0 || rotatedX > width - 1) {
      //   continue;
      // }
      // if(!wordsearch[rotatedY]) {
      //   throw new Error(`wordsearch rotatedY: ${rotatedY} doesn't exist`)
      // }

      // if(!wordsearch[rotatedY][rotatedX]) {
      //   throw new Error(`wordsearch rotatedX: ${rotatedX} doesn't exist`)
      // }
      // rotatedArray[y].push(wordsearch[rotatedY][rotatedX]);
    }
  }
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
  console.log(rotateArray45Degrees([
    ["1","2","3","4","5"],
    ["6","7","8","9","0"]
  ]));
};

if (import.meta.main) {
  main();
}