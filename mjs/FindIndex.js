// let numbers = [1,2,3,4,5];
// let res = numbers.findIndex(function(currentValue,currentIndex, arr){
//     return currentValue > 4;
// });
// console.log(res)

let numbers = [1,2,3,4,5];
let res = numbers.findIndex(function(currentValue,currentIndex, arr){
    return !(currentValue % 2);
});
console.log(res)