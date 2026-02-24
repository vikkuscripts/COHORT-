function timeout() {
  console.log("chor de abhi bhi time hai");
}
console.log("jhooot bol raha hai");
setTimeout(timeout, 1000);


let d = 0;
for(let i=0; i<1000000000; i++){
  d = d+i;

}
console.log("expensive task is done ");