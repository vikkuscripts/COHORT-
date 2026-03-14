// conditional statements


let myName = "Vikram";
if(myName == "Vikram"){
  console.log("my name is vikram");
}else{
  console.log("my name is not vikram")
}

let myName1 = 8;
if (myName1 == "8") {
  console.log("my name is vikram");
} else {
  console.log("my name is not vikram")
}
let myName2 = 8;
if (myName2 === "8") {
  console.log("my name is vikram");
} else {
  console.log("my name is not vikram")
}


let num1 = 80;
if (num1 == 8) {
  console.log("my name is vikram");
} else if(num1 == 9){
  console.log("my name is not vikram")
}else{
  console.log("num1 is not found ")
}



let num2 = 800;
if (num2 == 8) {
  console.log("my name is vikram");
} else if(num1 == 9){
  console.log("my name is not vikram")
}else{
  console.log("num1 is not found ")
}


 let expression = 1;

switch(expression){
    
  case 1 :
    console.log("expession is equal to 1 ")
    // break;
  case 2 : 
      console.log("expression is equal to 2")
      break;
  default : 
      console.log("expression is not equal to any one ");


}



// Turnery Operator 

// condition ? true :false;

let purchase = 25;

 let discount = purchase >= 20 ? 3:0;
 console.log(discount);

let purchase1 = 25;

let discount1 = purchase > 25 ? 3 : 0;
console.log(discount1);