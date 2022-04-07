{
  type either2dOr3d = [number, number, number?];

  function setCoordinate(coord: either2dOr3d) {
    const [x, y, z] = coord;
    const length = coord.length;
  }

  type StringNumberBooleans = [string, number, ...boolean[]];
  type StringBooleansNumber = [string, ...boolean[], number];
  type BooleansStringNumber = [...boolean[], string, number];

  // this
  function readButtonInput1(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    // ...
  }

  // is equivalent to this
  function readButtonInput2(
    name: string,
    version: number,
    ...input: boolean[]
  ) {
    // ...
  }

  // readonly

  function doSomething(pair: readonly [string, number]) {
    pair[0] = "hello!";
  }

  let point = [3, 4] as const;
  // let point: readonly [number, number] = [3, 4];

  function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
  }

  distanceFromOrigin(point);

  let point2: readonly [number, number] = [3, 4];

  let point3: readonly [3, 4];
}
