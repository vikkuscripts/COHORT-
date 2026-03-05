// Gllobal Scope
let a = 24;
function globalScope(){
console.log(a);

}
globalScope();

// Local Scope

function localScope(){
 
  let b = 5 ;
  console.log(b);



}
localScope();
// console.log(b);


// Functional scope 
function functionalScope(){
  if(true){
    var c = 12;
    console.log(c);
  }

  console.log(c);



}
functionalScope();
console.log(c);

// Block scope 

function blockScope(){

  if(true){
    let d = 13;
    const e = 15;

    console.log(d+"tyt");
    console.log(e +"hbdhv");
  }


}
blockScope(); 

// scope Done