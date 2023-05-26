/**Find the frequency of digits in a number */

function main() {
  let arrNo = [1, 2, 4, 5, 2, 3, 2, 1];
  let obj = {};
  for (let i of arrNo) {  //O(n)
    obj[i] = (obj[i] || 0) + 1;
  }

  return obj;
}

console.log(main());
