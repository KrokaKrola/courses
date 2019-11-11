// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

function createFunction() {
  function helloFunction() {
    console.log("Hello");
  }
  return helloFunction;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// let function1 = createFunction();
// function1();

function createFunctionPrinter(input) {
  function printing() {
    console.log(input);
  }
  return printing;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// let printSample = createFunctionPrinter('sample');
// printSample();
// let printHello = createFunctionPrinter('hello');
// printHello();

function outer() {
  let counter = 0; // this letiable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

let willCounter = outer();
let jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  function addingFunction(num) {
    return num + x;
  }
  return addingFunction;
}

let addByTwo = addByX(2);
// console.log(addByTwo(1)); //should return 3
// console.log(addByTwo(2)); //should return 4
// console.log(addByTwo(3)); //should return 5

// now call addByTwo with an input of 1

// now call addByTwo with an input of 2

//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let result;
  let counter = 0;
  function execution(num) {
    result = counter < 1 ? (result = func(num)) : result;
    counter++;
    return result;
  }
  return execution;
}

let onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4)); //should log 6
// console.log(onceFunc(10)); //should log 6
// console.log(onceFunc(9001)); //should log 6

function after(count, func) {
  let counter = 0;
  function execution() {
    counter++;
    counter >= count ? func() : "";
  }
  return execution;
}

let called = function() {
  console.log("hello");
};
let afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

function delay(func, wait) {
  setTimeout(func, wait);
}

// delay(called, 2000);
