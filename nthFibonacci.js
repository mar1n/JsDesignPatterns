function nthFibo(n) {
  if (n === 2) {
    return 1;
  }

  if (n === 1) {
    return 0;
  }
  let fibo = [0, 1];

  for (let x = 1; x < n; x++) {
    fibo.push(fibo[x - 1] + fibo[x]);
  }

  return fibo[n - 1];
}

module.exports = nthFibo;
console.log(nthFibo(2));
