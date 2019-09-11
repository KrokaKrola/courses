// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    const result = [];
    for (let item of array) {
        result.push(callback(item));
    }
    return result;
}

// console.log(map([1, 2, 3], addTwo));
let alphabet = "";
const letters = ["a", "b", "c", "d"];
// Challenge 4
function forEach(array, callback) {
    for (let item of array) {
        callback(item);
    }
}

forEach(letters, function (char) {
    alphabet += char;
});
// console.log(alphabet);

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    const result = [];
    forEach(array, item => {
        result.push(callback(item));
    });
    return result;
}

// console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue = array[0]) {
    let accum = initialValue;
    for (let item of array) {
        accum = callback(accum, item);
    }
    return accum;
}

var nums = [4, 1, 3];
var add = function (a, b) {
    return a + b;
};
// console.log(reduce(nums, add, 0));

//Extension 3
function intersection(...arrays) {
    return reduce(
        arrays,
        (firstArray, secondArray) => {
            let resultArray = [];
            for (let item of firstArray) {
                if (secondArray.includes(item)) {
                    resultArray.push(item);
                }
            }
            return resultArray;
        },
        arrays[0]
    );
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
// function union(...arrays) {
//   let result = [];
//   return reduce(
//     arrays,
//     function(a, b) {
//       for (let item of b) {
//         // second condition to prevent duplicated values in a single array
//         if (a.indexOf(item) == -1 && result.indexOf(item) == -1) {
//           result.push(item);
//         }
//       }
//       return result;
//     },
//     []
//   );
// }
///////////////////////
// variant using includes()
//////////////////////
function union(...arrays) {
    let result = [];
    return reduce(
        arrays,
        (firstArray, secondArray) => {
            for (let item of secondArray) {
                if (!firstArray.includes(item) && !result.includes(item)) {
                    result.push(item);
                }
            }
            return result;
        },
        []
    );
}

/////////////////////
// another variant using includes
/////////////////////

//Extension 4
function union(...arrays) {
    return reduce(arrays, (a, b) => {
        for (let item of b) {
            if (!a.includes(item)) {
                a.push(item);
            }
        }
        return a;
    }, [])
}

// console.log(union([5, 10, 15, 10], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
// function objOfMatches(array1, array2, callback) {
//   let obj = {};
//   for (let i = 0; i < array1.length; i++) {
//     if (callback(array1[i]) === array2[i]) {
//       obj[array1[i]] = array2[i];
//     }
//   }
//   return obj;
// }

///////////////////////
// variant using map method
//////////////////////
function objOfMatches(array1, array2, callback) {
    let obj = {};
    array1.map((item, index) => {
        if (callback(item) === array2[index]) {
            obj[item] = array2[index];
        }
    });
    return obj;
}

// console.log(
//   objOfMatches(["hi", "howdy", "bye", "later", "hello"], ["HI", "Howdy", "BYE", "LATER", "hello"], function(str) {
//     return str.toUpperCase();
//   })
// );
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
// function multiMap(arrVals, arrCallbacks) {
//   let obj = {};
//   let evaluatedArray;
//   for (let item of arrVals) {
//     evaluatedArray = [];
//     for (let callback of arrCallbacks) {
//       evaluatedArray.push(callback(item));
//     }
//     obj[item] = evaluatedArray;
//   }
//   return obj;
// }

// trying map
function multiMap(arrVals, arrCallbacks) {
    let obj = {};
    arrVals.map((item, index) => {
        let evaluatedArray = [];
        for (let callback of arrCallbacks) {
            evaluatedArray.push(callback(item));
        }
        obj[item] = evaluatedArray;
    });
    return obj;
}

// console.log(
//   multiMap(
//     ["catfood", "glue", "beer"],
//     [
//       function(str) {
//         return str.toUpperCase();
//       },
//       function(str) {
//         return str[0].toUpperCase() + str.slice(1).toLowerCase();
//       },
//       function(str) {
//         return str + str;
//       }
//     ]
//   )
// );
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }