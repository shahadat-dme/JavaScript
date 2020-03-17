/* While, Do While */
//1st
var n = 0;

while (n < 5) {
  n++;

  console.log("n = " + n);
}

var i = 0;

do {
  i++;
  console.log("i = " + i);
} while (i < 5);
//2nd
var n = 6;

while (n < 5) {
  n++;

  console.log("n = " + n);
}
var i = 6;

do {
  i++;
  console.log("i = " + i);
} while (i < 5);

//3rd
var n = 0;

while (n < 5) {
  n++;
if (n == 3) break;
  console.log("n = " + n);
}

var i = 0;

do {
  i++;
  console.log("i = " + i);
} while (i < 5);

//4rd
var n = 0;

while (n < 5) {
  n++;
if (n == 3) continue;
  console.log("n = " + n);
}

var i = 0;

do {
  i++;
  console.log("i = " + i);
} while (i < 5);
// &turn_off_js=true
