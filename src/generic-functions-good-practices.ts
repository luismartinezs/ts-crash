{
  // 1 push type parameters down

  // GOOD
  // infers return type number
  function firstElement1<T>(arr: T[]) {
    return arr[0];
  }

  // BAD
  // infers return type any
  function firstElement2<T extends any[]>(arr: T) {
    return arr[0];
  }

  const a = firstElement1([1, 2, 3]);
  const b = firstElement2([1, 2, 3]);

  // 2 Use fewer type parameters

  // GOOD
  function filter1<T>(arr: T[], func: (arg: T) => boolean): T[] {
    return arr.filter(func);
  }

  // BAD
  // type param Func doesn't relate two values
  function filter2<T, Func extends (arg: T) => boolean>(
    arr: T[],
    func: Func
  ): T[] {
    return arr.filter(func);
  }

  // 3. Type parameters should appear twice

  // BAD
  function greet1<Str extends string>(s: Str) {
    console.log("Hello, " + s);
  }

  greet1("world");

  // GOOD
  function greet2(s: string) {
    console.log("Hello, " + s);
  }

  // generics are for relating types of multiple values. If a type parameter is only used once, it's not relating to anything and we don't need generics
}
