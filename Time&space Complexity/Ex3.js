// let a = 0, i = 3;
//     while (i > 0)   //O(log(N))
//     {
//        a += i;
//        i = Math.floor(i/2);
//   }

//   console.log(a)

// var mul=0;
// for(var i=0;i<3;i++){   //0,1,2,3 //O(n)
//   i*=mul; //0+1=1+2=3+3=6
// }
// console.log(mul)

let a = 0;
for (i = 0; i < N; i++ ) { //O(N)  //N times
  for (j = N; j > i; j--) { //O(N)  //N-i times
    a = a + i + j;
  }
}

//O(N*N)=O(N2)