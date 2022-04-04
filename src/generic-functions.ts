{
  function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
  }

  const n = firstElement([1, 2, 3]);
  const s = firstElement(["a", "b", "c"]);
  const u = firstElement([]);

  // inferred
  function map<Input, Output>(
    arr: Input[],
    func: (arg: Input) => Output
  ): Output[] {
    return arr.map(func);
  }

  const parsed = map(["1", "2", "3"], (n) => parseInt(n));

  // constraints
  function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }

  const longerArray = longest([1, 2], [1, 2, 3]);
  const longerString = longest("alice", "bob");
  const notOK = longest(10, 100);

  // we return an object with property length, but that is not right, because it might miss all other properties of obj
  function minimumLength<T extends { length: number }>(
    obj: T,
    minimum: number
  ): T {
    if (obj.length >= minimum) {
      return obj;
    } else {
      return { length: minimum };
    }
  }

  //
  function combine<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
  }

  // const arr = combine([1,2,3], ["hello"]) // error
  const arr = combine<string | number>([1, 2, 3], ["hello"]); // type assertion to fix it
}
