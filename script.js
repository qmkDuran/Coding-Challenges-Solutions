//nums = [-1,0,3,5,9,12], target = 9

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    const guess = nums[mid];

    const isTarget = guess === target;
    if (isTarget) return mid;

    const isTargetGreater = guess < target;
    if (isTargetGreater) left = mid + 1;

    const isTargetLess = target < guess;
    if (isTargetLess) right = mid - 1;
  }

  return -1;
};
