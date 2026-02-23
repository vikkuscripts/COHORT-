// function sum(a, b){
//   // return a+b;
// return parseInt(a) + parseInt(b);
// }
// let ans = sum("2", 3); 
// console.log(ans);

// function sum(n){
//   let ans =0;
//   for(let i = 1; i <= n; i++){
//   ans = ans +i
//   }
//   return ans;
// }
// console.log(sum(10));


// function suum(n){

//   return n*(n+1);

// }
// console.log(suum(10));


const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "a.txt");
const data = fs.readFileSync(filePath, "utf-8");

console.log(data);

console.log("Hello World");