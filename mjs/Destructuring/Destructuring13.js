const user = {
    name: "Shahadat",
    ID: "171151464",
    Age: 23,
    // edu:{
    //     deg: "CSE",
    // },
};

const {edu: {deg} = {} }= user; //undefined

console.log(deg);