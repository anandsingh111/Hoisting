function example() {
  console.log(a);  // Output: undefined
  var a = 5;
  console.log(b);  // Throws a ReferenceError
  let b = 10;
  console.log(c);  // Throws a ReferenceError
  const c = 15;
}
example();

sayHello(); // Output: "Hello"
function sayHello() {
  console.log("Hello");
}

console.log(x); // Output: undefined
var x = 5;

console.log(y); // Throws a ReferenceError
let y = 10;

Anonymous Function Expression:

An anonymous function expression doesn't have a name and is typically used when the function is only used in one place.

const add = function(x, y) {
  return x + y;
};

console.log(add(5, 3)); // Output: 8

const multiply = function multiply(x, y) {
  return x * y;
};

console.log(multiply(4, 6)); // Output: 24

An IIFE is a function expression that is invoked immediately after it's defined. It's often used to create a private scope for variables to avoid polluting the global scope.

(function() {
  const secretValue = 42;
  console.log(secretValue);
})();
// Output: 42

// secretValue is not accessible outside the IIFE
// console.log(secretValue); // Throws a ReferenceError
