const pairSum = (numbers, targetSum) => {
  let sortedNums = numbers.sort();
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = sortedNums[left] + sortedNums[right];
    if (sum === targetSum) {
      return [sortedNums[left], sortedNums[right]];
    } else if (sum < targetSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
};

pairSum([3, 2, 5, 4, 1], 8);
