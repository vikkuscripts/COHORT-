// function isAnagram(str1, str2){
//   const arr1 = str1.toLowerCase().split("");
//   arr1.sort();
//   const sortedString1 = arr1.join("");

//   const arr2 = str2.toLowerCase().split("");
//   arr2.sort();
//   const sortedString2 = arr2.join("");

//   if(sortedString1 == sortedString2){
//     return true;
//   }else{ return false

//   }

// }
// true
// let name = "vikram kumar";
// name.split("");
// console.log(name.split(""));
// let arr = ["v","i","k","r","a","m"];
// arr.sort();
// console.log(arr);

// function isAnagram(str1, str2) {
//   const sortedString1 = str1.toLowerCase().split("").sort().join("");
//   const sortedString2 = str2.toLowerCase().split("").sort().join("");

//   if (sortedString1 == sortedString2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// module.exports = isAnagram;

// function isAnagram(str1, str2) {
//   const normalize = str =>
//     str.toLowerCase().replace(/\s/g, "").split("").sort().join("");

//   return normalize(str1) === normalize(str2);
// }

// module.exports = isAnagram;

function isAnagram(str1, str2) {
  const sortedString1 = str1
    .toLowerCase()
    .replace(/\s/g, "")
    .split("")
    .sort()
    .join("");

  const sortedString2 = str2
    .toLowerCase()
    .replace(/\s/g, "")
    .split("")
    .sort()
    .join("");

  return sortedString1 === sortedString2;
}

module.exports = isAnagram;