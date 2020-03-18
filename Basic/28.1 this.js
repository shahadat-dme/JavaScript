/* function  myfunc() {
 x = 34;
 y = 46;

 z = this.x + this.y;
 return z;
}
console.log(myfunc());


var user = {
  firstName: "shahadat",
  listName: "Hossain",
  company: "stu",
  categrory: "Edu",
  fullName: function fullName(){
    var x = this.firstName + " " + this.lastName;
    return x;
  }
}
console.log(user.fullName());
*/

var myCar2 = {
  maxSpeed: 70,
  driver:"Learn Schooling",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  test: function () {
    console.log(this);
  }
};
var myCar3 = {
  maxSpeed: 70,
  driver:"Schooling",
  drive: function (speed, time) {
    console.log(speed * time);
  },
  test: function () {
    console.log(this);
  }
};

myCar2.test();
myCar3.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
