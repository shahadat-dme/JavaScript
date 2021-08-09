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
console.log(curry(2)(3)(4)(5)(6));