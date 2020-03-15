/* Functions..
Function is relation between input and output.
Function is sequence of commands that can be reused together later in a program.
Can reuse code: Define the code once, and use it many times.
 */

function square(number) {
  return number * number;
}

console.log(square(4));

var someVar = "Hat";
function myFun() {
  var someVar = "Shoes";
  console.log(someVar);
}

myFun();
console.log(someVar);


function addSquares(a, b) {
  {
  function square(x) {
    return x * x;
}
  return square(a) + square(b);
}
}
console.log(addSquares(1, 3));
console.log(addSquares(5, 6));
console.log(addSquares(4, 6));

var y = addSquares(2, 3);
console.log(y);
var z = addSquares(25, 33);
console.log(z);
