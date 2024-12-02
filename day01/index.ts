
// Grab Input
const input = await Bun.file("./inputs/list.txt").text();

// Grab each line of input then split into left and right
const lines = input.split("\r\n").map((element) => element.split("   "));

// Combine Into lists (llist and rlist), as a Number so we can sort later
const llist: number[] = [];
const rlist: number[] = [];

lines.forEach((line) => {
    llist.push(Number(line[0]));
    rlist.push(Number(line[1]));
});

// Sort the lists
llist.sort((a, b) => {
    return a - b;
})

rlist.sort((a, b) => {
    return a - b;
})

// Define totalDistance to dcount to total distance
let totalDistance = 0;

for (let i = 0; i < llist.length; i++) {
    // Get the disance (absolute value of a - b)
    const distance = Math.abs(llist[i] - rlist[i]);

    // Add distance to total
    totalDistance += distance;
}

console.log("===================")
console.log("Part 1")
console.log("===================")
console.log("Total Distance: " + totalDistance)


// PART 2

let similarityScore = 0;

// For every element in llist, get the amount in rlist, add to similarityScore (element * occurance)
llist.forEach((number) => {
    const occurances = rlist.filter((rnum) => rnum === number).length;
    similarityScore += number * occurances;
})

console.log("=====================")
console.log("PART 2")
console.log("=====================")
console.log("Similarity Score: " + similarityScore);