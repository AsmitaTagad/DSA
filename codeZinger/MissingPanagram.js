/**
 * Given a string S, find all characters that are missing from the string S, i.e., the characters that can make the string a Pangram. Display output in alphabetic order.
 * Input:
     The quick brown fox jumps
   Output:
     adglvyz
**/

function solution(s) {
  //Write your solution here
  let missingChar = [];
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let lowerS = s.toLowerCase();
  for (let i = 0; i < alphabets.length; i++) {
    let char = alphabets[i];
    if (!lowerS.includes(char)) {
      missingChar.push(char);
    }
  }
  return missingChar.sort().join("");
}

function main() {
  var s = "The quick brown fox jumps";
  return solution(s);
}

console.log(main());
