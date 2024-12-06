import { assertEquals } from "@std/assert";
import { searchForWordInstances, searchHorizonal, searchVertical, stringTo2dArray, rotateArray45Degrees } from "./part1.ts";

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
  const numberOfInstances = searchHorizonal("XMAS")(stringTo2dArray(wordsearch));
  assertEquals(numberOfInstances, 5);
});

Deno.test("Wordsearch finds 3 xmas vertically", async () => {
  const wordsearch = await getFixture("input");
  const numberOfInstances = searchVertical("XMAS")(stringTo2dArray(wordsearch));
  assertEquals(numberOfInstances, 3);
});

Deno.test("Rotate array 45 degrees", async () => {
  const arrayToRotate = [
    ["1","2","3","4","5"],
    ["6","7","8","9","0"]
  ];
  const expectedArrayRotation = [
    ["1"],
    ["6","2"],
    ["7","3"],
    ["8","4"],
    ["9","5"],
    ["0"]
  ]
  const rotatedArray = rotateArray45Degrees(arrayToRotate);
  assertEquals(rotatedArray, expectedArrayRotation);
});

Deno.test("Wordsearch finds 18 xmas", async () => {
  const wordsearch = await getFixture("input");
  const numberOfInstances = searchForWordInstances("XMAS")(wordsearch);
  assertEquals(numberOfInstances, 18);
});
