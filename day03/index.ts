import { validateLocaleAndSetLanguage } from "typescript";

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

// TODO: FINISH
type MatchRange = {
    start: number,
    end: number
}

const conditionalRegex = /do(n't)?\(\)/g;
const condMatches = [...file.matchAll(conditionalRegex)]

const doMatch = condMatches.filter((e) => e[0] === "do()");
const dontMatch = condMatches.filter((e) => e[0] === "don't()");

for (const currentMatch of dontMatch) {
    let nextDo: number = -1;

    for (const dos of doMatch) {
        if (dos.index > currentMatch.index) {
            nextDo = dos.index + dos[0].length;
            break;
        }
        nextDo = -1;
    }
    console.log(currentMatch.index+ "->" +nextDo);
    
    matches = matches.filter((obj) => {
        if (nextDo === -1) return !(obj.index >= currentMatch.index);
        return (obj.index < currentMatch.index) || (obj.index > nextDo)
    })
}
matches.forEach((mt) => {
    console.log(mt.index)
})

console.log("==============");
console.log("Part 2");
console.log("==============");

total = 0;
for (const mul of matches) {
    total += Number(mul[1]) * Number(mul[2]);
}
console.log(total);