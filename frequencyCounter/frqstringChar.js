/* Frequency of characters in a string */

function main() {
  let str = "elephant";
  let freCounter = {};

  for (let i of str) {
    freCounter[i] = (freCounter[i] || 0) + 1;
  }
  return freCounter;
}

console.log(main());
