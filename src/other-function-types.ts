{
  // void
  // object (will probabyl never use)
  // unknown
  function f1(a: unknown) {
    a.b(); // like any, but nothing is allowed with unknown
  }

  // when to use unknown? When a function returns a value of unknown type, and we want to be safer than with any
  function safeParse(s: string): unknown {
    return JSON.parse(s);
  }

  // never. When function always throws or terminates execution. Also when all cases in a union are checked
  function fn(x: string | number) {
    if (typeof x === "string") {
      //
    } else if (typeof x === "number") {
      //
    } else {
      x; // has type never, since execution will never reach here
    }
  }

  // Function, with properties like bind, call, apply... also can always be called, and the calls return any
  function doSomething(f: Function) {
    return f(1, 2, 3); // unsafe, because return type is any
  }

  // it's safer to use type () => void
}
