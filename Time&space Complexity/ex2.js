//find time and space comlexity
// let a = 0,
//   n = 6,
//   i = n;
// while (i > 0) {
//   a += i;
//   i = Math.floor(i / 2);
// }
// console.log(a)

//time= O(log n)
//space= O(1)

// Find the complexicity of
let a = 0;
for (i = 0; i < N; i++) {
  //O(N)
  for (j = N; j > i; j--) {
    // O(N-1)
    a = a + i + j;
  }
}

//O(N*N) =O(N^2)
//O(1)
