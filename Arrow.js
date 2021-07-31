//Fat Arrow Functions

// function number() {
//     return 10
// }
// console.log(number());


// let number = () => {
//     return 100
// }
// console.log(number());

let number = () => 20;
console.log(number());

h = (val) => "Hello";
console.log(h());

h1 = val => "Hello1";
console.log(h1());

let num = () => console.log(50);
num();



// function number1(n) {
//     return n
// }
// console.log(number1(16));

let number1 = (n) => n;
console.log(number1(16))

// let number1 = n => n; // If parameter 1 then omit ()
// console.log(number1(16))

let number2 = (a,b) => a + b;
console.log(number2(31,32));


// Arrow Function
/*
var js = {
    name: "JavaScript",
    lib: ["React","Angular","Vue"],
    printLib: function(){
var self = this;
this.lib.forEach(function(a){
    console.log(`${self.name} loves ${a}`)
});
    },
};

js.printLib();
*/


var js = {
    name: "JavaScript",
    lib: ["React","Angular","Vue"],
    printLib: function(){
    this.lib.forEach((a) => console.log(`${this.name} loves ${a}`));
    },
};

js.printLib();
