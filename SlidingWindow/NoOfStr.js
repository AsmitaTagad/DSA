/**Count number of substrings with exactly K distinct characters */
function Kchar(s, k) {
  if (!s) {
    return 0;
  }
  const charCount = {};
  let num = 0;
  let left = 0;
 
  for (let right = 0; right < s.length; right++) {

    charCount[s[right]] = (charCount[s[right]] || 0) + 1;


    while (Object.keys(charCount).length > k) {
      charCount[s[left]] -= 1;

      if (charCount[s[left]] === 0) {
        delete charCount[s[left]];
      }
      left += 1;
    }
    num += right - left + 1;
  }
  return num;
}

function main() {
  const s1 = "aabab";
   let k = 2;
  return Kchar(s1, k) - Kchar(s1, k - 1);
}
 
console.log(main())