/*Given a string S, find the difficulty of the given string.
 Here a Word is considered hard if it has 4 consecutive consonants or number of consonants is more than the number of vowels.
  Else word is easy.
 Difficulty of the string is defined as 5*(number of hard words) + 3*(number of easy words).
 Input:
    Difficulty of sentence
Output:
     13
 */

let str = "Difficulty of sentence";
console.log(main(str));

function main(str) {
  if (str === " ") {
    return false;
  }

  let hard = 0;
  let easy = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (isHard(str[i])) {
      hard++;
    } else {
      easy++;
    }
  }

  return 5 * hard + 3 * easy;
}

function isVowel(char) {
  let vowel = "aouei";
  let count = 0;
  for (let i = 0; i < char.length; i++) {
    if (vowel.includes(char[i])) {
      count++;
    }
  }
  return count;
}

function isConsonant(str) {
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (consonants.includes(str[i])) {
      count++;
    }
  }

  return count;
}

function isHard(str) {
  if (isConsonant(str) > isVowel(str)) {
    return true;
  }

  for (let i = 0; i < str.length - 4; i++) {
    if (
      !isVowel(str.substring(i, i + 4)) &&
      isConsonant(str.substring(i, i + 4) === 4)
    ) {
      return true;
    }
  }
  return false;
}
