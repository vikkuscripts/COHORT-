// const path = require ("path");
// console.log(__dirname);

// const thenable = {
//   then: function (onFulfilled) {
//     setTimeout(() => onFulfilled(42), 1000);

//   }
// };

// async function main() {
//   const v = await thenable;
//   console.log("ghr ja bhai ");
// }
// main();

const fs = require ("fs");

function main(fileName){
  fs.readFile(fileName, "utf-8",function(err, data ){

    let total = 0;
      for(let i = 0 ; i < data.length; i++){
        if(data[i] === " "){
          total++; 
        }
          
      }
       console.log(total)
      });
    }
   main("file.txt");






















const fs = require("fs");

function main(fileName){
  fs.readFile(fileName, "utf-8", function(err, data){

      let total = 0;
      for(i = 0; i < data.length; i++){

      if (data[i] === " "){
        total++;
      }
    
    }
    console.log(total + 1);

  })
}

main("file.txt");