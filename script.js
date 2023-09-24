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

function remove_duplicates(arr) {
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;

  let i = 0;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
}

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));
