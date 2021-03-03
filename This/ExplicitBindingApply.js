var printName = function(v1,v2,v3){
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
};

var sakib = {
    name: "Shakib",
    age: 35,
};

var v1 = "Handsome";
var v2 = "All-rounder";
var v3 = "Best Player";

var v = [v1,v2,v3];
printName.apply(sakib, v);