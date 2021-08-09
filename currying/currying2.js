function curry(a){
    return function (b){
        return function (c){
            return function (d) {
                return function (e){
                    return a + b + c + d + e;
                }
            }
        }
    }
}
let s1 = curry(2);
let s2 = s1(7)
let s3 = s2(3)
let s4 = s3(9)
let s5 = s4(3)


console.log(s5)