const items = ["one", "two", "three", "four", "five"];

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// trying inbuilt foreach
console.log("Ibuilt foreach");
items.forEach((item, i, arr) => console.log(item, i, arr));

console.log("Our foreach");
items.myForEach((item, i, arr) => console.log(item, i, arr));
