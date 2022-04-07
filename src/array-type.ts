{
  // Array is a generic type
  let arr: Array<number> = [1, 2, 3];
  // So are Map, Set and Promise
  let map: Map<string, number> = new Map();
  map.set("id", 1);
  let set: Set<number> = new Set();
  set.add(1);
  let p: Promise<number> = new Promise((resolve) => resolve(42));

  function doStuff(values: ReadonlyArray<string>) {
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
    values.push("hello!"); // can't mutate array
  }

  // shorthand
  function doMoreStuff(values: readonly string[]) {
    // ...
  }

  // assignability is not bidirectional
  let x: readonly string[] = [];
  let y: string[] = [];

  x = y; // mutable array can be reassigned to readonly array
  y = x; // readonly array cannot be assigned to mutable array
}
