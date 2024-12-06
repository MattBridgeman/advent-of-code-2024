import { getProgram } from "./fileHelper.ts";

const sumOfMultiplications = async () => {
  const program = await getProgram();
  const multPattern = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/g;
  let match;
  let results: number[] = [];
  while(match = multPattern.exec(program)){
    let [_, a, b] = match;
    const result = parseInt(a) * parseInt(b);
    results.push(result);
  }
  const sum = results.reduce((a, b) => a + b, 0);
  return sum;
};

const main = async () => {
  const result = await sumOfMultiplications();
  console.log({result});
};

if (import.meta.main) {
  main();
}