import { assertEquals } from "@std/assert";
import { executeWordsearch } from "./part1.ts";

export const getFixture = async (name: string) => {
  const fixture = await Deno.readTextFile(`./fixtures/${name}.txt`);
  return fixture;
};

Deno.test("Wordsearch finds 18 xmas", async () => {
  const wordsearch = await getFixture("input_with_18");
  const numberOfInstances = executeWordsearch("XMAS")(wordsearch);
  assertEquals(numberOfInstances, 18);
});
