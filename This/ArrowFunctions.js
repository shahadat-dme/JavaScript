var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true