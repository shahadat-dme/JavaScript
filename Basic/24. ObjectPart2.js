//Object Part 2
//using object for lookups
var alpha = {
 1:"z",
 2:"y",
 3:"x",
 4:"w"
 //...
};
 console.log(alpha[2]);

//Remove Oblect properties

let dishes = {
  plates: 8,
  cups: 10,
  forks: 28,
  bowls: 15
};
delete dishes.cups;
console.log(dishes);

//Testing Objects for properties

console.log(dishes.hasOwnProperty('plates'));
console.log(dishes.hasOwnProperty('cups'));

//Accessing and modifying Nested Objects
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
console.log(ourStorage.cabinet["top drawer"].folder1);
console.log(ourStorage.desk.drawer);
ourStorage.cabinet["top drawer"].folder2 = "cake recipe";
console.log(ourStorage.cabinet["top drawer"].folder2);

// generate an array of all Object keys

console.log(Object.keys(ourStorage));
