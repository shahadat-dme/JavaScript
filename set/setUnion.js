class SetDS extends Set{
    constructor(...elems){
        super(elems)
    } 
    // Union set
    union(set2){
        const newSet = new SetDS(
            ...[...set2.values(), ...this.values()])
            return newSet
    }
} 
const set = new SetDS(1,2,3,4)
const set2 = new SetDS(3,4,5,6)

console.log(set.union(set2))
console.log(set2.union(set))