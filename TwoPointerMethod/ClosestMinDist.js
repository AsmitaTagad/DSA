/**Distance between two closest minimum */

function main() {
  let arr = [1, 2, 5, 8, 9, 14];
  let x = 18;
  let result = findClosest(arr, x);
  return result;
}

function findClosest(arr, x) {
  let me = 0;
  let frd = arr.length - 1;
  let d = Number.MAX_VALUE;
  let ans = [];
  while (me < frd) {
    if (Math.abs(arr[me] + arr[frd] - x) < d) {
      ans = [arr[me], arr[frd]];
      d = Math.abs(arr[me] + arr[frd] - x);
    }
    if (arr[me] + arr[frd] - x > 0) {
      frd--;
    }
     else {
      me++;
    }
  }

  return ans;
}

console.log(main());
