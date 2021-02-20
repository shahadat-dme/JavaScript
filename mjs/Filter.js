let numbers = [1,2,3,4,5];
let res = numbers.filter((currentValue, currentIndex, arr) => {
    console.log(currentIndex);
    console.log(arr)
    return currentValue > 2;
});
console.log(res)
console.log(numbers)