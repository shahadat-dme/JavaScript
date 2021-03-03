const SLR = require('ml-regression').SLR;
let inputs = [30,20,15,10]; //time
let outputs = [20,30,40,50]; //weight

let regression = new SLR(inputs, outputs);

console.log(regression.predict(80));