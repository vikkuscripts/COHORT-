

// write a function that takes user name as a input and greet them 

function greet(user){

 if(user.age>=18){
   console.log("hi " + user.name + " your age is " + user.age + " and your gender is " + user.gender + " You are  elizible for vote");
   
  }else{
   console.log("hi " + user.name + " your age is " + user.age + " and your gender is " + user.gender + " You are not elizible for vote");
  }
}



let user ={
  name: "vikram ",
  age : 17,
  gender : "male"

}
// console.log(user1.name);
// console.log(user1["name"]);
greet(user);


// we can store objects in arrays 

let users2 = ["vikram ", 35 , {
  name: "viku" , 
  age:22,
}];
console.log(users2[2]);