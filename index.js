function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();

  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(number);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time complexity: O(n)
  Space complexity: O(n)
*/

/* 
  Add your pseudocode here

  1. Create an empty Set to track numbers we've seen.
  2. For each number in the array:
     a. Calculate the complement (target - number)
     b. If the complement is in the Set, return true.
     c. Otherwise, add the number to the Set.
  3. If we finish the loop without finding a match, return false.
*/

/*
  Add written explanation of your solution here

  The function checks if any two numbers in the input array add up to the given target.
  It uses a Set to store numbers we've already seen. For each number in the array,
  it checks whether the complement (target - number) exists in the Set.
  If it does, we found a pair that adds to the target and return true.
  If the loop finishes without finding a pair, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 4));
}

module.exports = hasTargetSum;
