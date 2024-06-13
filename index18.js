function findConsecutiveSequences(arr) {
    let result = [];

    for (let i = 0; i < arr.length - 3; i++) {
        if (arr[i] + 1 === arr[i + 1] && arr[i] + 2 === arr[i + 2]) {
            result.push([arr[i], arr[i + 1], arr[i + 2]]);
        }
    }

    return result;
}

// Example array
const array = [14, 3, 4, 5, 29, 7, 8, 9, 2, 3, 4, 5, 12, 45, 46, 47, 8, 9];

// Find consecutive sequences in the given array
const sequences = findConsecutiveSequences(array);
console.log("Consecutive Sequences:", sequences);
