// largest smallest largest smallest latgest smallest

function rearrangeLargestSmallest(arr) {
    arr.sort((a, b) => a - b);  

    let result = [];
    let n = arr.length;

    for (let i = 0; i < n / 2; i++) {
        // Append the largest element from the end
        result.push(arr[n - 1 - i]);
        // Append the smallest element from the beginning
        result.push(arr[i]);
    }

    // If the array has an odd length, append the middle element
    if (n % 2 !== 0) {
        result.push(arr[Math.floor(n / 2)]);
    }

    return result;
}

// Example usage:
let inputArray = [4, 7, 1, 9, 3, 5];
let outputArray = rearrangeLargestSmallest(inputArray);
console.log(outputArray);
