let numbers = [1,2,3,4];
let res = numbers.find(function(currentValue,currentIndex, arr){
    return currentValue > 2;
});
console.log(numbers)
console.log(res)