function discount(disc){
    return (price) => {
        return price - price * disc
    };
}

let tenPer = discount(0.1);
let twenPer = discount(.2);

let c1 = tenPer(600);
let c2 = tenPer(800)
let c3 = tenPer(900)
let c4 = twenPer(1500)

console.log(c2);
console.log(c4);