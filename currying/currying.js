// function multiply(a,b,c){
//     return a*b*c;
// }
// console.log(multiply(5,6,7))


// Example 1
// function curreymultiply(a){
//     return function (b){
//         return function (c){
//             return a * b * c
//         }
//     }
// }
// console.log(curreymultiply(5)(6)(7));

/*
//Example 2
function curreymultiply(a){
    return function (b){
        return function (c){
            return a * b * c
        };
    };
}
let step1 = curreymultiply(5);
// console.dir(step1);
let step2 = step1(6)
// console.dir(step2);
let step3 = step2(7)
console.log(step3);
*/