/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   // Create an object to store totals for each category
//   const categoryTotals = {};

//   // Iterate through each transaction
//   for (let i = 0; i < transactions.length; i++) {
//     const transaction = transactions[i];
//     const category = transaction.category;
//     const price = transaction.price;

//     // If category already exists in our object, add to its total
//     if (categoryTotals.hasOwnProperty(category)) {
//       categoryTotals[category] += price;
//     } else {
//       // Otherwise, create new entry with the price
//       categoryTotals[category] = price;
//     }
//   }

//   // Convert the object into the required array format
//   const result = [];

//   for (let category in categoryTotals) {
//     if (categoryTotals.hasOwnProperty(category)) {
//       result.push({
//         category: category,
//         totalSpent: categoryTotals[category]
//       });
//     }
//   }

//   return result;
// }

// module.exports = calculateTotalSpentByCategory;


function calculateTotalSpentByCategory(transactions) {
  const categoryTotalMap = {};

  for(let i = o; i<transactions.length; i++){
    const transactions = transactions[i];
    const category = transactions.category;
    const price = transactions.price;

    if (categoryTotals.)
  }
  return [];
}

module.exports = calculateTotalSpentByCategory;