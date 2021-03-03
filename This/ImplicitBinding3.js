var Person = function(name, age){
    return {
        name: name,
        age: age,
        printName: function (){
            console.log(this.name);
        },
        father: {
            name: "Mr. Shahadat",
            printName: function (){
                console.log(this.name);
            },
        },
    };
};

var sakib = Person("sakib", 35);
sakib.printName();
sakib.father.printName();