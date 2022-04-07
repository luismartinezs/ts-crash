{
  // implicity type annotation of function parameter == any
  // implicity type annotation of function rest params == any[]
  function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }
  const a = multiply(10, 1, 2, 3, 4);

  const args = [8, 5] as const; // args as immutable array of literal type [8, 5]
  const angle = Math.atan2(...args);
}
