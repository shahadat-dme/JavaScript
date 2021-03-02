function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating.`);
    },
};

const shakib = new Person("Shakib", 40);
console.log(shakib);


const tamim = new Person("Tamim", 39);
console.log(tamim);