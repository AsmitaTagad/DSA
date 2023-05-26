/**Move all the negative elements to one side of the array Arr = [5, -8, 3, -9, 2] */

function main() {
  let arr = [5, -8, 3, -9, 2];
  let result = Sort(arr);
  return result;
}

function Sort(arr) {
  let me = 0;
  let frd = arr.length - 1;
  while (me < frd) {
    //O(n)
    if (arr[me] < 0) {
      me++;
    } else if (arr[frd] > 0) {
      frd--;
    } else {
      let temp = arr[me];
      arr[me] = arr[frd];
      arr[frd] = temp;
    }
  }
  return arr;
}

console.log(main());

//Time complexity = O(n)
//space complexity= O(1)
