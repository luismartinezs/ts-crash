{
  // n is actually of types number or undefined, because it is optional
  function f1(n?: number) {
    if (n != undefined) {
      console.log(n.toFixed());
    }
  }

  f1(); // OK
  f1(10); // OK

  declare function f2(x?: number): void;

  // default parameter
  function f2(x = 10) {
    console.log(x.toFixed()); // OK because x is always a number, never undefined
  }

  // All OK
  f2();
  f2(10);
  f2(undefined);

  // optional params for callbacks
  function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  }

  // with index? we might want to indicate that we can do either of the two below:
  myForEach([1, 2, 3], (a) => console.log(a));
  myForEach([1, 2, 3], (a, i) => console.log(a, i));

  // but this errors:
  myForEach([1, 2, 3], (a, i) => console.log(i.toFixed()));
  // because i might be undefined, according to the function type definition, and we can't call method toFixed of undefined

  // x is inferred of type number because of the default value
  function f3(x = 10) {
    return x.toFixed();
  }

  let res = f3();
}
