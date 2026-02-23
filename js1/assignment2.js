


function make(arr){
  let arr2 =[];
  for(let i = 0 ; i<arr.length; i++){
    if(arr[i].age>18 && arr[i].gender === "male"){
      arr2.push(arr[i]);
    }
  }
 return arr2;
};

const users = [{
  name: "vikram",
  age: 35,
  gender: "male"
},
{
  name: "ram",
  age: 21,
  gender: "male"
},{
  name  : "Radha",
  age: 22,
  gender: "female"
}];

console.log(make(users));