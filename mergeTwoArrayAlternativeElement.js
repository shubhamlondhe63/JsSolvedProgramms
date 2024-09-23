function mergeAlternately(arr1, arr2) {
    const mergedArray = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    console.log("maxLength", maxLength);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            mergedArray.push(arr1[i]);
        }
        if (i < arr2.length) {
            mergedArray.push(arr2[i]);
        }
    }
    
    return mergedArray;
}

const array1 = [1, 3, 5];
const array2 = [2, 4, 6, 8, 10];
const result = mergeAlternately(array1, array2);
console.log(result);  // Output: [1, 2, 3, 4, 5, 6, 8, 10]
