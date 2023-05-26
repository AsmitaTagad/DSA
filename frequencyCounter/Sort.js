/**Sort an array contains 0,1,2 with frequency count method */
function sortArray(arr) {
  // Step 1: Count the frequency of each value
  let obj = {};
  for (let i of arr) {
    obj[i] = (obj[i] || 0) + 1;
  }

  // Step 2: Create a new sorted array based on the frequency counts
  const sortedArray = [];
  for (var i in obj) {
    sortedArray.push([i, obj[i]]);
  }
  sortedArray.sort(function (a, b) {
    return a[1] - b[1];
  });

  return sortedArray;
}

// Example usage:
const arr = [0, 2, 1, 1, 0, 2, 0, 2];
const sortedArr = sortArray(arr);
console.log(sortedArr);

// let arr =[1,0,2,1,0,2,0,2,1,0];
// let N = arr.length ;

// console.log(sort012(arr,N));

// function sort012(arr, N){
//     let obj ={    }
//     for(let i=0; i<N; i++){
//         let num = arr[i];
//         if(obj[num] > 0){
//             obj[num]++;
//         }
//         else{
//             obj[num] =1;
//         }
//     }
//     // return obj
//     let sortedArr = [];
//     for(let key in obj){
//         sortedArr.push([key, obj[key]]);
//     }

//     let num =""
//     for(let i=0; i<sortedArr.length; i++){
//          num =num + Numbers(sortedArr[i], i)
//     }
//     return num.split("")

// }

// function Numbers(arr, i){
//     let ans ="";
//     while(arr[1]>0){
//         ans = ans+i
//         arr[1]--;
//     }
//     return ans
// }
