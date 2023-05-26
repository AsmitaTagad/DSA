// Find the complexicity of
let i = 0,
    j = 0,
    k = 0;
for (i = Math.floor(n / 2); i <= n; i++) {  //O(n/2)
  for (j = 2; j <= n; j = j * 2) { // O(log2(n))
    k = k + Math.floor(n / 2);
  }
}

//tc= O(nlog(n))
// O(1)