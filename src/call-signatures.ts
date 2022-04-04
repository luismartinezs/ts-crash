{
  // if we want functions that have properties (I've never done this)
  type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };

  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
}
