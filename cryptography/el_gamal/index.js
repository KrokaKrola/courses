const binar = (base, binaryPow, mod) =>
  Array.from(binaryPow).reduce(
    (accum, current) => (current == 0 ? modular(accum * accum, mod) : modular(modular(accum * accum, mod) * base, mod)),
    1
  );
const toBinary = num => String(+num.toString(2));
const modular = (n, m) => (n < 0 ? m + (n % m) : n % m);

document.querySelector('#find').addEventListener('click', e => {
  e.preventDefault();

  // variables
  let p = document.querySelector('#p').value,
    q = document.querySelector('#q').value,
    a = document.querySelector('#a').value,
    r = document.querySelector('#r').value,
    M = document.querySelector('#M').value;

  // first step
  let firstStep = binar(q, toBinary(+a), p);
  document.querySelector('#first_step').textContent = `A:вычесляет h = (${q}^${a}) mod ${p} = ${firstStep} -> B`;

  // second step
  let secondStep = binar(q, toBinary(+r), p);
  document.querySelector('#second_step').textContent = `B:вычесляет C1 = (${q}^${r}) mod ${p} = ${secondStep} -> A`;

  // third step
  let thirdStep = M * binar(firstStep, toBinary(+r), p);
  document.querySelector('#third_step').textContent = `A:вычесляет C2 = ${M} * (${firstStep}^${r}) mod ${p} = ${thirdStep}`;

  // result
  document.querySelector('#result').textContent = `(C1, C2) = (${secondStep}, ${thirdStep})`;
});
