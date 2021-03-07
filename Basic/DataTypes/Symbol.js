/* Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.*/

var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2)
console.log(String(sym1) === String(sym2))