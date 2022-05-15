const items = ["one", "two", "three", "four", "five"];

// polyfill for map
Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

// trying inbuilt map
console.log("Inbuilt map");
const mapped = items.map((item) => item.toUpperCase());
console.log(mapped);

// trying our map
console.log("Our map");
const mapped2 = items.myMap((item) => item.toUpperCase());
console.log(mapped2);
