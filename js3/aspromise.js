// function getData(){
//  return new Promise(function(resolve, reject){
//   console.log("Fetching data...");
//   setTimeout(function(){
//     resolve("Data Recieved Successfully");
//   },2000);

//  });

// }

// async function showData(){
//   let result = await getData();
//   console.log(result);
//   console.log("Program Finished ");
// }

// showData();

// function getData(){
//   return new Promise(function(resolve, reject){
//     console.log("Fetching Data");
//     setTimeout(function(){
//       resolve("data Recieved Successfully");
//     },5000)

//   });

// }

// async function showData(){
//      let result = await getData();
//      console.log(result);
//      console.log("program end ");
// }
// showData();

// function getData(){
//   return new Promise (function(resolve, reject){
//     console.log("Data Loading");
//     setTimeout (function(){
//       resolve ("data Recieved Sucessfully");

//     },2000);


//   });
// }

// async function showData(){
//    let result = await getData();

//    console.log(result);
//    console.log("Program FInished");
// }

// showData();

// function getData(){
//   return new Promise (function(resolve, reject){
//     console.log("Loading Data");
//     setTimeout(function(){
//       resolve ("Khel Khatam Beta")
//     },5000);
//   });
// }

// async function showData(){
//   let result = await getData();

//   console.log(result);
//   console.log("RUn Complete")
// }
// showData();


function getData(){
  return new Promise(function(resolve, reject){
      console.log("wait ke bhai bsdk");
      setTimeout(function(){
        resolve ("Khel Khatam Beta")
      }, 5000);
 });

}


async function showData(){
  let result = await getData();

  console.log(result);
  console.log("code complete ");
}
showData();
