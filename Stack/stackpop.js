class stack extends Array{
    constructor(...elems){
        super(...elems)
    }
    pop(){
        if (this.length === 0) throw new Error('Nothing to pop!')
        super.pop()
    }
}
const s = new stack(1,2,3,7,8)
s.pop()
console.log(s)
s.pop()
s.pop()
console.log(s)