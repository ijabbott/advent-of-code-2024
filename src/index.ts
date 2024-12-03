import { readToArray } from "./fileUtils.js";
import { listSimilarity, splitList } from "./listUtils.js";
import { absoluteDifference } from "./mathUtils.js";

const inputFilePath = process.argv[2];

const day1Part1Calculation = async (inputFilePath: string): Promise<number> => {
    const lines = await readToArray(inputFilePath);
    const lists = splitList(lines, '\\s+');

    const list1 = lists[0].sort();
    const list2 = lists[1].sort();

    let difference = 0;

    list1.map((item, index) => {
        difference += absoluteDifference(parseInt(item), parseInt(list2[index]));
    });

    return difference;
}


const day1Part2Calculation = async (inputFilePath: string): Promise<number> => {
    const lines = await readToArray(inputFilePath);
    const lists = splitList(lines, '\\s+');

    const list1 = lists[0].sort();
    const list2 = lists[1].sort();

    const similarity = listSimilarity(list1.map(Number), list2.map(Number));

    return similarity;
}

console.log("Day 1 - Part 1: " + await day1Part1Calculation(inputFilePath));
console.log("Day 1 - Part 2: " + await day1Part2Calculation(inputFilePath));