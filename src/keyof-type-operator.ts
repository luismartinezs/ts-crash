{
  type Point = { x: number; y: number };
  type P = keyof Point;

  let x: P; // can take values 'x' and 'y'

  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish;

  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish;
  // M is string | number because JS object keys are always coerced to string, obj[0] is the same as obj["0"]
}
