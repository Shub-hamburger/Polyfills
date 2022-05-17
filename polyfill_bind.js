const name = {
  firstName: "Shubham",
  lastName: "Raj"
};

const printName = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName} ${hometown} ${state}`);
};

// bind polyfill
Function.prototype.myBind = function (...args) {
  const context = this;
  const params = args.slice(1);

  return function (...args2) {
    context.apply(args[0], [...params, ...args2]);
  };
};

// bind polyfill with arrow func
Function.prototype.myBindArrow = function (...args) {
  const params = args.slice(1);
  return (...args2) => {
    this.apply(args[0], [...params, ...args2]);
  };
};

// Trying Inbuilt bind
const func = printName.bind(name, "Chennai");
func("Tamil Nadu");

// Trying bind polyfill
const func2 = printName.myBind(name, "Bengaluru");
func2("Karnataka");

// Trying bind arrow polyfill
const func3 = printName.myBindArrow(name, "Kolkata");
func3("West Bengal");
