{
  type voidFunc = () => void; // this contextual function type does NOT force f1 to not return
  const f1: voidFunc = () => {
    return true;
  };
  const v1 = f1(); // v1 type is still void!
  console.log(v1);

  // why?
  const src = [1, 2, 3];
  const dst = [0];

  src.forEach((el) => dst.push(el));
  // push returns number
  // forEach takes a callback that returns void
  // so that rule is there so that this works

  // but below two error because void is the literal return type
  function f2(): void {
    return true;
  }

  const f3 = function (): void {
    return true;
  };
}
