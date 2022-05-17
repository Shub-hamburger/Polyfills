const items = ["one", "two", "three", "four", "five"];
const nums = [1, 2, 3, 4];

// polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? undefined : initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator != undefined) {
      accumulator = callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

// trying inbuilt reduce
console.log("Inbuilt reduce");
const reduced = items.reduce((a, b) => a + ", " + b, "zero");
console.log(reduced);

// trying our reduce
console.log("Our reduce");
const reduced2 = items.myReduce((a, b) => a + ", " + b, "zero");
console.log(reduced2);

// trying inbuilt reduce
console.log("Inbuilt reduce");
const reduced3 = nums.reduce((a, b) => a + b, 5);
console.log(reduced3);

// trying our reduce
console.log("Our reduce");
const reduced4 = nums.myReduce((a, b) => a + b, 5);
console.log(reduced4);
