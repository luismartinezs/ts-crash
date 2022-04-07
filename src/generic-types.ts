{
  function identity<Type>(arg: Type): Type {
    return arg;
  }

  // these two are identical
  let myIdentity1: <T>(arg: T) => T = identity; // type of generic function, similar to function declaration
  let myIdentity2: { <T>(arg: T): T } = identity; // type as call signature of an object literal type

  // we can abstract function type into generic interface
  interface GenericIdentityFn {
    <T>(arg: T): T;
  }

  let myIdentity3: GenericIdentityFn = identity;

  // We can still go one step further beyond
  interface GenericIdentityFn2<T> {
    (arg: T): T;
  }

  let myNumericIdentity: GenericIdentityFn2<number> = identity;
  myNumericIdentity("hello");
  myNumericIdentity(2);
}
