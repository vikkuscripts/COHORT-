const fs = require("fs");
const path = require("path");

// const filePath = path.join(__dirname, "a.txt");
// const data = fs.readFileSync(filePath, "utf-8");

// console.log(data);

// const filePath2 = path.join(__dirname, "b.txt");
// const data2 = fs.readFileSync(filePath2, "utf-8");

// console.log(data2);



function print(err, data) {
  console.log(data);
}

fs.readFile("a.txt", "utf-8" , print);
fs.readFile("b.txt","utf-8", print);

console.log("Done!");

