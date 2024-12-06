import { assertEquals } from "@std/assert";
import { evaluateLooseSafety } from "./part2.ts";

//7 6 4 2 1: Safe without removing any level.
Deno.test("7 6 4 2 1: Safe without removing any level.", () => {
  const report = [7, 6, 4, 2, 1];
  const { safe } = evaluateLooseSafety(report);
  assertEquals(safe, true);
});

//1 2 7 8 9: Unsafe regardless of which level is removed.
Deno.test("1 2 7 8 9: Unsafe regardless of which level is removed.", () => {
  const report = [1, 2, 7, 8, 9];
  const { safe } = evaluateLooseSafety(report);
  assertEquals(safe, false);
});

//9 7 6 2 1: Unsafe regardless of which level is removed.
Deno.test("9 7 6 2 1: Unsafe regardless of which level is removed.", () => {
  const report = [9, 7, 6, 2, 1];
  const { safe } = evaluateLooseSafety(report);
  assertEquals(safe, false);
});

//1 3 2 4 5: Safe by removing the second level, 3.
Deno.test("1 3 2 4 5: Safe by removing the second level, 3.", () => {
  const report = [1, 3, 2, 4, 5];
  const { safe } = evaluateLooseSafety(report);
  assertEquals(safe, true);
});

//8 6 4 4 1: Safe by removing the third level, 4.
Deno.test("8 6 4 4 1: Safe by removing the third level, 4.", () => {
  const report = [8, 6, 4, 4, 1];
  const { safe } = evaluateLooseSafety(report);
  assertEquals(safe, true);
});

//1 3 6 7 9: Safe without removing any level.
Deno.test("1 3 6 7 9: Safe without removing any level.", () => {
  const report = [1, 3, 6, 7, 9];
  const { safe } = evaluateLooseSafety(report);
  assertEquals(safe, true);
});