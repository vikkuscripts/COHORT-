/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers){

  let max = numbers[0];

  for(let i = 1; i <numbers.length; i++){
    if( numbers[i]> max){
      max = numbers[i];

    }

  }
  return max;
}




function findLargestElement(numbers){

  let max = numbers[0];

  for(let i = 1; i <numbers.length; i++){
    if( numbers[i]> max){
      max = numbers[i];

    }

  }
  return max;
}



















// function findLargestElement(numbers) {
//   let max = numbers[0];

//  for(let i = 1; i <numbers.length; i++ ){
//      if(numbers[i] > max){
//       max = numbers[i];
//      }
    
//  }
//   return max;
// }


// 1. Normal case - should return 9
console.log(findLargestElement([3, 1, 9, 4, 6]));       // Expected: 9

// 2. Already sorted ascending - should return 5
console.log(findLargestElement([1, 2, 3, 4, 5]));       // Expected: 5

// 3. Already sorted descending - should return 9
console.log(findLargestElement([9, 7, 5, 3, 1]));       // Expected: 9

// 4. All same elements - should return 4
console.log(findLargestElement([4, 4, 4, 4]));          // Expected: 4

// 6. Negative numbers - should return -1
console.log(findLargestElement([-5, -3, -1, -8]));      // Expected: -1

// 7. Mixed negative and positive - should return 7
console.log(findLargestElement([-10, 0, 7, -3]));       // Expected: 7

module.exports = findLargestElement;

// function findLargestElement(numbers){
// let max = numbers[0];

// for(i = 1; i < numbers.length; i++){

//   if(numbers [i] >max){
//     max = numbers[i];
//   }
// }
//    return max;
// }