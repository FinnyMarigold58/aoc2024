// Get File
const file = await Bun.file("./inputs/input.txt").text();

const reports = file.split("\n");

const levels = reports.map(a => a.split(" ").map(Number));

const filtered = levels.filter((levelArr) => {
    return allSafe(levelArr)
})

function allSafe(array: number[]): Boolean {
    let inc: null | boolean = null;
    for (let i = 0; i < array.length - 1; i++) {
        if (i === 0) array[i+1] - array[i] > 0 ? inc = true : inc = false
        const distance = Math.abs(array[i] - array[i+1]);
        if (distance >= 1 && distance <= 3) {
            if (inc ? (array[i+1] - array[i] > 0) : (array[i+1] - array[i] < 0)) {
                continue;
            }
        };
        return false;
    }
    return true;
}
// PART 1
console.log(levels.length);
console.log(filtered.length)

function allSafeWithError(array: number[]): Boolean {
    let inc: null | boolean = null;
    let errorEncountered = false;
    for (let i = 0; i < array.length - 1; i++) {
        if (i === 0) array[i+1] - array[i] > 0 ? inc = true : inc = false
        const distance = Math.abs(array[i] - array[i+1]);
        if (distance >= 1 && distance <= 3) {
            if (inc ? (array[i+1] - array[i] > 0) : (array[i+1] - array[i] < 0)) {
                continue;
            }
        };

        if (errorEncountered === false) {
            errorEncountered = true;
            continue;
        }
        return false;
    }
    return true;
}

// PART 2
const pt2Filter = levels.filter((levelArr) => allSafeWithError(levelArr)).length;
console.log("PART2: " + pt2Filter)