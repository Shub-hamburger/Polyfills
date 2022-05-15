const items = [
  {
    name: "Avenged Sevenfold",
    rating: 5,
  },
  { name: "Nighmare", rating: 5 },
  {
    name: "Hail To The King",
    rating: 4.9,
  },
  { name: "Waking the Fallen", rating: 4.5 },
];

// polyfill for filter
Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

// trying inbuilt filter
console.log("Inbuilt filter");
const filtered = items.filter((item) => item.rating > 4.9);
console.log(filtered);

// trying our map
console.log("Our map");
const filtered2 = items.myFilter((item) => item.rating > 4.9);
console.log(filtered2);
