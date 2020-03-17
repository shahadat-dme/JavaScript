//JS Nuggets: JSON

// example
var myJSON = {
    "name": {
        "first": "Beau",
        "last": "Carnes"
    },
    "age":33,
    "skills": [ "juggling", "stiltwalking", "coding" ],
    "married": true,
    "superpowers": null
 }
 /*
 console.log(myJSON);
console.log(myJSON.name);
 console.log(myJSON.skills);
*/
 // stringify method
var stringified = JSON.stringify(myJSON);
console.log(stringified);


// parse method
var stringJSON = '{ "name":"Beau", "kids":2,"state":"Michigan"}';
var myParse = JSON.parse(stringJSON);
console.log(myParse);
