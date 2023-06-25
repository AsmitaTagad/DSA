/**Find substrings whose sum of ASCII value is divisible by K */
//1.Brute Force Approach
// function main(){
// let s = "adkf";
// let n=s.length;
// let k = 3;
// let count=0;
// for(let i=0; i<n-k; i++){ 
//   let sum=0;
//   for(let j=1; j<s.length; j++){
//     sum+=s.charCodeAt(j);
//   }
//   if(sum%k === 0){
//     count++;
//   }
// }
// return count
// }

//sliding  window
function main()
{
  var s = "bcgabc";
  var k = 3;

    var sum = 0;
    var count = 0;

     
    for(let i = 0; i < s.length; i++)  //O(n)
     
        // Finding sum of ASCII value of first substring
      sum += s[i].charCodeAt(0);
         
        if (sum % k === 0)
        {
             
            count += 1;
        }
         
        for(i = k; i <s.length ; i++)
        {
             
            // Using sliding window technique to
            // find sum of ASCII value of rest of
            // the substring
            var prev = s[i - k];
          sum -= prev.charCodeAt(0);
           sum += s[i].charCodeAt(0);
             
            // checking if sum is divisible by k
            if (sum % k === 0)
                count += 1;
        }
         
    return count;
}
 
console.log(main())