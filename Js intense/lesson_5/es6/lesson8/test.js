class Some {
  @readonly @final power = 2;

  @checkNumbers pow(x) {
    return x ** this.power;
  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = false;
}

function final(target, name, descriptor) {
  descriptor.configurable = false;
}

let some = new Some();
console.log(some.pow(5));
some.power = 5;
console.log(some.pow('5'));

function checkNumbers(target, name, descriptor) {
  let func = descriptor.value;
  descriptor.value = function(...args) {
    args.forEach(item => {
      if (typeof item !== 'number') {
        throw new Error('type incorrect');
      }
    });
    return func.apply(this, args);
  };
}

/* 

let sum = checkNumbers(function(a, b) {
  return a + b;
});

console.log(sum(1, 2));
 */