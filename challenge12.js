// Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:

// 1+1+2 == 2+1+1
// Also, assume that you have an infinite ammount of coins.

// Your function should take an amount to change and an array of unique denominations for the coins:

//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0
// Specifications
// countChange(money, coins)
// Parameters
// money: Number - Number to make change for

// coins: Array<Number> - Array of denominations

// Return Value
// Number - Number of ways change can be made

// Examples
// money	coins	Return Value
// 10	[5,2,3]	4

let countChange = function(money, coins) {
  return findComboCount(money, coins, 0);
}

function findComboCount(money, coin, index) {
  if(money === 0){
    return 1;
  }
  else if (money < 0 || coin.length == index) {
    return 0;
  }
  else {
    let withFirstCoin = findComboCount(money - coin[index], coin, index);
    let withoutFirstCoin = findComboCount(money, coin, index + 1);
    return withFirstCoin + withoutFirstCoin;
  }
} 

