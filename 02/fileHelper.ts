export const getReports = async () => {
    const input = await Deno.readTextFile("./input.txt");
    const rows = input.split("\n");
    const numbersPairByRow = rows.map(row => {
        return row.split(" ").filter((rowItem) => rowItem !== "").map(item => +item);
    });
    return numbersPairByRow;
};