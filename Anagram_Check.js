// Write a function to check if two strings are anagrams of each other.

function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Check if the lengths are different
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort the characters in both strings and compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test cases
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('rail safety', 'fairy tales')); // true
console.log(isAnagram('Astronomer', 'Moon starer')); // true


// alternative implementation of the isAnagram function without using built-in methods like replace, toLowerCase, split, sort, or join:

function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase
    let cleanStr1 = '';
    let cleanStr2 = '';
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== ' ') {
            cleanStr1 += str1[i].toLowerCase();
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] !== ' ') {
            cleanStr2 += str2[i].toLowerCase();
        }
    }

    // Check if the lengths are different
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort the characters in both strings and compare
    cleanStr1 = sortString(cleanStr1);
    cleanStr2 = sortString(cleanStr2);

    return cleanStr1 === cleanStr2;
}

function sortString(str) {
    const charArray = str.split('');
    for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j < charArray.length; j++) {
            if (charArray[i] > charArray[j]) {
                const temp = charArray[i];
                charArray[i] = charArray[j];
                charArray[j] = temp;
            }
        }
    }
    return charArray.join('');
}

// Test cases
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('rail safety', 'fairy tales')); // true
console.log(isAnagram('Astronomer', 'Moon starer')); // true

