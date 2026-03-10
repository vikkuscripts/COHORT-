// while loop
// Sum of Numbers from ! to N (using while Loop).


function sumNumber(){
  let n = 10 ;
  let sum = 0;

 for(let i = 0; i<=n; i++){
     sum = sum+i;
     console.log("adding number is : " + i)
 }
 console.log("total sum =" + sum);

 let done= true ;
 if (done){
  console.log("loop finished" );

 }
 console.log("end of program");

  

}
sumNumber(); 

//  For Loop 

function numberSum(){
let n = 10;
let sum = 0 ;

console.log("finding the Sum of 1 to "+ n);

for (i = 1 ; i <= 10 ; i++){
   sum = sum + i ;
   console.log("Adding: " + i);

}
console.log("Total sum = " +sum);

console.log("sum finished");

let end = true;
if (end){
  console.log("table is pronyed ");
}
console.log("emd of program");

}
numberSum();

// Display Fruits 

function displayFruits(){
    let fruits= ["Mango", "aam" , "aamras", "mango" ,"lassi" , "kachaa aam "];

    console.log("fruit list")
   
    for(let fruit of fruits){
      console.log("Fruit:"+ fruit);
    }
    console.log("total Fruits :"+ fruits.length);

    let complete = true ;
    if (complete){
      console.log("its done ");
    }
 console.log ("Proggram ENd ");
}
displayFruits()  



// Print Even Numbers 

function printEvenNumbers(){
console.log("even numbers 1 to 20 ");

for(let i = 1; i <= 20; i++){
     if(i % 2 === 0){
      console.log("Even " + i);
     }
}
   console.log("program finished");
}
printEvenNumbers();



// reverse String 

function reverseString(){
let text = "Vikarm";
let reversed = "";

console.log("original text :" + text);


for(let i = text.length - 1; i >=0; i--){
  reversed = reversed + text[i];
  console.log("Current Text:"+ reversed);
}

  console.log("Final Reversed String: " + reversed);
}
reverseString();


function reverseString(){
  let text = "Vikramchor";
  let reversed = "";

  console.log("original String :" + text);

  for(i= text.length - 1 ; i >= 0; i--){
    reversed = reversed + text[i];
    console.log("current String :"+ reversed);
  }
console.log("final String :"+ text)

}
reverseString();