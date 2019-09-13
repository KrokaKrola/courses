/*

Find all the pairs of two integers in an unsorted array that sum up to a given S. 

For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

*/

// Solution 1. Array Enumeration

function twoNumberSumEnumeration(array, num) {
    let result = [];

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === num)
                result.push([array[i], array[j]]);
        }
    }

    return result;

}

let resultEnumeration = twoNumberSumEnumeration([3, 5, 2, -4, 8, 11], 7);

console.log(resultEnumeration);

// Solution 2. Hash Table

function twoNumberSumHashTable(array, num) {
    let table = {},
        result = [];

    for (let x of array) {
        let number = num - x;
        if (!table[number])
            table[x] = true;
        else
            result.push([x, number]);
    }

    return result;
}

let resultHashTable = twoNumberSumHashTable([3, 5, -4, 8, 11, 1, -1, 6], 7);

console.log(resultHashTable);

// Solution 3. While loop

function twoNumberSumWhile(array, num) {
    array.sort((a, b) => a - b);
    let leftCorner = 0,
        rightCorner = array.length - 1,
        index = 0,
        result = [],
        currenSum;

    while (index < array.length) {
        currenSum = array[leftCorner] + array[rightCorner];
        if (currenSum < num)
            leftCorner++;
        else if (currenSum > num)
            rightCorner--;
        else {
            result.push([array[leftCorner], array[rightCorner]]);
            leftCorner++;
        }
        index++;
    }

    return result;
}

let resultWhile = twoNumberSumWhile([3, 5, 4, -4, 8, 11, 1, -1, 6], 0);
console.log(resultWhile);