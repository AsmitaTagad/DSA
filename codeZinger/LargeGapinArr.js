/**
 * Given an array of N integers, find the largest gap between any two elements of the array.
In simple words, find max(|Ai-Aj|) where 0 ≤ i < N and 0 ≤ j < N.
Input:
4
3 6 7 10 
where:
First line represents the number of elements in the array.
Second line represents the elements in the array.
Output: 7
 */
function main() {
  let arr = [3, 6, 7, 10, 15];
  let n = arr.length - 1;
  let maxGap = 0;

  for (let i = 0; i < n; i++) {
    let diff = 0;
    diff = arr[i + 1] - arr[i];
    if (diff >= maxGap) {
      maxGap = diff;
    }
  }
  return maxGap;
}

console.log(main());
