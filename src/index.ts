import { readToArray } from "./fileUtils.js";
import { isDirectionalSequenceWithLimit, listSimilarity, splitList, stringsToNumbers } from "./listUtils.js";
import { absoluteDifference } from "./mathUtils.js";
import { Report } from "./report.js";

const day = process.argv[2]
const inputFilePath = `./inputFiles/${day}-input.txt`;

switch (day) {
    case 'day1':
        console.log("Day 1 - Part 1: " + await day1Part1Calculation(inputFilePath));
        console.log("Day 1 - Part 2: " + await day1Part2Calculation(inputFilePath));

        break;
    case 'day2':
        console.log("Day 2 - Part 1: " + await day2Part1Calculation(inputFilePath));

        break;
    default:
        console.log(`${day} not yet implemented`);
}

async function day1Part1Calculation(inputFilePath: string): Promise<number> {
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


async function day1Part2Calculation(inputFilePath: string): Promise<number> {
    const lines = await readToArray(inputFilePath);
    const lists = splitList(lines, '\\s+');

    const list1 = lists[0].sort();
    const list2 = lists[1].sort();

    const similarity = listSimilarity(list1.map(Number), list2.map(Number));

    return similarity;
}

async function day2Part1Calculation(inputFilePath: string): Promise<number> {
    const lines:string[] = await readToArray(inputFilePath);
    let safeLevels = 0;
    lines.forEach((line) => {
        if(new Report(line).isSafe()) {
            safeLevels++;
        }
    })
    // const numLists = stringsToNumbers(lines);
    // let safeLevels = 0;
    // numLists.forEach((line) => {
    //     if(isDirectionalSequenceWithLimit(line, 3)) {
    //         safeLevels++;
    //         console.log(line + ":" + true)
    //     } else {
    //         console.log(line + ":" + false)
    //     }
    // })
    
    return safeLevels;
}