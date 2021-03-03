var printPlayerNameFunction = function(obj) {
    obj.printPlayerName = function (){
        console.log(this.name);
    };
};

var sakib = {
    name: "Shakib",
    age: 35,
};

var tamim = {
    name: "Tamim",
    age: 34,
};

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);
sakib.printPlayerName();
tamim.printPlayerName();