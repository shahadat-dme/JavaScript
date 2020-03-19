var userOne = {
    email: 'hello@bd.com',
    name: 'shahadat',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

var prop = 'name'
var pro1 = 'email'

// userOne.email = 'ryu2k18@ninjas.com';
// userOne['email'] = 'ryu2k18@ninjas.com';
// userOne[prop] = 'Ryuke';

// console.log(userOne);


userOne.name = "Hossain"
console.log(userOne.email);
console.log(userOne['name']);
console.log(userOne[pro1]);
console.log(userOne[prop]);


userOne.age = 25;
userOne.logInfo = function(){
    console.log(this.name, this.age, this.email);
};


userOne.logInfo();
userOne.login();
userOne.logout();
