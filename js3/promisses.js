// function waitFor3S(resolve) {

//   setTimeout(resolve, 4000)
// }

// function setTimeoutPromisified(){
//   return new Promise (waitFor3S);
// }
// function main() {
//   console.log("mai yahan hoon00")

// }

// waitFor3S(main);

// function Callback(){
//   console.log("print this when you see a loser ");
// }

// setTimeoutPromisified(3000).then(Callback);


// setTimeout(Callback,20000);

// // call back hell
// setTimeout(function(){
//   console.log("hi");

//   setTimeout(function(){
//     console.log("hello");

//     setTimeout(function(){
//       console.log("people get bored");
//     },5000);
//   },3000);
// },1000);

// // chaning 
// function step3Done(){
//   console.log("step 3")
// }
// function step2Done() {
//   console.log("step 2")
//   setTimeout(step3Done, 3000);
// }
// function step1Done() {
//   console.log("step 1")
//   setTimeout(step2Done,2000);

// }
// setTimeout(step1Done,1000);


// 

function setTimeoutPromisified(ms) {

  return new Promise(resolve => setTimeout(resolve,ms))}

  async function solve(){

    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(4000);
    console.log("hello there");
    await setTimeoutPromisified(5000);
    console.log("Hello bhai bhot padhe aaj" );
  }

  solve();
