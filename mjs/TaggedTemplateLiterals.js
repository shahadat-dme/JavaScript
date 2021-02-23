function modifier(strings, ...values){
    const m = strings.reduce((prev, courrent) =>{
        return prev + courrent + (values.length ? "Mr. " + values.shift() : "");
    }, "");
    return m;
}

var p1 = "Shakib";
var p2 = "tamim";

console.log(modifier`we have ${p1} and ${p2} in our cricket team.`);