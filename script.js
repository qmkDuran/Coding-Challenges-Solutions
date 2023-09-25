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

// function remove_duplicates(arr) {
//   // index of the next non-duplicate element
//   let x = 1;

//   let i = 0;
//   while (i < arr.length) {
//     if (arr[x - 1] !== arr[i]) {
//       console.log((arr[x] = arr[i]));
//       arr[x] = arr[i];
//       x += 1;
//     }
//     i += 1;
//   }

//   return x;
// }

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
// console.log(remove_duplicates([2, 2, 2, 11]));

// Introduction to Sliding Window Pattern

function find_averages_of_subarrays(K, arr) {
  const result = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    // find sum of next 'K' elements
    sum = 0.0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K); // calculate average
  }

  return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);
