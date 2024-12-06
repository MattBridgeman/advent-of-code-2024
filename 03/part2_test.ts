import { extractProgram } from "./part2.ts";
import { assertEquals } from "@std/assert";

Deno.test("Extract trivial program from do / dont", () => {
  const program = "mul(1,2)don't()mul(3,4)do()mul(5,6)";
  const extractedProgram = extractProgram(program);
  assertEquals(extractedProgram, "mul(1,2)mul(5,6)");
});

Deno.test("Extract simple program from do / dont", () => {
  const program = "mul(1,2)don't()mul(3,4)do()mul(5,6)don't()mul(7,8)do()mul(9,10)";
  const extractedProgram = extractProgram(program);
  assertEquals(extractedProgram, "mul(1,2)mul(5,6)mul(9,10)");
});

Deno.test("Extract complex program from do / dont", () => {
  const program = "mul(1,2)don't()mul(3,4)do()mul(5,6)do()mul(7,8)don't()mul(9,10)do()mul(11,12)";
  const extractedProgram = extractProgram(program);
  assertEquals(extractedProgram, "mul(1,2)mul(5,6)mul(7,8)mul(11,12)");
});
