// let users = ["vikram","ram","shyam","hari","gopal"];

// // let totalUsers = users.length;


// for(let i=0; i<users.length; i++){
//     console.log(users[i]);
// } 


// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);



// Multiplication Table 

function multiplicationTable(){
    let number = 7;
    console.log("Multiplication Table of " + number );

    for(let i = 0; i <= 10 ; i++){
        let result = number* i;
        console.log(number + "x" + i + "=" + result);
    }
   console.log("loop finished");
   console.log("table Printed ");

   let message = "Parctice loops Daily ";
   console.log(message);

   let end = true;
   if (end){
     console.log('program end ');
   }


}
multiplicationTable()


function tbalePrint(){
    let number = 9;
    console.log("chosen number is " + number );

    for(i=1; i <=10 ; i++){
        let result = number * i ;
        console.log ( number + "x" +i+ "="+ result);
    }

    console.log("loops finished ");
    console.log("table printed ");

    let meessage = "second parctice ";
    console.log(meessage);

    let end = true;
    if (end){
    console.log("program end ");
  }
}
tbalePrint();