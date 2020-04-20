function isUserValid(bool){
 return bool;
}
var answer = isUserValid(true) ? "enter" : "Denied";
console.log(answer);

var automaticAnswer = "account # is " + (isUserValid(false) ? "123" : "not Available");
console.log(automaticAnswer);

var automaticAnswer = "account # is " + (isUserValid(true) ? "123" : "not Available");
console.log(automaticAnswer);

var answer = isUserValid(true) ? "you may enter" : "Access";

function condition () {
  if (isUserValid(true)) {
    return "you may enter";
  }
  else {
    return "Access Denied" ;
  }
}
var answer2 = condition();

console.log(answer);


function moveCommand(direction) {
  var whatHappens;
  switch(direction) {
    case "forward":
    whatHappens = "monster";
    break;
    case "back":
    whatHappens = "see";
    break;
    case "for":
    whatHappens = "river";
    break;
    case "book":
    whatHappens = "seen";
    break;
    default:
    whatHappens = "invalid";
  }
  return whatHappens;
}
console.log(moveCommand("book"));
console.log(moveCommand("erf"));
console.log(moveCommand("for"));
