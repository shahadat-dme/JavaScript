/* Strings */

var myName = 'Shahadat';

var sentence1 = "He said \"Hi!\""; // He said Hi!
var sentence2 = 'He said "Hi!"'; // He said Hi!

/*
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
*/

var fullName = 'Shahadat ' + 'Hossain';  // 'Shahadat Hossain'

var sentence3 = 'My name is ' + fullName; // 'My name is Shahadat Hossain'

fullName += ' is my name.'; // 'Shahadat Hossain is my name'

//Output
console.log(myName);
console.log(sentence1);
console.log(sentence2);
console.log(fullName);
console.log(sentence3);
console.log(fullName);
