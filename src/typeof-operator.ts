{
  console.log(typeof "hello world"); // string
  let s = "hello world";
  let n: typeof s;

  type Predicate = (x: unknown) => boolean;
  type K = ReturnType<Predicate>;

  function f() {
    return {
      x: 10,
      y: 3,
    };
  }
  type P = ReturnType<typeof f>;
  type F = typeof f;

  function msgbox(msg: string) {
    alert(msg)
  }

  let shouldContinue: typeof msgbox("Yes?")
}
