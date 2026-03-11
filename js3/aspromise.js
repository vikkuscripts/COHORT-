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


// function getData(){
//   return new Promise(function(resolve, reject){
//       console.log("wait ke bhai bsdk");
//       setTimeout(function(){
//         resolve ("Khel Khatam Beta")
//       }, 5000);
//  });

// }


// async function showData(){
//   let result = await getData();

//   console.log(result);
//   console.log("code complete ");
// }
// showData();


// function getData(){
//   return new Promise(function(resolve, reject){
//     console.log("Loading Data ");

//     setTimeout(function(){
//     resolve("khel kahatam beta khel khatam");

//     }, 5000);
//   });
// }

// async function showData(){
//   let result = await getData();

//   console.log(result);
//   console.log("program Khatam bet ");
// }
// showData();


// function printFruits(){
//   let fruits = ["Mango","AAM","Lassi Mango ","KAcha AAM","Aam ras"];

//   for(i=0; i< fruits.length;i++){
//     console.log(fruits[i]);
//   }
// }
// printFruits();


// function checkNumber(num){
// return new Promise(function(resolve, reject){

//   if (num > 10){
//     resolve("Number Is greater than 10");

//   }else{
//     reject("Number is less than 10");
//   }
// });

// }

// async function runCheck(){
//   try{
//     let result = await checkNumber(15);
//     console.log(result);

//   }catch(error){
//     console.log("error", error);
//   }
// }
// runCheck();












// function numberCheck(number){

//   return new Promise(function(resolve, reject){

//     if(number > 10){
//       resolve("number is correct")
//     }else{
//       reject("kehl kahatam beta");
//     }
//   });
// }

// async function checkRun(){
//   try{
//     let result = await numberCheck(8);
//     console.log(result);
//   }catch(error){
//     console.log("error:", error);
//   }



// }
// checkRun();

// function fakeAPI(){
//   return new Promise(function(resolve){

//     console.log("calling API");
//     setTimeout(function(){
//       resolve({
//         name: "vikram",
//         role: "Developer"
//       });
//     },2000);
//   });
// }

// async function loadUser(){

//   let user = await fakeAPI();

//   console.log("I AM ", user.name);
//   console.log("I am Also A ",user.role);
// }

// loadUser();



// function fakeAPI(){
//   return new Promise(function(resolve){
//    console.log("calling APIs")
   
//    setTimeout(function(){

//     resolve({
//       name:"vikku",
//       role:"dev"
//     });
      
//    },4000);
    
//   });

// }
// async function callApi(){

//   let result = await fakeAPI();
//   console.log(result);

//   console.log("my name is vikku ",result.name);
//   console.log("and i i role of ", result.role);
// }
// callApi();
function fakeAPI(){

return new Promise(function(resolve){
  console.log("Calling API for You ");

  setTimeout(function(){

    resolve({
      name:"vikram bahi",
      role:"chatgipiti Developer"
    });
  },5000);
});

}

async function safeApi(){

  let user = await fakeAPI();
  console.log(user);
  console.log("user name :", user.name);
  console.log("user kya :", user.role);

}
safeApi();