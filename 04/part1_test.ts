import { assertEquals } from "@std/assert";
import { searchForWordInstances, searchHorizonal, stringToRows } from "./part1.ts";

export const getFixture = async (name: string) => {
  const fixture = await Deno.readTextFile(`./fixtures/${name}.txt`);
  return fixture;
};

//horizontal
//vertical
//diagonal
//written backwards

Deno.test("Wordsearch finds 5 xmas horizontally", async () => {
  const wordsearch = await getFixture("input");
  const numberOfInstances = searchHorizonal("XMAS")(stringToRows(wordsearch));
  assertEquals(numberOfInstances, 5);
});

Deno.test("Wordsearch finds 18 xmas", async () => {
  const wordsearch = await getFixture("input");
  const numberOfInstances = searchForWordInstances("XMAS")(wordsearch);
  assertEquals(numberOfInstances, 18);
});
