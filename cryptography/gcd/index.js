// const gcd = (a, b) => {
//     while (a !== 0 && b !== 0) {
//         if (a > b) {
//             a = a % b;
//         } else {
//             b = b % a;
//         }
//     }
//     return b;
// };

const gcd = (a,b) => {
    while(a !== b) {
        if (a > b) a = a - b;
        else b = b - a;
    }
    return a;
};


console.log(gcd(Math.abs(-15), Math.abs(5)));