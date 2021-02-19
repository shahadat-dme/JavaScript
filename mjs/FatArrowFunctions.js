 /* Normal Function*/
 
// var js = {
//     name: "JavaScript",
//     lab: ["React","Vue","Angular"],
//     printLibraries: function () {
//         var self = this;
//         this.lab.forEach(function (a){
//             console.log(`${self.name} loves ${a}`);
//         });
//     },
// };

// js.printLibraries();


       /* Arrow Function*/
var js = {
    name: "JavaScript",
    lab: ["React","Vue","Angular"],
    printLibraries: function () {
        this.lab.forEach((a) =>console.log(`${this.name} loves ${a}`));
    },
};

js.printLibraries();