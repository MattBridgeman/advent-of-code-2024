
import { getNumberPairsByRow } from "./fileHelper.ts";

const getTotalSimilarityScore = async (): Promise<number> => {
  const numbersPairByRow = await getNumberPairsByRow();
  const firstNumbers = numbersPairByRow.map(row => +row[0]);
  const secondNumbers = numbersPairByRow.map(row => +row[1]);
  const similarityScores = firstNumbers.map(firstNumber => {
    //TODO: faster with a cache of occurences given duplicates
    const occurances = secondNumbers.filter(secondNumber => firstNumber === secondNumber).length;
    return firstNumber * occurances;
  });
  const sumOfScores = similarityScores.reduce((a, b) => a + b, 0);
  return sumOfScores;
};

const main = async () => {
  const similarityScore = await getTotalSimilarityScore();
  console.log({similarityScore});
};

if (import.meta.main) {
  main();
}
