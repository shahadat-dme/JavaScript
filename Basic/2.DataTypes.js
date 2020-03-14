//Booleans
var data = true;
if (data) {
  console.log("Booleans Rule!");
} else {
console.log("Booleans are lame!");
}

var data = false;
if (data) {
  console.log("Booleans Rule!");
} else {
console.log("Booleans are lame!");
}

// null
var n = null;
console.log(n * 32);

// undefind
var a;
console.log(a+2);

// number
var num = 3.6;
var ber = 6.4;
console.log(num + ber);

// string
var name = "Beau";
console.log(name);

// symbol
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2);
console.log(String(sym1) === String(sym2));

// Object
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
console.log(myCar.make + myCar.model);
