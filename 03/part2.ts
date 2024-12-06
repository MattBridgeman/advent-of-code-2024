import { getProgram } from "./fileHelper.ts";

const extractProgram = (program: string): string => {
  const dontStatements = program.split("don't()");
  const doStatements = dontStatements.map(statement => {
    const doStatement = statement.split("do()");
    if(doStatement.length === 1) {
      return '';
    }
    if(doStatement.length === 2) {
      return doStatement[1];
    }
    return extractProgram(doStatement.slice(1).join(""));
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