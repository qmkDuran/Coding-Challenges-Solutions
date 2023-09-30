// // Solution: Pair with Target Sum

// function pair_with_target_sum(arr, targetSum) {
//   let left = 0,
//     right = arr.length - 1;
//   while (left < right) {
//     const currentSum = arr[left] + arr[right];
//     if (currentSum === targetSum) {
//       return [left, right];
//     }

//     if (targetSum > currentSum) {
//       left += 1; // we need a pair with a bigger sum
//     } else {
//       right -= 1; // we need a pair with a smaller sum
//     }
//   }
//   return [-1, -1];
// }

// console.log(pair_with_target_sum([], 6));
// console.log(pair_with_target_sum([2, 5, 9, 11], 11));

// Solution: Find Non-Duplicate Number Instances

function moveNonDuplicatesToFront(arr) {
  // Used in scenerios where there is one or zero numbers
  if (arr.length <= 1) {
    return arr.length;
  }

  let slow = 0; // Slow pointer to track unique elements

  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[slow] !== arr[fast]) {
      // Found a non-duplicate element
      slow++;
      // Swap the elements at slow and fast pointers
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
    }
  }

  // The unique elements are now at the beginning of the array.
  // Subarray length with no duplicates is (slow + 1).
  return slow + 1;
}

console.log(moveNonDuplicatesToFront([2, 3, 3, 3, 6, 9, 9]));
console.log(moveNonDuplicatesToFront([2, 2, 2, 11]));

// Introduction to Sliding Window Pattern

// function max_sub_array_of_size_k(k, arr) {
//   let maxSum = 0,
//     windowSum = 0,
//     windowStart = 0;

//   for (window_end = 0; window_end < arr.length; window_end++) {
//     windowSum += arr[window_end]; // add the next element
//     // slide the window, no need to slide if we've not hit the window size of 'k'
//     if (window_end >= k - 1) {
//       maxSum = Math.max(maxSum, windowSum);
//       windowSum -= arr[windowStart]; // subtract the element going out
//       windowStart += 1; // slide the window ahead
//     }
//   }
//   return maxSum;
// }

// console.log(
//   `Maximum sum of a subarray of size K: ` +
//     max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])
// );
// console.log(
//   `Maximum sum of a subarray of size K: ` +
//     max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])
// );
