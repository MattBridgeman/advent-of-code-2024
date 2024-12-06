import { getProgram } from "./fileHelper.ts";

export const extractProgram = (program: string, run:number = 0): string => {
  let sanitisedProgram = 'do()' + program;
  let doStatements = sanitisedProgram.split("do()").map(statement => {
    let dontStatements = statement.split("don't()");
    return dontStatements[0];
  });
  return doStatements.join("");
};

const sumOfMultiplications = async () => {
  const program = await getProgram();
  const extractedProgram = extractProgram(program);
  const multPattern = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/g;
  let match;
  let results: number[] = [];
  while(match = multPattern.exec(extractedProgram)){
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