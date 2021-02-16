class stack extends Array{
    constructor(...elems){
        super(...elems)
    }
}
const s = new stack(1,2,3,7,8)
s.push(50)
s.push(100)
console.log(s)