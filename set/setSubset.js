class SetDS extends Set{
    constructor(...elems){
        super(elems)
    }
    //{1,2}/{1,2,3,4}
    subset(set2){
        for (let it = this.values(),
        val = null; val = it.next().value;){
        if (!set2.has(val)){
            return false
        }
    }
        return true
    }
}
const set = new SetDS(1,2,3,4)
const set2 = new SetDS(1,2)

console.log(set.subset(set2))
console.log(set2.subset(set))