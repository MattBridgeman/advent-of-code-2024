import { getProgram } from "./fileHelper.ts";

export const extractProgram = (program: string, run:number = 0): string => {
  let dontStatements = program.split("don't()");
  // const pairs = dontStatements.map((statement, index) => {
  //   if(index % 2 === 0) {
  //     return [statement, dontStatements[index + 1]];
  //   }
  // });
  if(run === 0) {
    dontStatements = dontStatements.slice(1);
  }
  const doStatements = dontStatements.map(statement => {
    return statement.split("do()")[1];
    // return extractProgram(doStatement.slice(1).join(""));
  });
  return run === 0 ? dontStatements[0] : '' + doStatements.join("");
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