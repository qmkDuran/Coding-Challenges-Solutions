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
//   let nextNonDuplicate = 1;

//   let i = 0;
//   while (i < arr.length) {
//     if (arr[nextNonDuplicate - 1] !== arr[i]) {
//       arr[nextNonDuplicate] = arr[i];
//       nextNonDuplicate += 1;
//     }
//     i += 1;
//   }

//   return nextNonDuplicate;
// }

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
// console.log(remove_duplicates([2, 2, 2, 11]));

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

// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// function has_cycle(head) {
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) {
//       return true; // found the cycle
//     }
//   }

//   return false;
// }

// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);

// head.next.next.next.next.next = head.next.next;
// console.log(has_cycle(head));

// const uncompress = (s) => {
//   let result = [];
//   const numbers = "0123456789";
//   let i = 0;
//   let j = 0;
//   while (j < s.length) {
//     if (numbers.includes(s[j])) {
//       j += 1;
//     } else {
//       const num = Number(s.slice(i, j));
//       for (let count = 0; count < num; count += 1) {
//         result.push(s[j]);
//       }
//       j += 1;
//       i = j;
//     }
//   }
//   return result.join("");
// };

var isAnagram = function (s, t) {
  // Create an empty Map to store character frequencies.
  const map = new Map();

  // Check if the lengths of 's' and 't' are equal. If lengths are not equal, they can't be anagrams.
  if (s.length !== t.length) return false;

  // Count character frequencies in string 's' and 't'.
  addFrequency(s, map); // Add frequencies from 's'.
  console.log(map);
  subtractFrequency(t, map); // Subtract frequencies from 't'.
  console.log(map);
  // Check if all frequencies are zero, indicating an anagram.
  return checkFrequency(map);
};

// Function to add character frequencies from a string to the map.
const addFrequency = (str, map) => {
  for (const char of str) {
    // Get the current count of the character or initialize to 0 and then increment.
    const count = (map.get(char) || 0) + 1;

    // Set the updated count in the map.
    map.set(char, count);
  }
};

// Function to subtract character frequencies from a string in the map.
const subtractFrequency = (str, map) => {
  for (const char of str) {
    // Check if the character exists in the map.
    if (!map.has(char)) continue;

    // Decrement the count of the character in the map.
    const count = map.get(char) - 1;

    // Update the count in the map.
    map.set(char, count);
  }
};

// Function to check if all character frequencies in the map are zero.
const checkFrequency = (map) => {
  for (const [char, count] of map) {
    // Check if the count is not zero; if any are non-zero, it's not an anagram.
    const isEmpty = count === 0;
    if (!isEmpty) return false;
  }

  return true; // If all counts are zero, it's an anagram.
};

isAnagram("anagram", "nagaram");
