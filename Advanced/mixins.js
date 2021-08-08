// mixin
let sayHiMixin = {
    sayHi() {
      // alert(`Hello ${this.name}`);
      console.log(`Hello ${this.name}`);
    },
    sayBye() {
      // alert(`Bye ${this.name}`);
      console.log(`Bye ${this.name}`)
    }
  };
  
  // usage:
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // copy the methods
  Object.assign(User.prototype, sayHiMixin);
  
  // now User can say hi
  new User("Dude").sayBye(); // Hello Dude!