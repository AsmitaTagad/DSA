/**Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array */

function main() {
  let nums = [2, 3, 1, 2, 4, 3];
  let curSum = 0;
  let maxSum = 0;
  let k = 3;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }
 
  for (let i = k; i < nums.length; i++) {
    curSum += nums[i];
  }

  if (curSum > maxSum) {
    maxSum = curSum;
  }
  return maxSum;
}

console.log(main());
