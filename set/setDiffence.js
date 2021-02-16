class SetDS extends Set{
    constructor(...elems){
        super(elems)
    }
    //A-B
    diffence(set2){
        const newSet = new SetDS()
        this.forEach(value => {
            if(!set2.has(value)){
                newSet.add(value)
            }
        })
        return newSet
    }
}
const set = new SetDS(1,2,3,4)
const set2 = new SetDS(1,2)

console.log(set.diffence(set2))
console.log(set2.diffence(set))