function fibonacci(n) {
  // Fungsi bantu rekursif untuk menghitung angka fibonacci ke-n
  function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
  }

  // Bangun deret dari 0 sampai n
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(fib(i));
  }

  return result;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
