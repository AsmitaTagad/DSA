
let i = 0,
    j = 0,
    k = 0;
let n = 5;  
for (i = Math.floor(n / 2); i <= n; i++) {  //i=2
  for (j = 2; j <= n; j = j * 2) {  //j=2,4... //O(log2 (n))
    k = k + Math.floor(n / 2);  //k=2,
    console.log('hello')
  }
}
console.log(k);


//time= O(nlog(n))
//space=O(1)