function Person(name, age) {
    //let this = object.create(null)
    this.name = name;
    this.age = age;
    console.log(`${name} is ${age} years old`);
    // return this;
}

var sakib = new Person("sakib",40);