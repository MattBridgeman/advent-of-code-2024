//The levels are either all increasing or all decreasing.
//Any two adjacent levels differ by at least one and at most three.

import { getReports } from "./fileHelper.ts";

const safeReports = async (): Promise<number> => {
    const reports = await getReports();
    const safeReportList = reports.map(report => {
      let increasing = false;
      let decreasing = false;
      let safe = true;
      for(let i = 0; i < report.length - 1; i++) {
        const level1 = report[i];
        const level2 = report[i+1];
        const difference = level2 - level1;
        const normalisedDifference = difference < 0 ? difference * -1 : difference;
        const currentIncreasing = difference > 0;
        const currentDecreasing = difference < 0;
        const stillIncreasing = (!increasing || currentIncreasing === increasing) && !decreasing;
        const stillDecreasing = (!decreasing || currentDecreasing === decreasing) && !increasing;
        increasing = currentIncreasing;
        decreasing = currentDecreasing;
        const adjacentLevelsAreSafe = normalisedDifference <= 3 && normalisedDifference >= 1;
        const stepIsSafe = (stillIncreasing || stillDecreasing) && adjacentLevelsAreSafe;
        if(!stepIsSafe) {
          safe = false;
          break
        }
      }
      return safe ? 1 : 0;
    });
    const sum = safeReportList.reduce((a, b) => a + b, 0);
    return sum;
};

const main = async () => {
  const safe = await safeReports();
  console.log({safe});
};

if (import.meta.main) {
  main();
}