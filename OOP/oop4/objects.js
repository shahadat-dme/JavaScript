class User {
    constructor(email, name, age){
        this.email = email;
        this.name = name;
        this.age = age;
    }
   login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }

}

var userOne = new User('sojib@ngmail.com', 'Sojib', '35');
var userTwo = new User('shuvo@gmail.com', 'shuvo', '46');
var userThree = new User('shahadat@gmail.com', 'shahadat', '48');

userOne.login();
userTwo.logout();

console.log(userOne);
console.log(userTwo);
console.log(userThree);
