function binar(base, binaryPow, mod) {
  let result = 1;
  for (item of binaryPow) {
    if (item == 0) {
      result = modular(result * result, mod);
    } else {
      result = modular(modular(result * result, mod) * base, mod);
    }
  }
  return result;
}

// function binar(base, binaryPow, mod) {
//   return Array.from(binaryPow).reduce(
//     (accum, current) => (current == 0 ? modular(accum * accum, mod) : modular(modular(accum * accum, mod) * base, mod)),
//     1
//   );
// }

// function toBinary(num) {
//   return String(+num.toString(2));
// }

// function modular(n, m) {
//   return n < 0 ? m + (n % m) : n % m;
// }

// const binar = (base, binaryPow, mod) =>
//   Array.from(binaryPow).reduce(
//     (accum, current) => (current == 0 ? modular(accum * accum, mod) : modular(modular(accum * accum, mod) * base, mod)),
//     1
//   );
const toBinary = num => String(+num.toString(2));
const modular = (n, m) => (n < 0 ? m + (n % m) : n % m);

console.log(binar(1920, toBinary(1021), 3551));
