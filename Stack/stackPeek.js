class stack extends Array{
    constructor(...elems){
        super(...elems)
    }
    peek(){
        if(this.length===0) throw new Error('stack is Empty')
        return this[this.length - 1]
    }
}
const s = new stack(1,2,3,7,8)
console.log("peek: "+s.peek())