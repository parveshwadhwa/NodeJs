const fs = require("fs");
const os = require("os");

console.log(os.cpus().length); // no. of cpu/cores on my computer

fs.writeFileSync("./test.txt","hey there"); // synchronously
fs.writeFile("./test.txt","hey there Async", (err) => {}); // asynchronously


// blocking....
console.log(1);
const resultSync = fs.readFileSync("./contacts.txt", "utf-8");
console.log(resultSync);
console.log(2);

// non blocking.....
console.log(5);
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if(err){
        console.log("Error", err)
    } else {
        console.log(result);
    }
});
console.log(6);
console.log(7);
console.log(8);

fs.appendFileSync("./test.txt", new Date().getTime().toLocaleString());

fs.copyFileSync("./test.txt", "./copy.txt");

fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt")); // status of file