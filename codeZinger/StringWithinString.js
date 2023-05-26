function main() {
  let str1 = " Code Zinger University "; //20
  let str2 = " Zinger";    //6
  

  for (let i = 0; i <= str1.length - str2.length; i++) {  //20-6=14 //O(M-N)
    for (let j = 0; j < str2.length; j++) {  // O(N)
      if (str1[i + j] != str2[j]) {  
        break;
      }
    }
    if (j === str2.length) {
      return i;
    }
  }
  return -1;
}

console.log(main());


//O(M-N)* O(N)=O(M)