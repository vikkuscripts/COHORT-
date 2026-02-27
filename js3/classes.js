const now = new Date();
console.log(now.getDay());
console.log(now.getHours());


const map = new Map();
map.set("name",'Alice');
map.set ('age', 30);
console.log(map.get('name'));

// call back version
function printName(){
  console.log("vikram ")
}

setTimeout(printName, 5000);

// Promisified Version

function setTimePromisified(ms){
  return new Promise( resolve => setTimeout(resolve, ms));
}

function callback() {
  console.log("3seconds Have passed ");
}

setTimePromisified(3000).then(callback);  //systactically cleaner




