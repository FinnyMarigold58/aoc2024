// Get File
const file = await Bun.file("./inputs/input.txt").text();

const regex = /mul\(([0-9]+),([0-9]+)\)/g;

let matches = [...file.matchAll(regex)];

let total = 0;
for (const mul of matches) {
    total += Number(mul[1]) * Number(mul[2]);
}

console.log("==============");
console.log("Part 1");
console.log("==============");
console.log(total);
// ----------------------------------------------

const conditionalRegex = /do(?:n't)?\(\)|mul\(([0-9]+),([0-9]+)\)/g;
const condMatches = [...file.matchAll(conditionalRegex)]

let enabled = true;
total = 0;
for (const match of condMatches) {
    if (match[0] === "do()") {
        enabled = true;
    } else if (match[0] === "don't()") {
        enabled = false;
    } else {
        if (enabled) {
            total += (Number(match[1]) * Number(match[2]))
        }
    }
}



console.log("==============");
console.log("Part 2");
console.log("==============");
console.log(total);
