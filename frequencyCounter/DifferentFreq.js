/**Find the element having different frequency than other array elements */
function main() {
  let arr = [0, 1, 2, 4, 4];
  return findElementWithDifferentFrequency(arr);
}

function findElementWithDifferentFrequency(arr) {
  // Step 1: Count the frequency of each element
  let obj = {};
  for (let i of arr) {  //O(n)
    obj[i] = (obj[i] || 0) + 1;
  }

  // Step 2: Find the element with different frequency
  let differentElement;
  for (const element in obj) {    //O(N)
    if (obj[element] !== obj[arr[0]]) {
      differentElement = element;
      break;
    }
  }

  return differentElement;
}

console.log(main())