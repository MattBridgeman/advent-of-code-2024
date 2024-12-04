//Pair up the smallest number in the left list with the smallest number in the right list,
//then the second-smallest left number with the second-smallest right number, and so on.

//get input file

//read file contents

//split by line

//split by spaces

//first number into one list, second into another

//sort both lists

//zip them and subtract one from other

//normalise number if less than 0

import { getNumberPairsByRow } from "./fileHelper.ts";

const sortLowestFirst = (a, b) => a - b;

const totalDistance = async (): Promise<number> => {
  const numbersPairByRow = await getNumberPairsByRow();
  const firstNumbers = numbersPairByRow.map(row => +row[0]).sort(sortLowestFirst);
  const secondNumbers = numbersPairByRow.map(row => +row[1]).sort(sortLowestFirst);
  const differences = firstNumbers.map((firstNumber, index) => {
    const difference = firstNumber - secondNumbers[index];
    const normalisedDifference = difference < 0 ? difference * -1 : difference;
    return normalisedDifference;
  });
  const sum = differences.reduce((a,b) => a + b, 0);
  return sum;
};

const main = async () => {
  const distance = await totalDistance();
  console.log({distance});
};

if (import.meta.main) {
  main();
}
