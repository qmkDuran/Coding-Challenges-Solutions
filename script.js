// The main function to find the duplicate number in an array
function findDuplicate(nums) {

  // Step 1: Initialize two pointers, 'slow' and 'fast'
  let slow = nums[0];
  let fast = nums[0];

  // Step 2: Use a loop to find a meeting point for 'slow' and 'fast'
  do {
    slow = nums[slow];          // Move 'slow' one step
    fast = nums[nums[fast]];    // Move 'fast' two steps
  } while (slow !== fast);      // Keep going until they meet

  // Step 3: Reset 'slow' to the start
  slow = nums[0];

  // Step 4: Find the duplicate number
  while (slow !== fast) {      // Loop until 'slow' and 'fast' meet again
    slow = nums[slow];         // Move 'slow' one step
    fast = nums[fast];         // Move 'fast' one step
  }

  // Step 5: Return the duplicate number
  return fast;
}

// Example usages
const example1 = [1, 3, 4, 2, 2];
console.log(findDuplicate(example1)); // Should print 2

const example2 = [3, 1, 3, 4, 2];
console.log(findDuplicate(example2)); // Should print 3
