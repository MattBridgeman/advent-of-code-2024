export const getProgram = async () => {
  const input = await Deno.readTextFile("./input.txt");
  return input;
};