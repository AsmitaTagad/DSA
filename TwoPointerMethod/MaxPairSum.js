/**Max Pair Sum */

function main(){
  let arr = [1, 2, 5, 8, 9, 14];
  let num=4;
  let result=MaxSumPair(arr,num);
  return result;
}

function MaxSumPair(arr,num){
 
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  
}

console.log(main())