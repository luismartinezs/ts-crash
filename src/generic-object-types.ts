{
  interface Box<T> {
    contents: T;
  }

  const strBox: Box<string> = {
    contents: "hello",
  };

  type Cage<T> = {
    contents: T;
  };

  const numCage: Cage<number> = {
    contents: 1,
  };

  type OrNull<T> = T | null;

  type OneOrMany<T> = T | T[];

  type OneOrManyOrNull<T> = OrNull<OneOrMany<T>>;

  type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

  let x1: OrNull<number> = 1;
  x1 = null;

  let x2: OneOrMany<boolean> = true;
  x2 = [true, true];

  let x3: OneOrManyOrNull<boolean> = true;
  x3 = [true, true];
  x3 = null;

  let x4: OneOrManyOrNullStrings = "hello";
  x4 = ["hello", "world"];
  x4 = null;
}
