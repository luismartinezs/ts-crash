{
  // overload signatures, arguments must match one of the two
  function makeDate(timestamp: number): Date;
  function makeDate(m: number, d: number, y: number): Date;
  // function implementation with an compatible signature
  // Can't be called directly
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
  const d1 = makeDate(12345678);
  const d2 = makeDate(5, 5, 5);
  const d3 = makeDate(1, 3); // no overload signature has two parameters

  function fn(x: string): void;
  function fn() {
    // ...
  }

  fn();
}

{
  function fn(x: boolean): void;
  // Argument type isn't right
  function fn(x: string): void;
  function fn(x: boolean) {
    // ...
  }
}

{
  function fn(x: string): string;
  // Return type isn't right
  function fn(x: number): boolean;
  function fn(x: string | number) {
    return "oops";
  }
}
